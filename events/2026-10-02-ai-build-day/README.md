# AI Build Session — Dallas
**Friday, October 2, 2026 · 1:00–4:00 PM CT · North Dallas · Free · 20 seats**

Everything for the event is in this folder. Start with the three sections below,
then work the checklist in `run-of-show/organizer-runbook.md`.

---

## 1. Which platform — the answer

**Luma is the hub. Everything else is a billboard that points at it.**

You asked whether you need Luma. For this event, yes — not because Luma is magic, but
because you're running a free event across four channels in four days, and the thing
that will actually sink you is having your attendee list in three places on Thursday
afternoon when you need to text everyone an address.

| Platform | Role | Why |
|---|---|---|
| **Luma** | **The hub. Registration lives here.** | Free for free events. Clean short link that survives a text message without getting carrier-filtered. Required registration questions (your no-show filter). Manual approval. Waitlist. Reminder emails. CSV export. Mobile check-in. It does the one job you need: **one list**. |
| **LinkedIn Event** | Billboard → external registration link to Luma | This is where your actual buyers are. The LinkedIn *post* is what travels; the event page just holds details and gives you the bulk-invite tool for DFW connections. |
| **Facebook Event** | Billboard → ticket link to Luma | The event page itself will do close to nothing in four days. **The local groups will.** That's the real Facebook play. Create it from your Page, not your profile. |
| **Text messages** | Your highest-converting channel, by far | A personal text to a warm contact beats every algorithm here by 10–30x. Send people to the Luma link. `promo/sms-blast.md` |
| **Meetup** | **Skip it this week** | Requires a paid Organizer subscription, and a brand-new group four days out has effectively zero reach. Meetup audiences plan 1–3 weeks ahead. **If you make this monthly, create the group next week and list November with three weeks of runway** — then it becomes your best recurring channel in DFW. Copy is in `listings/meetup-event.md` if you want it anyway. |
| **Your own domain** | Supporting page, not registration | You could hand-roll this, but not in four days. There's a shareable brief page in `/d/` (see below) for texting — the RSVP button on it points at Luma. |

**The one trade-off to be aware of:** pointing LinkedIn at an external link costs you
LinkedIn's native attendee list and a little feed distribution. That's a real cost.
I'd still pay it, because two lists on a four-day timeline means somebody doesn't get
the Thursday address text — and that text is the single thing holding your show rate
together on a free event.

---

## 2. Before you publish anything — three find-and-replace

Every file uses these placeholders. Fix all three and the copy is ready to paste.

| Placeholder | Replace with | Deadline |
|---|---|---|
| `[LUMA LINK]` | Your lu.ma URL. Requested slug: `lu.ma/ai-build-dallas` | **Monday — nothing else can start until this exists** |
| `[VENUE]` / `[FULL ADDRESS]` | Venue name + address. Listings say "North Dallas, address to registrants" until then. | **Tuesday** |
| `[LAST NAME]` | Your last name — I only ever found "Chris" in the repo | Before publishing the bio |

Also swap `HOSTED BY CHRIS` in `cover/cover.html` if you want your full name on the
cover art, then re-run `node cover/build.mjs`.

---

## 3. Order of operations

**Monday:** Create the Luma event first. Then LinkedIn event, then Facebook event, both
pointed at Luma. Start calling venues — that's the long pole. Text your best 20 tonight,
personalized, one at a time.

**Tuesday:** LinkedIn post 7:30 AM (link in first comment, not the body). Email 7:00 AM.
Wider text list. Facebook groups. **Lock the venue.**

**Wednesday:** Update all listings with the real venue. Follow-up texts. Send the prep
checklist. **Run your own cold-open build twice, timed.**

**Thursday:** Scarcity post. Email resend. **4:00 PM confirmation text** — this single
message decides your show rate. 8:00 PM, release unconfirmed seats to the waitlist.

**Friday:** 9:30 AM text. Arrive 12:15. Doors 12:40. Start at 1:00 by building something
in front of them with no introduction.

Full detail: `run-of-show/organizer-runbook.md`

---

## 4. What's in here

```
cover/
  cover.html            the cover art, as HTML. Edit here, re-render.
  build.mjs             node build.mjs  →  renders every size
  fonts/                Archivo (OFL), embedded so renders don't need network
  out/
    cover-1920x1080.png          master 16:9 — LinkedIn, Luma, Meetup
    cover-853x480.png            16:9 at 480px, as you asked
    cover-1200x675-facebook.png  Facebook event / link previews
    cover-1080x1080-square.png   texting, Instagram, WhatsApp
    cover-1080x1920-story.png    Instagram / Facebook stories

listings/
  luma-event.md         ← BUILD THIS FIRST. Includes the registration questions.
  linkedin-event.md     setup steps + full description
  facebook-event.md     description + where FB actually pays off (groups)
  meetup-event.md       why to skip it this week, and the copy if you don't

promo/
  sms-blast.md          8 messages: outreach → Thursday confirm → Saturday follow-up
  linkedin-post.md      3 posts + the comment strategy
  email-invite.md       subject lines + plain-text body

run-of-show/
  build-menu.md         all 8 builds: deliverable, stack, what breaks, who it's for
  organizer-runbook.md  minute-by-minute, the kit list, and what to do when it breaks
  prep-checklist.md     what attendees do Wednesday + your Thursday pre-flight

venue/
  venue-brief.md        requirements, the call script, North Dallas options

bio/
  bio.md                four lengths + the 30-second spoken version
```

Plus a shareable one-page brief at `/d/a7f3c91e5b2d4086ca1f7e93/` on
`list.thecommercialjobhunterr.com` — a clean link for texting that isn't a signup wall,
with an RSVP button to Luma.

---

## 5. Decisions I made, and why

**The event is built around the 3:25 demo.** Everything else is scaffolding. Nobody
finishes what they don't have to show, and a free three-hour event with no forcing
function produces twenty people with half-built things and no reason to come back.
If you cut something for time, cut your own talking.

**No slides, and no introduction until 1:12.** You open by building something in front
of them cold. Your credibility comes from the ten minutes of work, not from a bio slide.
This is also why there's no pitch from the front at 3:58 — you'll have had their
attention for three hours and they watched you work. The ones who want to hire you will
find you at 4:01.

**The room votes, top three win.** Twenty individual builds means twenty simultaneous
support tickets and nobody finishes. Three tables means people help each other and you
circulate between three problems instead of twenty. Eight options on the menu (not four)
makes the vote feel real — and the ones that lose tell you what to run next month.

**Free changed the plan.** You gave up price as a filter, so commitment has to come from
somewhere else. Four things replace it:
1. **Required registration questions** on Luma — especially *"What do you want built by
   4pm Friday?"* Nobody who writes a paragraph about their business ghosts you.
2. **Manual approval** of every registration.
3. **A real prep requirement** (paid AI account, your logins, real data). Someone who
   won't set up a $20 account Wednesday was never showing up Friday.
4. **The Thursday 4pm confirmation text** with a hard 8pm deadline and a live waitlist.

That last one is worth more than everything else combined. Free events no-show at
50–70%. That text is what turns 20 registrations into a full room.

**Capacity is 20 and I'd hold that line.** It's the scarcity in every piece of copy, and
it's also just true at three tables. If you get overwhelming demand, run it again in
three weeks rather than putting 40 people in a room where you can't reach everyone.

---

## 6. Open questions

Nothing here blocks you — every file is publishable as-is once you fill the three
placeholders. But these would sharpen it:

1. **Your last name**, for the bio and the cover.
2. **Do you want a co-host or a floating helper?** One extra technical person who can
   unstick people is the difference between 12 finished builds and 18. If you know
   someone, ask them today — they get a free seat and a shoutout.
3. **Photos.** Have someone take them. Saturday's recap post is the single best
   promotion for the next session, and it writes itself if you have pictures.
4. **Is this monthly?** If yes, say so from the front at 3:55 and take names in the
   room — that's the easiest list you'll ever build. It also changes the Meetup answer
   (create the group next week, list November with real runway).
5. **The decision-maker map build (#1) is your business.** I wrote it with an honest
   ceiling: attendees get a real list with work emails in the room, but verified direct
   mobiles at scale is the thing you sell. Being straight about that line converts
   better than blurring it — but confirm you're comfortable with where I drew it.
