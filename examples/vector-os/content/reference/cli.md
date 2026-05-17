+++
title = "03.01 — CLI"
description = "All command-line flags accepted by the vector-os binary."
weight = 1

[extra]
section_label = "03 · Reference"
section_number = "03.01"
+++

The `vector-os` binary accepts a single subcommand followed by flags. Global
flags are accepted by every subcommand and are listed first.

## Global flags

| Flag                    | Type    | Default                       | Description                                      |
|-------------------------|---------|-------------------------------|--------------------------------------------------|
| `--config`              | path    | `/etc/vector-os/vector.toml`  | Configuration file path.                         |
| `--log-level`           | string  | `info`                        | One of `trace`, `debug`, `info`, `warn`, `error`. |
| `--log-format`          | string  | `text`                        | `text` or `json`.                                |
| `--no-color`            | bool    | `false`                       | Disable ANSI color in terminal output.           |
| `--profile`             | path    | unset                         | Write pprof CPU profile to the given path.       |
| `--version`             | bool    | `false`                       | Print version and exit.                          |

## Control plane flags

The `control` subcommand accepts the following flags in addition to the global
set.

| Flag                    | Type    | Default                       | Description                                      |
|-------------------------|---------|-------------------------------|--------------------------------------------------|
| `--listen`              | addr    | `0.0.0.0:7700`                | Listen address for gRPC and HTTP.                |
| `--advertise`           | addr    | derived                       | Address advertised to peers and workers.         |
| `--peers`               | list    | empty                         | Comma-separated peer addresses for Raft.         |
| `--data-dir`            | path    | `/var/lib/vector-os`          | Local state directory.                           |
| `--snapshot-interval`   | dur     | `10m`                         | Take a Raft snapshot every interval.             |
| `--election-timeout`    | dur     | `1s`                          | Raft election timeout.                           |

## Worker flags

The `worker` subcommand accepts the following flags in addition to the global
set.

| Flag                    | Type    | Default                       | Description                                      |
|-------------------------|---------|-------------------------------|--------------------------------------------------|
| `--upstream`            | url     | required                      | Control plane URL.                               |
| `--token`               | string  | unset                         | Join token; required for first start.            |
| `--zone`                | string  | unset                         | Failure domain label.                            |
| `--label`               | list    | empty                         | Additional `key=value` labels, comma-separated.  |
| `--capacity-cpu`        | int     | autodetect                    | Override advertised CPU count.                   |
| `--capacity-memory-gb`  | int     | autodetect                    | Override advertised memory in GiB.               |
| `--capacity-gpu`        | int     | autodetect                    | Override advertised GPU count.                   |
| `--drain-timeout`       | dur     | `5m`                          | Grace period when draining the node.             |
