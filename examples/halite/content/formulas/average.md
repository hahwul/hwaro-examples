+++
title = "AVERAGE"
description = "The arithmetic mean of every numeric value in a range."
date = "2025-01-22"
weight = 2
toc = true

[extra]
signature = "AVERAGE(range: Range, ...) -> Number"
kind = "Aggregation"
+++

`AVERAGE` divides the sum of every numeric cell in a range by the count of
numeric cells it found — not by the size of the range. A five-cell range
with two blanks averages the three populated cells, not five. This is the
detail that trips up ports from spreadsheet tools that treat blanks as
zero: in Halite, `AVERAGE(B2:B6)` with three numbers and two blanks equals
the mean of those three numbers, matching how most analysts actually read
a partially filled ledger.

If every cell in the range is blank or non-numeric, `AVERAGE` resolves to
`Error("DIV0")` rather than `Number(0)` or `Number(NaN)` — dividing by a
count of zero is treated as the arithmetic error it is, and the error
propagates to any formula that reads the result, exactly like `SUM` does
with a text cell.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `range` | Range | Yes | One or more cell ranges. Blank cells are excluded from both the sum and the count. |

## Example

Five weekly review scores, one week not yet submitted:

```halite
B2: 4.2   week 1
B3: 4.6   week 2
B4:       week 3 (not submitted)
B5: 3.9   week 4
B6: 4.8   week 5
B7: =AVERAGE(B2:B6)  -> 4.375
```

`B7` averages the four submitted scores. It recalculates the moment week 3
is filled in, and only then.
