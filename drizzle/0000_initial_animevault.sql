CREATE TYPE role AS ENUM ('customer','admin','super_admin');
CREATE TYPE order_status AS ENUM ('pending','paid','processing','shipped','delivered','refunded','cancelled');
-- Generated from src/db/schema.ts. Run `npm run db:generate` before production deployment to emit the complete Drizzle SQL for the active Drizzle version.
