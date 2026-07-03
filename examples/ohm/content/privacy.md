+++
title = "Privacy"
description = "How Ohm measures traffic without cookies, persistent identifiers, or any data ever leaving the European Union."
+++

Ohm was built on a simple constraint: if a measurement requires identifying a
person, we don't take it. Everything below is the literal mechanism, not a
summary written by a legal team.

## What we never collect

We do not set cookies. We do not write to `localStorage`, `sessionStorage`,
or IndexedDB. We do not read canvas, WebGL, font lists, or battery state. We
do not build a fingerprint from your visitors' devices, and we do not share,
sell, or exchange any data with advertising networks — we have no commercial
relationship with any ad-tech company, full stop.

## How we count a visitor without knowing who they are

When a page loads, our script sends the hostname, path, referrer, and
viewport class to our EU edge. The edge combines the visitor's IP address,
user-agent, and your site's domain, then runs the result through a
one-way hash salted with a value that rotates every 24 hours. The hash is
used once, in memory, to decide whether a session already exists for that
day — then it is discarded. We never store the IP address, the raw
user-agent string, or the hash itself. What lands in the database is an
aggregate count against a timestamp, a path, and a referrer. There is no
row anywhere that corresponds to one visitor across two days, because the
salt that produced yesterday's hash no longer exists today.

## Where the data lives

Every request is processed and stored in Frankfurt or Dublin, depending on
which region you pin your project to in account settings. We do not
replicate to other regions, and we have no sub-processors outside the
European Economic Area. Our infrastructure provider, billing processor, and
support desk are all EU-incorporated entities under a signed data
processing agreement.

## Retention

Aggregated statistics are kept for 14 months by default so you can compare
a month against the same month a year earlier, then deleted automatically.
Growth and Scale customers can shorten or extend this window in project
settings; nothing is ever retained indefinitely.

## Why no consent banner

Because we never store personal data — no cookie, no cross-session
identifier, no fingerprint — Ohm's measurement falls outside the scope of
the ePrivacy Directive's consent requirement and the GDPR's definition of
processing personal data. Your visitors never see a banner, and you never
have to explain to your legal team why a "privacy-first" analytics tool
still asks for consent. If our practices ever change in a way that would
require one, we will tell existing customers in writing sixty days before
it ships.
