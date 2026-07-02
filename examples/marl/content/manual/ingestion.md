+++
title = "Ingestion"
description = "Writing points, batching, and how Marl absorbs out-of-order arrivals."
date = "2025-03-19"
weight = 2
toc = true
[extra]
band = "foundations"
tier = "Foundations"
+++

Ingestion is the deposition step: points arrive at the surface tier, are made
durable, and become queryable within one flush interval. Marl accepts writes
over a line protocol and a batch API, and it is designed to keep accepting
them while older data compacts underneath.

<!-- more -->

## The write path

A write lands in the in-memory head of the hot tier and is appended to a
write-ahead log before the request returns. The head is flushed to an
immutable block on an interval you control:

```toml
[ingest]
flush_interval = "10s"
wal = true
max_batch = 5000
```

Batch your writes. A single request with 5,000 points is far cheaper than
5,000 requests, and the line protocol is built for it:

```bash
marl write --node 127.0.0.1:7180 --file metrics.line
# ok  5000 points  312 series  in 41ms
```

## Out-of-order and late data

Real sensors buffer, retry, and drift. Marl does not require monotonic
timestamps. A point whose timestamp falls inside an already-flushed block is
written to an overlay segment; reads merge overlays with base blocks
transparently, and the next compaction folds them together.

There is a bound, set per tier as `accept_lag`. A point older than the bound
is rejected rather than silently dropped, so your pipeline can react:

```
warn  reject series=cpu.load lag=52h bound=48h action=dead_letter
```

## Backpressure

When the hot tier's head cannot flush fast enough — slow disk, a compaction
storm — Marl applies backpressure instead of losing data. Writers receive a
`429` with a `Retry-After`, and the node emits a `marl.ingest.backpressure`
series you can alert on. Tune `flush_interval` and block size before raising
limits; most backpressure is a compaction that is set too coarse for the write
rate. Retention shapes that compaction, covered next in
[Tiered retention](/manual/tiered-retention/).
