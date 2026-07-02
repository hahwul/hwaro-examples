+++
title = "Transforms, windows, and watermarks"
description = "Reshape and aggregate streams with stateless operators, keyed windows, and event-time watermarks."
date = "2025-05-06"
weight = 3
toc = true
[extra]
minutes = 11
stage = "Transform"
+++

Transforms are the middle of every pipeline — where records are filtered,
enriched, reshaped, and rolled up. Olivine splits them into two families:
stateless operators that touch one record at a time, and stateful windows that
gather records over time.

<!-- more -->

## Stateless operators

The everyday operators need no memory and parallelize freely:

```python
(
    pipe.source(orders)
        .filter(lambda o: o.region == "emea")
        .map(lambda o: o.with_currency("EUR"))
        .flat_map(lambda o: o.line_items)
        .sink(warehouse)
)
```

Each operator runs on its own task and connects with a backpressured channel,
so a slow `map` throttles its upstream without any extra code.

## Keyed windows

Aggregation needs state, and state needs a key. Group a stream by key, collect
records into windows, and reduce each window when it closes:

```python
from olivine import windows

(
    pipe.source(clicks)
        .key_by(lambda c: c.user_id)
        .window(windows.tumbling(minutes=5))
        .aggregate(count, emit="on_close")
        .sink(sessions)
)
```

Olivine supports tumbling, sliding, and session windows. Window state lives in
the checkpoint store, so it survives restarts along with your offsets — the
[exactly-once guide](/guides/exactly-once/) covers how that snapshot is taken.

## Event time and watermarks

Real streams arrive late and out of order. Bind an event-time field and a
watermark strategy, and windows fire on the data's clock rather than the wall
clock:

```python
pipe.source(clicks) \
    .assign_timestamps(lambda c: c.ts, watermark="bounded:30s") \
    .key_by(lambda c: c.user_id) \
    .window(windows.tumbling(minutes=5)) \
    .aggregate(count)
```

A `bounded:30s` watermark tells Olivine to expect records up to 30 seconds late.
The runtime advances the watermark as timestamps climb; when it passes a
window's end, that window closes and emits. Records later than the watermark are
routed to a side output you can inspect:

```python
.aggregate(count, late="side:late_clicks")
```

## Composing your own

An operator is just a function from a record to zero or more records. Register
one and reuse it across pipelines:

```python
@pipe.operator
def redact(record):
    record.email = mask(record.email)
    return record
```

Custom operators inherit backpressure, metrics, and checkpointing for free,
because they run on the same channel machinery as the built-ins.
