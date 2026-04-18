+++
title = "Policies"
weight = 1
template = "doc"
description = "Defining and managing access policies for vault resources."
tags = ["policies", "permissions"]
[extra]
category = "Authorization"
security_level = "critical"
+++

## Overview

Vault policies define what actions a user or service can perform on specific paths. Policies follow a deny-by-default model — access must be explicitly granted.

## Policy Syntax

```hcl
# Allow read access to production database secrets
path "secret/data/database/prod" {
  capabilities = ["read", "list"]
}

# Allow full access to staging secrets
path "secret/data/database/staging" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

# Deny access to root tokens
path "auth/token/create-orphan" {
  capabilities = ["deny"]
}
```

## Capabilities

| Capability | Description |
|-----------|-------------|
| `create` | Create new secrets at a path |
| `read` | Read secret data |
| `update` | Modify existing secrets |
| `delete` | Delete secrets or versions |
| `list` | List secrets at a path |
| `sudo` | Access root-protected endpoints |
| `deny` | Explicitly deny access (overrides all) |

## Permission Matrix

| Role | Production Read | Production Write | Staging Read | Staging Write | Rotate |
|------|:-:|:-:|:-:|:-:|:-:|
| Viewer | Yes | No | Yes | No | No |
| Developer | No | No | Yes | Yes | No |
| Operator | Yes | No | Yes | Yes | Yes |
| Admin | Yes | Yes | Yes | Yes | Yes |

## Applying Policies

```bash
# Create or update a policy
vault policy write developer-policy developer.hcl

# Attach policy to a token
vault token create -policy="developer-policy" -ttl="8h"

# List active policies
vault policy list
```

## Best Practices

- Follow the principle of least privilege
- Use path wildcards sparingly
- Review policies regularly
- Require `sudo` for sensitive operations
- Always include explicit `deny` rules for critical paths
