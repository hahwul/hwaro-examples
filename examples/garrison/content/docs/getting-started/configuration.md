+++
title = "Configuration"
description = "Configure the Garrison firewall management platform"
tags = ["configuration", "getting-started"]
+++

# Configuration

Garrison uses a TOML configuration file for server settings and YAML files for policy definitions. This guide covers the server configuration. Policy definitions are covered in the Firewall Rules and Network Zones sections.

## Server Configuration

The primary configuration file is located at `/etc/garrison/config.toml`:

```toml
[server]
bind_address = "0.0.0.0"
port = 8443
tls_cert = "/etc/garrison/certs/server.crt"
tls_key = "/etc/garrison/certs/server.key"

[storage]
data_dir = "/var/lib/garrison"
audit_log = "/var/log/garrison/audit.log"
retention_days = 365

[auth]
method = "certificate"
ca_cert = "/etc/garrison/certs/ca.crt"
allowed_cns = ["admin@garrison", "deployer@garrison"]

[agents]
sync_interval = "30s"
heartbeat_timeout = "90s"
max_reconnect_attempts = 5

[logging]
level = "info"
format = "json"
output = "/var/log/garrison/server.log"
```

## Configuration Reference

### Server Section

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `bind_address` | string | `0.0.0.0` | Listen address for the policy API |
| `port` | integer | `8443` | Listen port for the policy API |
| `tls_cert` | string | required | Path to TLS certificate |
| `tls_key` | string | required | Path to TLS private key |
| `read_timeout` | duration | `30s` | HTTP read timeout |
| `write_timeout` | duration | `60s` | HTTP write timeout |

### Storage Section

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `data_dir` | string | `/var/lib/garrison` | State storage directory |
| `audit_log` | string | required | Path to the audit log file |
| `retention_days` | integer | `365` | Number of days to retain audit records |
| `backup_interval` | duration | `24h` | Automatic backup interval |

### Auth Section

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `method` | string | `certificate` | Authentication method (certificate, token) |
| `ca_cert` | string | required | Path to the CA certificate for client verification |
| `allowed_cns` | list | `[]` | List of allowed certificate Common Names |
| `token_file` | string | none | Path to token file (when method is token) |

### Agent Section

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `sync_interval` | duration | `30s` | How often agents poll for policy updates |
| `heartbeat_timeout` | duration | `90s` | Time before an agent is considered offline |
| `max_reconnect_attempts` | integer | `5` | Maximum reconnection attempts before backoff |

## TLS Certificate Setup

Generate a self-signed CA and server certificate for development:

```bash
# Generate CA key and certificate
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt \
  -subj "/CN=Garrison CA"

# Generate server key and CSR
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr \
  -subj "/CN=garrison-server"

# Sign the server certificate
openssl x509 -req -days 365 -in server.csr \
  -CA ca.crt -CAkey ca.key -CAcreateserial \
  -out server.crt
```

Move the certificates to the expected location:

```bash
sudo mkdir -p /etc/garrison/certs
sudo mv ca.crt server.crt server.key /etc/garrison/certs/
sudo chmod 600 /etc/garrison/certs/server.key
```

## Environment Variables

Configuration values can be overridden with environment variables using the `GARRISON_` prefix:

```bash
export GARRISON_SERVER_PORT=9443
export GARRISON_LOGGING_LEVEL=debug
export GARRISON_AGENTS_SYNC_INTERVAL=10s
```

> Environment variables take precedence over values in the configuration file. Use this for container deployments where file-based configuration is impractical.
