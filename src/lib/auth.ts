import { betterAuth } from 'better-auth';
export const auth = betterAuth({ secret: process.env.BETTER_AUTH_SECRET, database: undefined, emailAndPassword:{ enabled:true }, socialProviders:{ google:{ clientId:process.env.GOOGLE_CLIENT_ID ?? '', clientSecret:process.env.GOOGLE_CLIENT_SECRET ?? '' } } });
export function isAdmin(role?: string){ return role === 'admin' || role === 'super_admin'; }
