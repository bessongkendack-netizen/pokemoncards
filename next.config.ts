import type { NextConfig } from 'next';
const nextConfig: NextConfig = { images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }, { protocol: 'https', hostname: 'images.pokemontcg.io' }] }, poweredByHeader: false };
export default nextConfig;
