+++
title = "CLI Reference"
weight = 3
tags = ["reference", "cli"]
+++

# CLI Reference

The `dispatch` binary provides administrative commands for running the server, managing topics, and inspecting consumer state. This page lists every subcommand and its flags.

## Global Flags

| Flag | Description |
|------|-------------|
| `--config <path>` | Path to the configuration file |
| `--host <addr>` | Server address for client commands |
| `--log-level <level>` | Override logging level for this invocation |
| `--json` | Emit output as JSON |
| `--quiet` | Suppress non-error output |

## server

Manage the server process.

```bash
dispatch server start [--config <path>] [--port <port>]
dispatch server stop
dispatch server reload
```

The `reload` subcommand re-reads the configuration file without dropping active connections. Settings that require a restart, such as the listen port, are reported and skipped.

## topic

Create, list, and delete topics.

```bash
dispatch topic create <name> [--partitions <n>] [--retention <duration>]
dispatch topic list
dispatch topic describe <name>
dispatch topic delete <name>
```

`describe` returns the current partition layout, retention setting, and recent throughput numbers.

## consumer

Inspect consumer groups and individual consumer state.

```bash
dispatch consumer list [--topic <name>]
dispatch consumer lag <group>
dispatch consumer reset <group> --to <offset|timestamp>
```

The `reset` command moves a consumer group to a specific offset or wall-clock timestamp. It refuses to run while consumers in the group are active unless `--force` is passed.

## events

Publish and tail events from the command line. These commands are intended for debugging and small-scale operations.

```bash
dispatch events publish <topic> --payload '<json>'
dispatch events tail <topic> [--from <offset>]
```

## config

Validate and inspect configuration files.

```bash
dispatch config validate --config ./dispatch.yaml
dispatch config show
```

`show` prints the merged configuration after applying defaults, file values, environment variables, and command-line flags.
