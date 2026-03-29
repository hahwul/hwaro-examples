+++
title = "Sources"
weight = 1
tags = ["pipelines", "sources"]
+++

# Sources

Sources are the entry point of every pipeline. They define where data is read from and how it is initially parsed.

## Available Sources

| Source | Type Key | Description |
|--------|----------|-------------|
| PostgreSQL | `postgresql` | Read from PostgreSQL queries or CDC streams |
| MySQL | `mysql` | Read from MySQL queries or binlog |
| File | `file` | Read CSV, JSON, Parquet, or Avro files |
| Kafka | `kafka` | Consume from Kafka topics |
| HTTP API | `http` | Poll REST endpoints on a schedule |
| S3 | `s3` | Read objects from S3-compatible storage |
| Generator | `generator` | Produce synthetic data for testing |

## File Source

The file source reads structured data from local or remote files.

```toml
[source]
type = "file"
path = "/data/input/events.csv"
format = "csv"

[source.options]
delimiter = ","
header = true
encoding = "utf-8"
skip_rows = 0
```

### Supported File Formats

| Format | Extension | Schema |
|--------|-----------|--------|
| CSV | `.csv` | Inferred or explicit |
| JSON Lines | `.jsonl` | Inferred or explicit |
| Parquet | `.parquet` | Embedded |
| Avro | `.avro` | Embedded |

## Database Source

Database sources execute queries and stream results through the pipeline.

```toml
[source]
type = "postgresql"
connection = "${DATABASE_URL}"
query = """
  SELECT user_id, event_type, payload, created_at
  FROM events
  WHERE created_at > :last_checkpoint
  ORDER BY created_at ASC
"""

[source.options]
fetch_size = 5000
timeout = "60s"
```

{{ hint(type="info", message="The :last_checkpoint placeholder is automatically replaced with the timestamp from the last successful run.") }}

## Kafka Source

Consume records from one or more Kafka topics.

```toml
[source]
type = "kafka"
brokers = ["broker-1:9092", "broker-2:9092"]
topics = ["user-events", "order-events"]
group_id = "conduit-pipeline-01"

[source.options]
format = "json"
start_offset = "latest"
commit_interval = "5s"
```

## HTTP Source

Poll a REST API on a configurable schedule.

```toml
[source]
type = "http"
url = "https://api.example.com/v1/events"
method = "GET"
schedule = "*/5 * * * *"

[source.options]
format = "json"
json_path = "$.data[*]"
headers = { Authorization = "Bearer ${API_TOKEN}" }
timeout = "30s"
```

{{ alert(type="warning", message="HTTP sources are best suited for low-volume, batch-oriented ingestion. For high-throughput real-time data, use Kafka or database CDC.") }}

## Generator Source

The generator source produces synthetic data for testing and development.

```toml
[source]
type = "generator"
records = 100000
rate = 1000

[source.schema]
user_id = { type = "uuid" }
name = { type = "string", faker = "name" }
email = { type = "string", faker = "email" }
amount = { type = "float", min = 0.01, max = 9999.99 }
created_at = { type = "timestamp", range = "last_30d" }
```
