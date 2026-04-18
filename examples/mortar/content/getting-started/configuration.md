+++
title = "Configuration"
weight = 3
date = 2025-06-03
+++

# Configuration

All Mortar projects are configured through a `mortar.toml` file at the project root. This file defines project metadata, build targets, dependencies, and compiler settings.

## Minimal Configuration

A basic `mortar.toml` looks like this:

```toml
[project]
name = "my-app"
version = "1.0.0"
language = "c"

[build]
output_dir = "build"

[[targets]]
name = "default"
sources = ["src/**/*.c"]
output = "my-app"
```

## Project Section

The `[project]` section defines metadata about your project:

```toml
[project]
name = "my-app"
version = "1.2.0"
language = "c"          # c, cpp, rust, go
authors = ["team@example.com"]
license = "MIT"
```

## Build Section

The `[build]` section controls global build behavior:

```toml
[build]
output_dir = "build"
parallel = true
jobs = 8                # Number of parallel jobs
cache = true            # Enable local build cache
cache_dir = ".mortar/cache"
```

| Key         | Type    | Default          | Description                    |
|-------------|---------|------------------|--------------------------------|
| output_dir  | string  | `"build"`        | Directory for build artifacts  |
| parallel    | bool    | `true`           | Enable parallel compilation    |
| jobs        | integer | CPU count        | Max parallel jobs              |
| cache       | bool    | `true`           | Enable build caching           |
| cache_dir   | string  | `".mortar/cache"`| Local cache directory          |
| verbose     | bool    | `false`          | Verbose compiler output        |

## Environment Variables

Mortar reads several environment variables that override config values:

```bash
MORTAR_JOBS=4 mortar build           # Override job count
MORTAR_VERBOSE=1 mortar build        # Force verbose output
MORTAR_CACHE=0 mortar build          # Disable caching
MORTAR_OUTPUT_DIR=dist mortar build  # Change output directory
```

> Environment variables always take precedence over `mortar.toml` settings. This is useful for CI/CD pipelines where you want to override defaults without modifying the config file.

## Configuration Validation

Check your configuration for errors:

```bash
mortar config check
# mortar.toml: valid (3 targets, 2 dependencies)
```
