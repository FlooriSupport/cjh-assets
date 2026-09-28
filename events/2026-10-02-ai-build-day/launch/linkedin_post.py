#!/usr/bin/env python3
"""Publish the event post to LinkedIn through Unipile, from the Mac that holds the keys.

Uses the same files unipile_poll.py reads:
    ~/.unipile_dsn      e.g. api8.unipile.com:13851
    ~/.unipile_key      X-API-KEY

    python3 linkedin_post.py --list                    # show linked LinkedIn accounts (pick yours)
    python3 linkedin_post.py --account <ID>            # dry run: prints the exact post
    python3 linkedin_post.py --account <ID> --go       # publishes, with the cover image attached

Post text lives in POST below (it is promo/linkedin-post.md, Post A, with the link moved into
the first comment as that file recommends; --comment adds it ~45 min later by hand or via --comment now).
If Unipile returns 4xx on /posts, their endpoint shape has shifted: check
https://developer.unipile.com/reference and adjust FIELD names only — the flow is right.
"""
import json, os, sys, mimetypes, uuid, urllib.request, urllib.error

HERE  = os.path.dirname(os.path.abspath(__file__))
IMAGE = os.path.join(HERE, "..", "cover", "out", "cover-1200x675-facebook.jpg")
LUMA  = "https://luma.com/u0yk9gm7"

POST = """I'm done going to AI events where nobody builds anything.

You know the format. Someone puts up a slide that says "AI won't replace you, but someone using AI will." Everybody nods. Everybody writes down the name of a tool. Nobody opens their laptop. Two weeks later nothing in anyone's business has changed.

So I'm running the opposite of that.

Friday, October 2. 1 to 4 PM. North Dallas. In person. Free. 20 seats.

For Dallas service trade owners. You walk in with one real problem in your business. You walk out with it automated and running.

Here's the whole format:

1:00 - I build one live in front of you, from nothing, in ten minutes. No slides. You see where the bar is.
1:15 - The room votes on the 2-3 automations the most people actually need.
1:30 - You write yours in one sentence: trigger, steps, output. This is the part everyone skips and it's why most people's AI projects die in a browser tab.
1:35 - Build.
2:35 - Build more. By 3:25 it runs end to end, even if it's ugly.
3:25 - Everybody demos. 90 seconds each.

That last part is the whole event. Nobody finishes anything they don't have to show.

You don't need to be technical. You need a laptop, admin access to your own tools, and a paid ChatGPT or Claude account. If you can log into your CRM and your email, you're fine. The people who struggle are never the non-technical ones - they're the ones who can't get into their own systems. Got a marketing person or a tech person? Bring them.

It's free. The price is you finish something and demo it. No observers - 20 seats, 20 people building.

I'm Yousef Okasheh. I run Commercial Job Hunters here in DFW - 6 years in commercial services, 900+ businesses helped, 5,955 decision makers mapped across Dallas-Fort Worth with verified emails and direct mobiles. I also founded Floori. Everything I'm showing you Friday is something I actually run in my own companies.

Link in the comments. If you're a DFW service trade owner and you want one of the 20, take it."""

COMMENT = f"""Seats here: {LUMA}

Free, but I'm approving registrations - there's a question on the form asking what you want built by 4pm. Answer it properly and you're in. 20 seats and I mean 20.

Questions, or you want to know if your build is a fit: (469) 277-9385"""

def secret(p):
    try: return open(os.path.expanduser(p)).read().strip()
    except FileNotFoundError: sys.exit(f"missing {p}")
DSN, KEY = secret("~/.unipile_dsn"), secret("~/.unipile_key")
GO = "--go" in sys.argv

def call(method, path, body=None, files=None):
    url = f"https://{DSN}/api/v1{path}"
    if files:
        b = uuid.uuid4().hex; parts = []
        for k, v in (body or {}).items():
            parts.append(f"--{b}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n{v}\r\n".encode())
        for k, fp in files.items():
            ct = mimetypes.guess_type(fp)[0] or "application/octet-stream"
            parts.append((f"--{b}\r\nContent-Disposition: form-data; name=\"{k}\"; filename=\"{os.path.basename(fp)}\"\r\n"
                          f"Content-Type: {ct}\r\n\r\n").encode() + open(fp, "rb").read() + b"\r\n")
        data = b"".join(parts) + f"--{b}--\r\n".encode()
        hdr = {"Content-Type": f"multipart/form-data; boundary={b}"}
    else:
        data = json.dumps(body).encode() if body is not None else None
        hdr = {"Content-Type": "application/json"}
    req = urllib.request.Request(url, data=data, method=method, headers={"X-API-KEY": KEY, "Accept": "application/json", **hdr})
    try:
        with urllib.request.urlopen(req, timeout=60) as z: return z.status, json.loads(z.read().decode() or "{}")
    except urllib.error.HTTPError as e: return e.code, e.read().decode()[:400]

if "--list" in sys.argv:
    st, j = call("GET", "/accounts")
    for a in (j.get("items") or j if isinstance(j, dict) else []):
        print(a.get("id"), a.get("type") or a.get("provider"), a.get("name"))
    sys.exit()

if "--account" not in sys.argv: sys.exit(__doc__)
acct = sys.argv[sys.argv.index("--account") + 1]
print(f"account {acct} | image {'ok' if os.path.exists(IMAGE) else 'MISSING'} | {'LIVE' if GO else 'DRY RUN'}\n")
print(POST); print("\n--- first comment ---\n" + COMMENT)
if not GO: sys.exit()

st, j = call("POST", "/posts", {"account_id": acct, "text": POST}, files={"attachments": IMAGE})
print("post:", st, str(j)[:300])
if st in (200, 201) and "--comment" in sys.argv:
    pid = j.get("post_id") or j.get("id")
    st2, j2 = call("POST", f"/posts/{pid}/comments", {"account_id": acct, "text": COMMENT})
    print("comment:", st2, str(j2)[:200])
else:
    print("Now: post the first comment by hand in ~45 minutes (LinkedIn suppresses posts with links in the body).")
