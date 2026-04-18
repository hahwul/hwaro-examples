+++
title = "Configuration"
weight = 3
template = "doc"
description = "Reference for the pantry.toml configuration file and environment variables."
tags = ["config", "reference"]
[extra]
category = "Reference"
+++

## Configuration File

All project configuration lives in `pantry.toml` at the root of your project. This file defines your package metadata, dependencies, scripts, and workspace layout.

## Package Metadata

```toml
[package]
name = "my-library"
version = "1.4.0"
description = "A useful library for data processing"
license = "MIT"
authors = ["Alice <alice@example.com>"]
repository = "https://github.com/alice/my-library"
homepage = "https://my-library.dev"
keywords = ["data", "processing", "etl"]
readme = "README.md"
include = ["src/**/*", "LICENSE"]
exclude = ["tests/**/*", "benches/**/*"]
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Package name. Must be lowercase, alphanumeric, with hyphens allowed. |
| `version` | string | Semantic version (e.g., `1.4.0`). Must follow semver. |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | Short description displayed in search results. Max 200 characters. |
| `license` | string | SPDX license identifier (e.g., `MIT`, `Apache-2.0`). |
| `authors` | array | List of author names with optional email addresses. |
| `repository` | string | URL to the source code repository. |
| `homepage` | string | URL to the project homepage. |
| `keywords` | array | Up to 5 keywords for search discovery. |
| `readme` | string | Path to the README file included in the published package. |
| `include` | array | Glob patterns for files to include when publishing. |
| `exclude` | array | Glob patterns for files to exclude when publishing. |

## Dependencies

```toml
[dependencies]
reqwest = "0.12.4"
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.38", optional = true }

[dev-dependencies]
jest-runner = "2.1"
test-utils = { path = "../test-utils" }

[build-dependencies]
codegen = "0.5"
```

### Dependency Specification Formats

| Format | Example | Meaning |
|--------|---------|---------|
| Simple string | `"1.4.0"` | Caret range `^1.4.0` |
| Table with version | `{ version = "1.4" }` | Same as simple, with extra options |
| Path dependency | `{ path = "../lib" }` | Local filesystem path |
| Git dependency | `{ git = "https://...", branch = "main" }` | Git repository reference |
| Features | `{ version = "1.0", features = ["derive"] }` | Enable optional features |
| Optional | `{ version = "1.0", optional = true }` | Only installed when feature is activated |

## Scripts

Define reusable commands that run in the project context:

```toml
[scripts]
build = "pantry-build --release"
test = "pantry-test --parallel"
lint = "pantry-lint src/"
format = "pantry-fmt --check src/"
dev = "pantry-serve --watch --port 8080"
clean = "rm -rf dist/ .pantry-cache/"
```

Run a script with:

```bash
pantry run build
pantry run test
```

### Script Hooks

Pre and post hooks run automatically before and after a script:

```toml
[scripts]
prebuild = "pantry run lint"
build = "pantry-build --release"
postbuild = "cp -r dist/ deploy/"
```

## Workspaces

For monorepo projects, define workspace members:

```toml
[workspace]
members = [
  "packages/core",
  "packages/cli",
  "packages/web",
]
resolver = "2"
```

Workspace members share a single lockfile and can reference each other as path dependencies.

## Registry Configuration

```toml
[registry]
default = "https://registry.pantry.dev"

[registry.private]
url = "https://registry.internal.company.com"
token_env = "PANTRY_PRIVATE_TOKEN"
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PANTRY_HOME` | Base directory for Pantry data | `~/.pantry` |
| `PANTRY_CACHE_DIR` | Cache directory for downloaded packages | `$PANTRY_HOME/cache` |
| `PANTRY_REGISTRY` | Override the default registry URL | `https://registry.pantry.dev` |
| `PANTRY_TOKEN` | Authentication token for publishing | (none) |
| `PANTRY_LOG` | Log level: `error`, `warn`, `info`, `debug`, `trace` | `warn` |
| `PANTRY_OFFLINE` | Set to `1` to force offline mode | `0` |
| `PANTRY_JOBS` | Number of parallel download jobs | Number of CPU cores |
| `PANTRY_NO_COLOR` | Disable colored output when set to `1` | `0` |

## Global Configuration

User-level configuration is stored at `~/.pantry/config.toml`:

```toml
[defaults]
registry = "https://registry.pantry.dev"
jobs = 8
color = true

[auth]
token = "ptry_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

[cache]
max_size = "10GB"
ttl_days = 30
```

Override global settings per-project by adding the same keys to your project `pantry.toml`.
