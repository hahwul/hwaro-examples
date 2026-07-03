+++
title = "About Strata"
description = "How the engine models rules, analyzes eleven languages, and keeps runs fast with a content-addressed incremental cache."
tags = ["architecture", "cache"]
+++

Strata is a static analysis engine that runs a shared rule model across eleven
languages — TypeScript and JavaScript, Python, Go, Java, Rust, Ruby, C#, PHP,
Kotlin, and SQL — plus a small set of cross-language rules for build and
configuration files. It is designed for large polyglot repositories where a
full re-scan on every commit is too slow to sit in a pull-request gate.

<!-- more -->

## The rule model

Every diagnostic Strata can emit is a **rule**. A rule has a stable
namespaced identifier, a severity, an optional autofix, and a language scope.
Identifiers read as `lang/pack/name`, which keeps two languages from colliding
on the same short name:

```
py/security/sql-string-concat        error    autofix: no
go/concurrency/unguarded-map-write   error    autofix: no
ts/correctness/floating-promise      warning  autofix: yes
```

Rules are grouped into **packs** (for example `security`, `correctness`,
`style`). A pack can be enabled, disabled, or pinned to a severity floor in
configuration, so a team can gate on `security` while merely reporting `style`.

## Incremental caching

The engine never analyzes a file it has already analyzed unless something it
depends on has changed. After parsing, Strata builds a dependency graph keyed by
content hashes. The cache is content-addressed (CAS): the key for an analysis
result is a hash of the file's syntax tree plus the resolved versions of every
rule that ran against it. Change a rule and only the files that rule touches are
re-checked; change a file and only its dependents are invalidated.

```toml
# strata.toml
[cache]
dir = ".strata-cache"
format = "v3"          # content-addressed
max_size = "2GiB"

[analyze]
packs = ["security", "correctness"]
fail_on = "error"
baseline = ".strata-baseline.json"
```

On a warm cache, a typical service in our test monorepo re-analyzes in under a
second; a cold run over the same tree takes roughly forty. The
[release ledger](/releases/) records how those numbers, and the rule set behind
them, have moved release to release.

## Versioning

Strata follows semantic versioning at the level of the **rule contract**. A
minor release may add rules and fix false positives; a rule that becomes
stricter, changes its identifier, or is removed only lands in a major release,
always with an upgrade note and, where possible, a migration in the CLI.
