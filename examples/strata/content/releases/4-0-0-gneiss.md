+++
title = "New config schema, content-addressed cache, namespaced rule IDs"
date = "2026-01-20"
description = "The 4.0 major release: a redesigned configuration schema, cache format v3 keyed by content hash, and fully namespaced rule identifiers. Breaking."
template = "release"
tags = ["breaking", "cache", "config"]
[extra]
version = "4.0.0"
codename = "Gneiss"
added = 47
fixed = 88
removed = 22
total = 1250
breaking = true
+++

Gneiss is the first major release in the 4.x line and the largest single change
to the engine's contract so far. Rule identifiers are now fully namespaced,
configuration moves to a typed schema with validation, and the incremental cache
is rebuilt from scratch as a content-addressed store. This release is breaking;
the CLI ships a migration to carry most projects across automatically.

<!-- more -->

## Breaking changes

- **Namespaced rule IDs.** Every rule identifier is now `lang/pack/name`. The
  old flat names (`no-eval`, `sql-concat`) are gone. Run the migration to rewrite
  suppressions and config:

  ```bash
  strata migrate --from 3 --to 4
  ```

- **Typed configuration.** `strata.toml` is validated against a schema. Unknown
  keys are now errors, not silently ignored — this catches typos that used to
  disable a check without warning.

- **Cache format v3.** The cache is content-addressed: keys are a hash of the
  syntax tree plus the resolved rule versions. The 3.x cache cannot be
  upgraded and is discarded on first run.

## Highlights

- Forty-seven new rules, including a cross-language `config` pack for CI and
  container files.
- Eighty-eight fixes, many of them long-standing false positives that the new
  dependency graph finally made tractable.
- Twenty-two rules removed: duplicates across languages collapsed into shared
  cross-language rules, and a handful of style checks better served by
  formatters.

## New configuration

```toml
# strata.toml (v4 schema)
[analyze]
packs = ["security", "correctness"]
fail_on = "error"

[rules]
"ts/style/semicolons" = "off"
"py/security/*" = "error"

[cache]
format = "v3"
dir = ".strata-cache"
```

## Upgrade notes

The migration rewrites `strata.toml`, `.strata-baseline.json`, and inline
suppression comments. Review the diff before committing — a small number of
removed rules have no direct replacement and are dropped with a comment marking
where they were.
