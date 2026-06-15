import { NextResponse, type NextRequest } from 'next/server';
export function middleware(req: NextRequest){ const nonce=crypto.randomUUID(); const res=NextResponse.next(); res.headers.set('x-nonce',nonce); res.headers.set('X-Frame-Options','DENY'); res.headers.set('X-Content-Type-Options','nosniff'); res.headers.set('Referrer-Policy','strict-origin-when-cross-origin'); return res; }
export const config={matcher:['/((?!_next/static|_next/image|favicon.ico).*)']};
