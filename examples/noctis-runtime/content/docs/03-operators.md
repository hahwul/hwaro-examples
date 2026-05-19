+++
title = "Operators"
description = "The 38 operators the runtime ships with — purposes and time complexity."
date = "2026-04-30"
weight = 3
tags = ["operators", "api"]
+++

## Categories

The 38 built-in operators fall into five categories. The runtime does not
allow user-defined operators in core; extensions must be packaged as
sidecar processes that participate in the event loop over UDS.

| Category    | Count | Examples                          |
|-------------|-------|-----------------------------------|
| Transform   | 9     | `map`, `flatMap`, `filter`        |
| Aggregate   | 8     | `reduce`, `count`, `min`, `max`   |
| Window      | 6     | `tumbling`, `sliding`, `session`  |
| Join        | 7     | `innerJoin`, `leftJoin`, `interval` |
| Sink        | 8     | `kafka`, `http`, `s3`, `stdout`   |

## Complexity table

Every operator declares its time complexity per event. The runtime
enforces this declaration at compile time using its cost model; an
operator that would exceed its declared bound is rejected before
deployment.

| Operator         | Time per event | Space             |
|------------------|----------------|-------------------|
| `map`            | O(1)           | O(0)              |
| `filter`         | O(1)           | O(0)              |
| `reduce`         | O(1) amortised | O(keyset)         |
| `tumbling(w)`    | O(1)           | O(w · keyset)     |
| `sliding(w, s)`  | O(w / s)       | O(w · keyset)     |
| `session(g)`     | O(log n)       | O(keyset)         |
| `innerJoin(w)`   | O(w) probe     | O(w · keyset)     |
| `intervalJoin`   | O(w) probe     | O(w · keyset)     |

## Composition

Operators compose left-to-right. There is no implicit reordering. If two
operators would benefit from being swapped, the user must swap them; the
runtime will not.

```ts
orders
  .filter(o => o.amount > 0)
  .keyBy(o => o.region)
  .window.tumbling("1m")
  .reduce((a, b) => ({ ...a, amount: a.amount + b.amount }))
  .sink.http("https://billing.internal/agg")
```

## Custom logic

For business logic the operators cannot express, drop into a user
function inside `map` or `flatMap`. The function runs on the same mutator
as the surrounding operators — no IPC, no thread hop — and is allowed to
allocate up to 8KB per event from the operator arena.
