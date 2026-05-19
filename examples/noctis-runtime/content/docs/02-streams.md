+++
title = "Streams"
description = "Bounded and unbounded sources, backpressure, and ordering guarantees."
date = "2026-04-26"
weight = 2
tags = ["streams", "model"]
+++

## Bounded and unbounded

Every stream in Noctis is one of two kinds:

- **Bounded** — has a known end. Reads a file, replays a Kafka topic from
  a fixed offset, or drains an in-memory buffer. Operators on bounded
  streams may emit final aggregates because the source will close.
- **Unbounded** — has no known end. Reads from a live topic, a socket, or
  a clock. Operators must emit incremental results because the source
  never closes.

The runtime distinguishes the two at compile time. An aggregator with no
window declaration on an unbounded source is a compile error.

## Declaring a stream

```ts
import { stream } from "noctis"

const orders = stream
  .from("kafka://orders")
  .bounded(false)
  .schema({
    id: "uuid",
    amount: "decimal(18,4)",
    placed_at: "instant"
  })
```

The `.schema()` call is mandatory. The runtime refuses to construct a
stream with a missing or partial schema; downstream operators rely on
schema for code generation.

## Ordering

Streams preserve order by key, not globally. Two events with the same key
will always be processed in the order they were produced. Events with
different keys may be reordered when the dispatcher steals work between
mutators.

| Property                  | Guarantee   |
|---------------------------|-------------|
| Per-key order             | Strong      |
| Global order              | None        |
| Exactly-once on bounded   | Yes         |
| Exactly-once on unbounded | Effectively (idempotent sinks) |

## Watermarks

Unbounded streams carry watermarks. A watermark is an upper bound on the
event time of any subsequent event with a given key. Operators use
watermarks to close windows and emit final results.

```ts
orders
  .keyBy(e => e.region)
  .watermark(e => e.placed_at, { allowedLateness: "10s" })
  .window.tumbling("1m")
  .reduce((a, b) => ({ ...a, amount: a.amount + b.amount }))
```

The runtime never advances a watermark backward. If a late event arrives
after the watermark has passed and the allowed lateness has expired, the
event is dropped and `noctis_late_dropped` is incremented.
