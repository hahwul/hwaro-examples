+++
title = "Configuration"
description = "Configure Logbook audit logging server"
tags = ["configuration", "setup", "getting-started"]
+++

# Configuration

Logbook uses a single YAML configuration file. By default, it looks for `/etc/logbook/logbook.yaml`.

## Minimal Configuration

A minimal configuration that starts the server with local storage:

```yaml
server:
  listen: "0.0.0.0:8443"
  log_level: "info"
  tls:
    cert: "/etc/logbook/tls/server.crt"
    key: "/etc/logbook/tls/server.key"

storage:
  type: "local"
  path: "/var/lib/logbook/data"
  retention:
    default: "2y"

chain:
  algorithm: "sha256"
  verification_interval: "1h"
```

## Server Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `server.listen` | string | `0.0.0.0:8443` | Address and port to bind |
| `server.log_level` | string | `info` | Log verbosity: debug, info, warn, error |
| `server.tls.cert` | string | -- | Path to TLS certificate file (required) |
| `server.tls.key` | string | -- | Path to TLS private key file (required) |
| `server.read_timeout` | duration | `30s` | HTTP read timeout |
| `server.write_timeout` | duration | `30s` | HTTP write timeout |
| `server.max_event_size` | string | `64KB` | Maximum size of a single audit event payload |

## Storage Backends

Logbook supports local disk storage and external databases:

```yaml
# Local storage (default)
storage:
  type: "local"
  path: "/var/lib/logbook/data"
  retention:
    default: "2y"
  wal_size: "256MB"

# PostgreSQL backend
storage:
  type: "postgres"
  dsn: "postgres://logbook:${DB_PASSWORD}@db:5432/logbook?sslmode=require"
  retention:
    default: "7y"
  pool_size: 20

# S3-compatible object store
storage:
  type: "s3"
  bucket: "logbook-archive"
  region: "us-east-1"
  prefix: "audit-logs/"
  retention:
    default: "7y"
```

## Chain Verification

The cryptographic hash chain ensures tamper evidence. Configure verification parameters:

```yaml
chain:
  algorithm: "sha256"           # Hash algorithm: sha256, sha384, sha512
  verification_interval: "1h"   # How often to verify chain integrity
  alert_on_failure: true         # Send alerts if chain verification fails
  checkpoint_interval: "24h"    # Create signed checkpoints for fast verification
```

## Ingestion Sources

Define which applications can submit audit events:

```yaml
ingestion:
  sources:
    - name: "web-application"
      api_key: "${WEB_APP_API_KEY}"
      allowed_types:
        - "auth.*"
        - "data.*"
      rate_limit: "1000/s"

    - name: "admin-service"
      api_key: "${ADMIN_API_KEY}"
      allowed_types:
        - "admin.*"
        - "authz.*"
      rate_limit: "500/s"

    - name: "infrastructure"
      api_key: "${INFRA_API_KEY}"
      allowed_types:
        - "system.*"
      rate_limit: "200/s"
```

## Notification Channels

Configure where alerts are delivered when audit anomalies are detected:

```yaml
notifications:
  channels:
    - name: "security-team"
      type: "slack"
      webhook_url: "${SLACK_WEBHOOK_URL}"
      channel: "#security-alerts"

    - name: "compliance-email"
      type: "email"
      smtp_host: "smtp.internal:587"
      from: "logbook@corp.internal"
      to:
        - "compliance@corp.internal"
        - "security@corp.internal"
```

## Environment Variables

Any configuration value can reference environment variables using the `${VAR_NAME}` syntax. Logbook resolves these at startup. Missing variables cause the server to fail with a descriptive error.

## Validating Configuration

Before starting the server, validate the configuration file:

```bash
logbook config validate --config /etc/logbook/logbook.yaml
```

This checks for syntax errors, unknown keys, valid TLS certificate paths, and valid retention period formats.
