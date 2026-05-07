+++
title = "Configuration Reference"
date = "2025-02-21"
description = "Every option supported by devtool.toml"
+++

Configuration lives in a single `devtool.toml` file at the project root. The file is optional. When absent, devtool falls back to detected defaults based on the files present in the working directory.

## Top-level tables

The configuration is divided into four top-level tables: `project`, `build`, `env`, and `plugins`. Each table is independent and can be omitted. Unknown keys are ignored with a warning rather than a hard error, which makes forward compatibility straightforward when upgrading across minor versions.

```toml
[project]
name = "my-app"
version = "1.4.0"
license = "MIT"

[build]
target = "es2022"
minify = true
out_dir = "./dist"
sourcemaps = "external"
```

## Environment variables

The `env` table is loaded into the build process environment before any plugin executes. Values may reference other variables using `${VAR}` syntax. Lookup falls through to the host environment, so secrets injected by a CI runner remain available without restating them.

```toml
[env]
NODE_ENV = "production"
API_URL = "${PUBLIC_API_BASE}/v2"
```

## Plugins

Plugins are loaded in declaration order. Each plugin receives a sandboxed Lua context with read-only access to the project tree and a write-only handle to the output directory. The sandbox prevents accidental mutation of source files and makes plugin failures recoverable.

```toml
[[plugins]]
name = "tailwind"
entry = "./scripts/tailwind.lua"

[[plugins]]
name = "sitemap"
entry = "./scripts/sitemap.lua"
```

## Profiles

Profiles override individual fields without duplicating the full configuration. Activate one with `--profile` on the command line or by setting `DEVTOOL_PROFILE` in the environment.

```toml
[profiles.staging]
build.minify = false
env.API_URL = "https://staging.api.example.com"
```

Validation runs on every load. Invalid types, missing required fields, and unreachable plugin paths are reported with line numbers from the original TOML source.
