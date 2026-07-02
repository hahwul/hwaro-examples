+++
title = "Contract and Drop the Old Shape"
description = "Remove the column, table, or index the migration replaced, on a deploy that changes nothing else."
date = "2025-04-25"
weight = 6
tags = ["contract", "cleanup", "postgres"]
toc = true
[extra]
step = 6
phase = "contract"
+++

Contract is the step everyone forgets to schedule, because by the time verify is green the migration already feels finished. It is not. `amount_dollars` is still there, still being written to on every order, still costing you the dual-write guard's extra branch in every code path that touches the table.

<!-- more -->

## Apply the contract step

```bash
breccia apply migrations/014_orders_total_cents/005_contract.sql
```

```sql
ALTER TABLE orders
  DROP COLUMN amount_dollars;
```

Breccia will refuse to run this file unless step five's status in `breccia_ledger` is `PASS` and its clean streak still satisfies the window you configured — a contract step re-checks the gate at execution time, not just at plan time, so a verify regression that happened an hour ago still blocks it. If someone tries to force it with `--skip-verify`, Breccia logs that override to the ledger with the operator's name attached; there is no quiet way around the gate.

## Finish in the application

Once contract completes, remove the dual-write guard from the application in the same deploy or the next one — Breccia does not do this for you, since it is Go code, not schema. Delete `SetAmount`'s reference to `amount_dollars`, delete the shared conversion call, and the migration that started six steps ago as a plan file is finished: one column, cut over with two deploys' worth of downtime that nobody using `orders` ever noticed.
