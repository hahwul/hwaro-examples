+++
title = "Project Meridian"
weight = 3
description = "Distributed task queue with deterministic replay"
tags = ["infra", "distributed-systems"]
skills = ["Rust", "Postgres", "Redis"]

[extra]
year = 2024
url = "https://example.com/meridian"
status = "Production"
+++

## Overview

Meridian is a distributed task queue designed for workloads where every job must be replayable without side-effect duplication. It pairs an append-only event log with a per-tenant sharding scheme so that operators can rebuild any worker's state by replaying its slice of the log from any prior checkpoint.

## Goals

The project began as a response to a recurring class of incidents: a worker crash mid-task would leave downstream systems in inconsistent states, and operators had no reliable way to determine which jobs had completed their effects and which had not. Meridian addresses this by treating the queue itself as the system of record and requiring every consumer to declare its idempotency key before a task is dispatched.

## Architecture

The control plane is a small Rust service backed by Postgres. Job submissions write to a partitioned table with a monotonically increasing sequence number, and workers lease ranges of sequence numbers rather than individual jobs. Redis holds the lease state and short-lived coordination locks, but it is never authoritative.

```rust
let lease = control.acquire_range(worker_id, batch_size).await?;
for job in lease.jobs() {
    if !job.dedup_key.is_seen(&store)? {
        job.execute().await?;
        store.mark_seen(&job.dedup_key)?;
    }
}
control.commit(lease).await?;
```

## Operational Notes

The team runs Meridian across three regions with asynchronous log shipping between control planes. Replay is exercised weekly as a routine drill rather than an emergency procedure, which has driven down the mean time to recovery for the backing services that depend on it.
