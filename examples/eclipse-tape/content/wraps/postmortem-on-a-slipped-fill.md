+++
title = "Postmortem on a slipped fill"
date = "2026-05-19"
description = "A parent IOC slipped 18 cents through the NBBO because the child sizing was wrong. Walking through what happened and what we fixed."
tags = ["postmortem", "execution", "ioc"]
desks = ["equities"]
[extra]
session = "post-close"
pnl = "+ 91,402.74"
trades = 167
+++

We slipped a fill today. The dollar number is small — 18 cents through the NBBO on 12,400 shares, so about 2,232 in implementation shortfall on a 1.1m notional order — but the mechanism is interesting enough to write up.

The order was a sell on the long leg of a pair that had recoupled overnight. The leg had to come off before 11:00 because a Fed speaker was on the calendar at 11:30 and we do not work pair-adjustments through macro events. We issued a parent order with an IOC overlay and child sizing set to 8% of the trailing-thirty-minute volume.

The first child cleared at the mid. The second went out at 09:47:14 with a child size that had not refreshed since 09:42 — and in those five minutes the prior trade had spiked the trailing volume by 3.6x. So the child went out at 8% of a stale denominator, which meant it was four times the size it should have been. It blew through three NBBO levels and walked the book.

The root cause is a stale denominator in our parent algo's child sizing — the trailing-volume window refreshes every sixty seconds, not every fill. We have changed the refresh to "on fill" and rerun the prior week of orders against the new logic; the average slip improves by 0.4 cents per share, which is small but consistent.

Day closed +91,402, with the slipped fill accounting for −2,232 of that. The pair is closed and off the book. The fix is deployed for tomorrow's open. The post-incident review will sit in the operations folder.

Lessons: a parameter that looks slow-moving (trailing-volume) is fast-moving on the worst possible day. Refresh on fill.
