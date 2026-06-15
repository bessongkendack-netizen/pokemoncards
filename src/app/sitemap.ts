import { products, categories } from '@/lib/data';import { siteConfig } from '@/config/site';
export default function sitemap(){return ['','/shop','/blog','/about','/contact',...products.map(p=>`/products/${p.slug}`),...categories.map(c=>`/categories/${c.slug}`)].map(path=>({url:`${siteConfig.url}${path}`,lastModified:new Date()}));}
