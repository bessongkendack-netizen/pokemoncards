import { NextResponse } from 'next/server';import { z } from 'zod';import { createStripeCheckout } from '@/services/payments';
const Body=z.object({orderId:z.string(),amount:z.number().int().positive()});
export async function POST(req:Request){const body=Body.parse(await req.json()); const session=await createStripeCheckout(body.orderId,body.amount); return NextResponse.json({url:session.url,id:session.id});}
