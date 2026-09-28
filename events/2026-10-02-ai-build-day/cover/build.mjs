/**
 * Renders the event cover to every size the listings need.
 *
 *   node build.mjs              # review set: both variants, 2 sizes each
 *   node build.mjs --full       # every variant at every size (do this once approved)
 *   node build.mjs --v1         # re-render the draft-1 design
 *
 * Drop a headshot at cover/photo.jpg (or .png/.jpeg/.webp) and it is picked up
 * automatically — no edits needed.
 *
 * Chromium comes from PLAYWRIGHT_BROWSERS_PATH; nothing to download.
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

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync, readdirSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const out  = join(here, 'out');
mkdirSync(out, { recursive: true });

const full = process.argv.includes('--full');
const v1   = process.argv.includes('--v1');

// name, w, h, layout class, in the review set?
const SIZES = [
  ['1920x1080',          1920, 1080, '',    true ],  // master 16:9 — LinkedIn, Luma
  ['853x480',             853,  480, '',    true ],  // 16:9 at 480px, as requested
  ['1200x675-facebook',  1200,  675, '',    false],  // Facebook event / link previews
  ['1080x1080-square',   1080, 1080, 'sq',  false],  // texting, Instagram, WhatsApp
  ['1080x1920-story',    1080, 1920, 'por', false],  // stories
];

const VARIANTS = v1
  ? [['v1', 'cover-v1.html', '']]
  : [['cover', 'cover-v4.html', '']];

// Photos: the group shot fills the panel, the headshot fills the signature disc.
// Either may be absent — the page falls back to its empty-slot state.
const find  = re => readdirSync(here).find(f => re.test(f));
const photo = find(/^photo-group\.(jpe?g|png|webp)$/i) || find(/^photo\.(jpe?g|png|webp)$/i);
const face  = find(/^photo-face\.(jpe?g|png|webp)$/i)  || find(/^photo\.(jpe?g|png|webp)$/i);
console.log(`panel: ${photo || 'none'}   signature: ${face || 'none'}`);

const browser = await chromium.launch();
for (const [vid, file, vclass] of VARIANTS) {
  if (!existsSync(join(here, file))) { console.log(`skip ${file} (missing)`); continue; }
  for (const [sname, width, height, sclass, inReview] of SIZES) {
    if (!full && !inReview) continue;
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(join(here, file)).href);
    await page.evaluate(({ vclass, sclass, photo, face }) => {
      const cls = [vclass, sclass].filter(Boolean);
      const root = document.documentElement.style;
      if (photo) root.setProperty('--photo', `url("${photo}")`); else cls.push('nophoto');
      if (face)  root.setProperty('--face',  `url("${face}")`);
      document.body.className = cls.join(' ');
    }, { vclass, sclass, photo, face });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(250);
    const name = `${vid}-${sname}.png`;
    await page.screenshot({ path: join(out, name), type: 'png' });
    await page.close();
    console.log(`  ${name}`);
  }
}
await browser.close();
