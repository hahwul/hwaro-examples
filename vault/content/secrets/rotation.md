+++
title = "Secret Rotation"
weight = 2
template = "doc"
description = "Automated and manual secret rotation procedures."
tags = ["secrets", "rotation"]
[extra]
category = "Operations"
security_level = "high"
+++

## Why Rotate

Secret rotation limits the window of exposure if a credential is compromised. Regular rotation is a security best practice and often a compliance requirement.

## Automatic Rotation

Configure Vault to rotate secrets on a schedule:

```bash
vault write database/config/prod \
  plugin_name="postgresql-database-plugin" \
  connection_url="postgresql://{{username}}:{{password}}@db.internal:5432/app" \
  allowed_roles="readonly,readwrite" \
  username="vault_admin" \
  password="••••••••••••"
```

Set rotation period:

```bash
vault write database/rotate-role/readonly \
  rotation_period="24h"
```

## Manual Rotation

### Step 1: Generate new credentials

```bash
vault write -force database/rotate-root/prod
```

### Step 2: Verify the new credentials

```bash
vault read database/creds/readonly
```

```
Key            Value
---            -----
lease_id       database/creds/readonly/abc123
username       v-token-readonly-xyz789
password       ••••••••••••
ttl            1h
```

### Step 3: Update dependent services

After rotation, services using static credentials must be restarted or reconfigured to use the new values.

## Rotation Schedule

| Secret Type | Recommended Interval |
|------------|---------------------|
| Database passwords | 24-72 hours |
| API keys | 30 days |
| TLS certificates | 90 days |
| Root tokens | Immediately after use |
| SSH keys | 7 days |

## Monitoring

Monitor rotation failures:

```bash
vault audit list
vault read sys/audit/file
```
