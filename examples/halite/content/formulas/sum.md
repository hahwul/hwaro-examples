+++
title = "SUM"
description = "Add every numeric value in one or more ranges."
date = "2025-01-20"
weight = 1
toc = true

[extra]
signature = "SUM(range: Range, ...) -> Number"
kind = "Aggregation"
+++

`SUM` adds every numeric cell in the ranges you give it. Blank cells are
skipped rather than treated as zero-with-a-dependency, which matters more
than it sounds: a blank cell does not force a recalculation when a
formula elsewhere merely writes an empty string into it. Text cells inside
the range are skipped too, unless one of them is the literal result of a
failed formula, in which case `SUM` propagates that `Error` outward instead
of silently ignoring it — a spreadsheet that hides errors is worse than
one that surfaces them loudly.

You can pass more than one range, and they do not need to be contiguous or
even on the same sheet. `SUM(B2:B5, D2:D5)` reads both ranges as one
argument list; `SUM(Ledger!B2:B5, Actuals!B2:B5)` reaches across sheets.
Because `SUM` only depends on the cells you actually name, the dependency
graph recalculates it whenever any one of those cells changes and leaves
every other formula in the workbook untouched.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `range` | Range | Yes | One or more cell ranges. Repeat the argument to sum non-contiguous ranges. |

## Example

A quarterly ledger with revenue in `B2:B5` and a running total in `B6`:

```halite
B2: 18420        Q1 revenue
B3: 21150        Q2 revenue
B4: 19875        Q3 revenue
B5: 24030        Q4 revenue
B6: =SUM(B2:B5)  -> 83475
```

Editing `B3` after a restatement recalculates only `B6` and anything else
that reads it — the rest of the workbook stays untouched.
