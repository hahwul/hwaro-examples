+++
title = "Provisioning"
description = "Automated tenant provisioning workflows and onboarding"
tags = ["provisioning", "onboarding", "tenants"]
+++

# Tenant Provisioning

Manifold automates the process of creating and configuring new tenants. Provisioning involves creating tenant metadata, setting up the data layer according to the isolation model, configuring resource limits, and running onboarding hooks.

## Provisioning Pipeline

```
  Provision Request
        |
        v
  +------------------+
  |  1. Validate      |
  |     (slug, tier,  |
  |      owner)       |
  +--------+---------+
           |
           v
  +------------------+
  |  2. Create        |
  |     Metadata      |
  |     (control DB)  |
  +--------+---------+
           |
           v
  +------------------+
  |  3. Setup Data    |
  |     Layer         |
  |     (schema/DB)   |
  +--------+---------+
           |
           v
  +------------------+
  |  4. Apply Tier    |
  |     Limits        |
  |     (quotas)      |
  +--------+---------+
           |
           v
  +------------------+
  |  5. Run Hooks     |
  |     (seed data,   |
  |      notify)      |
  +--------+---------+
           |
           v
  +------------------+
  |  6. Activate      |
  |     Tenant        |
  +------------------+
```

## CLI Provisioning

Create a new tenant using the CLI:

```bash
manifold tenant create \
  --slug "acme-corp" \
  --name "Acme Corporation" \
  --tier "professional" \
  --owner-email "admin@acme.com"
```

Expected output:

```
Tenant created successfully.
  ID:       f47ac10b-58cc-4372-a567-0e02b2c3d479
  Slug:     acme-corp
  Tier:     professional
  Isolation: schema_per_tenant
  Status:   active
  Created:  2026-03-20T14:30:00Z
```

## API Provisioning

Create a tenant through the Admin API:

```bash
curl -X POST http://localhost:3001/api/v1/tenants \
  -H "Authorization: Bearer ${ADMIN_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "acme-corp",
    "name": "Acme Corporation",
    "tier": "professional",
    "owner": {
      "email": "admin@acme.com",
      "name": "Jane Doe"
    },
    "metadata": {
      "industry": "technology",
      "region": "us-east-1"
    }
  }'
```

## Provisioning Configuration

Configure the provisioning pipeline in `manifold.yaml`:

```yaml
provisioning:
  timeout: "120s"
  retry:
    max_attempts: 3
    backoff: "exponential"
    initial_delay: "2s"

  hooks:
    post_create:
      - name: "seed_data"
        command: "manifold seed --tenant {{ tenant.slug }}"
        timeout: "60s"
      - name: "send_welcome"
        command: "manifold notify welcome --tenant {{ tenant.slug }}"
        timeout: "30s"

  defaults:
    tier: "starter"
    status: "active"
    metadata: {}
```

## Seed Data

Each tier can define seed data that is automatically loaded during provisioning:

```yaml
seed:
  starter:
    - table: "settings"
      rows:
        - key: "theme"
          value: "default"
        - key: "timezone"
          value: "UTC"
        - key: "language"
          value: "en"

  professional:
    inherit: "starter"
    additional:
      - table: "settings"
        rows:
          - key: "custom_domain_enabled"
            value: "true"
          - key: "audit_log_retention"
            value: "90d"

  enterprise:
    inherit: "professional"
    additional:
      - table: "settings"
        rows:
          - key: "sso_enabled"
            value: "true"
          - key: "audit_log_retention"
            value: "365d"
```

## Bulk Provisioning

For migrating existing users to the platform, Manifold supports bulk provisioning from a CSV file:

```bash
manifold tenant bulk-create --file tenants.csv --tier starter
```

CSV format:

```
slug,name,owner_email,metadata.industry,metadata.region
acme-corp,Acme Corporation,admin@acme.com,technology,us-east-1
globex,Globex Inc,ops@globex.com,manufacturing,eu-west-1
initech,Initech LLC,admin@initech.com,consulting,us-west-2
```

## Monitoring Provisioning

Track provisioning status through the Admin API:

| Endpoint | Description |
|----------|-------------|
| `GET /api/v1/provisioning/jobs` | List all provisioning jobs |
| `GET /api/v1/provisioning/jobs/:id` | Get status of a specific job |
| `GET /api/v1/provisioning/jobs/:id/logs` | Stream provisioning logs |

Provisioning jobs emit events that can be consumed by external systems for monitoring and alerting.
