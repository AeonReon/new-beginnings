#!/usr/bin/env node
// check-videos.mjs — verify every curated tradition video in assets/videos-data.js.
//
// Videos rot: they go private, get deleted, get region-locked, or the creator
// turns embedding off. A dead embed is worse than no embed, because the page
// still looks fine until a parent presses play.
//
// Checks each id for: still public, still embeddable, and refreshes the real
// view count. No API key needed.
//
//   node scripts/check-videos.mjs           report only
//   node scripts/check-videos.mjs --write   also update the `views` numbers
//
// Exits 1 if anything is broken, so it can be wired to a cron later.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'assets', 'videos-data.js');
const WRITE = process.argv.includes('--write');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const src = fs.readFileSync(DATA, 'utf8');
const window = {};
new Function('window', src)(window);

async function check(id) {
  const r = await fetch(`https://www.youtube.com/watch?v=${id}`, {
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-GB,en;q=0.9' }
  });
  if (!r.ok) return { ok: false, reason: `HTTP ${r.status}` };
  const html = await r.text();

  const status = html.match(/"status":"(\w+)"/)?.[1];
  if (status && status !== 'OK') {
    return { ok: false, reason: html.match(/"reason":\{"simpleText":"(.*?)"/)?.[1] || status };
  }
  if (/"playableInEmbed":false/.test(html)) return { ok: false, reason: 'embedding disabled by the creator' };

  return { ok: true, views: Number(html.match(/"viewCount":"(\d+)"/)?.[1] || 0) };
}

let broken = 0, updated = 0, out = src;

for (const [tradition, v] of Object.entries(window.VIDEOS)) {
  const res = await check(v.id);
  if (!res.ok) {
    broken++;
    console.log(`  BROKEN  ${tradition.padEnd(20)} ${v.id}  ${v.channel}\n          → ${res.reason}`);
    continue;
  }
  const drift = v.views ? Math.round(((res.views - v.views) / v.views) * 100) : 0;
  console.log(`  ok      ${tradition.padEnd(20)} ${String(res.views).padStart(9)} views  ${drift >= 0 ? '+' : ''}${drift}%  ${v.channel}`);
  if (WRITE && res.views && res.views !== v.views) {
    out = out.replace(new RegExp(`(id: '${v.id}',[\\s\\S]*?views: )\\d+`), `$1${res.views}`);
    updated++;
  }
}

if (WRITE && updated) { fs.writeFileSync(DATA, out); console.log(`\nrefreshed ${updated} view counts`); }
console.log(broken ? `\n${broken} broken — fix before deploying.` : `\nAll ${Object.keys(window.VIDEOS).length} videos live and embeddable.`);
process.exit(broken ? 1 : 0);
