+++
title = "Manifold"
description = "Multi-tenant SaaS platform documentation for tenant management, isolation, and API reference"
tags = ["manifold", "saas", "multi-tenant"]
+++

# Manifold

Manifold is a multi-tenant SaaS platform framework designed for building applications that serve thousands of isolated tenants from a single deployment. It handles tenant provisioning, data isolation, access control, and lifecycle management so that application teams can focus on business logic.

## Core Capabilities

- **Tenant Isolation** -- Enforce strict data boundaries between tenants at the database, storage, and network layers
- **Automated Provisioning** -- Create and configure new tenants through a declarative API with customizable onboarding workflows
- **Tiered Plans** -- Define feature gates, usage quotas, and resource limits per subscription tier
- **Admin Portal** -- Manage tenants, review usage metrics, and handle billing operations from a centralized dashboard

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](docs/getting-started/) | Install Manifold, configure your first tenant, and verify isolation |
| [Tenants](docs/tenants/) | Understand isolation models, provisioning workflows, and lifecycle states |
| [API](docs/api/) | Admin API, Tenant API, and authentication reference |

## Platform Architecture

Manifold operates as a control plane that sits between your application layer and infrastructure:

```
                       Requests
                          |
                          v
                  +---------------+
                  |  API Gateway  |
                  |  (routing)    |
                  +-------+-------+
                          |
              +-----------+-----------+
              |                       |
              v                       v
      +---------------+      +---------------+
      |  Tenant        |      |  Admin         |
      |  API Server    |      |  API Server    |
      +-------+-------+      +-------+-------+
              |                       |
              v                       v
      +---------------+      +---------------+
      |  Tenant        |      |  Control       |
      |  Context       |      |  Plane         |
      |  Resolver      |      |  Service       |
      +-------+-------+      +-------+-------+
              |                       |
              +-----------+-----------+
                          |
                          v
              +-----------------------+
              |   Data Layer          |
              |   (per-tenant schema  |
              |    or database)       |
              +-----------------------+
```

The API Gateway resolves the tenant from the request (via subdomain, header, or JWT claim) and injects tenant context into downstream services. The Control Plane manages tenant metadata, plan assignments, and provisioning state.

## Subscription Tiers

Manifold supports configurable subscription tiers with resource limits and feature gates:

| Feature | Starter | Professional | Enterprise |
|---------|---------|-------------|------------|
| Max Users | 10 | 100 | Unlimited |
| Storage | 5 GB | 50 GB | 500 GB |
| API Rate Limit | 100 req/min | 1,000 req/min | 10,000 req/min |
| Custom Domain | No | Yes | Yes |
| SSO / SAML | No | No | Yes |
| Audit Logging | No | Yes | Yes |
| Dedicated Database | No | No | Yes |
| SLA | -- | 99.9% | 99.99% |
| Support | Community | Email | Dedicated |

## Isolation Models

Manifold supports three isolation strategies, selectable per tenant or per tier:

| Model | Description | Use Case |
|-------|-------------|----------|
| Shared Schema | All tenants share tables with a `tenant_id` column | Cost-efficient for small tenants |
| Schema per Tenant | Each tenant gets a dedicated database schema | Balance of isolation and cost |
| Database per Tenant | Each tenant gets a dedicated database instance | Maximum isolation for enterprise |

> The isolation model can be configured at the tier level. For example, Starter and Professional tenants may use shared schema, while Enterprise tenants receive a dedicated database.

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 4 cores | 8 cores |
| Memory | 8 GB | 32 GB |
| Disk | 50 GB SSD | 200 GB SSD |
| PostgreSQL | 14+ | 16+ |
| Redis | 7+ | 7+ |
