+++
title = "Operating a cluster"
description = "Leader election, state stores, metrics, and safe upgrades for a Galena deployment."
date = "2026-02-20"
weight = 6
toc = true
[extra]
chapter = 6
cron_fields = ["0", "4", "*", "*", "0"]
cron_note = "04:00 every Sunday — a good window for maintenance jobs"
+++

A production Galena cluster is a small set of identical processes pointed at one shared state store. There is no separate coordinator to run: leadership, checkpoints, and the run history all live in the store, and any node can lead.

<!-- more -->

## The state store

Galena persists to a transactional store — Postgres in most deployments, or the embedded file store for a single node. The store holds three things: the lease, the per-schedule checkpoints, and the run log. Point every node at the same connection string and give it a stable `node.id`.

```toml
[cluster]
state    = "postgres://galena@db.internal/galena"
node.id  = "sched-a1"
lease.ttl        = "10s"
lease.renew      = "3s"
```

## Leader election

Election is lease-based. The holder renews within `lease.renew`; if it misses `lease.ttl`, the lease is up for grabs and the next node to write wins. Shorter TTLs fail over faster but tolerate less GC pause — ten seconds is a safe default.

```bash
galena status
# NODE      ROLE      LEASE_AGE   LAST_TICK
# sched-a1  leader    2.1s        12:34:00Z
# sched-a2  follower  —           —
```

## Metrics and upgrades

Every node exposes Prometheus metrics at `/metrics`: tick lag, runs by status, DLQ depth, and lease transitions. Alert on `galena_tick_lag_seconds` and `galena_dlq_depth`.

Upgrade with a rolling restart. Drain the leader first so failover happens on your terms:

```bash
galena drain sched-a1     # release the lease, finish in-flight runs
# ...deploy the new binary, then:
galena undrain sched-a1
```

Because checkpoints are durable and ticks are evaluated against recorded time, a rolling upgrade produces no missed or duplicated fires — the incoming leader simply resumes from the last checkpoint the outgoing one wrote.
