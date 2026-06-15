import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
export function files(dir, exts){ const out=[]; for(const name of readdirSync(dir)){ if(['.git','node_modules','.next'].includes(name)) continue; const p=join(dir,name); const s=statSync(p); if(s.isDirectory()) out.push(...files(p,exts)); else if(exts.some(e=>p.endsWith(e))) out.push(p); } return out; }
export function assertNoToken(token){ const offenders=files('src',['.ts','.tsx','.css']).filter(f=>readFileSync(f,'utf8').includes(token)); if(offenders.length) throw new Error(`Forbidden token ${token} in ${offenders.join(', ')}`); }
export function assertPath(path){ if(!existsSync(path)) throw new Error(`Missing required path: ${path}`); }
