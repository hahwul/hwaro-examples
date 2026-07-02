+++
title = "Operating in Production"
description = "Replication factors, retention policies, and the metrics worth alerting on before a partition ever falls behind."
date = "2025-06-02"
toc = true
weight = 4

[extra]
topic = "guides/operating"
+++

A cluster that survives on-call rotations is one where the defaults were chosen deliberately and the dashboard tells you about trouble before a customer does. This guide covers the handful of settings and metrics that matter most once Basalt is carrying real traffic.

<!-- more -->

## Replication factor

```toml
[topic.defaults]
replication_factor = 3
min_insync_replicas = 2
```

A replication factor of 3 tolerates one broker failure without losing availability and a second without losing committed data, as long as `min_insync_replicas` is set to 2. Setting `min_insync_replicas` equal to the full replication factor is stricter but means any single slow replica blocks writes entirely — usually too conservative outside of financial ledgers.

## Retention

Basalt retains messages by time, size, or both, whichever bound is reached first:

```toml
[topic.orders_created]
retention_ms = 604800000   # 7 days
retention_bytes = 53687091200   # 50 GiB per partition
```

Retention is not a substitute for consumer health — it is a backstop. A consumer group that falls behind retention will skip forward involuntarily when the broker deletes the segment it was about to read, silently breaking at-least-once for whatever it missed. That should never happen from normal operation; it is a sign the earlier alert on consumer lag was ignored.

## What to alert on

- **Consumer lag**, in messages and in estimated time-to-catch-up, per group per partition. This is the earliest signal that a consumer is failing, not just slow.
- **Under-replicated partitions** — any partition whose in-sync replica set has shrunk below `min_insync_replicas`. This means you are one more failure away from rejecting writes.
- **Request queue depth on the broker** — a leading indicator of disk or network saturation before client-visible latency moves.
- **Log segment roll failures** — rare, but they mean a broker cannot make room for new writes and is about to start rejecting them.

Wire consumer lag and under-replicated-partition counts to paging alerts; leave the rest on a dashboard. A broker with healthy replication and no consumer lag is, by construction, meeting its at-least-once guarantee.
