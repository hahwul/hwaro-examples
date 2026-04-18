+++
title = "Audit Logging"
weight = 2
template = "doc"
description = "Configuring and reviewing audit logs for compliance and security monitoring."
tags = ["audit", "compliance"]
[extra]
category = "Compliance"
security_level = "high"
+++

## Overview

Audit logging records every request and response to Vault. Audit logs are critical for security monitoring, incident investigation, and compliance.

## Enable Audit Backend

```bash
# File-based audit log
vault audit enable file file_path=/var/log/vault/audit.log

# Socket-based audit log (for remote collection)
vault audit enable socket address=logserver.internal:9090 socket_type=tcp
```

## Log Format

Each audit log entry contains:

```json
{
  "type": "response",
  "auth": {
    "token_type": "service",
    "policies": ["developer-policy"],
    "metadata": {
      "role": "developer"
    }
  },
  "request": {
    "id": "abc-123-def",
    "operation": "read",
    "path": "secret/data/database/staging",
    "remote_address": "10.0.1.50"
  },
  "response": {
    "data": {
      "keys": ["username", "password", "host"]
    }
  }
}
```

**Note:** Secret values are HMAC-hashed in audit logs. Plaintext secrets never appear in log output.

## Log Retention

| Environment | Retention | Storage |
|------------|-----------|---------|
| Development | 7 days | Local file |
| Staging | 30 days | Centralized logging |
| Production | 365 days | Encrypted cold storage |

## Monitoring Alerts

Configure alerts for:

- Failed authentication attempts (threshold: 5 in 10 minutes)
- Access to high-security paths
- Policy changes
- Audit backend failures (critical — Vault will seal if audit cannot write)

```bash
# Verify audit backends are healthy
vault audit list -detailed
```

## Compliance

Audit logs satisfy requirements for:

- SOC 2 Type II (access logging)
- PCI DSS (requirement 10)
- HIPAA (access audit trail)
- GDPR (data access records)
