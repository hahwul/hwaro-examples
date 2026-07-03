+++
title = "Backfill runs"
description = "Replaying the fire times a scheduler missed during downtime, without flooding the cluster."
date = "2025-11-14"
weight = 4
toc = true
[extra]
chapter = 4
cron_fields = ["0", "*", "*", "*", "*"]
cron_note = "top of every hour — the cadence most often backfilled"
+++

When no leader is running — a rolling deploy, an outage, a store that was briefly unreachable — fire times still pass. **Backfill** is how Galena reconciles the gap on recovery: it enumerates every fire time between the last checkpoint and now, and schedules a catch-up run for each one it is configured to replay.

<!-- more -->

## Bounded by policy

Unbounded backfills are dangerous. A job that fires hourly and was down for a week would enqueue 168 runs at once. Each job therefore declares a backfill budget, and Galena replays only the most recent fire times up to that limit, discarding older ones with an audit record.

```toml
[job.hourly-rollup.backfill]
enabled   = true
max_runs  = 6        # replay at most the last 6 missed fires
window    = "12h"    # ...and never older than 12 hours
spacing   = "20s"    # stagger catch-up runs to protect downstream
```

With this policy, a twelve-hour outage replays six rollups spaced twenty seconds apart, and anything older is dropped on purpose rather than by accident.

## Marking runs as caught up

Backfilled runs carry an `origin = "backfill"` tag and their original fire time, so handlers can tell live traffic from catch-up traffic:

```bash
galena runs --job hourly-rollup --origin backfill --since 1h
# FIRE_TIME            ORIGIN    STATUS   DURATION
# 2026-01-05T02:00Z    backfill  ok       1.9s
# 2026-01-05T03:00Z    backfill  ok       2.1s
```

Idempotency is the contract that makes this safe: replaying a fire time must converge to the same state as running it on schedule. Jobs that emit external side effects — sending mail, charging a card — should either be excluded from backfill (`enabled = false`) or guarded by a dedupe key derived from the fire time.
