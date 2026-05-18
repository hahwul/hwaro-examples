+++
title = "Week 19 — Retention pilot cohort B is lagging"
date = "2026-05-08"
description = "Cohort B for the retention pricing pilot is two points behind cohort A on the seven-day mark. We are not pulling the experiment; we are extending the window."
tags = ["retention", "pricing", "experiment"]
squads = ["product"]
+++

The retention pricing pilot has two cohorts in flight. Cohort A reached the seven-day mark on Friday at **42.1%** retention. Cohort B reached the same mark this morning at **39.8%** — two points behind A, on a window where we expected parity.

## What we know

- The cohort assignment looks clean. We sampled 1% manually; nothing surprising.
- Cohort B has a slightly higher share of accounts that joined through a referral. We expect a small *positive* delta from this, not a negative one. So this is not "referral mix".
- Two specific account segments inside cohort B (sub-50-seat plans on monthly billing) are responsible for almost all of the gap.

## What we are doing

- Extending the seven-day window to a fourteen-day window for both cohorts. We will publish a second snapshot on May 22.
- Lia is reading every conversion event from those two segments by hand. No automation, no rollup; we suspect the issue is in the in-app messaging on day 4.

> When two cohorts diverge, the right next step is usually to look at the events with your own eyes for an hour. The dashboard already told you they differ — the dashboard is not going to tell you why.
