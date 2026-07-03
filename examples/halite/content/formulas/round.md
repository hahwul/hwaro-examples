+++
title = "ROUND"
description = "Round a number to a fixed number of decimal digits."
date = "2025-02-03"
weight = 3
toc = true

[extra]
signature = "ROUND(value: Number, digits: Number) -> Number"
kind = "Numeric"
+++

`ROUND` rounds `value` to `digits` decimal places using round-half-away-
from-zero, the convention most accounting ledgers expect: `2.345` rounded
to two digits is `2.35`, not `2.34`. A negative `digits` rounds to the left
of the decimal point — `ROUND(18475, -2)` returns `18500` — which is the
usual way to round currency totals to the nearest hundred for a summary
row without touching the precise figures underneath.

`digits` must resolve to a whole number; Halite's type checker rejects a
formula like `ROUND(B2, 1.5)` at parse time rather than truncating the
fraction silently. This is the same posture the engine takes everywhere:
a formula that is not well-typed does not enter the dependency graph at
all, so a workbook that recalculates cleanly is also one whose formulas
were type-checked before a single cell in it changed.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `value` | Number | Yes | The number to round. |
| `digits` | Number | Yes | Decimal places to keep. Negative values round to tens, hundreds, and so on. |

## Example

Rounding an exact tax calculation to whole cents:

```halite
B2: 149.99          list price
B3: 0.0875          tax rate
B4: =B2*B3          -> 13.124125
B5: =ROUND(B4, 2)   -> 13.12
```

`B5` is the figure that actually prints on the invoice; `B4` keeps the full
precision for any formula that needs to chain off it later.
