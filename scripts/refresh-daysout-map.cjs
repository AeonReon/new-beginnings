#!/usr/bin/env node
// Re-shoot the Days Out NI map hero used on things-to-do.html.
// The map screenshot goes stale as places are added, so run this now and then:
//
//   node scripts/refresh-daysout-map.cjs
//
// It drives the browser-engine's Playwright + Chromium (already installed on the
// Mac mini) to load the real daysoutni.com map, wait for the pmtiles basemap and
// cluster pins to paint, screenshot ONLY the map canvas (no app chrome), and
// write it to assets/pillars/daysout-map.jpg. Requires `sips` (macOS) to convert.

const { execFileSync } = require('child_process');
const path = require('path');

const BE = '/Users/aiautomator/Documents/Documents/APPS/browser-engine/node_modules/playwright';
const OUT_PNG = '/tmp/daysout-map.png';
const OUT_JPG = path.join(__dirname, '..', 'assets', 'pillars', 'daysout-map.jpg');

(async () => {
  const { chromium } = require(BE);
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist', '--no-sandbox']
  });
  const page = await browser.newPage({ viewport: { width: 1000, height: 1040 }, deviceScaleFactor: 2 });
  await page.goto('https://daysoutni.com/?mode=places&view=map', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForSelector('#mapCanvas', { timeout: 30000 });
  await page.waitForTimeout(9000); // let the basemap + cluster pins render
  const el = await page.$('#mapCanvas');
  await el.screenshot({ path: OUT_PNG });
  await browser.close();

  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '86', '--resampleWidth', '1100', OUT_PNG, '--out', OUT_JPG]);
  console.log('Wrote', OUT_JPG);
  console.log('Now bump the sw.js CACHE version and commit + push.');
})().catch(e => { console.error('FAIL', e.message); process.exit(1); });
