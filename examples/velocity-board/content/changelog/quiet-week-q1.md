+++
title = "Quiet week: paying down a year of debt"
date = "2026-04-26"
description = "Nothing shipped to customers this week. Two engineers cleared eleven flagged items off the technical-debt backlog."
tags = ["debt", "internal"]
surfaces = []
+++

Nothing shipped to customers this week, on purpose. Two engineers spent the week clearing eleven items off the technical-debt backlog. The full list is on the wiki; the three items worth surfacing here are:

- **Events pipeline:** the dead-letter queue is now reconciled into the warehouse rather than discarded. We have already used the reconciled feed twice to fix a missing-data bug.
- **Auth refresh:** the refresh-token rotation now happens on a deterministic schedule rather than the previous "first request after expiry" pattern. The change shaved a P99 latency spike that we had been chasing for six months.
- **Build cache:** CI restored a build cache that had silently been disabled in November. CI median wall-clock fell from 18 minutes to 11.

The board for next week looks normal. We do this kind of debt week once a quarter and it is usually the most-loved week of the calendar.
