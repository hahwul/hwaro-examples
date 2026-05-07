+++
title = "Configuration Basics"
weight = 3
tags = ["getting-started", "configuration"]
+++

# Configuration Basics

After installing Dispatch and confirming the server starts, the next step is to set baseline configuration values for the environments you plan to run. This page covers the minimum settings most operators adjust before sending real traffic.

## Default Configuration

Without a configuration file, the server binds to `0.0.0.0:4222`, stores data in `./data`, and retains events for 168 hours. These defaults are intended for local development and should be reviewed before any deployment.

## Creating a Config File

Create `dispatch.yaml` in the working directory or a path of your choice.

```yaml
server:
  host: "127.0.0.1"
  port: 4222

storage:
  data_dir: "/var/lib/dispatch"
  retention: 72h

logging:
  level: "info"
  format: "json"
```

Start the server with the file path.

```bash
dispatch server start --config ./dispatch.yaml
```

## Choosing a Storage Engine

Two engines are supported. Use `file` for any deployment where data must survive a restart. The `memory` engine is appropriate for tests and ephemeral environments.

```yaml
storage:
  engine: "file"
  data_dir: "/var/lib/dispatch"
```

## Setting Retention

Retention controls how long published events remain available before compaction removes them. Shorter retention reduces disk usage and recovery time, but limits how far consumers can rewind.

```yaml
storage:
  retention: 24h
```

## Validating the Config

Run the validate subcommand to check the file for syntax errors and unknown keys before starting the server.

```bash
dispatch config validate --config ./dispatch.yaml
```

## Next Steps

Once the server is running with your configuration, continue to [Quickstart](../quickstart/) to publish a first event. The full set of configuration options is documented in the [Configuration](../../reference/configuration/) reference page.
