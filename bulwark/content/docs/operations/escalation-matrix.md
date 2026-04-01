+++
title = "Escalation Matrix"
weight = 2
tags = ["escalation", "contacts", "sla", "severity"]
+++

# Escalation Matrix

Escalation tiers, contact roles, severity-based routing, and response time SLAs. This matrix defines who gets notified, when, and through which channels for every incident severity level.

## Escalation Tiers

### Tier 1: On-Call Engineer

First responder. Handles initial triage and executes runbook procedures.

| Attribute | Value |
|---|---|
| Response time | 5 minutes (SEV-1), 15 minutes (SEV-2), 1 hour (SEV-3) |
| Authority | Execute runbooks, restart services, promote replicas |
| Notification | PagerDuty, SMS, phone call |
| Escalation trigger | Cannot resolve within 15 minutes (SEV-1) or 30 minutes (SEV-2) |

### Tier 2: Incident Commander

Takes ownership of the incident, coordinates multiple teams, manages communication.

| Attribute | Value |
|---|---|
| Response time | 15 minutes (SEV-1), 30 minutes (SEV-2) |
| Authority | All Tier 1 actions plus cross-team coordination, external vendor contact |
| Notification | PagerDuty, phone call, Slack |
| Escalation trigger | Cannot resolve within 30 minutes (SEV-1) or 1 hour (SEV-2) |

### Tier 3: Engineering Leadership

VP/Director level. Authorizes major decisions such as extended downtime acceptance or emergency infrastructure spend.

| Attribute | Value |
|---|---|
| Response time | 30 minutes (SEV-1 only) |
| Authority | All Tier 2 actions plus budget approval, vendor escalation, public communication |
| Notification | Phone call, SMS |
| Escalation trigger | Customer-facing outage exceeding 30 minutes |

### Tier 4: Executive

C-level notification for business-critical outages.

| Attribute | Value |
|---|---|
| Response time | 1 hour (SEV-1 only) |
| Authority | External communications, board notification, legal/compliance |
| Notification | Phone call |
| Escalation trigger | Revenue impact exceeding $500,000 or outage exceeding 2 hours |

## Severity-Based Routing

| Severity | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Bridge Call |
|---|---|---|---|---|---|
| SEV-1 (Critical) | Immediate | +15 min | +30 min | +1 hour | Yes |
| SEV-2 (High) | +15 min | +30 min | +2 hours | As needed | Yes |
| SEV-3 (Medium) | +1 hour | As needed | No | No | No |
| SEV-4 (Low) | Next business day | No | No | No | No |

## Contact Roles

| Role | Primary | Backup | Contact Method |
|---|---|---|---|
| On-Call Engineer | Rotating schedule | Secondary on-call | PagerDuty |
| Incident Commander | Rotating schedule | Engineering Manager | PagerDuty, Phone |
| Database Lead | DBA Team Lead | Senior DBA | PagerDuty, Phone |
| Network Lead | Network Team Lead | Senior Network Engineer | PagerDuty, Phone |
| Platform Lead | Platform Team Lead | Senior SRE | PagerDuty, Phone |
| VP Engineering | VP Engineering | CTO | Phone, SMS |
| Communications | PR Lead | Marketing Director | Phone, SMS |

## Escalation Flow

```
Incident Detected
      │
      ▼
  ┌─────────────┐
  │ Determine    │
  │ Severity     │
  └──────┬──────┘
         │
    ┌────┴────┐
    │         │
 SEV-1/2   SEV-3/4
    │         │
    ▼         ▼
 Page       Queue for
 On-Call    business hours
    │
    ▼
 Triage (5-15 min)
    │
    ├── Resolved ──▶ Post-incident review
    │
    ▼
 Escalate to Tier 2
 (Incident Commander)
    │
    ▼
 Coordinate response
    │
    ├── Resolved ──▶ Post-incident review
    │
    ▼
 Escalate to Tier 3
 (Engineering Leadership)
    │
    ▼
 Authorize major actions
    │
    ├── Resolved ──▶ Post-incident review
    │
    ▼
 Escalate to Tier 4
 (Executive)
```

## Response Time SLAs

| Metric | SEV-1 | SEV-2 | SEV-3 | SEV-4 |
|---|---|---|---|---|
| Time to acknowledge | 5 min | 15 min | 1 hour | 8 hours |
| Time to first update | 15 min | 30 min | 2 hours | Next day |
| Update frequency | Every 15 min | Every 30 min | Every 2 hours | Daily |
| Time to resolve (target) | 1 hour | 4 hours | 24 hours | 1 week |
| Time to resolve (max) | 4 hours | 8 hours | 72 hours | 2 weeks |
| Post-incident review | Within 24 hours | Within 48 hours | Within 1 week | Optional |

## Communication Channels

| Channel | Purpose | Audience |
|---|---|---|
| PagerDuty | Alerting and on-call rotation | On-call engineers |
| Slack #incidents | Real-time coordination during active incidents | All responders |
| Slack #incidents-updates | Status updates for broader engineering team | Engineering org |
| Status page | Customer-facing status communication | External users |
| Email (exec-incidents@) | Executive summaries for SEV-1 events | Leadership |
| Bridge call | Voice coordination for SEV-1/SEV-2 | Active responders |

## Notification Configuration

```yaml
# /etc/bulwark/escalation.yaml
policies:
  sev1_critical:
    severity: 1
    steps:
      - delay: 0m
        targets:
          - type: pagerduty
            service: "on-call-primary"
          - type: slack
            channel: "#incidents"
      - delay: 15m
        targets:
          - type: pagerduty
            service: "incident-commander"
          - type: phone
            contact: "ic-primary"
      - delay: 30m
        targets:
          - type: phone
            contact: "vp-engineering"
          - type: sms
            contact: "vp-engineering"
      - delay: 60m
        targets:
          - type: phone
            contact: "cto"

  sev2_high:
    severity: 2
    steps:
      - delay: 0m
        targets:
          - type: pagerduty
            service: "on-call-primary"
      - delay: 15m
        targets:
          - type: pagerduty
            service: "on-call-secondary"
      - delay: 30m
        targets:
          - type: pagerduty
            service: "incident-commander"
```
