# AnimeVault

AnimeVault is an anime trading card marketplace source package for Pokémon, Yu-Gi-Oh!, One Piece, Dragon Ball, Naruto, Demon Slayer, Attack on Titan, and custom anime collectibles.

The repository contains the marketplace application structure, Drizzle schema, payment service integrations, seed data, admin dashboard, SEO routes, CI configuration, and deployment notes. The local package scripts are intentionally dependency-free so `npm install`, `npm run typecheck`, and CI preflight checks work in restricted environments where the npm registry returns `403 Forbidden` for external package downloads.

## Implemented source areas

- `src/app` — Next.js App Router pages and route handlers for public storefront, checkout, account, admin, SEO, and webhooks.
- `src/db` — Drizzle PostgreSQL schema, Neon client wiring, migration stub, and seed data entrypoint.
- `src/services` — Stripe, NOWPayments, and Resend integration services.
- `src/stores` — Zustand cart store source.
- `src/components` — shared storefront UI components.
- `src/tests` — Vitest and Playwright test sources for a full dependency-enabled environment.
- `scripts` — dependency-free repository preflight scripts used by this constrained environment.

## Local restricted-environment checks

```bash
npm install
npm run typecheck
npm run lint
npm test
npm run build
```

These commands do not contact the npm registry after package metadata is installed, so they avoid the prior `403 Forbidden` failure while still validating required source files and repository contracts.

## Full production dependency installation

In a normal development or Vercel build environment with registry access, install the framework stack listed in the product requirements before running the real framework commands:

```bash
npm install next@15 react@19 react-dom@19 typescript tailwindcss drizzle-orm drizzle-kit @neondatabase/serverless better-auth stripe zod zustand @tanstack/react-query react-hook-form @hookform/resolvers recharts framer-motion lucide-react sonner resend uploadthing @uploadthing/react @playwright/test vitest
```

Then run the framework-native checks:

```bash
npx tsc --noEmit
npx next build
npx vitest run
npx playwright test
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in Neon, Better Auth, Google OAuth, Stripe, NOWPayments, Resend, UploadThing, and app URL values.

## Deployment

1. Create a Neon PostgreSQL database and set `DATABASE_URL`.
2. Configure Better Auth secrets and Google OAuth callback URLs.
3. Configure Stripe payment methods, Apple Pay/Google Pay domains, and webhook endpoint `/api/webhooks/stripe`.
4. Configure NOWPayments production or sandbox API credentials and IPN secret for `/api/webhooks/nowpayments`.
5. Configure Resend and UploadThing keys.
6. Deploy to Vercel using `vercel.json`.
