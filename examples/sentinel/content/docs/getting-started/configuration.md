+++
title = "Configuration"
description = "Configure Sentinel monitoring server"
tags = ["configuration", "setup", "getting-started"]
+++

# Configuration

Sentinel uses a single YAML configuration file. By default, it looks for `/etc/sentinel/sentinel.yaml`.

## Minimal Configuration

A minimal configuration that starts the server with local storage:

```yaml
server:
  listen: "0.0.0.0:9090"
  log_level: "info"

storage:
  type: "local"
  path: "/var/lib/sentinel/data"
  retention: "30d"

scrape:
  interval: "15s"
  timeout: "10s"
  targets:
    - name: "self"
      url: "http://localhost:9090/metrics"
```

## Server Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `server.listen` | string | `0.0.0.0:9090` | Address and port to bind |
| `server.log_level` | string | `info` | Log verbosity: debug, info, warn, error |
| `server.tls.cert` | string | -- | Path to TLS certificate file |
| `server.tls.key` | string | -- | Path to TLS private key file |
| `server.read_timeout` | duration | `30s` | HTTP read timeout |
| `server.write_timeout` | duration | `30s` | HTTP write timeout |

## Storage Backends

Sentinel supports local disk storage and external time-series databases:

```yaml
# Local storage (default)
storage:
  type: "local"
  path: "/var/lib/sentinel/data"
  retention: "30d"
  wal_size: "128MB"

# InfluxDB backend
storage:
  type: "influxdb"
  url: "http://influxdb:8086"
  org: "monitoring"
  bucket: "sentinel"
  token: "${INFLUX_TOKEN}"
```

## Scrape Configuration

Define targets for metric collection. Each target specifies a URL that exposes metrics in Prometheus exposition format:

```yaml
scrape:
  interval: "15s"
  timeout: "10s"
  targets:
    - name: "web-servers"
      url: "http://web-1:9100/metrics"
      labels:
        env: "production"
        team: "platform"

    - name: "database"
      url: "http://db-1:9187/metrics"
      labels:
        env: "production"
        team: "data"
```

## Notification Channels

Configure where alert notifications are delivered:

```yaml
notifications:
  channels:
    - name: "ops-slack"
      type: "slack"
      webhook_url: "${SLACK_WEBHOOK_URL}"
      channel: "#ops-alerts"

    - name: "pagerduty"
      type: "pagerduty"
      routing_key: "${PD_ROUTING_KEY}"
      severity_map:
        critical: "critical"
        warning: "warning"
        info: "info"

    - name: "email-oncall"
      type: "email"
      smtp_host: "smtp.internal:587"
      from: "sentinel@corp.internal"
      to:
        - "oncall@corp.internal"
```

## Environment Variables

Any configuration value can reference environment variables using the `${VAR_NAME}` syntax. Sentinel resolves these at startup. Missing variables cause the server to fail with a descriptive error.

## Validating Configuration

Before starting the server, validate the configuration file:

```bash
sentinel config validate --config /etc/sentinel/sentinel.yaml
```

This checks for syntax errors, unknown keys, and invalid references between alert rules and notification channels.
