+++
title = "Retention"
description = "Audit log retention policies and lifecycle management"
tags = ["retention", "lifecycle", "storage", "audit-events"]
+++

# Retention

Logbook enforces retention policies that govern how long audit events are stored before they are archived or purged. Retention policies can be configured globally, per event type, or per compliance requirement.

## Default Retention

The default retention period applies to all events that do not match a more specific policy:

```yaml
storage:
  retention:
    default: "2y"
```

## Per-Type Retention

Define different retention periods for different event categories:

```yaml
storage:
  retention:
    default: "2y"
    rules:
      - types: ["auth.*"]
        period: "3y"
        reason: "Authentication events retained for security forensics"

      - types: ["data.*"]
        period: "5y"
        reason: "Data access events retained for regulatory compliance"

      - types: ["admin.*"]
        period: "7y"
        reason: "Administrative changes retained for long-term audit trail"

      - types: ["system.*"]
        period: "1y"
        reason: "System events retained for operational review"
```

## Compliance-Driven Retention

Regulatory frameworks impose minimum retention periods. Logbook provides pre-configured compliance profiles that override per-type rules when the compliance requirement is longer:

| Framework | Minimum Retention | Applicable Event Types |
|-----------|-------------------|----------------------|
| SOC 2 | 1 year | All event types |
| GDPR | Varies by purpose | Data access, consent, deletion events |
| HIPAA | 6 years | All events involving PHI access |
| PCI DSS | 1 year (immediate), 3 months online | Payment and authentication events |
| SOX | 7 years | Financial data access and administrative changes |

Enable compliance profiles in the configuration:

```yaml
compliance:
  profiles:
    - name: "soc2"
      enabled: true
    - name: "hipaa"
      enabled: true
      phi_event_types:
        - "data.read"
        - "data.write"
        - "data.export"
```

When multiple retention rules apply to the same event, Logbook uses the longest retention period.

## Retention Lifecycle

Events move through three lifecycle stages:

### Active

Active events are stored in the primary database and are queryable through the standard API. This is the default state for all events within their retention period.

### Archived

When events reach the end of their active retention period, they can be moved to cold storage rather than deleted. This is useful for regulatory holds or litigation preservation:

```yaml
storage:
  archive:
    enabled: true
    destination: "s3://logbook-archive/cold/"
    compression: "zstd"
    encryption: "aes-256-gcm"
```

### Purged

Purged events are permanently deleted from all storage tiers. Purge operations are themselves logged as `admin.audit_purge` events to maintain a record of what was removed and when.

## Legal Holds

Legal holds suspend retention-based deletion for events matching specific criteria. Events under legal hold are never archived or purged, regardless of retention policy:

```yaml
legal_holds:
  - name: "litigation-2026-q1"
    description: "Hold for pending regulatory inquiry"
    filter:
      date_range:
        start: "2025-10-01T00:00:00Z"
        end: "2026-01-31T23:59:59Z"
      types: ["data.*", "admin.*"]
      actors: ["usr_*"]
    created_by: "legal@corp.internal"
    created_at: "2026-02-15T09:00:00Z"
```

## Retention Dashboard

Monitor retention policy status and storage utilization:

```bash
# View retention summary
logbook retention status

# Preview events scheduled for archival
logbook retention preview --action archive --dry-run

# Preview events scheduled for purge
logbook retention preview --action purge --dry-run

# Execute archival manually
logbook retention run --action archive

# View storage utilization by event type
logbook storage stats --group-by type
```

## Retention Verification

Periodically verify that retention policies are being applied correctly:

```bash
# Verify no events exist beyond their retention period
logbook retention verify

# Generate a retention compliance report
logbook retention report --format pdf --output retention-report.pdf
```

The verification report includes a summary of event counts by type, the applicable retention period for each type, and any events that are overdue for archival or purge.
