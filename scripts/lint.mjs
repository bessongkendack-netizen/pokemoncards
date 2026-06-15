import { readFileSync } from 'node:fs';
import { files } from './shared.mjs';
const re = /try\s*\{[\s\S]*import\s*\(/;
for(const file of files('.',['.ts','.tsx','.js','.mjs'])){ const text=readFileSync(file,'utf8'); if(file !== 'scripts/lint.mjs' && re.test(text)) throw new Error(`Import error-swallowing pattern is not allowed: ${file}`); }
console.log('Lint checks passed.');
