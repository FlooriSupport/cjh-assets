// 10 layout drafts at 1080x1080 for review, plus a contact sheet. node build-ads-v2.mjs
const pw = await (async () => { for (const s of ['playwright','/opt/node22/lib/node_modules/playwright/index.js']) { try { const m = await import(s); return m.chromium ? m : m.default; } catch {} } })();
import { fileURLToPath, pathToFileURL } from 'node:url'; import { dirname, join } from 'node:path'; import { mkdirSync, writeFileSync } from 'node:fs';
const here = dirname(fileURLToPath(import.meta.url)); const out = join(here, 'drafts'); mkdirSync(out, { recursive: true });
const V = [
 // --- the current ad, made readable: three text scales ---
 { id:'01-cover-s1', cls:'ink s1', eyebrow:'FREE · LIVE · IN PERSON', h1:'Dallas<br><em>Service Trade</em><br>Owners', sub:'3-hour AI workshop. <b>You leave with it built.</b>', strip:false, free:false },
 { id:'02-cover-s2-bigger', cls:'ink s2', eyebrow:'FREE · LIVE · IN PERSON', h1:'Dallas<br><em>Trades</em><br>Owners', sub:'', strip:false, free:false },
 { id:'03-cover-s3-photo', cls:'ink s3 hasstrip', eyebrow:'FREE · LIVE · IN PERSON', h1:'Dallas<br><em>Service Trade</em><br>Owners', sub:'3-hour AI workshop. <b>You leave with it built.</b>', strip:true, free:true },
 // --- plain white / black "attention" ---
 { id:'04-white-attention', cls:'white s3', eyebrow:'Attention', h1:'Dallas trades &amp;<br>service business<br><em>owners</em>', sub:'Free 3-hour live AI workshop. <b>Walk out with it running.</b>', strip:false, free:false },
 { id:'05-black-attention', cls:'black s3', eyebrow:'Attention', h1:'Dallas trades &amp;<br>service business<br><em>owners</em>', sub:'Free 3-hour live AI workshop. <b>Walk out with it running.</b>', strip:false, free:false },
 // --- ICP callouts, from the pool: biggest and hardest-worked trades ---
 { id:'06-white-roofers', cls:'white s1', eyebrow:'Dallas · Fort Worth', h1:'<em>Roofers:</em><br>stop losing the calls you miss', sub:'Free 3-hour AI workshop. <b>Build the fix Friday.</b>', strip:false, free:false },
 { id:'07-black-electrical', cls:'black s3', eyebrow:'Dallas · Fort Worth', h1:'<em>Electrical</em> contractors',  sub:'Free 3-hour AI workshop for owners. <b>Leave with it built.</b>', strip:false, free:false },
 { id:'08-white-hvac', cls:'white s3', eyebrow:'Dallas · Fort Worth', h1:'<em>HVAC</em> &amp;<br>plumbing owners', sub:'Missed calls, quotes, follow-up. <b>Automate one Friday.</b>', strip:false, free:false },
 { id:'09-black-concrete', cls:'black s3', eyebrow:'Dallas · Fort Worth', h1:'<em>Concrete,</em> paving &amp; sitework', sub:'Free 3-hour AI workshop. <b>Leave with it built.</b>', strip:false, free:false },
 { id:'10-white-facility', cls:'white s3', eyebrow:'Dallas · Fort Worth', h1:'<em>Facility</em> services &amp; landscaping', sub:'Free 3-hour AI workshop. <b>Leave with it built.</b>', strip:false, free:false },
];
const b = await pw.chromium.launch();
for (const v of V) {
  const p = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  await p.goto(pathToFileURL(join(here, 'ads-v2.html')).href);
  await p.evaluate(v => { document.body.className = v.cls;
    document.getElementById('eyebrow').innerHTML = v.eyebrow; document.getElementById('h1').innerHTML = v.h1;
    const s = document.getElementById('sub'); s.innerHTML = v.sub; s.hidden = !v.sub;
    document.getElementById('strip').hidden = !v.strip; document.getElementById('free').hidden = !v.free; }, v);
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150);
  await p.screenshot({ path: join(out, v.id + '.png') }); await p.close(); console.log(v.id);
}
await b.close();
