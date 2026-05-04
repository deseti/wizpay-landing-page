const APP_URL = 'https://app.wizpay.xyz'
const SOCIAL_URL = 'https://x.com/wizpay_arc'
const DOCS_URL = 'https://docs.wizpay.xyz'
const DISCORD_URL = 'https://discord.gg/wizpay'

const VALUE_BLOCKS = [
  {
    icon: '⚡',
    title: 'Batch Execution',
    desc: 'Bundle all your payments into a single execution — no matter how many recipients.',
    accent: 'cyan',
  },
  {
    icon: '🔒',
    title: 'Atomic Settlement',
    desc: 'Every payment in your batch settles together, on-chain. You always know the final state.',
    accent: 'emerald',
  },
  {
    icon: '🔗',
    title: 'Multi-Chain',
    desc: 'Move money on Ethereum, Solana, or Arc — from the same interface, without switching networks.',
    accent: 'sky',
  },
  {
    icon: '💰',
    title: 'Cost Efficient',
    desc: 'Batching means fewer transactions, less gas burned, and more value delivered.',
    accent: 'amber',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Add your payments',
    desc: 'Enter recipients and amounts. As many as you need — all in one place.',
  },
  {
    num: '02',
    title: 'WizPay groups them',
    desc: 'Your payments are automatically bundled into a single execution batch.',
  },
  {
    num: '03',
    title: 'One click. Everything settles.',
    desc: 'Hit execute. WizPay routes, processes, and settles every payment on-chain — all at once.',
  },
]

const CAPABILITIES = [
  {
    icon: '📦',
    label: 'Batch Payments',
    title: 'Send to many recipients in a single execution.',
    desc: 'No loops. No repeating. Just one flow.',
  },
  {
    icon: '🌉',
    label: 'Bridge',
    title: 'Move USDC across chains seamlessly.',
    desc: 'Cross-chain transfers between Ethereum, Solana, and Arc — handled for you.',
  },
  {
    icon: '🔄',
    label: 'Swap',
    title: 'Convert between assets directly.',
    desc: 'Route through on-chain liquidity without leaving the platform.',
  },
  {
    icon: '💱',
    label: 'FX',
    title: 'Switch between stablecoins.',
    desc: 'USDC to EURC and back. Built-in forex for global payments.',
  },
  {
    icon: '🏦',
    label: 'Liquidity',
    title: 'Provide capital, earn from swap activity.',
    desc: 'A built-in LP system that keeps the engine running.',
  },
]

const WHY_ITEMS = [
  { icon: '⚡', text: 'Fast — Payments execute in seconds, not hours.' },
  { icon: '🧩', text: 'Simple — No complex setup. Create, batch, execute.' },
  { icon: '📈', text: 'Scalable — 5 payments or 500 — same flow, same speed.' },
  { icon: '🔗', text: 'On-chain — Everything settles on-chain. Fully verifiable.' },
  { icon: '💰', text: 'Efficient — Lower gas, fewer transactions, better economics.' },
]

function Badge({ children, color = 'cyan' }) {
  const colors = {
    cyan: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200/85',
    emerald: 'border-emerald-300/15 bg-emerald-300/10 text-emerald-100/85',
    white: 'border-white/12 bg-white/10 text-white/80',
  }
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${colors[color]}`}>
      {children}
    </span>
  )
}

function SectionHeading({ badge, badgeColor, title, subtitle }) {
  return (
    <div className="max-w-2xl space-y-4">
      {badge && <Badge color={badgeColor}>{badge}</Badge>}
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

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
              <img src="/favicon.ico" alt="WizPay Logo" width="22" height="22" className="rounded-md" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-white">WizPay</p>
              <p className="text-xs text-slate-400">Move money on-chain</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#what" className="transition hover:text-white">What It Does</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white flex items-center gap-1">Docs <span className="text-[10px] opacity-70">↗</span></a>
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
            1. HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="section-shell grid gap-12 pb-18 pt-12 sm:pb-22 sm:pt-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:pt-24">
          <div className="animate-rise space-y-8">
            <Badge color="emerald">Payment Execution System</Badge>

            <div className="space-y-5">
              <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                Move money on-chain, instantly.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Stop sending payments one by one. WizPay batches everything, executes once,
                and settles on-chain — across any chain, in seconds.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                id="cta-hero-primary"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]"
              >
                Start Moving Money →
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
                Batch payments in one execution
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                Move money across chains
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                Convert between stablecoins
              </div>
            </div>
          </div>

          <div className="animate-rise delay-1 relative">
            <div className="surface-card rounded-[32px] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-[24px] border border-white/8 bg-white/6 px-4 py-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Payment Dashboard
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                    Batch. Execute. Done.
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Live
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[#0b1120] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <img
                  src="/hero-mockup.png"
                  alt="WizPay dashboard showing batch payment execution across multiple chains"
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
                  <p className="font-display text-2xl font-semibold text-white">50 max</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">recipients per batch</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/6 px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-white">1 click</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">batch execution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. WHAT WIZPAY ACTUALLY DOES
        ══════════════════════════════════════════════════════ */}
        <section id="what" className="section-shell pb-18 sm:pb-22">
          <div className="surface-card rounded-[32px] p-6 sm:p-8 lg:p-10">
            <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12 lg:items-center">
              <div className="space-y-6">
                <Badge color="cyan">How It&apos;s Different</Badge>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Not another wallet.<br />A payment execution system.
                </h2>
                <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                  <p>
                    Most tools make you send payments one at a time.
                    Open wallet. Paste address. Set amount. Confirm. Repeat.
                  </p>
                  <p>
                    <strong className="text-white">WizPay doesn&apos;t work like that.</strong>
                  </p>
                  <p>
                    You create all your payments upfront — 5, 50, or 500.
                    WizPay batches them together and executes everything in one go.
                    Every payment settles on-chain, atomically.
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="rounded-[28px] border border-white/8 bg-[#0a0e1c] p-6 sm:p-8">
                  <p className="text-center font-display text-lg font-semibold text-white mb-6">
                    The WizPay difference
                  </p>
                  {/* Visual flow */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-lg">📋</span>
                      <div>
                        <p className="text-sm font-semibold text-white">Create payments</p>
                        <p className="text-xs text-slate-400">Add all recipients at once</p>
                      </div>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-lg">📦</span>
                      <div>
                        <p className="text-sm font-semibold text-white">System batches them</p>
                        <p className="text-xs text-slate-400">Grouped into one execution</p>
                      </div>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="flex items-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/8 px-4 py-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-lg">✅</span>
                      <div>
                        <p className="text-sm font-semibold text-cyan-100">Everything settles</p>
                        <p className="text-xs text-cyan-200/60">On-chain. Atomic. Done.</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-center text-sm font-semibold text-slate-300">
                    One execution → many payments → one result
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. VALUE BLOCKS
        ══════════════════════════════════════════════════════ */}
        <section className="section-shell pb-18 sm:pb-22">
          <SectionHeading
            badge="Why It Matters"
            badgeColor="cyan"
            title="Send many, execute once."
            subtitle="WizPay turns complex multi-chain payments into a single, predictable execution."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_BLOCKS.map((block) => (
              <article
                key={block.title}
                className="value-block surface-card rounded-[28px] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-xl">
                  {block.icon}
                </span>
                <div className="mt-5 space-y-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                    {block.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">{block.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. HOW IT WORKS — 3 Steps
        ══════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="section-shell pb-18 sm:pb-22">
          <div className="surface-card rounded-[32px] p-6 sm:p-8 lg:p-10">
            <SectionHeading
              badge="How It Works"
              badgeColor="cyan"
              title="Three steps. That's it."
              subtitle="Create, batch, execute. No blockchain expertise required."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {STEPS.map((step, i) => (
                <article key={step.num} className={`surface-card rounded-[28px] p-6 ${i < STEPS.length - 1 ? 'step-connector' : ''}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                    {step.num}
                  </div>
                  <div className="mt-5 space-y-3">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-300">{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. CAPABILITIES
        ══════════════════════════════════════════════════════ */}
        <section id="capabilities" className="section-shell pb-18 sm:pb-22">
          <SectionHeading
            badge="Capabilities"
            badgeColor="cyan"
            title="Everything you need to move money on-chain."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <article key={cap.label} className="capability-card surface-card rounded-[28px] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-lg">
                    {cap.icon}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                    {cap.label}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-display text-base font-semibold tracking-tight text-white">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">{cap.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            6. WHY WIZPAY
        ══════════════════════════════════════════════════════ */}
        <section className="section-shell pb-18 sm:pb-22">
          <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:items-center">
            <div>
              <SectionHeading
                badge="Why WizPay"
                badgeColor="emerald"
                title="Built for speed, simplicity, and scale."
              />
            </div>
            <div className="mt-8 lg:mt-0 space-y-3">
              {WHY_ITEMS.map((item) => (
                <div
                  key={item.text}
                  className="why-bullet flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-4"
                >
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-sm leading-6 text-slate-200 sm:text-base">
                    <strong className="text-white">{item.text.split(' — ')[0]}</strong>
                    {' — '}
                    {item.text.split(' — ')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            7. CLOSING CTA
        ══════════════════════════════════════════════════════ */}
        <section className="section-shell pb-24">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,191,199,0.18),rgba(6,8,22,0.92)_45%,rgba(245,158,11,0.14))] px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-10">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/12 blur-[120px]" />
            <div className="relative max-w-2xl space-y-4">
              <Badge color="white">Ready?</Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stop sending payments one by one.<br />Start executing.
              </h2>
              <p className="text-sm leading-7 text-slate-100/78 sm:text-base">
                Batch your payments, execute once, settle on-chain. Try WizPay on testnet — free, no commitment.
              </p>
            </div>

            <div className="relative mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a
                href={APP_URL}
                id="cta-bottom-primary"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Launch WizPay →
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

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-[#030510]/80 backdrop-blur-2xl">
        <div className="section-shell py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                  <img src="/favicon.ico" alt="WizPay Logo" width="20" height="20" className="rounded-md" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-white">WizPay</p>
                  <p className="text-xs text-slate-400">On-chain payment execution</p>
                </div>
              </div>
              <p className="max-w-xs text-sm leading-6 text-slate-400">
                Batch your payments, execute once, and settle on-chain across Ethereum, Solana, and Arc.
              </p>
              <div className="pt-2">
                <a href="mailto:connect@wizpay.xyz" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">
                  <span>✉️</span> connect@wizpay.xyz
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href={APP_URL} className="transition hover:text-white">Open App</a></li>
                <li><a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Documentation</a></li>
                <li><a href="#how-it-works" className="transition hover:text-white">How it Works</a></li>
                <li><a href="#capabilities" className="transition hover:text-white">Capabilities</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Connect</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href={SOCIAL_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Twitter / X</a></li>
                <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 WizPay. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              <a href="#" className="transition hover:text-white">Privacy Policy</a>
              <a href="#" className="transition hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
