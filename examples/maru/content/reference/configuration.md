+++
title = "Configuration"
description = "The maru.toml schema: project settings, the cache block, and toolchain pinning."
date = "2025-10-02"
weight = 2
toc = true

[extra]
node = "ref:config"
+++

A project is configured by a single `maru.toml` at its root. It holds
project-wide settings, the cache configuration, toolchain pins, and the task
tables documented on the next page. This page covers everything except the tasks.

<!-- more -->

## The project block

```toml
[project]
name    = "atlas"
version = "1.4.0"
root    = "."          # everything is resolved relative to this
default = ["test"]     # targets built when `maru build` is run with no argument
```

`default` is a convenience: it lets `maru build` with no arguments mean
"build what matters" rather than "build every leaf". Everything a default target
depends on is built transitively.

## The cache block

```toml
[cache]
dir    = ".maru/cache"                       # local content-addressed store
remote = "https://cache.maru.build/atlas"    # optional shared cache
push   = "ci-only"                           # never | ci-only | always
max    = "10GB"                              # local store is GC'd past this size
```

`push` controls who writes to the remote. The common setup is `ci-only`:
developers read from the shared cache but only trusted CI runners populate it, so
a poisoned local build can never contaminate the team.

## Toolchain pins

Because the toolchain is part of every cache key, maru needs to know its digest.
Pin tools explicitly so an unrelated system upgrade does not silently invalidate
your whole cache:

```toml
[toolchain]
cc   = { version = "14.2", digest = "blake3:0b7d…e5a1" }
node = { version = "22.4", digest = "blake3:41f0…9c33" }
```

If a pinned digest does not match what is installed, maru refuses to build and
tells you which tool drifted, rather than producing results keyed to an unknown
compiler.

## Variables

Values can reference project fields and environment allowlist entries with
`${...}`. Expansion happens before the cache key is computed, so the expanded
string is what gets hashed:

```toml
[vars]
out_dir = "build/${project.version}"
```

Reference a variable anywhere a string is accepted, for example
`outputs = ["${vars.out_dir}/app"]`. Undefined variables are a configuration
error (exit code `2`), never an empty string.
