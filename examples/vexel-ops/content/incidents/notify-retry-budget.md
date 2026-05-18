+++
title = "notify-svc retry budget exhausted at 14:12"
date = "2026-05-10"
description = "The SMS carrier rate-limited us for the third time this quarter. We routed non-critical notifies to email and stopped paying for the retries."
tags = ["p4", "notify", "carrier"]
owners = ["growth"]
+++

`notify-svc` budgets retries per provider per hour. The SMS provider has been rate-limiting us since the carrier merger closed; every retry costs us a fraction of the budget and adds latency without delivery.

## Decision

- Non-critical notifies (marketing, low-priority transactional) → email only.
- Critical notifies (two-factor codes, security alerts) → SMS first, email fallback.
- The carrier is on notice for a 90-day re-evaluation.

## What changes on the console

The **error budget** panel for `notify-svc` will drop by ~1.8× burn over the next 48 hours as the queue drains. That is the expected shape, not an incident.

> Pay the bill once. Do not pay the bill again on every retry.
