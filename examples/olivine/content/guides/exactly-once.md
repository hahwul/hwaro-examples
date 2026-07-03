+++
title = "Exactly-once sinks"
description = "How checkpoint barriers, transactional commits, and idempotent writes give end-to-end exactly-once delivery."
date = "2025-06-18"
weight = 4
toc = true
[extra]
minutes = 12
stage = "Sink"
+++

Exactly-once does not mean a record is processed precisely one time inside the
pipeline — retries happen. It means the *observable effect* at the sink appears
exactly once, even across crashes and restarts. Olivine reaches that guarantee
with three cooperating pieces: barriers, transactions, and idempotency.

<!-- more -->

## Checkpoint barriers

Periodically the runtime injects a **barrier** into every source. The barrier
flows downstream on the same channels as data, in line and in order. When a
stage receives barrier *n* on all its inputs, it snapshots its state — window
contents, aggregation buffers — and forwards the barrier onward. When every sink
has seen barrier *n*, checkpoint *n* is complete and durable.

Because barriers travel with the data, a snapshot captures a globally consistent
cut of the pipeline: every record before the barrier is accounted for, and none
after it leaks in.

```python
pipe.configure(
    checkpoint_interval="10s",
    checkpoint_store="s3://olivine-state/orders",
)
```

## Transactional sinks

A sink that supports transactions ties its external commit to the barrier. It
writes records into an open transaction as they arrive and commits only when the
matching barrier lands:

```python
from olivine import sinks

pipe.sink(
    sinks.postgres(
        dsn="postgresql://warehouse/analytics",
        table="orders",
        delivery="exactly_once",   # two-phase commit on each barrier
    )
)
```

On restart the runtime rolls back any transaction that was open when the crash
happened, rewinds the source to the last complete checkpoint, and replays. The
rolled-back transaction never became visible, so no duplicate lands.

## Idempotent sinks

Some destinations cannot hold a transaction open — object stores, some HTTP
APIs. For those, Olivine uses an idempotency key derived from the record and the
checkpoint id, so a replayed write overwrites rather than appends:

```python
pipe.sink(
    sinks.object_store(
        bucket="reports",
        key=lambda r: f"orders/{r.date}/{r.id}.json",
        delivery="idempotent",
    )
)
```

## Choosing a mode

| Mode           | Guarantee     | Needs                    |
|----------------|---------------|--------------------------|
| `at_most_once` | may drop      | nothing                  |
| `at_least_once`| may duplicate | replayable source        |
| `idempotent`   | exactly-once  | stable per-record key    |
| `exactly_once` | exactly-once  | transactional sink       |

Pick the weakest mode your use case tolerates — stronger guarantees cost commit
latency. Whatever you choose, the source, the checkpoint store, and the sink
must agree, and Olivine refuses to start a pipeline whose stages disagree.
