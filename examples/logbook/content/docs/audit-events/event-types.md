+++
title = "Event Types"
description = "Audit event type taxonomy and categorization"
tags = ["event-types", "audit-events", "taxonomy"]
+++

# Event Types

Logbook organizes audit events into a hierarchical taxonomy. Each event type follows a `category.action` naming convention. Applications emit events using these types, and retention policies, compliance mappings, and access controls reference them.

## Authentication Events

Authentication events track user session lifecycle, including login attempts, session termination, and multi-factor authentication challenges.

| Event Type | Description | Severity |
|------------|-------------|----------|
| `auth.login` | Successful user authentication | Info |
| `auth.login_failed` | Failed authentication attempt | Warning |
| `auth.logout` | User-initiated session termination | Info |
| `auth.mfa_challenge` | Multi-factor authentication prompt issued | Info |
| `auth.mfa_success` | Multi-factor authentication completed | Info |
| `auth.mfa_failure` | Multi-factor authentication failed | Warning |
| `auth.session_expired` | Session expired due to timeout | Info |
| `auth.token_issued` | API token or refresh token issued | Info |
| `auth.token_revoked` | API token or refresh token revoked | Warning |
| `auth.password_changed` | User password changed | Warning |
| `auth.password_reset` | Password reset initiated | Warning |

## Authorization Events

Authorization events record permission evaluation decisions, role assignments, and access policy changes.

| Event Type | Description | Severity |
|------------|-------------|----------|
| `authz.grant` | Access granted to a resource | Info |
| `authz.deny` | Access denied to a resource | Warning |
| `authz.role_change` | User role assignment modified | Critical |
| `authz.permission_change` | Permission definition modified | Critical |
| `authz.policy_evaluated` | Access policy evaluated for a request | Info |
| `authz.privilege_escalation` | User elevated to higher privilege level | Critical |

## Data Access Events

Data access events track record-level operations on sensitive data. These events are essential for demonstrating data governance and responding to data subject access requests.

| Event Type | Description | Severity |
|------------|-------------|----------|
| `data.read` | Data record read by a user or service | Info |
| `data.write` | Data record created or updated | Info |
| `data.delete` | Data record deleted | Warning |
| `data.export` | Data exported from the system | Warning |
| `data.import` | Data imported into the system | Info |
| `data.share` | Data shared with external party | Critical |
| `data.encrypt` | Data encrypted at rest | Info |
| `data.decrypt` | Data decrypted for access | Info |
| `data.anonymize` | Data anonymized or pseudonymized | Info |

## Administration Events

Administration events capture configuration changes, user management actions, and system policy updates.

| Event Type | Description | Severity |
|------------|-------------|----------|
| `admin.config_change` | System configuration modified | Critical |
| `admin.user_create` | New user account created | Warning |
| `admin.user_delete` | User account deleted | Critical |
| `admin.user_suspend` | User account suspended | Warning |
| `admin.policy_update` | Security or compliance policy updated | Critical |
| `admin.backup_created` | System backup initiated | Info |
| `admin.backup_restored` | System restored from backup | Critical |
| `admin.audit_export` | Audit log exported for review | Warning |

## System Events

System events record infrastructure lifecycle activities and health monitoring.

| Event Type | Description | Severity |
|------------|-------------|----------|
| `system.startup` | Service started | Info |
| `system.shutdown` | Service stopped | Warning |
| `system.health_check` | Periodic health check executed | Info |
| `system.error` | Unhandled system error occurred | Critical |
| `system.certificate_expiry` | TLS certificate approaching expiration | Warning |
| `system.storage_threshold` | Storage utilization exceeded threshold | Warning |

## Custom Event Types

Applications can define custom event types by extending the taxonomy with a custom prefix:

```yaml
# Custom event type registration
custom_events:
  - type: "payment.charge"
    description: "Payment charge processed"
    severity: "info"
    retention: "7y"
    compliance_tags: ["pci-dss", "soc2"]

  - type: "payment.refund"
    description: "Payment refund issued"
    severity: "warning"
    retention: "7y"
    compliance_tags: ["pci-dss", "soc2"]
```

Custom event types must use a unique prefix that does not conflict with the built-in categories: `auth`, `authz`, `data`, `admin`, `system`.
