import MainnetContracts from '../components/MainnetContracts'
import { APP_URL, SiteHeader, SiteFooter } from '../components/SiteLayout'

const CAPABILITIES = [
  { name: 'Send', description: 'Transfer stablecoins directly from your own wallet on Arc Mainnet.' },
  { name: 'Payroll', description: 'Execute same-token and atomic cross-token payroll using supported stablecoins through an on-chain settlement flow.' },
  { name: 'Swap', description: 'Swap USDC and EURC through WizPay’s non-custodial Arc Mainnet execution path.' },
  { name: 'Invoices', description: 'Create stablecoin invoices and payment requests.' },
  { name: 'Payment Links', description: 'Generate shareable payment links for wallet-to-wallet stablecoin settlement.' },
  { name: 'Bridge', description: 'Move USDC between Arc Mainnet and supported external networks through Circle CCTP V2.' },
  { name: 'Activity', description: 'Track payment and settlement activity from one interface.' },
]

const STEPS = [
  { title: 'Connect your wallet', description: 'Use your own external, self-custodial wallet with WizPay.' },
  { title: 'Choose your payment flow', description: 'Send a payment, prepare payroll, swap stablecoins, or bridge USDC. Create invoices and payment links to request settlement.' },
  { title: 'Review and sign', description: 'Review transaction details and sign from your own wallet. Follow payment and settlement activity in WizPay.' },
]

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="section-shell grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-[11px] font-bold tracking-[0.16em] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" /> LIVE ON ARC MAINNET
            </p>
            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Stablecoin payments,<br /><span className="text-cyan-200">built for Arc Mainnet.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Send payments, run payroll, swap USDC and EURC, create invoices and payment links, and move USDC across chains with Circle CCTP V2 — while keeping control of your own wallet.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a id="cta-hero-primary" href={APP_URL} className="button-primary">Open WizPay <span aria-hidden="true">↗</span></a>
              <a id="cta-hero-secondary" href="#mainnet-contracts" className="button-secondary">View Mainnet Contracts</a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400" aria-label="Product facts">
              {['Non-custodial', 'Arc Mainnet', 'USDC & EURC', 'Circle CCTP V2'].map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
          </div>
          <aside className="surface-card rounded-[32px] p-6 sm:p-8" aria-label="WizPay payment architecture">
            <p className="eyebrow">Your wallet. Your signature.</p>
            <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight">One place for stablecoin payments.</h2>
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#050816]/70 p-5">
              <p className="text-sm font-semibold">Your self-custodial wallet</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">You review and sign transactions.</p>
            </div>
            <div className="py-3 text-center text-cyan-300" aria-hidden="true">↓</div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5">
              <div className="flex items-center gap-3">
                <img src="/favicon.ico" alt="" width="26" height="26" />
                <p className="font-display text-lg font-semibold">WizPay on Arc Mainnet</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">Payments, payroll and USDC ↔ EURC swaps</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">Invoices · Payment Links · Activity</p>
            </div>
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-sm font-semibold text-cyan-200">USDC bridge · Circle CCTP V2</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">Arc Mainnet ↔ supported external networks</p>
            </div>
          </aside>
        </section>

        <section id="capabilities" className="section-shell py-16 sm:py-20" aria-labelledby="capabilities-heading">
          <p className="eyebrow">Capabilities</p>
          <h2 id="capabilities-heading" className="section-title mt-4">From payment requests to settlement.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">Non-custodial stablecoin payment infrastructure for Circle USDC and Circle EURC on Arc Mainnet.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability, index) => (
              <article key={capability.name} className={`surface-card rounded-3xl p-6 ${capability.name === 'Activity' ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
                <p className="font-mono text-xs text-cyan-300/70" aria-hidden="true">0{index + 1}</p>
                <h3 className="font-display mt-4 text-xl font-semibold">{capability.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="section-shell py-16 sm:py-20" aria-labelledby="wallet-heading">
          <div className="surface-card rounded-[32px] p-6 sm:p-10">
            <p className="eyebrow">How it works</p>
            <h2 id="wallet-heading" className="section-title mt-4">Payment execution from your own wallet.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">Users sign transactions from their own wallet. WizPay does not take custody of user funds for production payment execution.</p>
            <ol className="mt-10 grid gap-8 lg:grid-cols-3">
              {STEPS.map((step, index) => (
                <li key={step.title}>
                  <span className="text-sm font-semibold text-cyan-200">0{index + 1}</span>
                  <h3 className="font-display mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-shell py-16 sm:py-20" aria-labelledby="bridge-heading">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
            <div><p className="eyebrow">Cross-chain USDC</p><h2 id="bridge-heading" className="section-title mt-4">Based on Arc.<br />Connected through CCTP V2.</h2></div>
            <div className="space-y-4 text-base leading-8 text-slate-300">
              <p>WizPay runs on Arc Mainnet and uses Circle CCTP V2 to move USDC between Arc and supported external networks.</p>
              <p className="text-slate-400">Those networks serve as bridge sources and destinations. Arc Mainnet remains the primary WizPay application network.</p>
            </div>
          </div>
        </section>

        <MainnetContracts />
        <section className="section-shell py-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-cyan-300/15 bg-cyan-300/5 p-6 sm:p-10 md:flex-row md:items-center">
            <div><h2 className="font-display text-2xl font-semibold sm:text-3xl">Put stablecoins to work.</h2><p className="mt-3 leading-7 text-slate-300">Open WizPay and connect your own wallet on Arc Mainnet.</p></div>
            <a href={APP_URL} className="button-primary shrink-0">Open WizPay <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
