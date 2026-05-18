+++
title = "Operations"
description = "Running a node in production: capacity, monitoring, and incident response."
date = "2026-03-15"
weight = 3
tags = ["ops"]
+++

## Capacity envelope

A reference node, provisioned with eight cores, 32 GiB of memory, and an
NVMe-backed data directory, sustains the following throughput under
representative workloads.

| Workload      | Throughput  | p50 latency | p99 latency |
|---------------|-------------|-------------|-------------|
| Read-only     | 18,200 rps  | 0.6 ms      | 3.1 ms      |
| 90 / 10 mix   | 12,400 rps  | 1.1 ms      | 6.4 ms      |
| Write-heavy   | 7,800 rps   | 2.3 ms      | 14.0 ms     |

These figures are the lower envelope of a thirty-minute soak; instantaneous
throughput is consistently higher.

## What to watch

Three metrics, taken together, are sufficient for most alerting.

- `node.journal.fsync_p99` — sustained excursion above 25 ms is a leading
  indicator of disk degradation.
- `node.peer.replication_lag` — bounded growth is normal; unbounded growth
  is a peer outage in disguise.
- `node.errors.total` — any non-zero derivative warrants a look at the
  structured log.

## Incident response

In the order listed:

1. Confirm the alert is not a false positive by checking the dashboard.
2. Capture the structured log window around the alert with `runic capture`.
3. Open the relevant runbook in this Archive and follow it line for line.
4. If no runbook exists for the failure mode, draft one once the incident
   has resolved. The Archive grows by accretion.
