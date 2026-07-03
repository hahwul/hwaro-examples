+++
title = "How backpressure works"
description = "Credit-based flow control, bounded channels, and why a slow sink safely throttles a fast source."
date = "2025-03-24"
weight = 2
toc = true
[extra]
minutes = 9
stage = "Runtime"
+++

Backpressure is the property that a fast producer cannot overwhelm a slow
consumer. In Olivine it is not an add-on — it is the contract every channel
between two stages obeys. A stage never pushes; a downstream stage pulls when it
has room.

<!-- more -->

## Credit, not queues

Each channel starts with a fixed number of **credits** — permits to send one
record each. A stage may only emit while it holds credit. When the downstream
stage finishes a record and frees buffer space, it returns a credit upstream.
Demand therefore travels backward through the pipeline, from the sink toward the
source, one grant at a time.

The effect is that the source runs exactly as fast as the slowest stage allows.
If a database sink commits 2,000 rows per second, credits return at roughly
that rate, and the source settles there too. No unbounded queue ever forms,
because there is nowhere for one to grow.

## Sizing the channels

The default channel capacity is 1,024 records, which balances throughput
against memory. Tune it per edge when a stage batches or has bursty latency:

```python
pipe.source(kafka_source) \
    .via(enrich, capacity=256) \
    .via(aggregate, capacity=4096) \
    .sink(warehouse)
```

Smaller capacities react to latency changes faster and use less memory; larger
capacities smooth over bursts at the cost of a longer drain on shutdown.

## Watching it happen

The runtime exports per-edge metrics so you can see where demand is stalling.
The `olivine top` command renders them live:

```bash
olivine top pipeline.py
```

```text
stage           in/s     out/s   credit   p99 ms
kafka.source    1,980    1,980      880     2.1
enrich          1,980    1,980      210    14.7
warehouse.sink  1,980        -        3   118.0   <- the pace-setter
```

A near-zero `credit` column marks the bottleneck. Here the warehouse sink is
the pace-setter at 118ms p99, and everything upstream has quietly matched it.

## When you actually want to drop

Sometimes lagging is worse than losing a record — think live dashboards. Opt a
single edge into a bounded, lossy buffer instead of blocking:

```python
.via(to_dashboard, overflow="drop_oldest", capacity=64)
```

Overflow policies are always explicit and always per edge. The default is to
block, because silent data loss is the bug backpressure exists to prevent.
