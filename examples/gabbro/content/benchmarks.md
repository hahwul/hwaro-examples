+++
title = "Benchmarks"
description = "Throughput and latency for gabbro against two fictional embedded stores on a mixed workload."
date = "2026-01-15"
toc = true
[extra]
win = "benchmarks"
section_label = "Performance Report"
+++

These numbers are illustrative — gabbro is a store invented for this manual, and so
are its rivals. The point is to show the shape of the results a copy-on-write,
snapshot-oriented engine tends to produce, not to crown a winner. Read them as a
teaching artifact.

<!-- more -->

## method

Every run uses a 2&nbsp;GB dataset of 64-byte keys and 512-byte values on an NVMe
SSD, single machine, warm page cache, five trials with the median reported. The
two comparison engines are fictional: **flint**, a log-structured merge store, and
**coldstore**, a mutate-in-place B-tree. All three were driven by the same harness
with `fsync` on every commit unless a row says otherwise.

> The workload matters more than the engine. Snapshot-heavy read scans favor
> copy-on-write; tiny random writes favor log-structured merge. Pick to your access
> pattern, not to a leaderboard.

## point operations

Single-key reads and writes, one thread, durable commits.

| Operation          | gabbro   | flint    | coldstore |
|--------------------|----------|----------|-----------|
| get (hot)          | 3.9M/s   | 3.1M/s   | 4.2M/s    |
| get (cold)         | 412K/s   | 388K/s   | 305K/s    |
| put (fsync)        | 74K/s    | 121K/s   | 58K/s     |
| put (batched 1k)   | 1.8M/s   | 2.4M/s   | 1.1M/s    |

Log-structured **flint** wins on write throughput, as expected — it buffers and
flushes sequentially. Gabbro trails on tiny durable writes but leads coldstore
because it never rewrites pages in place.

## snapshots and scans

Ordered range scans while a second thread commits 50K writes/s in the background.

| Scan (10K keys)          | gabbro  | flint   | coldstore |
|--------------------------|---------|---------|-----------|
| no concurrent writer     | 2.1ms   | 2.6ms   | 2.0ms     |
| under write load         | 2.2ms   | 6.9ms   | 5.4ms     |
| p99 latency (under load) | 3.1ms   | 22ms    | 14ms      |

This is the case gabbro is built for. Because a snapshot reads an immutable tree,
scan time barely moves when a writer is active, and tail latency stays flat. The
other two engines pay for read-write contention in their p99.

## footprint

| Metric              | gabbro  | flint   | coldstore |
|---------------------|---------|---------|-----------|
| compiled library    | 400 KB  | 1.1 MB  | 620 KB    |
| resident memory     | 38 MB   | 96 MB   | 41 MB     |
| file size (2 GB in) | 2.3 GB  | 3.1 GB  | 2.4 GB    |

Space amplification stays close to the raw data once compaction has run and no
long-lived snapshot is pinning old versions. Keep reader lifetimes short and the
file tracks the working set.
