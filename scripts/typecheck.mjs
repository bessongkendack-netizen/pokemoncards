import { readFileSync } from 'node:fs';
import { files, assertPath } from './shared.mjs';
assertPath('tsconfig.json');
const sources=files('src',['.ts','.tsx']);
for(const file of sources){ const text=readFileSync(file,'utf8'); if(/\bany\b/.test(text)) throw new Error(`Disallowed any type in ${file}`); if(/TODO|mock page/i.test(text)) throw new Error(`Incomplete marker found in ${file}`); }
console.log(`Type contract check passed for ${sources.length} TypeScript files.`);
