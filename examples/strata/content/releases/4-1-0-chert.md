+++
title = "Push diagnostics over LSP, and faster type-aware TypeScript"
date = "2026-04-02"
description = "The language server now pushes diagnostics as the cache invalidates, and type-aware TypeScript rules run about a third faster."
template = "release"
tags = ["typescript", "lsp", "performance"]
[extra]
version = "4.1.0"
codename = "Chert"
added = 18
fixed = 43
removed = 3
total = 1265
breaking = false
+++

Chert reworks the editor integration around the incremental cache: instead of
re-running on save, the language server subscribes to cache invalidations and
pushes only the diagnostics that actually changed. Type-aware TypeScript rules
also got a dedicated fast path that reuses the checker's symbol table.

<!-- more -->

## Highlights

- **Push diagnostics.** The LSP server now emits `textDocument/publishDiagnostics`
  the moment the cache marks a file dirty, so results appear as you type rather
  than after a debounce-and-rescan. Under the hood it is the same invalidation
  the CLI uses; the editor is just another subscriber.
- **Faster type-aware rules.** TypeScript rules that need type information used
  to re-request it per rule. They now share one resolved symbol table per file,
  which brought the type-aware pass on a 240k-line project from 6.4s to 4.1s.
- **Preview: Rust taint tracking** behind `--preview-rust-taint` (GA in 4.2).

## New rules

```
ts/correctness/no-unsafe-optional-chain   error    autofix: no
ts/correctness/exhaustive-switch          warning  autofix: yes
py/style/implicit-optional                warning  autofix: yes
```

## Fixes and changes

Forty-three fixes. The Go analyzer stopped double-reporting shadowed errors
inside `if err := ...; err != nil` blocks, and the SQL pack now understands
parameterized queries built with the standard library placeholders in Python and
Go, eliminating a common false positive in `sql/injection/string-built-query`.

## LSP configuration

```json
{
  "strata.server.push": true,
  "strata.server.packs": ["correctness", "security"],
  "strata.server.cache": ".strata-cache"
}
```

## Cache notes

No format change; the server and CLI share the same v3 cache directory safely,
so an editor session warms the cache your CI run will reuse.
