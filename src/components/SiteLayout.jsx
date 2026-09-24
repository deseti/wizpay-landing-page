export const APP_URL = 'https://app.wizpay.xyz'

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#050816]/90">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="section-shell flex flex-wrap items-center justify-between gap-4 py-5">
        <a href="/" aria-label="WizPay home" className="flex items-center gap-3">
          <img src="/favicon.ico" alt="" width="32" height="32" />
          <span className="font-display text-xl font-semibold tracking-tight">WizPay</span>
        </a>
        <nav aria-label="Main navigation" className="order-3 flex w-full flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300 md:order-none md:w-auto">
          <a href="/#capabilities">Capabilities</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#mainnet-contracts">Mainnet contracts</a>
        </nav>
        <a href={APP_URL} className="button-secondary">Open WizPay <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col justify-between gap-8 py-10 md:flex-row">
        <div className="max-w-sm space-y-3">
          <p className="font-display text-lg font-semibold">WizPay</p>
          <p className="text-sm leading-6 text-slate-400">Non-custodial stablecoin payment infrastructure on Arc Mainnet.</p>
          <p className="text-xs text-slate-500">© 2026 WizPay. All rights reserved.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap content-start gap-x-6 gap-y-4 text-sm text-slate-300 md:max-w-md">
          <a href="https://github.com/deseti/wizpay-core">Core source ↗</a>
          <a href="https://github.com/deseti/wizpay-landing-page">Landing source ↗</a>
          <a href="/analytics">Analytics status</a>
          <a href="https://x.com/wizpay_arc">X / Twitter ↗</a>
          <a href="mailto:connect@wizpay.xyz">connect@wizpay.xyz</a>
        </nav>
      </div>
    </footer>
  )
}
