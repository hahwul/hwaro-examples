+++
title = "Audit Logs"
description = "Audit log format, fields, and query examples"
weight = 2
+++

# Audit Logs

Bastion records every access decision in a structured audit log. These logs are critical for compliance, incident response, and security monitoring.

## Log Format

Each audit event is a JSON object with the following structure:

```json
{
  "timestamp": "2025-01-15T14:32:18.421Z",
  "event_id": "evt_7f3a9c2e1b4d",
  "event_type": "access_decision",
  "decision": "allow",
  "latency_ms": 1.2,
  "subject": {
    "type": "user",
    "id": "alice@example.com",
    "groups": ["web-developers", "web-leads"],
    "mfa_verified": true,
    "mfa_method": "webauthn",
    "session_id": "ses_4a8f2c91"
  },
  "resource": {
    "service": "staging-api",
    "port": 443,
    "protocol": "tcp",
    "labels": {
      "environment": "staging",
      "tier": "api"
    }
  },
  "source": {
    "ip": "203.0.113.42",
    "port": 52847,
    "geo": {
      "country": "US",
      "region": "CA",
      "city": "San Francisco"
    }
  },
  "device": {
    "id": "dev_a8f3c291e47b",
    "name": "alice-macbook",
    "os": "macOS 14.3.1",
    "compliant": true
  },
  "policy": {
    "name": "web-team-access",
    "version": 3,
    "rule": "frontend-to-api"
  }
}
```

## Field Reference

### Top-Level Fields

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | string (ISO 8601) | When the event occurred |
| `event_id` | string | Unique event identifier |
| `event_type` | string | Event type (see below) |
| `decision` | string | Access decision: allow, deny |
| `latency_ms` | float | Policy evaluation latency in milliseconds |
| `reason` | string | Human-readable reason for the decision |

### Event Types

| Type | Description |
|------|-------------|
| `access_decision` | An access request was evaluated |
| `auth_success` | Successful authentication |
| `auth_failure` | Failed authentication attempt |
| `mfa_challenge` | MFA challenge issued |
| `mfa_success` | MFA challenge completed |
| `mfa_failure` | MFA challenge failed |
| `session_start` | New session created |
| `session_end` | Session terminated |
| `policy_change` | Policy was created, updated, or deleted |
| `device_register` | New device registered |
| `device_posture` | Device posture check result |
| `cert_issued` | SSH or TLS certificate issued |

### Subject Fields

| Field | Type | Description |
|-------|------|-------------|
| `subject.type` | string | Subject type: user, service, api_key |
| `subject.id` | string | Subject identifier |
| `subject.groups` | list | Group memberships |
| `subject.mfa_verified` | boolean | Whether MFA was verified |
| `subject.mfa_method` | string | MFA method used |
| `subject.session_id` | string | Session identifier |

### Resource Fields

| Field | Type | Description |
|-------|------|-------------|
| `resource.service` | string | Target service name |
| `resource.port` | integer | Target port |
| `resource.protocol` | string | Protocol (tcp, udp, http) |
| `resource.labels` | object | Resource labels |

### Source Fields

| Field | Type | Description |
|-------|------|-------------|
| `source.ip` | string | Source IP address |
| `source.port` | integer | Source port |
| `source.geo.country` | string | GeoIP country code |
| `source.geo.region` | string | GeoIP region |
| `source.geo.city` | string | GeoIP city |

## Log Outputs

### File Output

```yaml
audit:
  enabled: true
  output: file
  path: /var/log/bastion/audit.json
  format: json
  rotation:
    max_size: 100MB
    max_age: 90d
    max_files: 30
    compress: true
```

### Syslog Output

```yaml
audit:
  enabled: true
  output: syslog
  syslog:
    network: tcp
    address: "syslog.example.com:514"
    facility: auth
    tag: bastion
```

### Webhook Output

Forward audit events to an external endpoint in real time:

```yaml
audit:
  enabled: true
  output: webhook
  webhook:
    url: "https://siem.example.com/api/v1/events"
    method: POST
    headers:
      Authorization: "Bearer ${SIEM_TOKEN}"
      Content-Type: "application/json"
    batch_size: 100
    flush_interval: 5s
    retry:
      max_attempts: 3
      backoff: 1s
```

## Querying Audit Logs

Use the Bastion CLI to query audit logs:

### Recent Denied Requests

```bash
$ bastion audit query \
    --filter 'decision == "deny"' \
    --since 1h \
    --limit 20

TIMESTAMP                EVENT_ID          SUBJECT              RESOURCE          DECISION  REASON
2025-01-15T14:28:11Z     evt_3c91a7f2      bob@example.com      prod-db:5432      deny      MFA not verified
2025-01-15T14:25:03Z     evt_8d2f1e4a      svc-worker           prod-api:443      deny      Certificate expired
2025-01-15T14:22:47Z     evt_1b5c8f3d      carol@example.com    staging-api:443   deny      Device non-compliant
```

### Authentication Failures

```bash
$ bastion audit query \
    --filter 'event_type == "auth_failure"' \
    --since 24h \
    --group-by subject.id

SUBJECT                  COUNT  LAST_SEEN
unknown@attacker.com     47     2025-01-15T14:30:00Z
bob@example.com          3      2025-01-15T12:15:00Z
svc-deprecated           1      2025-01-15T08:42:00Z
```

### Export for Analysis

```bash
# Export to CSV
bastion audit export \
    --since 7d \
    --format csv \
    --output /tmp/audit-export.csv

# Export to JSON lines for processing
bastion audit export \
    --since 24h \
    --format jsonl \
    --filter 'decision == "deny"' \
    | jq '.subject.id' \
    | sort | uniq -c | sort -rn
```

## Log Retention

Configure retention policies to meet compliance requirements:

| Compliance | Minimum Retention | Recommended |
|------------|-------------------|-------------|
| SOC 2 | 1 year | 2 years |
| HIPAA | 6 years | 7 years |
| PCI DSS | 1 year | 3 years |
| GDPR | As needed | 1 year (with data minimization) |
| FedRAMP | 1 year | 3 years |

```yaml
audit:
  retention:
    hot_storage: 30d       # Fast query access
    warm_storage: 180d     # Compressed, slower access
    cold_storage: 365d     # Archived, retrieval on request
    delete_after: 730d     # Permanent deletion
```
