+++
title = "Wren API v3"
date = "2026-05-02"
description = "Third-generation public API for Wren. Six routes done, three to go."
[extra]
eyebrow = "ACTIVE"
owner = "T. Lerner"
metric_label = "ROUTES"
metric = "6 / 9"
metric_note = "Public preview Jun 11"
tag = "Active"
+++

Wren API v3 is the third public iteration. We're keeping v2 alive until end of year and shipping
v3 as a side-by-side namespace. Existing customers will move on a schedule of their choosing.

## Done

- `/v3/objects` · list and detail
- `/v3/events` · stream and replay
- `/v3/keys` · create, rotate, revoke

## Remaining

- `/v3/webhooks` — design is set, work starts Thursday.
- `/v3/exports` — depends on Mosaic landing.
- `/v3/audit` — last route, planned for the final sprint.

## Open question

We have not decided whether v3 ships with an HMAC signing scheme or rotates over to JWTs.
Tor will write up a one-pager this week.
