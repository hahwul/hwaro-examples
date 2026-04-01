+++
title = "Welcome"
+++

# Conduit

A data pipeline framework for building reliable ETL workflows. Conduit provides a declarative approach to defining data pipelines with three core stages: source, transform, and sink.

## Pipeline Architecture

```
  +----------+     +-------------+     +--------+
  |  Source   | --> |  Transform  | --> |  Sink  |
  +----------+     +-------------+     +--------+
  | Database  |     | Filter      |     | File   |
  | API       |     | Map         |     | DB     |
  | File      |     | Aggregate   |     | API    |
  | Stream    |     | Join        |     | Stream |
  +----------+     +-------------+     +--------+
```

## Features

- **Declarative Pipelines** -- Define data flows in TOML or YAML configuration
- **Type-Safe Schemas** -- Validate data at every stage with strict typing
- **Built-in Transforms** -- Filter, map, aggregate, join, and more
- **Pluggable Sources and Sinks** -- Connect to databases, APIs, files, and streams
- **Backpressure Handling** -- Automatic flow control for varying throughput
- **Observability** -- Built-in metrics, logging, and tracing

## Quick Start

Get started by exploring the sidebar sections, or jump straight to the [Getting Started](docs/getting-started/) guide.

## Example Pipeline

```toml
[pipeline]
name = "user-events"
version = "1.0"

[source]
type = "postgresql"
connection = "postgres://localhost:5432/analytics"
query = "SELECT * FROM events WHERE created_at > :last_run"

[[transforms]]
type = "filter"
condition = "event_type != 'internal'"

[[transforms]]
type = "map"
fields = { user_id = "user.id", action = "event_type", ts = "created_at" }

[sink]
type = "parquet"
path = "/data/warehouse/events/"
partition_by = ["ts:date"]
```
