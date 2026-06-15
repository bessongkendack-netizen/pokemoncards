import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
export const sql = neon(process.env.DATABASE_URL ?? 'postgres://user:pass@localhost:5432/animevault');
export const db = drizzle(sql, { schema });
