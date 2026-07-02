+++
title = "Ruby support in beta, plus cache warming"
date = "2025-04-15"
description = "Ruby joins the engine as a beta language pack, and a new cache-warming command lets CI prime the incremental cache ahead of the gate."
template = "release"
tags = ["ruby", "cli", "cache"]
[extra]
version = "3.4.0"
codename = "Quartz"
added = 12
fixed = 24
removed = 1
total = 1195
breaking = false
+++

Quartz adds Ruby as the tenth language, in beta, and introduces cache warming so
a scheduled job can build the incremental cache before developers or CI need it —
turning what would be a cold forty-second run into a warm sub-second one.

<!-- more -->

## Highlights

- **Ruby (beta).** Twelve correctness and security rules to start, covering
  `eval` on untrusted input, unsafe `Marshal.load`, and mass-assignment patterns
  in common web frameworks. Parsing is complete; dataflow lands later in the 3.x
  line.
- **Cache warming.** `strata warm` analyzes the tree and populates the cache
  without printing findings or failing the build. Point a nightly job at it and
  the morning's first real run reuses everything unchanged overnight.

## New rules

```
rb/security/eval-untrusted            error    autofix: no
rb/security/marshal-load              error    autofix: no
rb/correctness/shadowed-method-arg    warning  autofix: yes
```

## Cache warming in CI

```bash
# nightly: prime the shared cache
strata warm --cache s3://ci-cache/strata

# pull-request gate: reuse it
strata analyze --cache s3://ci-cache/strata --fail-on error
```

## Fixes and changes

Twenty-four fixes, including a correctness fix for the TypeScript pack's handling
of `satisfies` expressions and a Python fix so `py/style/unused-import` respects
`__all__`. One deprecated CLI flag, `--legacy-report`, was removed.

## Cache notes

Warming writes the same v-format cache a normal run does, so warm and analyze are
fully interchangeable against a shared cache directory or object store.
