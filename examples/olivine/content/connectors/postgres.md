+++
title = "Postgres sink"
description = "Commit rows to Postgres transactionally on every checkpoint for true exactly-once delivery."
date = "2025-05-20"
weight = 2
toc = true
[extra]
minutes = 7
role = "Transactional sink"
+++

Postgres is the reference exactly-once sink in Olivine. Because Postgres has
real transactions, the connector ties each database commit to a checkpoint
barrier, giving end-to-end exactly-once with no application-level dedup table.

<!-- more -->

## Basic write

Map records to columns and let the connector batch inserts:

```python
from olivine import sinks

pipe.sink(
    sinks.postgres(
        dsn="postgresql://warehouse/analytics",
        table="orders",
        columns={"id": "id", "usd": "total_usd", "ts": "created_at"},
        delivery="exactly_once",
    )
)
```

With `delivery="exactly_once"`, the sink opens a transaction per checkpoint
window, streams rows into it as they arrive, and issues `COMMIT` only when the
barrier for that window completes. A crash mid-window rolls the transaction back;
the runtime rewinds the source and replays, and the database never sees the
aborted rows.

## Upserts

For tables with a primary key, switch to upsert semantics so replays overwrite
instead of colliding:

```python
sinks.postgres(
    table="order_totals",
    conflict="id",          # ON CONFLICT (id) DO UPDATE
    delivery="exactly_once",
)
```

This emits an `INSERT ... ON CONFLICT` per batch:

```sql
INSERT INTO order_totals (id, usd, created_at)
VALUES ($1, $2, $3)
ON CONFLICT (id) DO UPDATE
  SET usd = EXCLUDED.usd, created_at = EXCLUDED.created_at;
```

## Batching and throughput

The sink groups rows into a single multi-row statement per flush. Tune the batch
with `batch_rows` and `batch_ms` — whichever is hit first triggers a flush:

```python
sinks.postgres(table="orders", batch_rows=1000, batch_ms=200)
```

Larger batches raise throughput and commit latency together. Since the sink is
usually the pace-setter, watch its p99 in `olivine top` and size the batch so
commit latency stays under your checkpoint interval — otherwise checkpoints
queue up behind slow commits.

## Schema drift

Point the connector at a migration file and it will refuse to start if the live
table does not match, rather than silently dropping columns. Keep the schema in
version control next to the pipeline.
