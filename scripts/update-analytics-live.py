#!/usr/bin/env python3
import json
import os
import sys
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ENV_PATH = ROOT / ".env"
LIVE_PATH = ROOT / "public" / "analytics-live.json"

PAYROLL_ROUTER = "0x87ACE45582f45cC81AC1E627E875AE84cbd75946"
SWAP_EXECUTOR = "0x17685466759f9Cde06f0DCbB5464164ABe541eFA"

PAYMENT_ROUTED_TOPIC = "0x35f6d2276ca7169441155bb2ddc8412efd9adb503397e97217301c7e715139d5"
BATCH_PAYMENT_ROUTED_TOPIC = "0xad44a39a9cc4ab1879eff39ebf1ea1b4c9d0e9aac3bfa7e8618b5dca83636a8d"

CHUNK_SIZE = int(os.getenv("ARC_LOG_CHUNK_SIZE", "5000"))


def load_dotenv(path: Path) -> None:
    if not path.exists():
        return
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def rpc_call(rpc_url: str, method: str, params: list):
    payload = json.dumps({
        "jsonrpc": "2.0",
        "id": int(time.time() * 1000),
        "method": method,
        "params": params,
    }).encode()

    req = urllib.request.Request(
        rpc_url,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    with urllib.request.urlopen(req, timeout=30) as response:
        data = json.loads(response.read().decode())

    if "error" in data:
        raise RuntimeError(f"{method} error: {data['error']}")

    return data["result"]


def block_number(rpc_url: str) -> int:
    return int(rpc_call(rpc_url, "eth_blockNumber", []), 16)


def get_logs(rpc_url: str, address: str, from_block: int, to_block: int, topics: list[str]) -> list[dict]:
    logs = []
    current = from_block

    while current <= to_block:
        end = min(current + CHUNK_SIZE - 1, to_block)
        result = rpc_call(
            rpc_url,
            "eth_getLogs",
            [{
                "fromBlock": hex(current),
                "toBlock": hex(end),
                "address": address,
                "topics": [topics],
            }],
        )
        logs.extend(result)
        current = end + 1

    return logs


def load_live_json() -> dict:
    if LIVE_PATH.exists():
        return json.loads(LIVE_PATH.read_text())

    return {
        "source": "arc-rpc",
        "network": "Arc Testnet",
        "contracts": {
            "payrollRouter": {
                "name": "WizPay Payroll Router",
                "address": PAYROLL_ROUTER,
                "arcscanUrl": f"https://testnet.arcscan.app/address/{PAYROLL_ROUTER}",
                "transactions": 0,
                "transfers": 0,
                "paymentEvents": 0,
                "batchEvents": 0,
            },
            "swapExecutor": {
                "name": "WizPaySwapExecutor",
                "address": SWAP_EXECUTOR,
                "arcscanUrl": f"https://testnet.arcscan.app/address/{SWAP_EXECUTOR}",
                "transactions": 0,
                "transfers": 0,
            },
        },
    }


def main() -> int:
    load_dotenv(ENV_PATH)
    rpc_url = os.getenv("ARC_TESTNET_RPC_URL", "").strip()
    if not rpc_url:
        print("Missing ARC_TESTNET_RPC_URL", file=sys.stderr)
        return 1

    latest = block_number(rpc_url)
    data = load_live_json()

    last_indexed = int(data.get("lastIndexedBlock") or 0)

    if last_indexed <= 0:
        data["lastIndexedBlock"] = latest
        data["latestBlock"] = latest
        data["updatedAt"] = datetime.now(timezone.utc).isoformat()
        data["source"] = "arc-rpc"
        LIVE_PATH.write_text(json.dumps(data, indent=2) + "\n")
        print(f"Initialized live analytics at block {latest}. Run again to append new live deltas.")
        return 0

    from_block = last_indexed + 1
    if from_block > latest:
        data["latestBlock"] = latest
        data["updatedAt"] = datetime.now(timezone.utc).isoformat()
        data["source"] = "arc-rpc"
        LIVE_PATH.write_text(json.dumps(data, indent=2) + "\n")
        print(f"No new blocks. latest={latest} lastIndexedBlock={last_indexed}")
        return 0

    payroll_logs = get_logs(
        rpc_url,
        PAYROLL_ROUTER,
        from_block,
        latest,
        [PAYMENT_ROUTED_TOPIC, BATCH_PAYMENT_ROUTED_TOPIC],
    )

    payment_events = sum(1 for log in payroll_logs if log["topics"][0].lower() == PAYMENT_ROUTED_TOPIC.lower())
    batch_events = sum(1 for log in payroll_logs if log["topics"][0].lower() == BATCH_PAYMENT_ROUTED_TOPIC.lower())
    unique_payroll_txs = len({log["transactionHash"] for log in payroll_logs})

    payroll = data["contracts"]["payrollRouter"]
    payroll["transactions"] = int(payroll.get("transactions") or 0) + unique_payroll_txs
    payroll["paymentEvents"] = int(payroll.get("paymentEvents") or 0) + payment_events
    payroll["batchEvents"] = int(payroll.get("batchEvents") or 0) + batch_events

    data["latestBlock"] = latest
    data["lastIndexedBlock"] = latest
    data["updatedAt"] = datetime.now(timezone.utc).isoformat()
    data["source"] = "arc-rpc"
    data["lastDelta"] = {
        "fromBlock": from_block,
        "toBlock": latest,
        "payrollRouter": {
            "uniqueTransactions": unique_payroll_txs,
            "paymentEvents": payment_events,
            "batchEvents": batch_events,
        },
    }

    LIVE_PATH.write_text(json.dumps(data, indent=2) + "\n")
    print(json.dumps(data["lastDelta"], indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
