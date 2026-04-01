+++
title = "Configuration"
weight = 2
tags = ["setup", "configuration"]
+++

# Configuration

Conduit pipelines are defined in TOML or YAML configuration files. Each pipeline file describes a complete data flow from source through transforms to sink.

## Pipeline File Structure

A minimal pipeline configuration has three sections:

```toml
[pipeline]
name = "my-first-pipeline"
version = "1.0"

[source]
type = "file"
path = "/data/input/events.csv"
format = "csv"

[sink]
type = "file"
path = "/data/output/events.parquet"
format = "parquet"
```

## Global Configuration

Conduit reads global settings from `~/.conduit/config.toml`:

```toml
[runtime]
workers = 4
buffer_size = 10000
log_level = "info"
log_format = "json"

[metrics]
enabled = true
port = 9090
path = "/metrics"

[storage]
state_dir = "~/.conduit/state"
checkpoint_interval = "30s"
```

## Environment Variables

Configuration values can reference environment variables:

```toml
[source]
type = "postgresql"
connection = "${DATABASE_URL}"
```

{{ alert(type="warning", message="Never commit credentials directly in pipeline files. Always use environment variables or a secrets manager.") }}

## Validation

Before running a pipeline, validate the configuration:

```bash
conduit validate pipeline.toml
```

Expected output:

```
Validating pipeline.toml...
  Source:     file (csv) -- OK
  Transforms: 0 stages -- OK
  Sink:       file (parquet) -- OK
  Schema:     inferred -- OK

Pipeline "my-first-pipeline" is valid.
```

## Running a Pipeline

```bash
conduit run pipeline.toml
```

For continuous streaming mode:

```bash
conduit run --mode stream pipeline.toml
```

## Pipeline Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| `batch` | Processes all data then exits | Scheduled ETL jobs |
| `stream` | Runs continuously, processing new data | Real-time ingestion |
| `replay` | Reprocesses from a checkpoint | Recovery and backfill |

{{ hint(type="info", message="Batch mode is the default. Use --mode to override, or set it in the pipeline config.") }}

## Directory Layout

A typical Conduit project looks like this:

```
my-project/
  config.toml          # Global settings
  pipelines/
    user-events.toml   # Pipeline definition
    orders.toml        # Pipeline definition
  schemas/
    events.schema       # Schema definition
    orders.schema       # Schema definition
```

Next, learn how to build pipelines with [Sources](../../pipelines/sources/), [Transforms](../../pipelines/transforms/), and [Sinks](../../pipelines/sinks/).
