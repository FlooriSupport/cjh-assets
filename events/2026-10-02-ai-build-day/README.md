# Dallas Service Trade Owners — Live AI Build Session
**Friday, October 2, 2026 · 1:00–4:00 PM CT · North Dallas · Free · 20 seats**
**Live: https://luma.com/u0yk9gm7**

> **Launching it? Start at `launch/LAUNCH.md`** — the whole week in order, with every send, post and ad.

Everything for the event is in this folder. Read §1 and §2, then work the checklist in
`run-of-show/organizer-runbook.md`.

---

## 1. Which platform — the answer

**Luma is the hub. Everything else is a billboard that points at it.**

You asked whether you need Luma. For this event, yes — not because Luma is magic, but
because you're running a free event across four channels in four days, and the thing
that will sink you is having your attendee list in three places on Thursday afternoon
when you need to text everyone an address.

| Platform | Role | Why |
|---|---|---|
| **Luma** | **The hub. Registration lives here.** | Free for free events. Clean short link that survives a text without carrier filtering. Required registration questions (your no-show filter). Manual approval. Waitlist. Reminder emails. CSV export. Mobile check-in. It does the one job you need: **one list**. |
| **LinkedIn Event** | Billboard → external registration link to Luma | Where your buyers are. The LinkedIn *post* is what travels; the event page holds details and gives you bulk-invite for DFW connections. |
| **Facebook Event** | Billboard → ticket link to Luma | The event page itself does close to nothing in four days. **The local groups do.** That's the real Facebook play. Create it from your Page, not your profile. |
| **Text messages** | Your highest-converting channel, by far | A personal text to a warm contact beats every algorithm here by 10–30x. `promo/sms-blast.md` |
| **Your own brief page** | Supporting link, not registration | A clean page to text people that isn't a signup wall — see §4. Its button goes to Luma. |
| **Meetup** | **Skip it this week** | Needs a paid Organizer subscription, and a brand-new group four days out has effectively zero reach. **If you make this monthly, create the group next week and list November with three weeks of runway** — then it becomes your best recurring channel in DFW. Copy is in `listings/meetup-event.md` if you want it anyway. |

**The one trade-off:** pointing LinkedIn at an external link costs you LinkedIn's native
attendee list and a little feed distribution. I'd still pay it — two lists on a four-day
timeline means somebody doesn't get the Thursday address text, and that text is the
single thing holding your show rate together on a free event.

---

## 2. Before you publish — two find-and-replace

| Placeholder | Replace with | Deadline |
|---|---|---|
| `https://luma.com/u0yk9gm7` | Your lu.ma URL. Live: **https://luma.com/u0yk9gm7** | **Monday — nothing else can start until this exists** |
| `[VENUE]` / `[FULL ADDRESS]` | Venue name + address. Listings say "North Dallas, address to registrants" until then. | **Tuesday** |

Everything else is final: **Yousef Okasheh**, **(469) 277-9385**, and the three proof
points are all sourced and in place.

### Order of operations

**Monday:** Create the Luma event first. Then the LinkedIn and Facebook events, both
pointed at Luma. Start calling venues — the long pole. Text your best 20 tonight,
personalized, one at a time.

**Tuesday:** LinkedIn post 7:30 AM (link in first comment, not the body). Email 7:00 AM.
Wider text list. Facebook groups. **Lock the venue.**

**Wednesday:** Update all listings with the real venue. Follow-up texts. Send the prep
checklist. **Run your own cold-open build twice, timed.**

**Thursday:** Scarcity post. Email resend. **4:00 PM confirmation text** — this single
message decides your show rate. 8:00 PM, release unconfirmed seats to the waitlist.

**Friday:** 9:30 AM text. Arrive 12:15. Doors 12:40. Start at 1:00 by building something
in front of them with no introduction.

---

## 3. What's in here

```
launch/
  LAUNCH.md             ← the week in order: every send, post and ad
  ghl-sms.md            SMS copy, the auto-reply workflow, the waves, Thursday confirm
  facebook-ads.md       campaign spec + copy; creatives in cover/out/ads/
  linkedin_post.py      posts to LinkedIn via Unipile from your Mac

cover/
  cover-v4.html         the approved cover art, as HTML. Edit here, re-render.
  cover-v3.html         previous drafts, kept for the approval trail
  cover-v1.html
  build.mjs             node build.mjs --full  →  renders every size
  build-ads.mjs         node build-ads.mjs     →  12 Facebook ad creatives in out/ads/
  photo-group.jpg       work-session shot, cropped to the panel
  photo-face.jpg        headshot, cropped square for the signature disc
  photo.jpg             headshot, cropped tall (used by the v3 layout)
  fonts/                Archivo (OFL), embedded so renders need no network
  out/
    cover-1920x1080.png          master 16:9 — LinkedIn, Luma
    cover-853x480.png            16:9 at 480px, as you asked
    cover-1200x675-facebook.png  Facebook event / link previews
    cover-1080x1080-square.png   texting, Instagram, WhatsApp
    cover-1080x1920-story.png    Instagram / Facebook stories

listings/
  luma-event.md         ← BUILD THIS FIRST. Settings, registration questions, full description.
  linkedin-event.md     setup steps + full description
  facebook-event.md     description + where FB actually pays off (groups)
  meetup-event.md       why to skip it this week, and the copy if you don't

promo/
  sms-blast.md          8 messages: outreach → Thursday confirm → Saturday follow-up
  linkedin-post.md      3 posts + the comment strategy
  email-invite.md       subject lines + plain-text body

run-of-show/
  build-menu.md         all 8 builds: deliverable, stack, what breaks, who it's for
  organizer-runbook.md  minute-by-minute, the kit list, what to do when it breaks
  prep-checklist.md     what attendees do Wednesday + your Thursday pre-flight

venue/
  venue-brief.md        requirements, the call script, North Dallas options

bio/
  bio.md                four lengths, the 30-second spoken version, and every
                        proof point with its source
```

---

## 4. The shareable brief page

`/d/7b3f9c1e5a2d6084cf1a7e93/` on `list.thecommercialjobhunterr.com` — the full event
brief on your own domain, in CJH branding, with the cover, the run of show, the
non-technical section, and a **Save my seat** button.

Use it as the link you text people who want detail before they commit. Swap
`https://luma.com/u0yk9gm7` in that file for the button to work. It carries the same GA4 / Google Ads
/ LinkedIn tags as your other asset pages, so event traffic lands in the properties you
already retarget from.

**One caveat:** the host serves `robots.txt` with `Disallow: /`, and some link
previewers respect that — so a texted link to this page may render as a bare URL
rather than a card. The Luma link previews properly, so lead with Luma and use this
page as the "read more" link.

---

## 5. Decisions, and why

**The event is built around the 3:25 demo.** Everything else is scaffolding. Nobody
finishes what they don't have to show, and a free three-hour event with no forcing
function produces twenty people with half-built things and no reason to come back. If
you cut something for time, cut your own talking.

**No slides, and no introduction until 1:12.** You open by building something cold in
front of them. Your credibility comes from the ten minutes of work, not a bio slide.
Same reason there's no pitch from the front at 3:58 — they'll have watched you work for
three hours. The ones who want to hire you will find you at 4:01.

**The room votes, top 2–3 win.** Twenty individual builds means twenty simultaneous
support tickets and nobody finishes. Two or three tables means people help each other
and you circulate between a few problems instead of twenty. Eight options on the menu
makes the vote feel real — and the ones that lose tell you what to run next month.

**Free changed the plan.** You gave up price as a filter, so commitment comes from
elsewhere. Four things replace it:
1. **Required registration questions** on Luma — especially *"What do you want built by
   4pm Friday?"* Nobody who writes a paragraph about their business ghosts you.
2. **Manual approval** of every registration.
3. **A real prep requirement.** Someone who won't set up a $20 account Wednesday was
   never showing up Friday.
4. **The Thursday 4pm confirmation text** with a hard 8pm deadline and a live waitlist.

That last one is worth more than the rest combined. Free events no-show at 50–70%. That
text is what turns 20 registrations into a full room.

**Capacity is 20 and I'd hold it.** It's the scarcity in every piece of copy, and it's
true at two or three tables. If demand overwhelms, run it again in three weeks rather
than putting 40 people in a room you can't reach.

**"You don't need to be technical" is doing real work in this copy.** The honest version
— *the people who struggle are never the non-technical ones, they're the ones who can't
get into their own systems* — reframes the barrier as "know your logins," which is both
true and fixable before Friday. It also tells people with vendor-controlled phone
systems to sort that out on Monday instead of discovering it at 2pm Friday.

---

## 6. Still open

1. **Venue.** The only true blocker. `venue/venue-brief.md` has the requirements, the
   call script and the four questions that decide it. The highest-percentage play is a
   title company or commercial insurance office conference room — you already know
   those people, they're free, and one person can say yes on a Monday.
2. **A higher-res work-session photo.** The one on the cover is 728×408, about 2× under
   what a 1920 cover wants. The halftone hides most of it, but it's the softest element
   on the page. Drop a bigger one in as `cover/photo-group.jpg` and re-run
   `node cover/build.mjs --full`.
3. **A co-host or floating helper.** One extra technical person who can unstick people
   is the difference between 12 finished builds and 18. Ask today — free seat and a
   shoutout.
4. **Photos on the day.** Saturday's recap post is the best promotion for the next
   session, and it writes itself if someone took pictures.
5. **Is this monthly?** If yes, say so at 3:55 and take names in the room. It also
   changes the Meetup answer — create the group next week and list November with real
   runway.
6. **Housekeeping, not for Friday:** your external growth-plan PDF still claims
   "1,000+ service businesses helped by Founder" while everything here says 900+. Worth
   bringing that document in line so the two never appear side by side.
