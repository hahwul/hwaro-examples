+++
title = "For Site Owners"
description = "How to submit your site to Orbit, and what the review actually checks."
+++

If you run a page you'd want a curator to find, submitting it takes about five minutes. Getting listed takes longer, because a person has to read it first.

## Before you submit

Orbit only lists pages a specific person maintains and writes. Before you fill out the form, make sure your site meets the baseline:

- A human wrote the words on the page — not a template filled by a generator, not a summary of something else.
- It resolves over plain HTTPS with no interstitial, paywall, or forced sign-up before the content a curator would read.
- It has been live and maintained for at least three months, so there's something to check against on re-review.

## The submission

Send us one URL and two or three sentences on what it is and why it belongs in a specific category — not every category it could plausibly fit. Curators read submissions in the order they arrive; there's no fast lane and no fee.

## The marker file

Once a curator has read your page and it looks like a fit, we'll ask you to add a small text file at your site's root. It costs nothing to serve, and it's how our twelve-month re-check knows the same person still runs the page:

```text
# orbit.txt
owner: <your name or handle>
maintained-since: <year you started>
contact: <an address that reaches you>
note: <one line on how the site is built>
```

No script reads this file automatically — a curator opens it during re-check, the same way they opened your page the first time.

## What gets a submission rejected

Most rejections aren't about quality — plenty of good pages don't fit Orbit's scope. The common reasons: the content reads as generated or heavily templated, the site has an unrelated business model bolted onto it (ads-first content farms, dropshipping fronts), or it duplicates a page already indexed under the same owner.

If you're rejected, a curator will tell you why. You're welcome to fix the issue and resubmit — there's no cooldown, and no permanent mark against a domain.
