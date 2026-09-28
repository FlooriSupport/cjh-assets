# Facebook / Instagram ads — image ads, launch-ready

**Objective:** Traffic → link clicks to `https://luma.com/u0yk9gm7`.
Not "Event responses" (FB RSVPs don't show up), not Leads (Luma is the form).
**Budget:** $50/day, Tue → Fri 11am. ~$150–175 total. Enough to find the winning creative,
not enough to matter if it doesn't.
**Schedule:** Start Tuesday morning. Turn off Friday at 11 AM.

## Campaign structure — one campaign, one ad set, six ads

| Level | Setting |
|---|---|
| Campaign | Traffic · Advantage+ campaign budget ON · $50/day |
| Ad set | Location: **Dallas, TX +25 mi** (drop a pin on Plano/Addison, not downtown). Age **28–60**. All genders. Language English. |
| Detailed targeting | **Interests:** Small business owners, Entrepreneurship, Business owner, Contractor, Home improvement, HVAC, Roofing, Plumbing, Electrical contractor, Landscaping, General contractor. **Behaviors:** Small business owners (FB "Business page admins" is dead; skip it). Turn **Advantage+ audience ON** so it expands from these. |
| Placements | Advantage+ placements (all). The four image sizes cover every slot. |
| Optimisation | Link clicks. Landing page views if you have the pixel on Luma (you don't — Luma won't take your pixel — so link clicks). |
| Ads | 6: **A / B / C creative × two primary texts (1 & 2)**. Same headline per concept. Let Advantage+ creative pick per placement. |

## The six ads

Upload all four sizes of each concept into one ad (Meta lets you assign per placement):
`cover/out/ads/<concept>-1080x1080-feed.png`, `-1080x1350-feed45.png`, `-1080x1920-story.png`, `-1200x628-link.png`

### Concept A — audience-led (the cover: DALLAS SERVICE TRADE OWNERS)
**Headline:** `Free AI Build Session · Fri Oct 2 · North Dallas`
**Description:** `3 hours, in person. Leave with it built. 20 seats.`

### Concept B — objection-led (YOU DON'T NEED TO BE TECHNICAL)
**Headline:** `You don't need to be technical. You need your logins.`
**Description:** `Free 3-hr AI build session for Dallas service trade owners.`

### Concept C — outcome-led (LEAVE WITH IT BUILT)
**Headline:** `Walk in with a problem. Walk out with it automated.`
**Description:** `Fri Oct 2, 1–4 PM, North Dallas. Free, 20 seats.`

### Primary text 1 — the format (use on A and C)
```
Not a webinar. Not a panel. Not another "future of AI" talk.

Friday Oct 2, 1–4 PM, North Dallas. Free. 20 seats.

You walk in with one real problem in your service business — the calls you miss, the proposals eating your Saturday, the list of decision makers you keep meaning to build. At 1:00 I build one live in front of you in ten minutes. At 1:15 the room votes on the 2–3 automations most people need. Then we build them together. At 3:25 everybody demos what they made.

You don't need to be technical. You need a laptop, admin access to your own tools, and a paid ChatGPT or Claude account. Bring your marketing or tech person if you've got one.

For Dallas service trade owners: contractors, roofing, HVAC, plumbing, electrical, flooring, cleaning, landscaping. 20 seats, 20 people building. No observers.
```

### Primary text 2 — the objection (use on B and A)
```
"I'm not technical."

Good. Neither are most of the people who get the most out of this.

Friday Oct 2, 1–4 PM, North Dallas. A free 3-hour AI build session for service trade owners — and the only rule is you leave with something actually running in your business.

The people who struggle at these are never the non-technical ones. They're the ones who can't log into their own systems. If you can get into your CRM and your email, you can build what we're building. Bring your laptop, your logins, a paid ChatGPT or Claude account, and your marketing or tech person if you've got one.

We vote on what to build. We build it together. You demo it before you go. 20 seats.
```

### Primary text 3 — short (swap in Thursday if CPC is high)
```
Dallas service trade owners: free 3-hour AI build session this Friday, 1–4 PM, North Dallas. You bring one problem, you leave with it automated. No slides, no pitch, no coding. 20 seats.
```

## Headline test bank (rotate if A/B/C plateau)
1. `Free AI Build Session · Fri Oct 2 · North Dallas`
2. `You don't need to be technical. You need your logins.`
3. `Walk in with a problem. Walk out with it automated.`
4. `3 hours. No slides. You leave with it working.`
5. `20 seats. Dallas service trade owners only.`
6. `Stop meaning to "look into AI." Build it Friday.`

## How to read it (check Wednesday morning and Thursday morning)
- **CTR (link) under 1%** on a creative after ~1,500 impressions → pause it.
- **CPC over $2.50** overall after Wednesday → swap primary text to #3 and narrow age to 30–55.
- The winner is whichever ad has the most **Luma registrations**, not clicks. Luma shows referrer;
  add `?utm_source=fb&utm_medium=paid&utm_content=A` (B, C) to each ad's URL so you can tell.
- Expect: 8,000–15,000 impressions, 120–250 clicks, 6–15 registrations from ads. Ads are the third
  channel here — texts and LinkedIn will out-convert them. That's fine; ads reach the people the
  lists don't have.

## Retargeting (the thing you asked about)
Your GHL site pixels (GA4, Google Ads, LinkedIn Insight) are already on the brief page at
`list.thecommercialjobhunterr.com/d/7b3f9c1e5a2d6084cf1a7e93/`. **There is no Meta pixel on it,
and there is no Meta pixel anywhere in the repo** — so there's no FB audience to retarget yet.

Worth doing for *next* event, not this one: put the Meta pixel on that page + commercialjobhunter.com,
then run the event ads to a 1% lookalike of site visitors. For Friday, cold interest targeting is
the only option and it's fine at this budget. Don't burn Monday on pixel setup.

## Facebook Event page (separate from ads, 10 minutes)
Create it from the **Commercial Job Hunters Page**, cover `cover/out/cover-1200x675-facebook.jpg`,
ticket link = Luma, description in `listings/facebook-event.md`. Then post it in 3–5 DFW business /
contractor groups Tuesday (read each group's promo rules first). That's where organic Facebook pays
off this week — the event page alone won't.
