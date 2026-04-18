+++
title = "Isolation"
description = "Tenant data isolation models and enforcement strategies"
tags = ["isolation", "security", "tenants"]
+++

# Tenant Isolation

Manifold enforces strict data boundaries between tenants. The isolation model determines how tenant data is physically and logically separated at the database layer. Choosing the right model involves balancing cost, operational complexity, and compliance requirements.

## Isolation Models

```
  Shared Schema            Schema per Tenant        Database per Tenant
  +--------------+         +--------------+         +--------------+
  | Database     |         | Database     |         | DB: tenant_a |
  |              |         |              |         +--------------+
  | +----------+ |         | +----------+ |
  | | Table    | |         | | schema_a | |         +--------------+
  | | tenant_id| |         | +----------+ |         | DB: tenant_b |
  | +----------+ |         | +----------+ |         +--------------+
  |              |         | | schema_b | |
  +--------------+         | +----------+ |         +--------------+
                           +--------------+         | DB: tenant_c |
                                                    +--------------+
```

### Shared Schema

All tenants share the same database tables. A `tenant_id` column is added to every table, and row-level security (RLS) policies enforce access boundaries.

**Advantages:**

- Lowest infrastructure cost
- Simple schema migrations (apply once)
- Efficient connection pooling

**Considerations:**

- Noisy neighbor risk if one tenant generates excessive load
- RLS policies must be carefully audited
- Cross-tenant queries require explicit filtering

**RLS policy example:**

```sql
-- Enable row-level security on the orders table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create a policy that restricts access to the current tenant
CREATE POLICY tenant_isolation ON orders
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

-- Grant access through the policy
GRANT SELECT, INSERT, UPDATE, DELETE ON orders TO app_user;
```

### Schema per Tenant

Each tenant receives a dedicated PostgreSQL schema within a shared database. Tables are identical in structure but completely separated by schema namespace.

**Advantages:**

- Stronger isolation than shared schema
- Per-tenant backup and restore
- Independent schema migrations possible

**Considerations:**

- Schema count can grow large (monitor `pg_namespace`)
- Connection pool must set `search_path` per request
- Migrations must be applied to each schema

**Schema creation example:**

```sql
-- Create a new schema from the template
CREATE SCHEMA tenant_acme;

-- Copy table definitions from the template schema
SELECT manifold_clone_schema('tenant_template', 'tenant_acme');

-- Set search path for tenant context
SET search_path TO tenant_acme, public;
```

### Database per Tenant

Each tenant receives a dedicated PostgreSQL database instance. This provides maximum isolation and is typically used for enterprise-tier tenants with compliance requirements.

**Advantages:**

- Complete data isolation
- Independent scaling, backup, and restore
- No noisy neighbor effects
- Meets strict compliance requirements (SOC 2, HIPAA)

**Considerations:**

- Highest infrastructure cost
- Connection management is more complex
- Cross-tenant reporting requires federation

## Isolation Comparison

| Aspect | Shared Schema | Schema per Tenant | Database per Tenant |
|--------|--------------|-------------------|---------------------|
| Data Separation | Logical (RLS) | Logical (schema) | Physical (database) |
| Cost per Tenant | Low | Medium | High |
| Migration Complexity | Low | Medium | High |
| Backup Granularity | Database-level | Schema-level | Database-level |
| Compliance Suitability | Standard | Enhanced | Maximum |
| Noisy Neighbor Risk | High | Medium | None |
| Max Recommended Tenants | 10,000+ | 1,000 | 200 |

## Enforcement Layers

Manifold enforces isolation at multiple layers to prevent data leakage:

```
  Request
    |
    v
  +---------------------------+
  |  1. Tenant Context        |
  |     Resolver              |
  +---------------------------+
    |
    v
  +---------------------------+
  |  2. Middleware             |
  |     (inject tenant_id)    |
  +---------------------------+
    |
    v
  +---------------------------+
  |  3. ORM / Query Builder   |
  |     (automatic filtering) |
  +---------------------------+
    |
    v
  +---------------------------+
  |  4. Database RLS          |
  |     (PostgreSQL policies) |
  +---------------------------+
    |
    v
  +---------------------------+
  |  5. Audit Logger          |
  |     (record all access)   |
  +---------------------------+
```

Each layer provides defense-in-depth. The middleware injects tenant context into the request. The ORM applies automatic query scoping. The database RLS acts as a final safeguard. The audit logger records all data access for compliance review.

## Testing Isolation

Manifold includes a built-in isolation test suite:

```bash
# Run isolation verification tests
manifold test isolation --config /etc/manifold/manifold.yaml

# Test a specific tenant
manifold test isolation --tenant acme --verbose
```

The test suite verifies that:

- Queries from tenant A cannot read data belonging to tenant B
- Schema boundaries are correctly enforced
- RLS policies are active on all protected tables
- Cross-tenant joins are blocked at the query planner level
