# levtoeu

Fast little web app for calculating change when a customer gives you **BGN**, with results shown in **BGN** and **EUR**.

**Live demo:** https://levto-eu.netlify.app/

---

## Features

- Enter a price (EUR) and amount given (BGN)
- Shows:
  - Converted price in BGN (fixed rate)
  - Change to return in BGN/Euro
- Clean, mobile-friendly UI

## Exchange rate

This app uses a fixed conversion rate:

- $1\,\text{EUR} = 1.95583\,\text{BGN}$

## Built with

- Preact + TypeScript
- Vite
- Tailwind CSS

## Run locally

```bash
pnpm install
pnpm dev
```

## Build for production

```bash
pnpm build
pnpm preview
```
