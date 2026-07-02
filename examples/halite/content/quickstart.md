+++
title = "Quickstart"
description = "Embed the Halite engine, open a workbook, set a formula, and read back a typed result."
date = "2025-01-14"
toc = true
+++

This page gets a workbook running inside a host application in a few
minutes: add the crate, open a workbook, write a formula into a cell, and
read the typed value the engine computes. Everything below assumes the
0.9 release of the `halite` crate.

## Add the engine

Halite is distributed as a Rust crate with a stable C ABI underneath it, so
the same core also binds cleanly from C, Swift, and Go. The Rust examples
here are the shortest path to trying it locally.

```toml
[dependencies]
halite = "0.9"
```

## Open a workbook

A `Workbook` owns one dependency graph. Cells are addressed the way a
spreadsheet user expects — column letter, row number — and every write
returns a `CellId` you can hold onto instead of re-parsing the address
later.

```rust
use halite::{Workbook, Value};

let mut wb = Workbook::new();
let revenue = wb.set_value("Ledger", "B2", Value::Number(18420.0))?;
let costs   = wb.set_value("Ledger", "B3", Value::Number(11940.0))?;
let margin  = wb.set_formula("Ledger", "B4", "=B2-B3")?;

wb.recalculate()?;
assert_eq!(wb.get(margin)?, Value::Number(6480.0));
```

`set_value` and `set_formula` both stage a write; nothing recomputes until
`recalculate()` runs. Halite batches writes on purpose — set a hundred
cells, then recalculate once, and the engine walks the dependency graph a
single time instead of on every intermediate write.

{{ alert(type="tip", body="Loading a workbook from a file or an import job is exactly this pattern at scale: stage every cell with set_value or set_formula, then call recalculate() once at the end. Halite does not walk the graph until you ask it to.") }}

## Read typed results

Every cell resolves to one of five `Value` variants: `Number`, `Text`,
`Bool`, `Date`, or `Error`. A formula that divides by an empty cell, or
calls `SUM` on a range containing text, resolves to `Error` rather than
panicking or coercing silently — the host decides how to surface that.

```rust
match wb.get(margin)? {
    Value::Number(n)  => println!("margin: {n}"),
    Value::Error(err) => eprintln!("formula error: {err}"),
    _ => unreachable!("B4 is typed Number by its formula"),
}
```

## Listen for recalculation

Host applications usually need to know which cells changed after a
recalculation — to repaint a grid, invalidate a cache, or re-run a report.
`Workbook::on_dirty` registers a callback that fires once per
`recalculate()` call with the set of `CellId`s the dependency graph
actually touched, not every cell in the workbook.

```rust
wb.on_dirty(|changed| {
    for id in changed {
        println!("recalculated: {}", id.address());
    }
});
```

On a workbook with thousands of cells, this is the difference between a
recalculation that repaints three rows and one that repaints the entire
sheet. The dependency graph is the whole reason Halite exists — see the
[formula reference](/formulas/) for how individual functions declare their
argument types and interact with it.

## Next steps

Once a workbook is wired up, the [formula reference](/formulas/) documents
every built-in function with its typed signature, its argument table, and
a worked example you can paste directly into a cell.
