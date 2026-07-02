+++
title = "Backfill in Batches"
description = "Populate the new shape for every row that existed before expand ran, in small batches, without saturating the primary."
date = "2025-03-04"
weight = 3
tags = ["backfill", "postgres", "cli"]
toc = true
[extra]
step = 3
phase = "backfill"
+++

Expand only handles rows written after the new column exists. Everything written before that still needs `total_cents` filled in, and on a busy `orders` table that can mean tens of millions of rows. Breccia backfills in small batches, on a schedule you set, so the primary never sees a single multi-minute transaction.

<!-- more -->

## Run the backfill

```bash
breccia backfill \
  --table orders --column total_cents \
  --expr "amount_dollars * 100" \
  --batch-size 5000 --rate 200/s
```

```
backfill orders.total_cents  [==============------]  68%
  rows updated      8,160,000 / 12,000,000
  batch size        5,000 rows
  current rate      194 rows/s (throttled to 200/s)
  checkpoint        orders.id > 91442017
  estimated finish  38m
```

Each batch runs in its own short transaction bounded by a primary key range, and Breccia writes a checkpoint to `breccia_ledger` after every batch commits. If the process is killed — a deploy, a laptop closing, a spot instance reclaimed — rerunning the same `breccia backfill` command picks up exactly at the last committed checkpoint rather than rescanning rows it has already handled.

## Rate limiting against replicas

The `--rate` flag exists because backfills compete with production traffic for the same buffer cache and the same replication bandwidth. Breccia measures replica lag on a fixed interval and will pause automatically if lag crosses the threshold set in `breccia.toml`, resuming once replicas catch back up. A backfill that takes six hours because it yielded to traffic is a success; a backfill that finishes in twenty minutes and pages someone is not.
