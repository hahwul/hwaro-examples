+++
title = "LOOKUP"
description = "Find a key in the first column of a table and return a value from another column."
date = "2025-02-19"
weight = 5
toc = true

[extra]
signature = "LOOKUP(key: Text, table: Range, column: Number) -> Any"
kind = "Lookup"
+++

`LOOKUP` searches the first column of `table` for an exact match on `key`,
then returns the value `column` positions to the right of it — `column`
is one-indexed against the table, so `column = 1` returns the key column
itself and `column = 2` returns the first column after it. Unlike a
sorted binary search, `LOOKUP` does not require the table to be ordered;
it scans, so it stays correct on a table you edit in place.

When no row matches `key`, `LOOKUP` resolves to `Error("REF")` rather than
the nearest value, which is a deliberate departure from lookup functions
that fall back to an approximate match by default — a price sheet that
silently returns the wrong row's price is worse than a formula that fails
loudly. If your table can legitimately be searched for an approximate
match, sort it and pass an explicit range boundary instead; `LOOKUP` always
requires an exact key.

`table` becomes a dependency in full: any edit to any cell inside it,
including rows the current lookup did not match, triggers a recalculation
of every formula that calls `LOOKUP` against it. This is the one built-in
where "only the cells you touch" means the whole range, because Halite
cannot know in advance which row a future edit might make the new match.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `key` | Text | Yes | The value to search for in the table's first column. |
| `table` | Range | Yes | A range whose first column holds the keys. |
| `column` | Number | Yes | Which column of `table` to return, counting the key column as `1`. |

## Example

A SKU-to-price table on a `Catalog` sheet, referenced from an order line:

```halite
Catalog!A2: "SKU-1042"   Catalog!B2: 12.50   Catalog!C2: "Notebook, ruled"
Catalog!A3: "SKU-1077"   Catalog!B3: 4.25    Catalog!C3: "Pencil, 2B"
B2:  "SKU-1077"          order line SKU
B3:  =LOOKUP(B2, Catalog!A2:C3, 2)   -> 4.25
B4:  =LOOKUP(B2, Catalog!A2:C3, 3)   -> "Pencil, 2B"
```

Re-pricing `SKU-1077` on the `Catalog` sheet recalculates `B3` on the order
line without anyone touching the order sheet directly.
