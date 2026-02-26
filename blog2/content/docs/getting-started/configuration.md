+++
title = "Configuration"
weight = 3
description = "Configure your Acme project with acme.toml"
+++

All project settings live in `acme.toml` at the root of your project.

## Minimal Config

```toml
[project]
name = "my-project"
version = "0.1.0"

[build]
target = "release"
```

## Configuration Reference

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `project.name` | string | required | Project name |
| `project.version` | string | `"0.1.0"` | Semantic version |
| `build.target` | string | `"debug"` | Build profile |
| `build.output_dir` | string | `"dist"` | Output directory |
| `server.port` | integer | `4000` | Dev server port |

## Environment Variables

Override any config value with environment variables:

```bash
ACME_BUILD_TARGET=release acme build
ACME_SERVER_PORT=8080 acme run
```
