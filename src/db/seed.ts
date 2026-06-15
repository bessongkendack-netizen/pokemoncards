import { products, categories } from '@/lib/data';
async function main(){ const users=[{name:'Super Admin',email:'superadmin@animevault.test',role:'super_admin'},{name:'Admin',email:'admin@animevault.test',role:'admin'},{name:'Test Customer',email:'customer@animevault.test',role:'customer'}]; const orders=Array.from({length:24},(_,i)=>({id:`seed_order_${i+1}`,status:'delivered',total:3500+i*1200})); console.log(JSON.stringify({users,categories:categories.length,products:products.length,orders},null,2)); }
void main();
