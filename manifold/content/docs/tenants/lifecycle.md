+++
title = "Lifecycle"
description = "Tenant lifecycle states and transitions"
tags = ["lifecycle", "tenants", "management"]
+++

# Tenant Lifecycle

Every tenant in Manifold exists in one of several lifecycle states. Transitions between states are explicit, audited, and can trigger automated hooks.

## State Diagram

```
                     provision
  (none) --------------------------> ACTIVE
                                       |
                          +------------+------------+
                          |                         |
                       suspend                   upgrade/
                          |                    downgrade
                          v                         |
                      SUSPENDED                     |
                          |                         |
                  +-------+-------+                 |
                  |               |                 |
              reactivate      schedule              |
                  |            delete                |
                  v               |                 |
               ACTIVE             v                 |
                              PENDING_DELETE         |
                                  |                 |
                               purge                |
                                  |                 |
                                  v                 |
                              DELETED               |
                            (terminal)              |
                                                    |
                          ACTIVE <------------------+
```

## Lifecycle States

| State | Description | Data Access | Billing |
|-------|-------------|-------------|---------|
| `active` | Tenant is fully operational | Full access | Active |
| `suspended` | Tenant is temporarily disabled | Read-only | Paused |
| `pending_delete` | Tenant is scheduled for permanent deletion | None | Stopped |
| `deleted` | Tenant data has been purged | N/A | N/A |

## State Transitions

### Suspend a Tenant

Suspending a tenant disables write access while preserving all data. This is typically used for billing issues or policy violations.

```bash
manifold tenant suspend acme-corp --reason "payment_overdue"
```

API equivalent:

```bash
curl -X POST http://localhost:3001/api/v1/tenants/acme-corp/suspend \
  -H "Authorization: Bearer ${ADMIN_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"reason": "payment_overdue"}'
```

When a tenant is suspended:

- All write operations return `403 Forbidden`
- Read operations continue to work
- Background jobs for the tenant are paused
- The tenant owner receives a suspension notification

### Reactivate a Tenant

```bash
manifold tenant reactivate acme-corp
```

Reactivation restores full read-write access and resumes background jobs. Billing is restarted from the reactivation date.

### Schedule Deletion

Schedule a tenant for permanent deletion with a grace period:

```bash
manifold tenant delete acme-corp --grace-period 30d
```

During the grace period:

- The tenant is in `pending_delete` state
- No data access is permitted
- The tenant can be recovered using `manifold tenant recover acme-corp`
- After the grace period expires, all tenant data is permanently purged

### Upgrade or Downgrade Tier

Change a tenant's subscription tier:

```bash
manifold tenant update-tier acme-corp --tier enterprise
```

Tier changes may trigger data migration. For example, upgrading from `shared_schema` to `database_per_tenant` initiates a background migration job:

```
  ACTIVE (professional)
        |
        v
  +------------------+
  |  Create new DB   |
  +--------+---------+
           |
           v
  +------------------+
  |  Migrate data    |
  |  (background)    |
  +--------+---------+
           |
           v
  +------------------+
  |  Verify data     |
  |  integrity       |
  +--------+---------+
           |
           v
  +------------------+
  |  Switch routing  |
  +--------+---------+
           |
           v
  ACTIVE (enterprise)
```

## Lifecycle Hooks

Configure automated actions for state transitions:

```yaml
lifecycle:
  hooks:
    on_suspend:
      - name: "notify_owner"
        command: "manifold notify suspension --tenant {{ tenant.slug }}"
      - name: "pause_billing"
        command: "manifold billing pause --tenant {{ tenant.slug }}"

    on_reactivate:
      - name: "notify_owner"
        command: "manifold notify reactivation --tenant {{ tenant.slug }}"
      - name: "resume_billing"
        command: "manifold billing resume --tenant {{ tenant.slug }}"

    on_delete:
      - name: "export_data"
        command: "manifold export --tenant {{ tenant.slug }} --output /archives/"
      - name: "notify_compliance"
        command: "manifold notify deletion --tenant {{ tenant.slug }}"
```

## Audit Trail

All lifecycle transitions are recorded in the audit log:

```bash
manifold audit list --tenant acme-corp --type lifecycle
```

Example output:

```
TIMESTAMP                 ACTION          ACTOR           DETAILS
2026-03-01T09:00:00Z     provision       system          tier=professional
2026-03-15T14:30:00Z     update_tier     admin@corp.com  professional -> enterprise
2026-03-20T10:00:00Z     suspend         system          reason=payment_overdue
2026-03-22T11:30:00Z     reactivate      admin@corp.com  payment resolved
```

## Data Retention

Configure retention policies for deleted tenant data:

| Tier | Grace Period | Archive Duration | Purge Method |
|------|-------------|------------------|--------------|
| Starter | 7 days | None | Immediate |
| Professional | 30 days | 90 days | Scheduled |
| Enterprise | 60 days | 365 days | Manual approval |
