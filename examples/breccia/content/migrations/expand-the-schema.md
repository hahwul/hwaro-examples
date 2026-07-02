+++
title = "Expand the Schema"
description = "Add the new column, table, or index without touching a single read or write path that already exists."
date = "2025-02-17"
weight = 2
tags = ["expand", "postgres", "locks"]
toc = true
[extra]
step = 2
phase = "expand"
+++

Expand is the only step allowed to change the shape of the database, and it is only ever additive. New columns are added nullable, new tables are added empty, new indexes are built without blocking writes. Nothing that already reads or writes this table today needs to know the expand step happened.

<!-- more -->

## Apply the expand step

```bash
breccia apply migrations/014_orders_total_cents/001_expand.sql
```

```sql
ALTER TABLE orders
  ADD COLUMN total_cents bigint NULL;

CREATE INDEX CONCURRENTLY IF NOT EXISTS orders_total_cents_idx
  ON orders (total_cents);
```

Breccia wraps the `ALTER TABLE` with the `lock_timeout` from `breccia.toml` — 2000ms by default — and retries with backoff if it cannot acquire the lock inside that window rather than sitting behind a long-running transaction. `CREATE INDEX CONCURRENTLY` runs outside a transaction on purpose; Breccia detects a concurrent index build and polls `pg_stat_progress_create_index` so the CLI can show real progress instead of hanging silently.

## What happens if it fails

If expand fails partway — the lock timeout trips, or the index build is killed — the step is marked `failed` in `breccia_ledger` and Breccia refuses to let backfill start until you either re-run expand or explicitly mark it resolved. There is no partial-success state where half the columns exist and Breccia has already moved on. Once expand reports `complete`, the old code paths keep running exactly as before; `total_cents` sits there, unread, until step three starts filling it in.
