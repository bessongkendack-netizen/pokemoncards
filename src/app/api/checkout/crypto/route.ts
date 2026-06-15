import { NextResponse } from 'next/server';import { z } from 'zod';import { createNowPayment } from '@/services/payments';
const Body=z.object({orderId:z.string(),amount:z.number().int().positive(),currency:z.enum(['btc','eth','usdt','ltc','sol'])});
export async function POST(req:Request){const body=Body.parse(await req.json()); return NextResponse.json(await createNowPayment(body.orderId,body.amount,body.currency));}
