'use server';
import { z } from 'zod';
export async function calculateCheckout(input:unknown){ const data=z.object({subtotal:z.number().int().nonnegative(),coupon:z.string().optional()}).parse(input); const discount=data.coupon==='VAULT10'?Math.round(data.subtotal*.1):0; const tax=Math.round((data.subtotal-discount)*.0825); const shipping=data.subtotal>10000?0:799; return {subtotal:data.subtotal,discount,tax,shipping,total:data.subtotal-discount+tax+shipping}; }
