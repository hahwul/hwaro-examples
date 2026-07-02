+++
title = "Rust taint analysis goes GA, and the cache shards for monorepos"
date = "2026-06-11"
description = "Rust taint tracking is now generally available, the incremental cache shards per workspace member, and autofixes apply in batches."
template = "release"
tags = ["rust", "cache", "autofix"]
[extra]
version = "4.2.0"
codename = "Basalt"
added = 24
fixed = 61
removed = 5
total = 1284
breaking = false
+++

Basalt promotes the Rust taint engine out of preview, teaches the incremental
cache to shard itself across workspace members, and lets `strata fix` apply
non-overlapping autofixes in a single pass instead of one file at a time. The
five removed rules were all superseded by more precise replacements shipped in
the same build.

<!-- more -->

## Highlights

- **Rust taint analysis is GA.** The dataflow model that shipped behind
  `--preview-rust-taint` in 4.1 is now on by default. It tracks untrusted input
  from `std::env`, `clap`, and common web framework extractors through to sink
  functions, across function and module boundaries.
- **Sharded cache for monorepos.** The content-addressed cache now writes one
  shard per workspace member rather than a single global index. Members that did
  not change are never touched, which cut warm-run wall time on our reference
  monorepo (312 crates and packages) from 3.1s to 0.9s.
- **Batched autofix.** `strata fix` groups edits by file and applies all
  non-conflicting fixes at once, then re-parses to confirm nothing regressed.

## New rules

Twenty-four rules landed, sixteen of them Rust:

```
rs/security/tainted-command-arg      error    autofix: no
rs/security/tainted-sql-query        error    autofix: no
rs/correctness/unwrap-on-env         warning  autofix: yes
ts/correctness/await-in-loop         warning  autofix: no
```

## Fixes and changes

Sixty-one fixes, most of them false-positive reductions in the Rust and
TypeScript packs. Notably, `ts/correctness/floating-promise` no longer fires on
promises passed directly to `void`, and the Python import resolver now follows
`src/`-layout packages without an explicit path hint.

## Removed

Five rules were retired in favor of the new taint-aware equivalents:

```diff
- rs/security/format-string-injection   → replaced by rs/security/tainted-format
- rs/security/command-injection-basic   → replaced by rs/security/tainted-command-arg
```

## Cache notes

Sharding changes the on-disk layout but not the format version — existing v3
caches are migrated in place on first run. To rebuild from scratch:

```bash
strata analyze --cache-clear
```
