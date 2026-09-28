# The build menu

Eight options. The room votes at 1:15, top three win, everyone joins one of the three.
Three tables, roughly 5–7 people each.

**Why vote instead of letting everyone do their own thing:** one person per build means
you're running 20 support tickets simultaneously and nobody finishes. Three tables means
people help each other, you circulate between three problems instead of twenty, and the
person two seats over has already hit the error you're about to hit.

**Why eight and not four:** the vote has to feel real. If the menu is short, people
suspect you already decided. Eight also means the two or three that lose tell you what
to run next month.

---

## 01 · The Decision-Maker Map
**Deliverable at 3:25:** a spreadsheet of 100+ named people in their market — name,
title, company, city, and as much contact data as we can verify in the room.

**Stack:** Google Maps / Apollo free tier for the raw company set → Claude or ChatGPT
for ICP definition and title filtering → a spreadsheet → enrichment for emails.

**The real work isn't the scraping, it's the ICP.** Most owners describe their customer
in a way no filter can act on. Twenty minutes of "who specifically, by title, at what
size company, in what zip codes" is what makes the rest work. That's the part they
can't get from a YouTube video.

**Be straight with them about the ceiling:** work emails at decent match rates are
achievable in the room. **Verified direct mobiles are not** — that's the part that takes
real data infrastructure, and it's literally your business. Say so plainly. "You'll get
a real list today. If you want the version with direct mobiles on 5,000 of them instead
of 100, that's what I do for a living and we can talk after." That's an honest ceiling
and it sells better than pretending.

**Best fit:** anyone doing B2B or commercial. Your highest-value table.

---

## 02 · Missed Call → Text Back in 30 Seconds
**Deliverable:** they call their own business line, don't answer, and their phone buzzes
with a real text 30 seconds later.

**Stack:** GoHighLevel if they have it (most local service businesses do) → otherwise
OpenPhone, Twilio + a no-code automation, or their existing phone system's webhook.

**Highest ROI-to-effort ratio on the menu, by a mile.** A home services business missing
20 calls a week at a $400 average job is leaving real money in voicemail. This one is
genuinely finishable in 90 minutes and the demo is dramatic — they call, they hang up,
the room watches the text arrive.

**What breaks:** carrier registration (A2P 10DLC). If their number isn't registered,
messages get filtered silently. Check this at 1:35, not at 3:15. If they're unregistered,
build it anyway and have them start registration in the room — it takes days to approve.

**Best fit:** home services, contractors, anyone with a phone that rings.

---

## 03 · Inbound Lead → Real Reply in 60 Seconds
**Deliverable:** a form fill or inbound email triggers a personalized reply — not a
"we received your message" autoresponder, an actual reply that references what they
asked about and offers two specific times.

**Stack:** their form or inbox → n8n / Make / Zapier → Claude or ChatGPT API → send →
calendar link.

**The whole build is the prompt.** Anyone can wire the automation. What makes it not
feel like a robot is a prompt that's been fed their actual voice — five real replies
they've sent, pasted in as examples. Push every person at this table to do that before
they write a single automation step.

**What breaks:** it sends garbage on the edge cases. Build a rule: if the inbound message
is under 15 words or the AI's confidence is low, send a short human-sounding holding
reply instead of a confident wrong one. Teach them to design for the bad case.

**Best fit:** anyone with a contact form that currently goes to an inbox nobody watches.

---

## 04 · Notes In → Finished Proposal Out
**Deliverable:** they paste or dictate their messy site-visit notes, and get back a
branded proposal in their format, in their language, with their pricing structure.

**Stack:** Claude Project or Custom GPT loaded with their last 5 real proposals →
a Google Doc template → optional automation to fill and export.

**This is the one people underestimate and then love.** Owners who spend Saturday
writing proposals get their Saturdays back. The build is mostly about feeding it
their actual past proposals so the output sounds like them, not like ChatGPT.

**What breaks:** pricing. Never let the AI calculate or invent a price. Structure it so
pricing comes from their own table or is left as a blank the human fills. Say this
out loud to the whole room — an AI that hallucinates a number on a customer-facing
proposal is the one failure mode that actually costs money.

**Best fit:** contractors, agencies, consultants, anyone who quotes custom work.

---

## 05 · The Monday 7 AM Opportunity Brief
**Deliverable:** a scheduled email that lands Monday morning listing who in their market
just hired, expanded, moved, posted a relevant job, or raised money — plus a suggested
opening line for each.

**Stack:** job postings / news / permit data / LinkedIn signals → a scheduled automation
→ Claude or ChatGPT to filter and write the brief → email.

**Hardest build on the menu and the most impressive when it lands.** Put your most
technical attendees here. It's also the most likely to be 80% done at 3:25 — which is
fine, as long as it runs once. Set that expectation at the table at 1:35.

**What breaks:** signal quality. Ten great signals beat 200 mediocre ones. Force the
table to narrow to one or two signal types before building anything.

**Best fit:** B2B, commercial services, anyone whose deals come from timing.

---

## 06 · Review Responder
**Deliverable:** every Google review gets a drafted reply in their voice, queued for
one-click approval. Never auto-posted.

**Stack:** Google Business Profile → automation → Claude/ChatGPT with their tone
examples → draft into a queue or an email for approval.

**Easiest finishable build on the menu.** Good for the least technical people in the
room, and good for an owner who wants a confidence win. Also a real business result —
review response rate moves local ranking.

**What breaks:** nothing much, as long as it stays human-approved. Make that a hard rule
at the table. Auto-posting a cheerful AI reply to a furious 1-star review is a genuinely
bad day.

**Best fit:** any local business with a Google profile.

---

## 07 · Voice Note → CRM
**Deliverable:** they talk into their phone for 60 seconds after a site visit and get
back a structured CRM note, a drafted follow-up email, and the next task.

**Stack:** voice memo or a transcription app → automation → Claude/ChatGPT → CRM API
or a spreadsheet.

**The one field people actually adopt**, because it removes work instead of adding a
new tab to check. The demo is great: walk outside, talk into your phone, come back in,
the note is in the CRM.

**What breaks:** CRM API access. Check at 1:35 whether their CRM allows it on their
plan. If not, land it in a Google Sheet — still a real win, and it proves the pattern.

**Best fit:** field sales, contractors, anyone who does site visits.

---

## 08 · The "Where Is My Money Actually Coming From" Analyst
**Deliverable:** they dump a P&L export, ad spend, and job/customer data, and get a
plain-English answer to a question they've never been able to answer quickly.

**Stack:** their exports → Claude or ChatGPT with file analysis → a short written answer
plus one chart.

**No automation to build**, which makes it the fastest path to a real insight — and a
good landing spot for someone who showed up without a technical bone in their body.
The output is a repeatable process, not a running system.

**Serious note, say it out loud at the table:** this is their real financial data.
Cover what goes into a consumer chat tool vs. what doesn't, strip customer names and
account numbers before uploading, and check whether their tool's settings are training
on their inputs. Two minutes of this earns more trust than anything else you'll say
all afternoon.

**Best fit:** owners who feel like they're guessing. Which is most of them.

---

## Running the vote at 1:15

Put all eight on the wall on flip chart paper, numbered. Give everyone **three dot
stickers** — not one. Three votes each spreads the distribution and prevents one loud
person from anchoring the room.

Count out loud. Top three win. If there's a tie for third, you break it — pick the one
that's more finishable, not the one that's more interesting.

**If the vote splits badly** (say, 8 people on one build and 2 on another), collapse the
small one. Tell those two people plainly: "That one's not getting a table today. Join
whichever of the other two is closest and I'll get you 20 minutes one-on-one at the
end." They'll take it, and they'll remember that you did it.
