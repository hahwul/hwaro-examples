+++
title = "CLI Reference"
weight = 3
tags = ["reference", "cli"]
+++

# CLI Reference

The `conduit` binary exposes pipeline lifecycle, validation, and inspection commands. Every command accepts the global `--config FILE` flag, which defaults to `./conduit.toml`.

## conduit run

Run one or more pipelines.

```bash
conduit run --pipeline NAME [--pipeline NAME ...]
```

| Flag | Description |
|------|-------------|
| `--pipeline` | Pipeline name. Repeat to run several concurrently. |
| `--all` | Run every pipeline declared in the config. |
| `--dry-run` | Validate the plan and exit without reading from sources. |
| `--metrics-addr` | Override the metrics endpoint address. |

Exit code 0 indicates a clean shutdown. Exit code 1 indicates a startup error. Exit code 2 indicates a pipeline failed mid-run.

## conduit validate

Parse the configuration and check schema references without starting any pipeline.

```bash
conduit validate
```

Errors print to stderr in the form `<file>:<line>:<column>: <message>`. The command is suitable for use in pre-commit hooks or CI pipelines.

## conduit inspect

Print resolved pipeline plans, including transform order and inferred schemas.

```bash
conduit inspect --pipeline NAME [--format json|yaml|tree]
```

Use the `tree` format for human reading and the `json` format for machine consumption.

## conduit migrate

Apply schema migrations declared under the `migrations` directory.

```bash
conduit migrate --target VERSION
```

| Flag | Description |
|------|-------------|
| `--target` | Migration version to apply. Defaults to the latest. |
| `--dry-run` | Print the migration plan without modifying state. |

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `CONDUIT_CONFIG` | Default value for `--config`. |
| `CONDUIT_LOG_LEVEL` | One of `trace`, `debug`, `info`, `warn`, `error`. |
| `CONDUIT_NO_COLOR` | When set, disables ANSI colors. |

The CLI honors `NO_COLOR` as a fallback when `CONDUIT_NO_COLOR` is unset.
