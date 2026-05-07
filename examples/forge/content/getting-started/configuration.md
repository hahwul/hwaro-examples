+++
title = "Configuration"
weight = 3
template = "doc"
description = "Configure Forge using forge.toml, environment variables, and CLI flags."
tags = ["config"]
[extra]
category = "Setup"
version = "v2.0"
+++

## The forge.toml File

Each project has a `forge.toml` at its root. Forge reads it on every command unless `--no-config` is passed.

```toml
[project]
name = "my-project"
version = "0.1.0"
language = "go"

[build]
target = "dist/"
optimize = true
strip_symbols = false

[test]
parallel = true
race = true
coverage = "out/coverage.txt"

[lint]
ruleset = "default"
ignore = ["vendor/", "build/"]
```

## Resolution Order

When the same setting is defined in multiple places, Forge applies them in this order:

| Order | Source | Notes |
|-------|--------|-------|
| 1 | CLI flags | Highest priority, applies only to current command |
| 2 | Environment variables | Prefixed with `FORGE_` |
| 3 | `forge.toml` in project root | Checked into source control |
| 4 | `~/.config/forge/config.toml` | Per-user defaults |
| 5 | Built-in defaults | Used when nothing else is set |

## Environment Variables

```bash
export FORGE_BUILD_TARGET=build/
export FORGE_TEST_PARALLEL=false
export FORGE_LOG_LEVEL=debug
```

Variable names map to TOML paths by uppercasing and joining with underscores. Nested keys flatten in the same way.

## Profiles

Profiles let you switch sets of overrides with a single flag.

```toml
[profile.ci]
test.coverage = "ci-coverage.txt"
build.strip_symbols = true

[profile.release]
build.optimize = true
build.strip_symbols = true
```

Activate a profile with `forge build --profile release`.

## Validating Configuration

```bash
forge config check
```

The check command parses the file, applies overrides, and prints the resolved configuration. Use it to debug unexpected behavior before opening an issue.
