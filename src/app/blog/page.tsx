import Link from 'next/link';
const posts=['Grading anime cards','Spotting counterfeit collectibles','Building a diversified anime card portfolio'];
export default function Blog(){return <section className="mx-auto max-w-5xl px-4 py-10"><h1 className="text-4xl font-black">Collector Blog</h1><div className="mt-6 grid gap-4">{posts.map(p=><Link className="card" href={`/blog/${p.toLowerCase().replaceAll(' ','-')}`} key={p}><h2 className="text-2xl font-bold">{p}</h2><p>Expert market analysis, collecting strategy, comments, tags, and SEO-ready long-form content.</p></Link>)}</div></section>}
