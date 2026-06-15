import type { Config } from 'tailwindcss';
export default { darkMode: 'class', content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { vault: { 50:'#fff7ed',500:'#f97316',700:'#c2410c',950:'#1c0f0a' } }, boxShadow:{glow:'0 0 40px rgba(249,115,22,.25)'} } }, plugins: [] } satisfies Config;
