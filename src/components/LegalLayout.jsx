import { useEffect } from 'react'
import { SiteHeader, SiteFooter } from './SiteLayout'

export default function LegalLayout({ title, path, introduction, sections }) {
  useEffect(() => {
    const previousTitle = document.title
    const canonical = document.querySelector('link[rel="canonical"]')
    const previousCanonical = canonical?.getAttribute('href')
    document.title = `${title} | WizPay`
    canonical?.setAttribute('href', `https://wizpay.xyz${path}`)
    return () => {
      document.title = previousTitle
      if (previousCanonical !== null && previousCanonical !== undefined) {
        canonical?.setAttribute('href', previousCanonical)
      }
    }
  }, [title, path])

  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <article className="legal-content">
          <header className="mb-10 border-b border-white/10 pb-8">
            <p className="eyebrow">WizPay legal</p>
            <h1 className="section-title mt-4">{title}</h1>
            <p className="mt-4 text-sm text-slate-400">Last updated: <time dateTime="2026-09-26">September 26, 2026</time></p>
            <p className="mt-6 leading-8 text-slate-300">{introduction}</p>
          </header>
          <div className="space-y-10">
            {sections.map(({ id, heading, content }) => (
              <section key={id} id={id} aria-labelledby={`${id}-heading`}>
                <h2 id={`${id}-heading`} className="font-display text-xl font-semibold text-slate-100 sm:text-2xl">{heading}</h2>
                <div className="mt-4 space-y-4 leading-8 text-slate-300">{content}</div>
              </section>
            ))}
            <section id="contact" aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="font-display text-xl font-semibold sm:text-2xl">Contact</h2>
              <p className="mt-4 leading-8 text-slate-300">For questions about this {title === 'Privacy Policy' ? 'policy or your information' : 'service or these Terms'}, contact WizPay at <a href="mailto:connect@wizpay.xyz">connect@wizpay.xyz</a>.</p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
