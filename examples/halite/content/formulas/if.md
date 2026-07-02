+++
title = "IF"
description = "Branch on a boolean condition and return one of two typed results."
date = "2025-02-11"
weight = 4
toc = true

[extra]
signature = "IF(condition: Bool, then: Any, otherwise: Any) -> Any"
kind = "Logic"
+++

`IF` evaluates `condition`, then returns `then` when it is true and
`otherwise` when it is false. Only the branch that is actually used gets
evaluated — if `otherwise` calls a function that would itself error, and
`condition` is true, that error never surfaces, because Halite's evaluator
never touches the unused branch. This matters for the dependency graph
too: a cell referenced only inside the branch that was not taken still
counts as a dependency of the `IF` formula, so editing it still triggers a
recalculation, even on a run where its value is never read.

`condition` must resolve to `Bool`. Comparison operators (`=`, `<>`, `<`,
`>=`, and so on) produce `Bool` directly, so most `IF` formulas read
naturally: `IF(B2>=90, "A", "review")`. A condition that resolves to
`Number` or `Text` is a type error at parse time — Halite does not treat
`0` or `""` as falsy the way looser languages do.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `condition` | Bool | Yes | Any expression that resolves to `Bool`, typically a comparison. |
| `then` | Any | Yes | Returned when `condition` is true. |
| `otherwise` | Any | Yes | Returned when `condition` is false. |

## Example

Flagging invoices that have gone past their due date:

```halite
B2: 2025-01-15    due date
B3: 2025-02-03    today
B4: =IF(B3>B2, "overdue", "current")  -> "overdue"
```

`B4` recalculates the moment `today` advances past `due date` — no polling,
no scheduled refresh, just the dependency graph noticing `B3` changed.
