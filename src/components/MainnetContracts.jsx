import { useState } from 'react'

const CONTRACTS = [
  { name: 'WizPayPayrollMainnet', address: '0x77AC7Cb6507D404b5530fC03e3D39BAaEdE10C34', purpose: 'Same-token and atomic cross-token payroll' },
  { name: 'WizPaySwapExecutorMainnet', address: '0x7A051F17B237750EF9D4E63fb75381B9F8755774', purpose: 'Non-custodial USDC ↔ EURC swaps' },
]

function ContractCard({ contract }) {
  const [message, setMessage] = useState('')

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(contract.address)
      setMessage('Address copied.')
    } catch {
      setMessage('Copy unavailable. Select the full address below to copy it.')
    }
  }

  return (
    <article className="surface-card min-w-0 rounded-3xl p-6 sm:p-8">
      <h3 className="font-display break-words text-lg font-semibold">{contract.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{contract.purpose}</p>
      <p className="mt-6 font-mono text-lg text-cyan-200" aria-hidden="true">{contract.address.slice(0, 8)}…{contract.address.slice(-6)}</p>
      <label className="mt-3 block text-xs text-slate-400">
        Full contract address
        <input className="contract-address mt-2" readOnly value={contract.address} onFocus={(event) => event.target.select()} />
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="button" onClick={copyAddress} className="button-secondary" aria-label={`Copy ${contract.name} address`}>Copy address</button>
        <a href={`https://explorer.arc.io/address/${contract.address}`} className="text-sm text-cyan-200 underline underline-offset-4" aria-label={`View ${contract.name} on Arc explorer`}>View on Arc explorer ↗</a>
      </div>
      <p role="status" className="mt-3 min-h-5 text-xs text-slate-300">{message}</p>
    </article>
  )
}

export default function MainnetContracts() {
  return (
    <section id="mainnet-contracts" className="section-shell py-16 sm:py-20" aria-labelledby="contracts-heading">
      <p className="eyebrow">Mainnet verification</p>
      <h2 id="contracts-heading" className="section-title mt-4">Live on Arc Mainnet.</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">WizPay core application contracts are deployed only on Arc Mainnet (chain ID 5042). Inspect the production payroll and swap contracts on the Arc explorer.</p>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {CONTRACTS.map((contract) => <ContractCard key={contract.address} contract={contract} />)}
      </div>
    </section>
  )
}
