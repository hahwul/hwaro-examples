+++
title = "Configuration"
description = "Configure Relay webhook platform"
tags = ["configuration", "getting-started"]
+++

# Configuration

Relay is configured through a TOML file. By default, the server looks for `relay.toml` in the current directory or `/etc/relay/relay.toml`.

## Configuration File

Create a `relay.toml` file with your settings:

```toml
[server]
host = "0.0.0.0"
port = 8080
read_timeout = "30s"
write_timeout = "30s"

[database]
driver = "sqlite"
dsn = "./relay.db"

[delivery]
max_retries = 5
retry_backoff = "exponential"
initial_delay = "1s"
max_delay = "5m"
timeout = "30s"

[signing]
algorithm = "hmac-sha256"
header = "X-Relay-Signature"

[logging]
level = "info"
format = "json"
```

## Environment Variables

All configuration values can be overridden with environment variables using the `RELAY_` prefix:

```bash
export RELAY_SERVER_PORT=9090
export RELAY_DATABASE_DRIVER=postgres
export RELAY_DATABASE_DSN="postgres://relay:secret@localhost:5432/relay"
export RELAY_LOGGING_LEVEL=debug
```

## Server Settings

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `server.host` | string | `0.0.0.0` | Bind address |
| `server.port` | integer | `8080` | Listen port |
| `server.read_timeout` | duration | `30s` | HTTP read timeout |
| `server.write_timeout` | duration | `30s` | HTTP write timeout |

## Database Settings

Relay supports SQLite for development and PostgreSQL for production:

```toml
# SQLite (default)
[database]
driver = "sqlite"
dsn = "./relay.db"

# PostgreSQL
[database]
driver = "postgres"
dsn = "postgres://user:pass@localhost:5432/relay?sslmode=require"
pool_size = 20
```

## Delivery Settings

Control retry behavior for failed webhook deliveries:

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `delivery.max_retries` | integer | `5` | Maximum retry attempts |
| `delivery.retry_backoff` | string | `exponential` | Backoff strategy: `fixed`, `linear`, or `exponential` |
| `delivery.initial_delay` | duration | `1s` | Delay before first retry |
| `delivery.max_delay` | duration | `5m` | Maximum delay between retries |
| `delivery.timeout` | duration | `30s` | HTTP timeout per delivery attempt |

With exponential backoff and default settings, retry delays follow this schedule:

```
Attempt 1: 1s
Attempt 2: 2s
Attempt 3: 4s
Attempt 4: 8s
Attempt 5: 16s (capped at max_delay)
```

## Validating Configuration

Check your configuration file for errors before starting the server:

```bash
relay config validate --config relay.toml
```

```
Configuration is valid.
  Server: 0.0.0.0:8080
  Database: sqlite (./relay.db)
  Delivery: 5 retries, exponential backoff
  Signing: hmac-sha256
```
