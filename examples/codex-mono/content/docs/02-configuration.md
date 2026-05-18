+++
title = "Configuration"
description = "How the runtime locates and merges configuration sources."
date = "2026-04-04"
weight = 2
tags = ["setup", "config"]
+++

## Sources, in order of precedence

1. Command-line flags
2. Environment variables prefixed `CODEX_`
3. `./codex.toml` in the current working directory
4. `$XDG_CONFIG_HOME/codex/config.toml` (default `~/.config/codex/`)
5. Compiled-in defaults

Later sources override earlier ones field-by-field. The merge is non-destructive
for nested tables — only the keys you set are replaced.

## Reference

```toml
[runtime]
log_level = "info"      # trace | debug | info | warn | error
color     = "auto"      # auto | always | never
workers   = 0            # 0 = match available cores

[cache]
path     = "~/.codex/cache"
max_size = "256MB"
ttl      = "7d"

[telemetry]
enabled  = false
endpoint = "https://telemetry.example/v1/events"
```

## Inspecting the resolved config

```bash
codex config dump
codex config dump --format json
codex config dump --source       # show which file set each key
```

The `--source` flag is the fastest way to debug an unexpected value.
