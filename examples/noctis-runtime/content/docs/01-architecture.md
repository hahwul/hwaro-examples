+++
title = "Architecture"
description = "How the runtime is wired. Loops, queues, and the single mutator rule."
date = "2026-04-22"
weight = 1
tags = ["architecture", "internals"]
+++

## Single mutator

Noctis runs one mutator thread per core. Operators are scheduled onto
mutators by a work-stealing dispatcher; each operator's state is owned by
exactly one mutator at a time. There is no cross-thread sharing of
operator state and no lock contention on the hot path.

```text
   core 0          core 1          core 2          core 3
  ┌──────┐       ┌──────┐        ┌──────┐        ┌──────┐
  │ MUT  │       │ MUT  │        │ MUT  │        │ MUT  │
  └──┬───┘       └──┬───┘        └──┬───┘        └──┬───┘
     │              │               │               │
     └──── shared work queue ──── dispatcher ──── steal ────
```

## Event loop

Each mutator runs a simple loop. There is no scheduler hierarchy, no
fairness logic, and no priority inversion. Operators are first-come,
first-served from the local queue.

```text
loop:
  ev = local.pop_or_steal()
  if ev is None:
    park(64us)
    continue
  op = registry[ev.op_id]
  op.tick(ev)
```

## Backpressure

Backpressure is enforced at the queue boundary. A mutator's local queue
has a fixed depth (default 16,384 events). When the queue is full, the
upstream producer is blocked until the queue drains below the watermark.

| Queue depth | Action                                    |
|-------------|-------------------------------------------|
| 0–75%       | Accept new events without delay           |
| 75–95%      | Begin emitting `noctis_pressure` signal   |
| 95–100%     | Block upstream until 90% watermark        |
| > 100%      | Drop the event and increment counter      |

The "drop and increment" tier exists to keep the runtime running under
genuine overload. It is never reached in correctly-sized deployments.

## Memory

Operator state is allocated from a per-mutator arena. Arenas are sized at
process startup and never grow; if an operator would exceed its arena,
the runtime refuses to schedule it and emits a `noctis_arena_exceeded`
error. This is intentional — sudden memory growth in production has
caused more outages than it has prevented.
