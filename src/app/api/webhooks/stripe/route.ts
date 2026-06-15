import { NextResponse } from 'next/server';import { stripe } from '@/services/payments';
export async function POST(req:Request){const raw=await req.text(); const sig=req.headers.get('stripe-signature')??''; const event=stripe.webhooks.constructEvent(raw,sig,process.env.STRIPE_WEBHOOK_SECRET??''); return NextResponse.json({received:true,type:event.type});}
