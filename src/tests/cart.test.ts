import { describe, expect, it } from 'vitest';import { calculateCheckout } from '@/actions/shop';
describe('checkout totals',()=>{it('applies coupon, tax, and free shipping threshold',async()=>{await expect(calculateCheckout({subtotal:20000,coupon:'VAULT10'})).resolves.toMatchObject({discount:2000,shipping:0,total:19485});});});
