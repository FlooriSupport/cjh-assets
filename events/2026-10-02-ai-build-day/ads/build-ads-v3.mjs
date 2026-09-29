const pw = await (async () => { for (const s of ['playwright','/opt/node22/lib/node_modules/playwright/index.js']) { try { const m = await import(s); return m.chromium ? m : m.default; } catch {} } })();
import { fileURLToPath, pathToFileURL } from 'node:url'; import { dirname, join } from 'node:path'; import { mkdirSync, rmSync } from 'node:fs';
const here = dirname(fileURLToPath(import.meta.url)); const out = join(here, 'drafts-v3'); rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
const EYE = 'North Dallas · <b>Live &amp; in person</b> · Free';
const WHO_A = 'Dallas<br><em>Service Trade</em><br>Owners';
const WHO_B = 'Dallas Trades &amp;<br>Service Business<br><em>Owners</em>';
const WHAT = (slogan) => `Free 3-hour live AI workshop.<em>${slogan}</em>`;
const V = [
 { id:'01-ink-A-running',        cls:'s1',            who:WHO_A, co:WHAT('Walk out with it running.') },
 { id:'02-ink-A-photo-strip',    cls:'s2 hasstrip',   who:WHO_A, co:WHAT('Walk out with it running.'), strip:true },
 { id:'03-ink-A-photo-bleed',    cls:'s1',            who:WHO_A, co:WHAT('Walk out with it running.'), bleed:true },
 { id:'04-white-B-running',      cls:'white s2',      who:WHO_B, co:WHAT('Walk out with it running.') },
 { id:'05-black-B-running',      cls:'black s2',      who:WHO_B, co:WHAT('Walk out with it running.') },
 { id:'06-ink-A-automate',       cls:'s1',            who:WHO_A, co:WHAT('Automate one thing Friday.') },
 { id:'07-white-A-buildthefix',  cls:'white s1',      who:WHO_A, co:WHAT('Build the fix Friday.') },
 { id:'08-black-workshop-first', cls:'black s2',      who:'<em>Live AI</em><br>Workshop for<br>Dallas Trades', co:'Owners &amp; operators only. Free, 3 hours, in person.<em>Walk out with it running.</em>' },
 // --- pain call-outs, broad ---
 { id:'09-ink-pain-catchup',     cls:'s2',            who:'<em>Finally</em><br>catch up<br>on AI.',              co:'Free 3-hour live workshop for Dallas service trade owners.<em>Walk out with it running.</em>' },
 { id:'10-white-pain-setup',     cls:'white s2',      who:'<em>Finally</em><br>get AI set up<br>in your business.', co:'Free 3-hour live workshop for Dallas service trade owners.<em>In person. Done by 4 PM.</em>' },
 { id:'11-black-pain-lookinto',  cls:'black s2',      who:'Stop meaning to<br><em>&ldquo;look into AI.&rdquo;</em>', co:'Free 3-hour live workshop for Dallas service trade owners.<em>Build it Friday.</em>' },
 { id:'12-ink-pain-inbox',       cls:'s2',            who:'Your inbox,<br>your calls,<br>your quotes: <em>handled.</em>', co:'Free 3-hour live AI workshop for Dallas service trade owners.<em>Walk out with it running.</em>' },
];
const b = await pw.chromium.launch();
for (const v of V) {
  const p = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  await p.goto(pathToFileURL(join(here, 'ads-v3.html')).href);
  await p.evaluate(v => { document.body.className = v.cls;
    document.getElementById('eyebrow').innerHTML = v.eye; document.getElementById('h1').innerHTML = v.who;
    document.getElementById('co').innerHTML = v.co;
    document.getElementById('strip').hidden = !v.strip; document.getElementById('bleed').hidden = !v.bleed; }, { ...v, eye: EYE });
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150);
  await p.screenshot({ path: join(out, v.id + '.png') }); await p.close(); console.log(v.id);
}
await b.close();
