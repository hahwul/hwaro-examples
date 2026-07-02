+++
title = "Plan the Cutover Window"
description = "Turn a schema change into a numbered, reviewable sequence of expand and contract steps before anyone runs anything."
date = "2025-02-03"
weight = 1
tags = ["planning", "cli"]
toc = true
[extra]
step = 1
phase = "plan"
+++

A Breccia migration starts as a plan file, not a migration you have already run once in staging and hope behaves the same way in production. `breccia plan` inspects your live schema, reads the table's recent query log if you have one wired up, and proposes a full expand-and-contract sequence for the change you describe.

<!-- more -->

## Generate the plan

```bash
breccia plan --table orders --add-column total_cents:bigint --backed-by amount_dollars
```

That command writes a plan to `migrations/014_orders_total_cents/plan.toml`:

```toml
change = "add total_cents to orders, backed by amount_dollars"
table = "orders"

[[steps]]
step = 1
kind = "expand"
description = "add nullable orders.total_cents bigint"

[[steps]]
step = 2
kind = "backfill"
description = "populate total_cents from amount_dollars for existing rows"

[[steps]]
step = 3
kind = "dual-write"
description = "application writes both amount_dollars and total_cents"

[[steps]]
step = 4
kind = "verify"
description = "compare total_cents against amount_dollars * 100 continuously"

[[steps]]
step = 5
kind = "contract"
description = "drop amount_dollars once verify reports zero drift for 24h"
```

## Review like a diff

Review this the way you would review a pull request. The plan is deliberately boring to read — every step names exactly one table and one operation, so a reviewer who has never seen the change can still tell whether the sequence is safe. Nothing in `migrations/` is executable until you run `breccia apply` against a specific step, and each step records its own start time, end time, and the schema hash it ran against in `breccia_ledger`.
