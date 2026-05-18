+++
title = "Command Reference"
description = "Every subcommand the runtime exposes."
date = "2026-04-08"
weight = 3
tags = ["reference"]
+++

## Synopsis

```
codex [GLOBAL_FLAGS] <command> [COMMAND_FLAGS] [ARGS...]
```

## Global flags

| Flag                | Default  | Description                                   |
|---------------------|----------|-----------------------------------------------|
| `-c, --config PATH` | autodet. | Path to an alternate config file.             |
| `--log-level LVL`   | `info`   | One of `trace`, `debug`, `info`, `warn`.      |
| `--no-color`        | off      | Disable ANSI escapes regardless of TTY.       |
| `--cwd PATH`        | `.`      | Run as if invoked from this directory.        |

## Subcommands

### `codex build`

Compile the project in the current directory. Output is placed under `./out/`.

```
codex build [--release] [--target TRIPLE] [--features LIST]
```

### `codex run`

Build, then execute the resulting binary with the supplied arguments.

```
codex run [--release] -- arg1 arg2 ...
```

### `codex test`

Run the test suite. Recognises `-p PACKAGE` to scope to a single package, and
`--filter PATTERN` to select tests by name.

### `codex doctor`

Print a diagnostic report. Use this before opening a bug.
