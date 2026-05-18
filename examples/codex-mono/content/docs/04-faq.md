+++
title = "FAQ"
description = "Questions that come up often enough to deserve an entry."
date = "2026-04-12"
weight = 4
tags = ["reference"]
+++

## Why is everything monospaced?

Because tables, code, and prose all read better when they share a column grid.
Variable-width fonts are well suited to magazines; they are not well suited to
shell transcripts and configuration listings.

## Can I theme this?

The visual surface is intentionally fixed. Three things are tunable: column
count, line height, and the accent ink. Look for the `--codex-*` custom
properties in `style.css`.

## How do I report a problem?

Open an issue at `codex.example/issues` and attach the output of
`codex doctor --json`. The diagnostic report contains the runtime version,
resolved configuration paths, and the platform triple — enough information
for a maintainer to reproduce most defects without further back-and-forth.

## Is there a stable API?

The CLI surface is covered by semantic versioning. Library bindings exposed
through `lib/codex.h` are stable across minor versions; the embedded
scripting host is explicitly unstable and may change between any two
releases.
