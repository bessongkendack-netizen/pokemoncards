export type Role = 'customer' | 'admin' | 'super_admin';
export type OrderStatus = 'pending'|'paid'|'processing'|'shipped'|'delivered'|'refunded'|'cancelled';
export type Product = { id:string; name:string; slug:string; sku:string; description:string; images:string[]; rarity:string; franchise:string; category:string; gradingCompany:string; gradeScore:string; edition:string; language:string; stock:number; price:number; salePrice:number|null; tags:string[]; condition:string; releaseDate:string; rating:number; reviews:number };
export type CartItem = { productId:string; name:string; slug:string; image:string; price:number; quantity:number; stock:number };
