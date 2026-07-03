+++
title = "Go concurrency checks and baseline files"
date = "2025-07-29"
description = "New concurrency rules for Go catch data races the compiler misses, and baseline files let teams adopt Strata without fixing everything at once."
template = "release"
tags = ["go", "concurrency", "baseline"]
[extra]
version = "3.5.0"
codename = "Shale"
added = 21
fixed = 29
removed = 4
total = 1212
breaking = false
+++

Shale focuses on Go concurrency — unsynchronized map access, captured loop
variables in goroutines, and mutex misuse — and introduces baseline files so a
large existing codebase can turn Strata on in CI without a thousand-line first
report.

<!-- more -->

## Highlights

- **Go concurrency pack.** Twenty-one rules for the mistakes the compiler and
  `go vet` let through: writing to a map from multiple goroutines without a lock,
  capturing a loop variable by reference in a closure, and copying a struct that
  contains a `sync.Mutex`.
- **Baseline files.** `strata baseline` records every finding in the current
  tree into `.strata-baseline.json`. Subsequent runs report only *new* findings,
  so a team can gate on regressions immediately and burn down the backlog on
  their own schedule.

## New rules

```
go/concurrency/unguarded-map-write   error    autofix: no
go/concurrency/loopvar-capture       error    autofix: yes
go/concurrency/mutex-copy            error    autofix: no
```

## Baseline workflow

```bash
# record the current state once
strata baseline --write .strata-baseline.json

# CI fails only on findings not in the baseline
strata analyze --baseline .strata-baseline.json --fail-on error
```

## Fixes and changes

Twenty-nine fixes across the TypeScript and Python packs, including a fix for
`ts/correctness/no-unused-var` firing on variables used only inside a type
annotation. Four early Go style rules were removed; `gofmt` already enforces them.

## Cache notes

Baseline matching happens after analysis and does not affect cache keys, so
toggling a baseline never triggers a re-scan.
