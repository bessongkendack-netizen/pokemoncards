# AnimeVault

Production-oriented Next.js 15 marketplace for authenticated anime trading cards with PostgreSQL/Neon, Drizzle ORM, Better Auth, Stripe, NOWPayments, Resend, UploadThing, admin analytics, SEO, tests, and Vercel deployment configuration.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run db:generate
npm run db:seed
npm run dev
```

## Deployment

1. Create a Neon PostgreSQL database and set `DATABASE_URL`.
2. Configure Better Auth secrets and Google OAuth callback URLs.
3. Configure Stripe payment methods, Apple Pay/Google Pay domains, and webhook endpoint `/api/webhooks/stripe`.
4. Configure NOWPayments production or sandbox API credentials and IPN secret for `/api/webhooks/nowpayments`.
5. Configure Resend and UploadThing keys.
6. Deploy to Vercel using the included `vercel.json`.
