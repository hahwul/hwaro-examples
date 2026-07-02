+++
title = "Formulas"
description = "Every built-in Halite function: its typed signature, its arguments, and a worked example."
sort_by = "weight"
template = "section"
+++

Every function below is typed: each argument declares the `Value` variant
it accepts, and the return type is fixed by the function itself, not by
what happens to be in the cell. Halite checks argument types at formula
parse time, so a call like `SUM("hello")` fails to compile into the
dependency graph rather than resolving to a confusing runtime error.

Each entry reads the same way: a signature line, an arguments table, and a
worked example lifted from a real ledger — paste it straight into a cell.
