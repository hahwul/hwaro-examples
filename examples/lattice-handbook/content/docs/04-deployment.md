+++
title = "Deployment"
description = "Topologies, resource sizing, and operational playbooks for SRE teams."
date = "2026-05-12"
weight = 4
tags = ["ops", "deployment"]
+++

## Topologies

Lattice ships with two reference topologies. Both are first-class; the
single-node topology is not a development-only mode.

### Single node

The single-node topology runs the gateway, planner, and storage in one
process. It scales vertically to about 4B edges before the storage layer
becomes the dominant bottleneck.

```bash
lattice serve \
  --bind 0.0.0.0:7170 \
  --data /var/lib/lattice \
  --memory 32G
```

### Cluster

The cluster topology shards the graph by source-vertex hash. Each shard is
served by a triplet of replicas. The gateway is stateless and can be
horizontally scaled independently.

| Component | Replicas | CPU      | Memory | Disk      |
|-----------|----------|----------|--------|-----------|
| Gateway   | 3+       | 4 vCPU   | 8 GB   | —         |
| Planner   | 3+       | 8 vCPU   | 16 GB  | —         |
| Storage   | 3 / shard| 16 vCPU  | 64 GB  | NVMe SSD  |

## Sizing

A reasonable rule of thumb: one storage shard per 5B edges, plus 30%
headroom. Past 50B edges per cluster, the operational complexity grows
sharply; consider partitioning the graph at the application boundary.

## Observability

Every binary exposes a Prometheus endpoint on port 7180.

```text
lattice_query_p99_ms{shard="0"}        4.1
lattice_query_p99_ms{shard="1"}        4.3
lattice_storage_compaction_pending     2
lattice_replication_lag_ms{shard="0"}  12
```

## On-call

The on-call playbook is short by design.

1. Check `lattice_query_p99_ms` per shard. Outliers usually mean a hot key.
2. If a shard is hot, force a key-range split with `lattice admin split`.
3. If the planner is busy, increase planner replicas. The planner is
   stateless and rebalances in seconds.
4. If storage compaction backs up, throttle writes with the gateway's
   `write_quota` setting until the backlog drains.

These four steps cover roughly 95% of pages the team sees in a quarter.
