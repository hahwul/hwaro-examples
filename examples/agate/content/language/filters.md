+++
title = "Filters and Pipelines"
description = "The pipe operator, the built-in filter set, and why a filter chain compiles to a single call rather than a series of them."
date = "2025-05-01"
weight = 5
toc = true
template = "chapter"
[extra]
chapter = "05"
+++

A filter is a pure function that takes a value and returns a transformed one. The pipe operator `|` chains them left to right, and — like every other operator in Agate — takes exactly one space on each side.

<!-- more -->

## Chaining

```
{{ title | trim | upper }}
{{ posted_at | date("%B %d, %Y") }}
{{ summary | truncate(140) | default("No summary provided.") }}
{{ tags | join(", ") }}
```

Each stage receives the output of the one before it. `truncate(140)` runs on the already-defaulted-or-not summary; if `summary` were `null`, `truncate` would run on `null` and fail to compile, because Agate checks filter input types statically against the context you declared — this is why `default` so often appears immediately after a field that might be absent, not at the end of the chain.

## The built-ins

`upper`, `lower`, `trim` transform strings. `default(value)` substitutes when the input is `null`. `truncate(n)` cuts a string to `n` characters on a word boundary. `join(sep)` flattens a list of strings. `map(field)` projects a list of maps down to one field each, useful before a `join`. `raw` disables the automatic HTML escaping described in [Delimiters and Tags](/language/delimiters/) — reach for it only on content you trust.

```
{{ order.lines | map("sku") | join(", ") }}
```

## Why a pipeline is one call, not several

At compile time, `a | f | g` is not three function calls chained at render time — it is resolved once into a single call expression, `g(f(a))`, written directly into the generated render function. There is no dispatch table walked per filter name on every request; by the time your template runs, "filter" is not a runtime concept at all, only a syntax you used to write the pipeline. [Compiling to Render Functions](/language/compiling/) shows the generated code this actually produces.

## Custom filters

A project can register additional filters at build time, but the registration itself happens outside `.agate` files — in the compiler's configuration, not in a template. This keeps every `.agate` file readable in isolation: nothing in the file can redefine what `| money` means for the file next to it.
