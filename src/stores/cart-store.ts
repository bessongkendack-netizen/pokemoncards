'use client';
import { create } from 'zustand';
import type { CartItem } from '@/types';
type CartState={items:CartItem[]; add:(item:CartItem)=>void; remove:(id:string)=>void; setQuantity:(id:string,q:number)=>void; clear:()=>void; subtotal:()=>number};
export const useCartStore=create<CartState>((set,get)=>({items:[],add:item=>set(s=>{const found=s.items.find(i=>i.productId===item.productId); return {items:found?s.items.map(i=>i.productId===item.productId?{...i,quantity:Math.min(i.stock,i.quantity+item.quantity)}:i):[...s.items,item]}}),remove:id=>set(s=>({items:s.items.filter(i=>i.productId!==id)})),setQuantity:(id,q)=>set(s=>({items:s.items.map(i=>i.productId===id?{...i,quantity:Math.max(1,Math.min(i.stock,q))}:i)})),clear:()=>set({items:[]}),subtotal:()=>get().items.reduce((t,i)=>t+i.price*i.quantity,0)}));
