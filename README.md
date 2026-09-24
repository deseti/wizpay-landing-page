# WizPay landing page

Marketing website for [wizpay.xyz](https://wizpay.xyz), built with React, Vite, and Tailwind CSS. Presents WizPay’s non-custodial stablecoin payment capabilities on Arc Mainnet.

This repository contains presentation and content only. The production application is at [app.wizpay.xyz](https://app.wizpay.xyz); product source is maintained separately in [deseti/wizpay-core](https://github.com/deseti/wizpay-core).

## Local development

```bash
npm ci
npm run dev
```

## Validation and production build

```bash
npm run lint
npm run build
npm run preview
```

The build produces `dist/`. Building and previewing do not deploy the site.

## Content boundaries

- Mainnet contract references live in `src/components/MainnetContracts.jsx`.
- `/analytics` explains the retirement of the historical Testnet dashboard; it does not publish Mainnet metrics.
- `public/analytics-live.json` is a labeled historical Testnet snapshot, retained at its old path for provenance. Neither page fetches it.
- `src/docs/` and `wizpay_codebase_analysis.md` are archived development material, not current production documentation.
- `public/hero-mockup.png` is an unused legacy illustration with fictional dashboard data. It is not used by the page or social metadata.
- The legacy analytics updater is not part of the build and must not be used as a Mainnet data source.
