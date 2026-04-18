+++
title = "SOC 2"
description = "SOC 2 compliance mapping and evidence generation with Logbook"
tags = ["soc2", "compliance", "audit", "trust-services"]
+++

# SOC 2

SOC 2 (System and Organization Controls 2) defines trust service criteria for service organizations. Logbook maps audit events to SOC 2 controls and generates evidence packages for Type I and Type II examinations.

## Trust Service Criteria Mapping

Logbook provides coverage for the following SOC 2 trust service categories:

### Security (Common Criteria)

| Control | Description | Logbook Evidence |
|---------|-------------|-----------------|
| CC6.1 | Logical and physical access controls | `auth.login`, `auth.login_failed`, `authz.grant`, `authz.deny` events |
| CC6.2 | System credentials and authentication | `auth.mfa_challenge`, `auth.mfa_success`, `auth.password_changed` events |
| CC6.3 | Authorization and access removal | `authz.role_change`, `authz.permission_change`, `admin.user_suspend` events |
| CC6.6 | Restricting external access | `authz.deny` events filtered by external actor IP ranges |
| CC6.8 | Preventing unauthorized software | `admin.config_change` events for deployment configurations |
| CC7.1 | Detection of unauthorized activities | `auth.login_failed` aggregation, `authz.privilege_escalation` events |
| CC7.2 | Monitoring for anomalies | Automated anomaly detection alerts from audit event patterns |
| CC7.3 | Evaluation of detected events | `admin.audit_export` events demonstrating security review workflows |

### Availability

| Control | Description | Logbook Evidence |
|---------|-------------|-----------------|
| A1.1 | Capacity management | `system.storage_threshold` events |
| A1.2 | Recovery procedures | `admin.backup_created`, `admin.backup_restored` events |

### Confidentiality

| Control | Description | Logbook Evidence |
|---------|-------------|-----------------|
| C1.1 | Identification of confidential information | `data.read`, `data.write` events with classification metadata |
| C1.2 | Disposal of confidential information | `data.delete`, `data.anonymize` events |

## SOC 2 Checklist

Use this checklist to verify your Logbook deployment meets SOC 2 requirements:

- [ ] All user authentication events are captured (`auth.*` events enabled)
- [ ] Failed login attempts are recorded with source IP addresses
- [ ] Multi-factor authentication events are logged separately from primary authentication
- [ ] Role and permission changes generate `critical` severity events
- [ ] Data access events include the resource identifier and actor identity
- [ ] Administrative configuration changes are logged with before/after values
- [ ] Audit logs are retained for a minimum of 1 year
- [ ] Hash chain verification runs at least daily
- [ ] Audit log exports for examiner review generate their own audit events
- [ ] Retention policies are documented and enforced automatically

## Generating SOC 2 Evidence

Generate a SOC 2 evidence package for an examination period:

```bash
# Generate evidence for a Type II examination period
logbook compliance report \
  --framework soc2 \
  --start "2025-04-01T00:00:00Z" \
  --end "2026-03-31T23:59:59Z" \
  --format pdf \
  --output soc2-evidence-2025-2026.pdf

# Generate a control-specific evidence extract
logbook compliance evidence \
  --framework soc2 \
  --control CC6.1 \
  --start "2025-04-01T00:00:00Z" \
  --end "2026-03-31T23:59:59Z" \
  --format csv \
  --output cc6.1-evidence.csv
```

## Continuous Monitoring

Enable continuous SOC 2 monitoring to receive alerts when controls are not being met:

```yaml
compliance:
  profiles:
    - name: "soc2"
      enabled: true
      continuous_monitoring: true
      alerts:
        - control: "CC6.1"
          condition: "no auth.login events for 24h from any configured source"
          channel: "compliance-email"
        - control: "CC7.1"
          condition: "auth.login_failed count > 100 in 1h from single actor"
          channel: "security-team"
```
