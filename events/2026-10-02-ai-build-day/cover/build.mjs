/**
 * Renders cover.html to every size the event listings need.
 *   node build.mjs
 * Chromium comes from PLAYWRIGHT_BROWSERS_PATH; no download needed.
 */
// Resolve playwright whether it is local or installed globally. NODE_PATH is
// ignored for ESM, and the global build is CJS, so unwrap `.default` too.
const pw = await (async () => {
  for (const spec of ['playwright',
       process.env.PLAYWRIGHT_MODULE || '/opt/node22/lib/node_modules/playwright/index.js']) {
    try { const m = await import(spec); return m.chromium ? m : m.default; } catch {}
  }
  throw new Error('playwright not found — npm i -D playwright');
})();
const { chromium } = pw;

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'out');
mkdirSync(out, { recursive: true });

const TARGETS = [
  // name,                       w,    h,    bodyClass, why
  ['cover-1920x1080',           1920, 1080, '',    'master 16:9 — LinkedIn + Luma + Meetup'],
  ['cover-853x480',              853,  480, '',    '16:9 at 480px, as requested'],
  ['cover-1200x675-facebook',   1200,  675, '',    'Facebook event / OG card'],
  ['cover-1080x1080-square',    1080, 1080, 'sq',  'texting, IG feed, WhatsApp'],
  ['cover-1080x1920-story',     1080, 1920, 'por', 'IG / FB stories'],
];

const browser = await chromium.launch();
for (const [name, width, height, cls] of TARGETS) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto('file://' + join(here, 'cover.html'));
  if (cls) await page.evaluate(c => document.body.className = c, cls);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  const file = join(out, name + '.png');
  await page.screenshot({ path: file, type: 'png' });
  await page.close();
  console.log(`${name.padEnd(28)} ${width}x${height}`);
}
await browser.close();
