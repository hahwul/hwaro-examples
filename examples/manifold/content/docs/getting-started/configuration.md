+++
title = "Configuration"
description = "Configure the Manifold multi-tenant platform"
tags = ["configuration", "setup", "getting-started"]
+++

# Configuration

Manifold uses a YAML configuration file to define platform behavior, tenant tiers, and isolation policies. By default, the platform reads from `/etc/manifold/manifold.yaml`.

## Minimal Configuration

A minimal configuration to start the platform:

```yaml
server:
  tenant_api:
    listen: "0.0.0.0:3000"
  admin_api:
    listen: "0.0.0.0:3001"
  log_level: "info"

database:
  url: "postgres://manifold:secret@localhost:5432/manifold"
  max_connections: 50
  idle_timeout: "300s"

redis:
  url: "redis://localhost:6379/0"
  pool_size: 20

tenant_resolution:
  strategies:
    - type: "subdomain"
      priority: 1
    - type: "header"
      header_name: "X-Tenant-ID"
      priority: 2
```

## Tenant Resolution

Manifold resolves the current tenant from incoming requests using configurable strategies. Strategies are evaluated in priority order:

| Strategy | Source | Example |
|----------|--------|---------|
| `subdomain` | Request hostname | `acme.app.example.com` |
| `header` | HTTP header | `X-Tenant-ID: acme` |
| `jwt_claim` | JWT token claim | `{"tenant_id": "acme"}` |
| `path_prefix` | URL path segment | `/t/acme/api/v1/...` |

```yaml
tenant_resolution:
  strategies:
    - type: "subdomain"
      priority: 1
    - type: "jwt_claim"
      claim_name: "tenant_id"
      priority: 2
    - type: "header"
      header_name: "X-Tenant-ID"
      priority: 3
```

## Tier Definitions

Define subscription tiers with resource limits and feature gates:

```yaml
tiers:
  - name: "starter"
    display_name: "Starter"
    isolation: "shared_schema"
    limits:
      max_users: 10
      storage_gb: 5
      api_rate_limit: 100
    features:
      custom_domain: false
      sso: false
      audit_log: false

  - name: "professional"
    display_name: "Professional"
    isolation: "schema_per_tenant"
    limits:
      max_users: 100
      storage_gb: 50
      api_rate_limit: 1000
    features:
      custom_domain: true
      sso: false
      audit_log: true

  - name: "enterprise"
    display_name: "Enterprise"
    isolation: "database_per_tenant"
    limits:
      max_users: -1
      storage_gb: 500
      api_rate_limit: 10000
    features:
      custom_domain: true
      sso: true
      audit_log: true
```

## Isolation Configuration

Configure the database isolation behavior for each model:

```yaml
isolation:
  shared_schema:
    enforce_rls: true
    tenant_column: "tenant_id"
    index_tenant_column: true

  schema_per_tenant:
    schema_prefix: "tenant_"
    template_schema: "tenant_template"
    migration_on_provision: true

  database_per_tenant:
    host_pool:
      - "db-1.internal:5432"
      - "db-2.internal:5432"
      - "db-3.internal:5432"
    template_database: "manifold_template"
    max_databases_per_host: 50
```

## Environment Variables

Any configuration value can reference environment variables using `${VAR_NAME}` syntax:

```yaml
database:
  url: "${DATABASE_URL}"

redis:
  url: "${REDIS_URL}"
```

Missing variables cause the platform to fail at startup with a descriptive error message.

## Validating Configuration

Before starting the server, validate your configuration:

```bash
manifold config validate --config /etc/manifold/manifold.yaml
```

This checks for syntax errors, invalid tier definitions, conflicting isolation settings, and missing required fields.
