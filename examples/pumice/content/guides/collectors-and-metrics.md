+++
title = "Collectors and metrics"
description = "The six built-in collectors, the signals they emit, and how to scope them."
date = "2026-03-03"
weight = 3
toc = true
slug = "collectors-and-metrics"
+++

A collector is a bundle of eBPF programs plus the maps and export rules that
turn their raw events into named metrics. Pumice ships six, all disabled-by-cost
rather than disabled-by-default: each one advertises its own overhead so you can
enable it with eyes open.

<!-- more -->

## Enabling collectors

List what is available, then enable only what you will actually graph. Every
collector name doubles as its config table.

```toml
[collectors]
enabled = ["syscall", "tcp", "sched"]

[collectors.tcp]
# only trace sockets talking to these ports
ports = [443, 5432, 6379]
```

## The built-ins

Each collector emits metrics under a stable namespace. Units are attached at the
source so downstream pipelines never have to guess.

| Collector | Primary metric      | Unit    | Typical cost |
|-----------|---------------------|---------|--------------|
| `syscall` | `syscall.latency`   | µs      | low          |
| `tcp`     | `tcp.retransmits`   | count/s | low          |
| `sched`   | `sched.runqueue`    | tasks   | very low     |
| `blockio` | `disk.io.wait`      | ms      | medium       |
| `net`     | `net.throughput`    | KiB/s   | medium       |
| `dns`     | `dns.lookup.time`   | ms      | low          |

## Scoping to cut cardinality

The fastest way to lower cost is to narrow what a collector watches. Every
collector accepts a `cgroup` filter so you can pin it to a single workload
instead of the whole host:

```toml
[collectors.blockio]
cgroup = "/sys/fs/cgroup/system.slice/postgres.service"
```

Scoped this way, `blockio` only accounts for the database's device waits — the
noisy log-rotation and backup jobs elsewhere on the box never enter the map.
Combined with [adaptive sampling](@/guides/how-adaptive-sampling-works.md), a
tightly scoped collector set keeps the agent comfortably under half a percent of
a core on a busy production host while still resolving p99 latency where it
matters. If you have not started the agent yet, begin with
[Deploy in five minutes](@/guides/deploy-in-five-minutes.md).
