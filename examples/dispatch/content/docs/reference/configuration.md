+++
title = "Configuration"
weight = 2
tags = ["reference", "configuration"]
+++

# Configuration

The Dispatch server is configured through a YAML file, environment variables, or command-line flags. This page documents all available options.

## Configuration File

By default, the server looks for `dispatch.yaml` in the working directory. Override the path with the `--config` flag.

```bash
dispatch server start --config /etc/dispatch/dispatch.yaml
```

## Full Configuration Reference

```yaml
server:
  host: "0.0.0.0"
  port: 4222
  max_connections: 10000
  read_timeout: 30s
  write_timeout: 30s

storage:
  engine: "file"          # file or memory
  data_dir: "./data"
  max_segment_size: 64MB
  retention: 168h         # 7 days
  compaction_interval: 1h

topics:
  auto_create: true
  max_topics: 1000
  default_partitions: 1

delivery:
  ack_timeout: 30s
  max_retries: 5
  retry_backoff: "exponential"
  retry_initial: 1s
  retry_max: 60s

dead_letter:
  enabled: true
  retention: 720h        # 30 days
  max_events: 100000

logging:
  level: "info"           # debug, info, warn, error
  format: "json"          # json or text
  output: "stdout"        # stdout, stderr, or file path

metrics:
  enabled: true
  port: 9090
  path: "/metrics"
```

## Environment Variables

Every configuration key can be set via environment variables using the `DISPATCH_` prefix and underscore-separated path.

| Config Key                | Environment Variable              | Default     |
|---------------------------|-----------------------------------|-------------|
| server.host               | DISPATCH_SERVER_HOST              | 0.0.0.0     |
| server.port               | DISPATCH_SERVER_PORT              | 4222        |
| storage.engine            | DISPATCH_STORAGE_ENGINE           | file        |
| storage.data_dir          | DISPATCH_STORAGE_DATA_DIR         | ./data      |
| storage.retention         | DISPATCH_STORAGE_RETENTION        | 168h        |
| delivery.ack_timeout      | DISPATCH_DELIVERY_ACK_TIMEOUT     | 30s         |
| delivery.max_retries      | DISPATCH_DELIVERY_MAX_RETRIES     | 5           |
| dead_letter.enabled       | DISPATCH_DEAD_LETTER_ENABLED      | true        |
| logging.level             | DISPATCH_LOGGING_LEVEL            | info        |
| metrics.enabled           | DISPATCH_METRICS_ENABLED          | true        |

## Command-Line Flags

Flags override both the configuration file and environment variables.

```bash
dispatch server start \
  --port 4222 \
  --data-dir /var/lib/dispatch \
  --log-level debug \
  --retention 72h \
  --max-retries 3
```

## Storage Engines

Dispatch supports two storage backends.

| Engine   | Description                              | Use Case                |
|----------|------------------------------------------|-------------------------|
| file     | Append-only log segments on local disk   | Production deployments  |
| memory   | In-memory storage, lost on restart       | Development and testing |

## Retention Policy

Events are retained for the configured duration. Expired events are removed during compaction. The compaction process runs in the background at the configured interval and does not block event processing.

```yaml
storage:
  retention: 168h           # Keep events for 7 days
  compaction_interval: 1h   # Run compaction every hour
```

## Metrics

When metrics are enabled, the server exposes Prometheus-compatible metrics at the configured endpoint. Key metrics include events published, events delivered, consumer lag, and error counts.

```bash
curl http://localhost:9090/metrics
```

For details on the event format validated by the server, see [Message Schema](../message-schema/).
