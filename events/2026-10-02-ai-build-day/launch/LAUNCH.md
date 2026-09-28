# LAUNCH — the whole thing, in order

**Event is live: https://luma.com/u0yk9gm7** · Fri Oct 2 · 1–4 PM · North Dallas · free · 20 seats
Every file in the kit already carries that link. Nothing below needs editing before you use it.

Total hands-on time for you: about **2.5 hours across the week**, most of it Monday night.
Everything else is copy-paste from the files named.

---

## Monday night (tonight) — 75 min

| # | Do | Where | Min |
|---|---|---|---|
| 1 | **Check the GHL number is A2P-registered** and text yourself once | GHL → Settings → Phone Numbers | 3 |
| 2 | **Build the auto-reply workflow** (yes → Luma link; anything else → notify you) | `launch/ghl-sms.md` §2 | 8 |
| 3 | **Wave 1 SMS** — tag the Texas Tier-1 contacts, bulk-send the opener | `launch/ghl-sms.md` §3 | 10 |
| 4 | **LinkedIn Event** — create, external registration → Luma, cover `cover/out/cover-1920x1080.jpg` | `listings/linkedin-event.md` | 10 |
| 5 | **Facebook Event** — from the CJH Page, ticket link → Luma, cover `cover-1200x675-facebook.jpg` | `listings/facebook-event.md` | 10 |
| 6 | **Venue calls** — start tonight, this is the long pole | `venue/venue-brief.md` | 20 |
| 7 | **Text your best 20** by hand, personalised | `promo/sms-blast.md` version B | 15 |

Skip Meetup. `listings/meetup-event.md` explains why (paid, zero reach in four days).

## Tuesday — 60 min

| # | Do | Where | Min |
|---|---|---|---|
| 8 | **LinkedIn post A** at 7:30 AM, link in first comment ~45 min later | `promo/linkedin-post.md`, or `python3 launch/linkedin_post.py --account <id> --go` from your Mac (Unipile) | 5 |
| 9 | **Email wave** — import the DFW verified-email list, filter tag, Bulk Email | `promo/email-invite.md` body · GHL → Contacts → Bulk Actions → Send Email | 15 |
| 10 | **Wave 2 SMS** at 11 AM — only after wave 1 has produced replies | `launch/ghl-sms.md` §3 | 15 |
| 11 | **Facebook ads live** — 1 campaign, 6 ads, $50/day, all 12 creatives are rendered | `launch/facebook-ads.md` · `cover/out/ads/` | 25 |
| 12 | **Post in 3–5 DFW groups** — read each group's promo rules first | `listings/facebook-event.md` bottom | 10 |
| 13 | **Lock the venue** — get it in writing (a text counts) | `venue/venue-brief.md` | — |

## Wednesday — 30 min

| # | Do | Where |
|---|---|---|
| 14 | Update Luma / LinkedIn / Facebook with the real venue | Luma → Edit |
| 15 | Wave 1 follow-up to non-responders (not wave 2) | `launch/ghl-sms.md` §3 |
| 16 | Send the prep checklist to everyone registered | `run-of-show/prep-checklist.md` · Luma → Guests → Email |
| 17 | DM everyone who reacted or commented on the LinkedIn post | "Saw you reacted — want me to hold you a seat?" |
| 18 | Approve pending Luma registrations; reply to thin answers | Luma → Guests → Pending |
| 19 | **Run your cold-open build twice, timed.** | `run-of-show/organizer-runbook.md` |
| 20 | Check ad CTR/CPC; pause anything under 1% CTR | `launch/facebook-ads.md` "How to read it" |

## Thursday — the day that decides your show rate

| # | Do | Where |
|---|---|---|
| 21 | LinkedIn post C (scarcity) + email resend to non-openers, subject `re: Friday` | `promo/linkedin-post.md`, `promo/email-invite.md` |
| 22 | **4:00 PM — confirmation text** to registrants, hard 8 PM deadline | `launch/ghl-sms.md` §4 |
| 23 | 8:00 PM — release unconfirmed seats, admit from waitlist, text them | Luma |
| 24 | Print: 20 menu sheets, 40 index cards, parking sign. Pack the kit. | `run-of-show/organizer-runbook.md` |

## Friday

| # | Do |
|---|---|
| 25 | 9:30 AM text to confirmed. 11 AM: ads off. |
| 26 | 12:15 arrive. 12:40 doors. **1:00 start by building something in front of them, no intro.** |
| 27 | 3:25 demos. 3:50 keep-it-alive. 4:00 stay. |
| 28 | 4:05 PM: turn the auto-reply workflow off. |

## Saturday
Export Luma attendees → GHL tag `event-oct2-attended`. Personal text to each naming what they built
(`promo/sms-blast.md` H). LinkedIn recap post with photos. Note which builds won the vote — that's
November's agenda, and the moment to create the Meetup group with three weeks of runway.

---

## What's where

```
launch/
  LAUNCH.md            ← this
  ghl-sms.md           SMS copy, auto-reply workflow (click path), waves, Thursday confirm
  facebook-ads.md      campaign spec, 6 ads, 3 primary texts, headline bank, how to read it
  linkedin_post.py     posts Post A to LinkedIn via Unipile from your Mac (keys already there)

cover/out/
  cover-*.png / .jpg   the approved cover in 5 sizes (LinkedIn/Luma 1920x1080, FB 1200x675, square, story)
  ads/                 12 ad creatives: concepts A/B/C x feed 1:1, feed 4:5, story 9:16, link 1.91:1

listings/   Luma (live), LinkedIn, Facebook, Meetup — paste-ready, link already in
promo/      SMS sequence (personal), 3 LinkedIn posts, email invite
run-of-show/  build menu, organizer runbook (minute by minute + kit), attendee prep
venue/      requirements, call script, North Dallas options
bio/        four lengths + spoken version, each claim sourced
```

## Numbers to expect
Texts: 187 warm-ish + 957 cold → 30–55 yeses → 18–32 registrations.
Email ~900 → 4–8. LinkedIn + groups + ads → 8–15. **Total 30–55 registrations for 20 seats.**
Thursday's confirm text loses about a third; the waitlist backfills. Room of 16–20.

## What only you can do (nothing here is automatable from this side)
- Press Send in GHL (waves 1, 2, follow-up, confirm) — ~4 sends total.
- Create the LinkedIn and Facebook events and the ad campaign (no API access to any of them).
- Pick the venue.
- Reply to the "who is this?" texts within the hour. That's where half the seats come from.
