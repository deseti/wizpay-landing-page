import MainnetContracts from '../components/MainnetContracts'
import { SiteHeader, SiteFooter } from '../components/SiteLayout'

export default function Analytics() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="section-shell pt-16 sm:pt-24">
          <p className="eyebrow">Analytics status</p>
          <h1 className="section-title mt-4">Historical data, clearly separated.</h1>
          <div className="surface-card mt-8 max-w-3xl space-y-4 rounded-3xl p-6 sm:p-8">
            <p className="text-lg font-semibold text-amber-200">The previous analytics covered Arc Testnet.</p>
            <p className="leading-7 text-slate-300">Historical Testnet transaction counts and volumes are not Arc Mainnet production traction. That dashboard has been retired from this site.</p>
            <p className="leading-7 text-slate-300">This page does not publish Mainnet transaction counts, volume, active users, or TVL. You can inspect the production contracts below for public on-chain records.</p>
            <a href="/" className="inline-block text-sm text-cyan-200 underline underline-offset-4">Explore WizPay on Arc Mainnet</a>
          </div>
        </section>
        <MainnetContracts />
      </main>
      <SiteFooter />
    </>
  )
}
