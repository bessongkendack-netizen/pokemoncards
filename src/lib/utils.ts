import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function money(cents: number) { return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(cents/100); }
export function slugify(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
