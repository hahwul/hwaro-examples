+++
title = "Sinks"
weight = 3
tags = ["pipelines", "sinks"]
+++

# Sinks

Sinks are the final stage of a pipeline. They define where processed data is written. Each pipeline has exactly one sink.

## Available Sinks

| Sink | Type Key | Description |
|------|----------|-------------|
| PostgreSQL | `postgresql` | Write to PostgreSQL tables |
| MySQL | `mysql` | Write to MySQL tables |
| File | `file` | Write CSV, JSON, Parquet, or Avro files |
| Kafka | `kafka` | Produce to Kafka topics |
| S3 | `s3` | Write objects to S3-compatible storage |
| Elasticsearch | `elasticsearch` | Index documents into Elasticsearch |
| Stdout | `stdout` | Print records to standard output |

## File Sink

Write processed records to structured files on disk.

```toml
[sink]
type = "file"
path = "/data/warehouse/events/"
format = "parquet"

[sink.options]
compression = "snappy"
partition_by = ["year", "month"]
max_file_size = "256MB"
naming = "{partition}/{timestamp}.parquet"
```

### Partitioning

File sinks support partitioning by field values, which organizes output into directories:

```
/data/warehouse/events/
  year=2025/
    month=01/
      1706745600.parquet
      1706832000.parquet
    month=02/
      1709251200.parquet
```

## Database Sink

Write records to a relational database table.

```toml
[sink]
type = "postgresql"
connection = "${WAREHOUSE_URL}"
table = "processed_events"
schema = "analytics"

[sink.options]
batch_size = 1000
on_conflict = "upsert"
conflict_keys = ["event_id"]
timeout = "30s"
```

### Write Modes

| Mode | Description |
|------|-------------|
| `append` | Insert new rows (default) |
| `upsert` | Insert or update on conflict |
| `replace` | Truncate and reload |
| `merge` | SCD Type 2 merge |

{{ hint(type="info", message="Upsert mode requires specifying conflict_keys to identify existing records.") }}

## Kafka Sink

Produce processed records to Kafka topics.

```toml
[sink]
type = "kafka"
brokers = ["broker-1:9092", "broker-2:9092"]
topic = "processed-events"

[sink.options]
format = "json"
key_field = "event_id"
compression = "lz4"
acks = "all"
batch_size = 500
linger_ms = 100
```

## S3 Sink

Write files to S3-compatible object storage.

```toml
[sink]
type = "s3"
bucket = "data-lake-prod"
prefix = "events/processed/"
format = "parquet"
region = "us-east-1"

[sink.options]
compression = "zstd"
partition_by = ["date"]
max_file_size = "128MB"
```

{{ alert(type="warning", message="Ensure your IAM credentials have s3:PutObject and s3:ListBucket permissions for the target bucket.") }}

## Elasticsearch Sink

Index documents into Elasticsearch for search and analytics.

```toml
[sink]
type = "elasticsearch"
hosts = ["https://es-cluster:9200"]
index = "events-{date}"

[sink.options]
id_field = "event_id"
bulk_size = 500
refresh_interval = "5s"
pipeline = "enrich-geoip"
```

## Stdout Sink

Print records to standard output for debugging and development.

```toml
[sink]
type = "stdout"
format = "json"

[sink.options]
pretty = true
limit = 100
```

## Delivery Guarantees

| Sink Type | At-Least-Once | Exactly-Once |
|-----------|:---:|:---:|
| File | Yes | Yes |
| PostgreSQL | Yes | Yes (with upsert) |
| Kafka | Yes | Yes (with transactions) |
| S3 | Yes | No |
| Elasticsearch | Yes | Yes (with id_field) |
| Stdout | No | No |

Conduit provides at-least-once delivery by default through checkpointing. For exactly-once semantics, configure the sink-specific deduplication mechanism as noted above.
