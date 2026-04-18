+++
title = "Configuration Reference"
description = "Complete configuration reference for Bastion gateway and policies"
weight = 1
+++

# Configuration Reference

Bastion is configured through YAML files located in `/etc/bastion/`. This page documents all available configuration options.

## File Structure

```
/etc/bastion/
  config.yaml          # Main gateway configuration
  policies/            # Policy definitions
    identity.yaml
    network.yaml
    device.yaml
  certs/               # TLS certificates and keys
    ca.pem
    server.pem
    server-key.pem
    ssh-ca
    ssh-ca.pub
```

## Gateway Configuration

The main `config.yaml` controls the Bastion gateway:

```yaml
gateway:
  listen: "0.0.0.0:8443"
  admin_listen: "127.0.0.1:9443"
  log_level: info
  max_connections: 10000
  idle_timeout: 300s
  read_timeout: 30s
  write_timeout: 30s
  shutdown_grace: 15s

  tls:
    cert: /etc/bastion/certs/server.pem
    key: /etc/bastion/certs/server-key.pem
    ca: /etc/bastion/certs/ca.pem
    min_version: "1.2"
    cipher_suites:
      - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
      - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
      - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305
```

## Configuration Options

### Gateway

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `gateway.listen` | string | `0.0.0.0:8443` | Gateway listen address |
| `gateway.admin_listen` | string | `127.0.0.1:9443` | Admin API listen address |
| `gateway.log_level` | string | `info` | Log level: debug, info, warn, error |
| `gateway.max_connections` | integer | `10000` | Maximum concurrent connections |
| `gateway.idle_timeout` | duration | `300s` | Connection idle timeout |
| `gateway.read_timeout` | duration | `30s` | Request read timeout |
| `gateway.write_timeout` | duration | `30s` | Response write timeout |
| `gateway.shutdown_grace` | duration | `15s` | Graceful shutdown period |

### TLS

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `gateway.tls.cert` | string | required | Path to TLS certificate |
| `gateway.tls.key` | string | required | Path to TLS private key |
| `gateway.tls.ca` | string | required | Path to CA certificate bundle |
| `gateway.tls.min_version` | string | `1.2` | Minimum TLS version (1.2, 1.3) |
| `gateway.tls.cipher_suites` | list | see above | Allowed cipher suites |
| `gateway.tls.client_auth` | string | `require` | Client auth mode: require, request, none |

### Identity Provider

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `identity.provider` | string | required | Provider type: oidc, saml, mtls |
| `identity.issuer` | string | required | OIDC issuer URL |
| `identity.client_id` | string | required | OAuth 2.0 client ID |
| `identity.client_secret_env` | string | -- | Environment variable for client secret |
| `identity.scopes` | list | `[openid]` | OIDC scopes to request |
| `identity.claim_mappings.username` | string | `sub` | JWT claim for username |
| `identity.claim_mappings.groups` | string | `groups` | JWT claim for group membership |
| `identity.claim_mappings.email` | string | `email` | JWT claim for email |

### Audit

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `audit.enabled` | boolean | `true` | Enable audit logging |
| `audit.output` | string | `file` | Output type: file, stdout, syslog, webhook |
| `audit.path` | string | `/var/log/bastion/audit.json` | File output path |
| `audit.format` | string | `json` | Log format: json, cef |
| `audit.rotation.max_size` | string | `100MB` | Maximum file size before rotation |
| `audit.rotation.max_age` | duration | `90d` | Maximum age of rotated files |
| `audit.rotation.max_files` | integer | `30` | Maximum number of rotated files |

### SSH CA

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ssh_ca.enabled` | boolean | `false` | Enable SSH CA functionality |
| `ssh_ca.signing_key` | string | required | Path to SSH CA signing key |
| `ssh_ca.default_ttl` | duration | `8h` | Default certificate TTL |
| `ssh_ca.max_ttl` | duration | `24h` | Maximum certificate TTL |
| `ssh_ca.allowed_principals` | list | `[]` | Allowed certificate principals |

## Environment Variables

Bastion reads the following environment variables:

| Variable | Description |
|----------|-------------|
| `BASTION_CONFIG` | Override config file path |
| `BASTION_LOG_LEVEL` | Override log level |
| `BASTION_OIDC_SECRET` | OIDC client secret |
| `BASTION_ENROLLMENT_TOKEN` | Device enrollment token |
| `BASTION_ADMIN_TOKEN` | Admin API authentication token |

## Configuration Validation

Validate configuration before applying:

```bash
$ bastion config validate --config /etc/bastion/config.yaml

Configuration valid.
  Gateway:    0.0.0.0:8443
  TLS:        min_version=1.2, ciphers=3
  Identity:   oidc (auth.example.com)
  Policies:   5 loaded
  Audit:      enabled (json -> /var/log/bastion/audit.json)
```

## TOML Alternative

Bastion also supports TOML configuration format:

```toml
[gateway]
listen = "0.0.0.0:8443"
admin_listen = "127.0.0.1:9443"
log_level = "info"
max_connections = 10000

[gateway.tls]
cert = "/etc/bastion/certs/server.pem"
key = "/etc/bastion/certs/server-key.pem"
ca = "/etc/bastion/certs/ca.pem"
min_version = "1.2"

[identity]
provider = "oidc"
issuer = "https://auth.example.com"
client_id = "bastion-gateway"

[audit]
enabled = true
output = "file"
path = "/var/log/bastion/audit.json"
format = "json"
```
