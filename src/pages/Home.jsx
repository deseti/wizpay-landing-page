const APP_URL = 'https://app.wizpay.xyz'
const SOCIAL_URL = 'https://x.com/wizpay_arc'
const DOCS_URL = 'https://docs.wizpay.xyz'
const DISCORD_URL = 'https://discord.gg/wizpay'

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ── Background decorations ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="soft-grid absolute inset-x-0 top-0 h-[42rem] opacity-50" />
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-400/12 blur-[120px]" />
        <div className="absolute right-[-5rem] top-12 h-80 w-80 rounded-full bg-sky-500/12 blur-[140px]" />
        <div className="absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-300/10 blur-[160px]" />
      </div>

      {/* ── Header / Nav ── */}
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050816]/75 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <img
                src="/favicon.ico"
                alt="WizPay Logo"
                width="22"
                height="22"
                className="rounded-md"
              />
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-white">WizPay</p>
              <p className="text-xs text-slate-400">Cross-Chain Payroll Platform</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </nav>

          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/12 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-300/18"
          >
            Open App
          </a>
        </div>
      </header>

      <main>
        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="section-shell grid gap-12 pb-18 pt-12 sm:pb-22 sm:pt-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:pt-24">
          <div className="animate-rise space-y-8">
            <span className="inline-flex items-center rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-100/85">
              Cross-Chain Stablecoin Payroll
            </span>

            <div className="space-y-5">
              <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                WizPay Cross-Chain Payroll
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                The modern payroll infrastructure for startups, DAOs, and Web3 teams.
                Send USDC and EURC payments across <strong className="text-white">Arc Testnet</strong>,{' '}
                <strong className="text-white">Ethereum Sepolia</strong>, and{' '}
                <strong className="text-white">Solana</strong> from a single dashboard.
                Powered by Circle CCTP V2 for seamless cross-chain transfers with minimal gas fees.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                id="cta-hero-primary"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Launch App — It's Free
              </a>
              <a
                href="#how-it-works"
                id="cta-hero-secondary"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8"
              >
                See How It Works
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                Batch payroll in one transaction
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                Bridge USDC across chains instantly
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                Swap between USDC and EURC
              </div>
            </div>
          </div>

          <div className="animate-rise delay-1 relative">
            <div className="surface-card rounded-[32px] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-[24px] border border-white/8 bg-white/6 px-4 py-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Payroll Dashboard
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                    Clear, fast, premium
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Live
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[#0b1120] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <img
                  src="/hero-mockup.png"
                  alt="WizPay cross-chain payroll dashboard showing batch USDC payments across Arc, Ethereum and Solana"
                  width="1400"
                  height="980"
                  loading="eager"
                  decoding="async"
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/8 bg-white/6 px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-white">3 chains</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">Arc, Ethereum, Solana</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/6 px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-white">2 tokens</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">USDC &amp; EURC stablecoins</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/6 px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-white">1 click</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">batch payroll execution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FEATURES — Bridge, Swap, Batch Payroll
        ══════════════════════════════════════════════════════ */}
        <section id="features" className="section-shell pb-18 sm:pb-22">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/85">
              Core Features
            </span>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need for cross-chain stablecoin payroll
              </h2>
              <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                WizPay combines bridging, swapping, and batch payments into one unified platform built
                on Circle's CCTP V2 infrastructure. Pay your team in USDC or EURC across any supported chain.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Feature 1: Bridge */}
            <article className="surface-card rounded-[28px] p-6">
              <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                Bridge
              </span>
              <div className="mt-5 space-y-3">
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  Cross-Chain USDC Bridging via CCTP V2
                </h3>
                <p className="text-sm leading-7 text-slate-300">
                  Move USDC and EURC seamlessly between Arc, Ethereum, and Solana using Circle's
                  Cross-Chain Transfer Protocol Version 2. Unlike traditional bridges that rely on
                  wrapped tokens and liquidity pools, CCTP V2 burns stablecoins on the source chain
                  and mints native tokens on the destination chain. This means you always receive real,
                  Circle-issued USDC — never a synthetic wrapper. Gas fees stay remarkably low because
                  the protocol eliminates intermediary contracts. Whether you are moving payroll funds
                  from Ethereum Sepolia to Arc Testnet or consolidating treasury from Solana, WizPay
                  handles the routing, attestation, and finalization in one streamlined transaction.
                  Your team receives native stablecoins every time.
                </p>
              </div>
            </article>

            {/* Feature 2: Swap */}
            <article className="surface-card rounded-[28px] p-6">
              <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                Swap
              </span>
              <div className="mt-5 space-y-3">
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  Instant USDC ↔ EURC Stablecoin Swap
                </h3>
                <p className="text-sm leading-7 text-slate-300">
                  Convert between USDC and EURC directly within the WizPay dashboard without leaving
                  the application or using a third-party DEX. Our integration with Circle's StableFX
                  engine provides institutional-grade foreign exchange rates with transparent pricing
                  and minimal slippage. This is critical for companies that operate across USD and EUR
                  regions — pay your European contractors in EURC while holding your treasury in USDC,
                  or vice versa. Every swap is settled on-chain with full transparency. Gas fees are
                  optimized through batched approvals, and the entire swap lifecycle is tracked in your
                  WizPay transaction history. No hidden fees, no wrapped intermediaries, just direct
                  stablecoin conversion powered by Circle infrastructure and CCTP V2.
                </p>
              </div>
            </article>

            {/* Feature 3: Batch Payroll */}
            <article className="surface-card rounded-[28px] p-6">
              <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                Batch Payroll
              </span>
              <div className="mt-5 space-y-3">
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  Pay Your Entire Team in One Transaction
                </h3>
                <p className="text-sm leading-7 text-slate-300">
                  Stop sending individual transfers to each team member. WizPay's batch payroll system
                  lets you upload a CSV or manually input multiple recipients, set individual USDC or
                  EURC amounts, and execute the entire payroll in a single on-chain transaction. Our
                  smart contract bundles all transfers into one call, dramatically reducing gas fees
                  compared to sending payments one by one. Support for ERC-4337 account abstraction
                  means Smart Wallet users enjoy gasless, atomic execution. For EOA wallets like
                  MetaMask, we implement sequential chunking to handle large batches reliably. Whether
                  you are a DAO paying contributors across twenty wallets or a startup running monthly
                  payroll, WizPay makes it as simple as uploading a spreadsheet and clicking send.
                  Real-time status tracking shows you exactly when each payment lands.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            HOW IT WORKS — 3 Steps
        ══════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="section-shell pb-18 sm:pb-22">
          <div className="surface-card rounded-[32px] p-6 sm:p-8 lg:p-10">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/85">
                How It Works
              </span>
              <div className="space-y-3">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Three steps to cross-chain payroll
                </h2>
                <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  WizPay simplifies complex multi-chain payments into a workflow anyone can follow.
                  No blockchain expertise required — just connect, input, and send.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {/* Step 1 */}
              <article className="surface-card rounded-[28px] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                  01
                </div>
                <div className="mt-5 space-y-3">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                    Connect Your Wallet
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    Open WizPay and connect your preferred wallet — MetaMask, Coinbase Smart Wallet,
                    Rabby, or any WalletConnect-compatible provider. WizPay automatically detects your
                    USDC and EURC balances across Arc Testnet, Ethereum Sepolia, and Solana. No lengthy
                    onboarding or KYC process. Your wallet is your identity and you are ready to
                    start sending payments in seconds.
                  </p>
                </div>
              </article>

              {/* Step 2 */}
              <article className="surface-card rounded-[28px] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                  02
                </div>
                <div className="mt-5 space-y-3">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                    Input Your Batch Payment
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    Add recipients manually or upload a CSV file with wallet addresses and amounts.
                    Choose between USDC or EURC, select the source and destination chains, and review
                    the total payroll cost including estimated gas fees. WizPay validates all addresses
                    and amounts before you proceed, preventing costly mistakes. You can save recipient
                    lists as templates for recurring payroll cycles.
                  </p>
                </div>
              </article>

              {/* Step 3 */}
              <article className="surface-card rounded-[28px] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                  03
                </div>
                <div className="mt-5 space-y-3">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                    Send &amp; Track in Real Time
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    Confirm the transaction and watch every payment land in real time. WizPay provides
                    live status updates for each recipient — pending, bridging, confirmed, or completed.
                    Cross-chain transfers via CCTP V2 include automatic attestation tracking so you know
                    exactly when funds arrive on the destination chain. Download transaction reports for
                    your accounting records when the batch is complete.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA Section
        ══════════════════════════════════════════════════════ */}
        <section id="pricing" className="section-shell pb-24">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,191,199,0.18),rgba(6,8,22,0.92)_45%,rgba(245,158,11,0.14))] px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-10">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/12 blur-[120px]" />
            <div className="relative max-w-2xl space-y-4">
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                Get Started Free
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start paying your team across chains today
              </h2>
              <p className="text-sm leading-7 text-slate-100/78 sm:text-base">
                WizPay is free to try on testnet. Connect your wallet, fund with faucet tokens, and
                experience seamless cross-chain USDC and EURC payroll. No credit card, no commitment.
                Built on Circle's CCTP V2 with gas-optimized smart contracts for the lowest possible
                transaction costs.
              </p>
            </div>

            <div className="relative mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a
                href={APP_URL}
                id="cta-bottom-primary"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Try WizPay Now
              </a>
              <a
                href={SOCIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-bottom-social"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Follow Updates
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/8 bg-[#050816]/80 backdrop-blur-xl">
        <div className="section-shell flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="WizPay" width="20" height="20" className="rounded-md" />
            <p className="text-sm text-slate-400">
              © 2026 WizPay. Cross-chain payroll powered by Circle CCTP V2.
            </p>
          </div>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Docs
            </a>
            <a
              href={SOCIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Twitter / X
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Discord
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Home
