+++
title = "Verify Parity Before Cutover"
description = "Prove the new shape agrees with the old one for long enough that dropping the old one is boring, not brave."
date = "2025-04-08"
weight = 5
tags = ["verification", "postgres"]
toc = true
[extra]
step = 5
phase = "verify"
+++

Verify is the gate. With `require_verify = true` set in `breccia.toml`, Breccia will not run a contract step until verify has reported a clean parity window against the error budget you configured — usually zero mismatches sustained for a full business day, so the check survives a weekly batch job or an end-of-month spike.

<!-- more -->

## Run continuous verification

```bash
breccia verify --table orders \
  --check "total_cents == round(amount_dollars * 100)" \
  --sample 1% --window 24h
```

```
verify orders  window 24h  budget 0 mismatches
  sampled            118,204 rows
  mismatches         0
  last mismatch      2025-04-07 09:12 UTC (goodwill_credit path, fixed)
  clean streak       26h 40m
  status             PASS — contract unlocked
```

Verify runs continuously in the background, sampling one percent of rows on every pass rather than scanning the full table each time — enough to catch a regression within minutes without adding meaningful load. Every mismatch it finds is logged with the row's primary key and both values, not just a count, because a dashboard that says "0.3% mismatch" tells you nothing about which code path is still writing only `amount_dollars`.

## What a clean streak means

If verify finds a mismatch, the clean streak resets to zero and `require_verify` keeps step six locked. That reset is the entire point: a single missed write path anywhere in the fleet is enough to hold the migration at this step until someone fixes it, which is a much better place to get stuck than mid-contract with the old column already gone.
