+++
title = "Dual-Write the Application"
description = "Ship the deploy that writes both the old and new shape, so every row created from now on stays in sync on its own."
date = "2025-03-21"
weight = 4
tags = ["dual-write", "application"]
toc = true
[extra]
step = 4
phase = "dual-write"
+++

Backfill catches every row that existed before expand. Dual-write is the application-side deploy that keeps every row created or updated after that moment in sync, so the gap between `amount_dollars` and `total_cents` never reopens while you are watching it close.

<!-- more -->

## Guard the two writes

Breccia does not touch your application code — it generates a small guard so the two writes cannot drift apart silently:

```go
func (r *OrderRepo) SetAmount(ctx context.Context, id int64, dollars float64) error {
    cents := breccia.ToCents(dollars) // shared conversion, one place
    _, err := r.db.ExecContext(ctx, `
        UPDATE orders
        SET amount_dollars = $1, total_cents = $2
        WHERE id = $3
    `, dollars, cents, id)
    return err
}
```

The rule during dual-write is simple and non-negotiable: every write path that touches `amount_dollars` also writes `total_cents` in the same statement or the same transaction, using the one shared conversion function. Two separate `UPDATE` statements invite a crash between them; one statement with both columns does not.

## Catching drift early

This is also the step where Breccia starts recording disagreements it did not cause. If a write somehow lands with only one column set — a hotfix that skipped the guard, a script run directly against the database — the next verify pass in step five will surface it by row ID rather than as an aggregate percentage, so you can find the offending code path instead of guessing at it.
