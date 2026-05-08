+++
title = "Dynamic Credentials"
weight = 3
template = "doc"
description = "Generating short-lived credentials on demand instead of storing static secrets."
tags = ["secrets", "dynamic", "credentials"]
[extra]
category = "Core"
security_level = "high"
+++

## Overview

Dynamic credentials are generated on demand and automatically revoked after a defined lease period. This pattern eliminates long-lived static secrets, reducing the blast radius of a compromised token to the duration of its lease.

## Database Credentials

The database secrets engine creates per-request roles with attached capabilities. A typical configuration binds a role to a SQL template that runs at issue time:

```bash
vault write database/roles/reporting-readonly \
  db_name="postgres-prod" \
  creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; GRANT readonly TO \"{{name}}\";" \
  default_ttl="1h" \
  max_ttl="8h"
```

Requesting a credential issues a unique role identifier and a password valid only for the lease window:

```bash
vault read database/creds/reporting-readonly
```

## Lease Management

Every issued credential carries a lease ID that can be inspected, renewed, or revoked.

| Operation | Command |
|-----------|---------|
| List active leases | `vault list sys/leases/lookup/database/creds/reporting-readonly` |
| Renew a lease | `vault lease renew database/creds/reporting-readonly/<id>` |
| Revoke immediately | `vault lease revoke database/creds/reporting-readonly/<id>` |
| Revoke a prefix | `vault lease revoke -prefix database/creds/reporting-readonly` |

## Operational Notes

- Set conservative `max_ttl` values; renewal is cheaper than long initial leases.
- Monitor lease counts per backend; runaway lease creation indicates a leaking client.
- Rotate the root credential used by the secrets engine on a separate schedule.
- Audit logs capture every credential issue, renewal, and revocation event.

## Failure Modes

If the upstream database is unreachable, credential issuance will block until the connection recovers or the request times out. Clients should implement retry logic with exponential backoff and treat credential acquisition as a fallible operation rather than a guaranteed step at startup.
