/**
 * Facebook / Instagram image ads: 3 concepts x 4 placements, from the approved cover layout.
 *   node build-ads.mjs          -> out/ads/<concept>-<size>.png
 * Concept A = the cover (audience-led). B = "not technical". C = outcome-led.
 */
const pw = await (async () => {
  for (const s of ['playwright','/opt/node22/lib/node_modules/playwright/index.js']) {
    try { const m = await import(s); return m.chromium ? m : m.default; } catch {}
  }
  throw new Error('playwright not found');
})();
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';
const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'out', 'ads'); mkdirSync(out, { recursive: true });

const CONCEPTS = {
  'a-audience': {
    h1: ['Dallas', 'Service Trade', 'Owners'], orange: 1,
    deck: 'We pick the <b>2&ndash;3 automations this room needs</b> and build them together. Three hours, in person, no slides.',
    nb: 'You don&rsquo;t need to be technical.',
    ns: 'A laptop, admin access to your own tools, and a paid AI account. That&rsquo;s it.' },
  'b-nottech': {
    h1: ['You Don&rsquo;t', 'Need To Be', 'Technical'], orange: 2,
    deck: 'If you can log into your CRM and your email, <b>you can build what we&rsquo;re building.</b>',
    nb: 'For Dallas service trade owners.',
    ns: 'Bring a laptop and your logins. Leave with an AI automation running in your business.' },
  'c-outcome': {
    h1: ['Leave', 'With It', 'Built'], orange: 1,
    deck: 'One real problem in your business, <b>automated and running by 4 PM.</b> Not a webinar. Not a panel.',
    nb: 'Free 3-hour AI build session.',
    ns: 'For Dallas service trade owners. 20 seats. You demo what you built before you leave.' },
};
// name, w, h, layout class
const SIZES = [
  ['1080x1080-feed',   1080, 1080, 'sq'],
  ['1080x1350-feed45', 1080, 1350, 'sq p45'],
  ['1080x1920-story',  1080, 1920, 'por'],
  ['1200x628-link',    1200,  628, ''],
];
const browser = await pw.chromium.launch();
for (const [cid, c] of Object.entries(CONCEPTS)) {
  for (const [sname, width, height, cls] of SIZES) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(join(here, 'cover-v4.html')).href);
    await page.evaluate(({ c, cls }) => {
      const r = document.documentElement.style;
      r.setProperty('--photo', 'url("photo-group.jpg")'); r.setProperty('--face', 'url("photo-face.jpg")');
      document.body.className = cls;
      const h = document.querySelector('h1');
      h.innerHTML = c.h1.map((t, i) => `<span class="${i === c.orange ? 'o' : 'w'}">${t}</span>`).join('');
      document.querySelector('.deck').innerHTML = c.deck;
      document.querySelector('.nottech b').innerHTML = c.nb;
      document.querySelector('.nottech span').innerHTML = c.ns;
      // ads: drop the proof strip (too small to read in feed), keep the date band
      document.querySelector('.module').style.display = 'none';
      if (cls.includes('p45')) {                       // 4:5 gets a taller photo panel
        document.querySelector('.right').style.minHeight = '46vw';
        document.querySelector('.left').style.paddingTop = '4vw';
      }
    }, { c, cls });
    await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(200);
    await page.screenshot({ path: join(out, `${cid}-${sname}.png`), type: 'png' });
    await page.close();
    console.log(`${cid}-${sname}`);
  }
}
await browser.close();
