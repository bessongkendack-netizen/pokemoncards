import { z } from 'zod';
export const productSchema=z.object({name:z.string().min(3),slug:z.string().min(3),sku:z.string().min(3),description:z.string().min(20),price:z.number().int().positive(),stock:z.number().int().nonnegative(),category:z.string().min(2)});
