+++
title = "01.04 — Configuration"
description = "The single configuration file: layout, defaults, and overrides."
weight = 4

[extra]
section_label = "01 · Docs"
section_number = "01.04"
+++

Vector OS reads one configuration file at startup. The default path is
`/etc/vector-os/vector.toml` on Linux and `~/.config/vector-os/vector.toml` on
macOS. Override the path with `--config` or the `VECTOR_CONFIG` environment
variable. Everything else can be set at the command line; the file is the
canonical source.

## Minimum viable config

A single-node deployment needs only the data directory and a listen address:

```toml
[control_plane]
listen = "0.0.0.0:7700"
data_dir = "/var/lib/vector-os"

[worker]
enabled = true
```

## Production config

A three-node control plane with a worker pool and Postgres-backed state:

```toml
[control_plane]
listen = "0.0.0.0:7700"
advertise = "10.0.0.11:7700"
peers = ["10.0.0.12:7700", "10.0.0.13:7700"]
data_dir = "/var/lib/vector-os"

[control_plane.store]
backend = "postgres"
dsn = "postgres://vector:secret@db.internal:5432/vector"
pool_size = 16

[scheduler]
strategy = "binpack"
preempt = true
fairness = "weighted"

[worker]
enabled = false

[metrics]
listen = "0.0.0.0:9100"
format = "prometheus"

[audit]
enabled = true
sink = "file:///var/log/vector-os/audit.jsonl"
```

## Per-node overrides

A worker node typically disables the control plane block and points at the
upstream cluster:

```toml
[control_plane]
enabled = false

[worker]
enabled = true
upstream = "https://control.vector.internal:7700"
zone = "us-east-1a"
labels = { gpu = "h100", storage = "nvme" }
capacity = { cpu = 96, memory_gb = 768, gpu = 8 }
```

## Validation

The `vector-os config check` command parses the file, applies the same
validation as the runtime, and prints any problems it finds. It exits non-zero
on any error, which makes it suitable for CI.
