# GHL — SMS waves, the auto-reply, and the Thursday confirm

Everything sends from GoHighLevel's own bulk actions, so DND, opt-outs (STOP) and your A2P
registration are handled by GHL, not by a script. You press Send.

## 0. The one thing to check first (2 min)
GHL → Settings → Phone Numbers. Confirm the number you'll text from shows **A2P registered /
approved**. If it doesn't, carriers will silently filter a bulk send and you'll never know.
Then send yourself one text from a contact record to confirm it lands.

## 1. The texts

**Opener — waves 1 and 2** (ASCII only on purpose: one curly quote or en-dash flips the message to
UCS-2 and halves the segment size)
```
{{contact.first_name}}, Yousef here w/ Commercial Job Hunters. Free 3hr hands-on AI session for service trade owners this Fri 1-4pm in North Dallas, you leave with it built. Want in?
```
(159 chars, 1 segment.)

**Auto-reply — the workflow sends this on a yes**
```
Here you go - Fri Oct 2, 1-4pm, North Dallas, 20 seats: https://luma.com/u0yk9gm7
Grab one and I'll text you the address Thursday. - Yousef
```

**Follow-up — Wednesday, to non-responders in wave 1 only**
```
{{contact.first_name}} - down to a handful of seats for Friday's AI build session. Yes or no is fine, just want to know whether to hold one.
```

**Thursday 4pm confirm — to Luma registrants** (see §4)
```
{{contact.first_name}}, you're in for tomorrow - AI Build Session, 1-4pm.
[VENUE]
[ADDRESS]
[PARKING]

Reply Y to confirm and I'll hold your seat. Unconfirmed seats go to the waitlist at 8pm tonight.

Bring: laptop + charger, your ChatGPT or Claude login, and logins for whatever we're automating. Bring your password manager, seriously.

See you at 1. - Yousef
```

## 2. The auto-reply workflow (build BEFORE wave 1 goes out — 8 min)

Automation → Workflows → Create → from scratch. Name: **Event Oct 2 — reply to link**.

| Step | Setting |
|---|---|
| Trigger | **Customer Replied** · Reply channel = SMS · **Filter: Contact tag includes `event-oct2`** (so Floori's real customer texts never touch this) |
| If/Else | Branch **YES**: Message body contains any of `yes`, `yeah`, `yep`, `sure`, `interested`, `link`, `send`, `in`, `ok`, `info`, `details`, `where`, `when`. Branch **NO**: everything else. |
| YES → Send SMS | the auto-reply above |
| YES → Add tag | `event-oct2-interested` |
| YES → Internal notification | to you: "{{contact.name}} said yes — {{contact.phone}}" (email or in-app) |
| NO → Add tag | `event-oct2-replied` |
| NO → Internal notification | to you with the message body, so a "who is this?" or "call me" gets a human within minutes |
| Both → Remove from workflow | so a second reply doesn't fire the link twice |

Turn **Allow re-entry OFF**. Publish. Test it: text your own test contact "yes" from your phone
and watch the link come back.

**Why keyword-gate instead of "any reply → link":** "STOP", "no thanks" and "who is this" are all
replies. Sending the link to a "no" reads as a bot, and sending it to a STOP is a TCPA problem.
GHL handles STOP → DND automatically; the NO branch catches the rest for you.

**Note on the reply brain:** `ghl_poll.py` will also see these inbound texts (they're `cjh`-tagged)
and put drafts in `/drafts.html`. That's fine — it doesn't send. The workflow above is the only
thing that answers automatically, and only inside the `event-oct2` tag. This is the first auto-send
you've turned on since the Jul 31 "draft-only everywhere" decision; it's scoped to one tag and one
event, and you can switch it off Friday at 4 PM.

## 3. The waves

**Import → filter → bulk SMS.** Same three clicks each time.

### Wave 1 — Monday evening (~187 contacts, already in GHL)
They're already in GHL from July, tagged `tier-1-call-list`. No import needed.
1. Contacts → filter **Tag = tier-1-call-list** AND **State = Texas** (146) — then a second pass
   with **State is empty** (41) — and **exclude Tag = no-verified-mobile**. Select all → Bulk
   Actions → **Add tag** `event-oct2` and `event-oct2-wave1`.
2. Filter **Tag = event-oct2-wave1** → select all → Bulk Actions → **Send SMS** → paste the opener
   → **schedule 6:30 PM CT** if it's past 7 (nobody wants a cold text at 9 PM).
3. Done. Replies route through the workflow. Anyone who says yes gets the link inside 10 seconds.

### Wave 2 — Tuesday 11 AM (~957 DFW verified mobiles, new to GHL)
1. Source: `~/enrichment-dashboard/exports/DialList_Live.csv` (1,798 rows, carrier-verified
   mobiles, Salesfinity-suppressed, refreshed every 30 min by the cloud job). Open it in Sheets,
   filter **state = Texas/TX** and city in DFW, keep `first_name, last_name, best_mobile, email,
   company_full, city`, add a `Tags` column = `cjh,event-oct2,event-oct2-wave2`. That's ~957 rows.
   Contacts → Import → match on **Phone** · add tags (don't replace).
2. Filter **Tag = event-oct2-wave2** → Bulk SMS → opener. GHL will drip it — at ~1/sec that's
   16 minutes. If GHL's bulk send throttles harder, let it; don't split into two sends.
3. **Do not send wave 2 before wave 1's replies have run for a few hours.** If wave 1 comes back
   with a filtering problem (zero replies from 187 is a filtering problem, not a copy problem),
   you want to know before 957 go out.

### Wednesday — the follow-up (wave 1 only)
Filter Tag = event-oct2-wave1 **AND NOT** event-oct2-replied **AND NOT** event-oct2-interested →
Bulk SMS → follow-up text. Don't follow up wave 2; one touch on cold is enough for an event.

## 4. Thursday 4 PM — confirm the registrants
1. Luma → Manage → Guests → **Export CSV** (approved only).
2. Add a column `Tags` = `cjh,event-oct2,event-oct2-registered`, keep name / phone / email
   (phone comes from the required registration question).
3. Import → match on Phone → add tags. Filter **Tag = event-oct2-registered** → Bulk SMS →
   the confirm text with the venue filled in.
4. 8 PM: in Luma, move anyone who didn't reply Y to the waitlist and admit from it. Text the
   admitted ones the same confirm message individually.

## 5. What to expect
| Wave | Sent | Replies | "Yes" | Registered |
|---|---|---|---|---|
| 1 · Tier-1 (warm-ish, called before) | 187 | 25–40 | 12–20 | 8–14 |
| 2 · DFW dial list (cold) | 957 | 40–80 | 20–35 | 10–18 |
| Email (§ launch/LAUNCH.md) | ~900 | — | — | 4–8 |
| LinkedIn + FB ads + groups | — | — | — | 8–15 |

That over-fills 20 seats, which is the point: Thursday's confirm text will lose a third of them.

## What Claude Code would not do
Two steps were refused by the permission classifier as real-world transactions: writing an
automated sender (`event_blast.py`: tag → upsert → paced API sends → idempotent tags) and
generating the wave CSVs from the dial export. Everything above is the same plan through GHL's
own UI with you pressing Send, which for a one-off is the better version anyway — DND, STOP and
A2P are handled natively. If you want the scripted version for the monthly repeat, add a Bash
permission rule for it and ask again.
