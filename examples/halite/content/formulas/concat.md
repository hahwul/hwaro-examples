+++
title = "CONCAT"
description = "Join text values, and typed values coerced to text, into one string."
date = "2025-02-27"
weight = 6
toc = true

[extra]
signature = "CONCAT(value: Any, ...) -> Text"
kind = "Text"
+++

`CONCAT` joins any number of arguments into a single `Text` value. `Text`
arguments pass through unchanged; `Number`, `Bool`, and `Date` arguments
are converted using the same formatting rules the cell they came from
displays with, so a `Date` cell formatted as `YYYY-MM-DD` concatenates as
`"2025-02-27"` rather than the underlying serial number. `Error` arguments
are the one exception to "concatenate anything" — an error still
propagates outward instead of being stringified into the result, the same
rule `SUM` and `AVERAGE` follow.

`CONCAT` takes no separator argument on purpose; build one into the call
with a literal string, `CONCAT(first, " ", last)`, which keeps the
function's type simple and makes the formula's intent readable without an
extra parameter to memorize. For a fixed separator repeated across many
arguments, a literal is still shorter than most alternatives once you are
past two or three fields.

## Arguments

| Argument | Type | Required | Description |
|---|---|---|---|
| `value` | Any | Yes | One or more values to join. Repeat the argument for each piece of text. `Error` values propagate instead of being joined. |

## Example

Building a shipping label from separate first-name, last-name, and city
cells:

```halite
B2: "Reyna"                 first name
B3: "Okafor"                last name
B4: "Lagos"                 city
B5: =CONCAT(B2, " ", B3, " — ", B4)  -> "Reyna Okafor — Lagos"
```

Editing any one of `B2`, `B3`, or `B4` recalculates `B5` alone.
