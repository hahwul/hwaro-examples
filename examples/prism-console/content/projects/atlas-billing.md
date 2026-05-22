+++
title = "Atlas Billing"
date = "2026-05-12"
description = "Subscription billing layer for the Atlas tenancy. v2.4 ships this week."
[extra]
eyebrow = "REVIEW · AT RISK"
owner = "R. West"
metric_label = "INVOICE LOAD"
metric = "1.2k"
metric_note = "Past 30d · 7 retries pending"
tag = "Review"
+++

Atlas Billing handles the subscription side of the Atlas tenancy product. v2.4 closes the loop on
proration and adds two enterprise invoice formats that legal asked for last quarter.

## Open items

- **Proration on mid-cycle plan change** — fix landed, awaiting QA sign-off from O. Anwar.
- **NET-30 invoice template** for the public-sector pilot.
- **Retries log** — 7 invoices stuck on stripe `requires_action`. Manual review scheduled Wednesday.

## Why this is at risk

The release date is Friday and the QA queue is full from Lighthouse Mobile. We may push to
Monday rather than ship without the standing dry-run.
