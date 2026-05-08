+++
title = "Authentication Methods"
weight = 3
template = "doc"
description = "Configuring authentication backends for human and machine identities."
tags = ["auth", "identity", "policies"]
[extra]
category = "Authorization"
security_level = "critical"
+++

## Overview

Authentication methods translate external identities into vault tokens. Each method evaluates a different proof of identity, produces an entity, and attaches one or more policies that determine subsequent capabilities. A single deployment typically enables several methods at once: one for engineers, one for CI pipelines, and one for production workloads.

## Common Backends

| Method | Use Case | Identity Source |
|--------|---------|-----------------|
| `userpass` | Bootstrap operators | Local username and password |
| `oidc` | Engineer SSO | External identity provider |
| `approle` | Build automation | Role ID and secret ID pair |
| `kubernetes` | Pod-bound workloads | Service account JWT |
| `aws` | EC2 and IAM workloads | Signed instance identity document |
| `cert` | Mutual TLS clients | Client certificate chain |

## Enabling a Method

```bash
vault auth enable -path=engineers oidc
vault write auth/engineers/config \
  oidc_discovery_url="https://idp.internal.example.com" \
  oidc_client_id="vault" \
  oidc_client_secret="••••••••••••" \
  default_role="reader"
```

Each method exposes a `role` resource that binds claims from the upstream identity to a vault policy set:

```bash
vault write auth/engineers/role/reader \
  bound_audiences="vault" \
  user_claim="email" \
  policies="reader-policy" \
  ttl="8h"
```

## Token Properties

Tokens issued by an auth method inherit the method's TTL settings, can be renewed up to a configured maximum, and remain bound to the authenticating entity. Revoking the underlying identity in the source system does not automatically revoke active tokens; lease revocation must be triggered explicitly through `vault token revoke`.

## Hardening Recommendations

- Disable `userpass` once SSO is operational, except for break-glass accounts.
- Use short TTLs on automation methods and rely on renewal rather than long-lived tokens.
- Bind workload methods to specific namespaces, service accounts, or IAM roles.
- Audit auth method configuration changes through the system audit log.
- Rotate AppRole secret IDs on a schedule and prefer wrapped delivery to consumers.
