import { assertPath } from './shared.mjs';
['src/app/page.tsx','src/app/shop/page.tsx','src/app/admin/page.tsx','src/db/schema.ts','.env.example','vercel.json'].forEach(assertPath);
console.log('Production build preflight passed. Install framework dependencies in deployment to run next build.');
