+++
title = "Deploy"
description = "Topology choices, resource sizing, and the on-call decision tree."
date = "2026-05-04"
weight = 4
tags = ["ops", "deploy"]
+++

## Topology

Noctis ships as a single binary. The same binary runs in three roles
chosen at startup: `coordinator`, `worker`, `gateway`. A production
deployment usually has three coordinators, N workers, and two or more
gateways behind a load balancer.

```text
   [LB] ──▶ gateway × 2 ──▶ coordinator × 3 ──▶ worker × N
                                     │
                                     ▼
                              [object store]
```

## Sizing

A worker should be sized so that one instance can absorb the load of any
other single worker failing. The runtime will redistribute partitions on
failure, but capacity for the spike must already exist.

| Workload                | Workers | CPU/worker | Mem/worker | Disk        |
|-------------------------|---------|------------|------------|-------------|
| 100k events/s, stateless| 3       | 8 vCPU     | 16 GB      | 200 GB NVMe |
| 1M events/s, stateful   | 12      | 16 vCPU    | 64 GB      | 1 TB NVMe   |
| 5M events/s, joins      | 32      | 32 vCPU    | 128 GB     | 2 TB NVMe   |

These numbers assume p99 latency targets of 1ms or better. Slower targets
allow more headroom and fewer workers.

## Observability

Every binary exposes a Prometheus endpoint on port 9111 and an OpenTelemetry
gRPC endpoint on 4317. Both are always on; there is no flag to disable
them in production builds.

```text
noctis_op_latency_p99_us{op="reduce", shard="0"}    420
noctis_arena_used_bytes{mutator="0"}                 8421376
noctis_pressure_signal{partition="42"}               1
noctis_late_dropped_total{stream="orders"}           17
```

## On-call decision tree

Three symptoms cover roughly all pages.

> **Symptom: `pressure_signal` stuck at 1.**
> A downstream sink is slow. Check the sink's latency metric first; if
> the sink is healthy, the partition is hot — split it with
> `noctis admin split <partition>`.

> **Symptom: `arena_used_bytes` near the cap.**
> An operator is leaking state. The runtime won't allow growth past the
> arena, so the operator will eventually be killed. Identify the operator
> from the metric label and bump its arena allocation in the topology
> spec, then redeploy.

> **Symptom: `late_dropped_total` rising.**
> Watermarks are advancing faster than events are arriving. Either the
> producer is delayed (network, broker pressure) or the allowed lateness
> is too small. Start with the producer.
