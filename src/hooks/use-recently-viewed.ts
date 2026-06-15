'use client';
import { useEffect, useState } from 'react';
const key='animevault:recently-viewed';
export function useRecentlyViewed(slug?: string){ const [items,setItems]=useState<string[]>([]); useEffect(()=>{const current=JSON.parse(localStorage.getItem(key) ?? '[]') as string[]; const next=slug?[slug,...current.filter(x=>x!==slug)].slice(0,12):current; localStorage.setItem(key,JSON.stringify(next)); setItems(next);},[slug]); return items; }
