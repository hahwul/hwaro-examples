+++
title = "Storing Secrets"
weight = 1
template = "doc"
description = "How to store secrets in the vault with proper encryption and metadata."
tags = ["secrets", "encryption"]
[extra]
category = "Core"
security_level = "high"
+++

## Overview

All secrets stored in Vault are encrypted at rest using AES-256-GCM. Each secret is associated with a path, version history, and access policy.

## Writing a Secret

### CLI

```bash
vault kv put secret/database/prod \
  username="db_admin" \
  password="••••••••••••" \
  host="db.internal.example.com" \
  port="5432"
```

### API

```bash
curl -X POST https://vault.example.com/v1/secret/data/database/prod \
  -H "X-Vault-Token: s.••••••••••••" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "username": "db_admin",
      "password": "••••••••••••",
      "host": "db.internal.example.com",
      "port": "5432"
    }
  }'
```

## Path Conventions

| Path Pattern | Usage |
|-------------|-------|
| `secret/database/{env}` | Database credentials |
| `secret/api-keys/{service}` | API keys and tokens |
| `secret/tls/{domain}` | TLS certificates and private keys |
| `secret/config/{app}` | Application configuration secrets |

## Metadata

Each secret version includes:

- **Version number** -- Auto-incremented on each write
- **Created timestamp** -- When the version was written
- **Deletion time** -- When the version will be auto-deleted (if TTL is set)
- **Custom metadata** -- Key-value pairs for organization

```bash
vault kv metadata put -custom-metadata="team=platform" secret/database/prod
```

## Security Considerations

- Never log secret values in plaintext
- Use short TTLs for dynamically generated credentials
- Rotate secrets on a regular schedule
- Enable audit logging for all secret access
