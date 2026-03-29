+++
title = "Escalation Policies"
description = "Configure alert escalation and notification routing"
tags = ["alerts", "escalation", "on-call", "notifications"]
+++

# Escalation Policies

Escalation policies define how alerts are routed to responders when they are not acknowledged within a specified time. Sentinel supports multi-tier escalation with on-call schedule integration.

## Policy Definition

An escalation policy is a sequence of tiers. Each tier specifies a notification target and a timeout:

```yaml
escalation_policies:
  - name: "production-critical"
    description: "Escalation for production critical alerts"
    tiers:
      - level: 1
        targets: ["ops-slack"]
        timeout: "5m"
      - level: 2
        targets: ["pagerduty", "ops-slack"]
        timeout: "15m"
      - level: 3
        targets: ["pagerduty", "email-oncall", "ops-slack"]
        timeout: "30m"
    repeat:
      enabled: true
      interval: "30m"
      max_repeats: 5
```

## Escalation Flow

When an alert fires, Sentinel routes it through the policy tiers:

```
  Alert Fires
      |
      v
  +------------------+
  | Tier 1: Slack    |  <-- Notify #ops-alerts
  | Timeout: 5 min   |
  +------------------+
      |
      | Not acknowledged within 5 min
      v
  +------------------+
  | Tier 2: PD+Slack |  <-- Page on-call + Slack
  | Timeout: 15 min  |
  +------------------+
      |
      | Not acknowledged within 15 min
      v
  +------------------+
  | Tier 3: All      |  <-- PD + Email + Slack
  | Timeout: 30 min  |
  +------------------+
      |
      | Still unacknowledged
      v
  Repeat cycle (up to max_repeats)
```

## Routing Rules

Map alert labels to escalation policies using routing rules:

```yaml
routing:
  rules:
    - match:
        severity: "critical"
        env: "production"
      policy: "production-critical"

    - match:
        severity: "warning"
      policy: "team-warning"

    - match:
        severity: "info"
      policy: "log-only"

  default_policy: "team-warning"
```

Rules are evaluated in order. The first matching rule determines the policy. If no rules match, the `default_policy` is used.

## On-Call Schedules

Integrate with on-call schedules to route alerts to the current on-call responder:

```yaml
on_call:
  schedules:
    - name: "platform-rotation"
      timezone: "America/New_York"
      rotations:
        - period: "weekly"
          start: "2026-01-05T09:00:00"
          members:
            - "alice"
            - "bob"
            - "carol"
            - "dave"

    - name: "weekend-coverage"
      timezone: "America/New_York"
      rotations:
        - period: "weekly"
          days: ["saturday", "sunday"]
          start: "2026-01-04T00:00:00"
          members:
            - "alice"
            - "carol"
```

## Alert Acknowledgment

Alerts can be acknowledged through the web interface, API, or notification channel integrations:

```bash
# Acknowledge via CLI
sentinel alert ack --id ALT-20260329-0042 --user alice

# Acknowledge with a note
sentinel alert ack --id ALT-20260329-0042 --user bob \
  --note "Investigating disk pressure on web-3"
```

Acknowledging an alert stops the escalation timer. If the alert is not resolved within the acknowledgment timeout, escalation resumes.

## Silencing Alerts

Temporarily suppress notifications for specific alerts or label sets:

```yaml
silences:
  - name: "maintenance-window"
    matchers:
      env: "staging"
    start: "2026-03-30T02:00:00Z"
    end: "2026-03-30T06:00:00Z"
    comment: "Scheduled staging maintenance"
    created_by: "alice"
```

Active silences are visible on the status page. Silenced alerts are still evaluated and recorded but do not trigger notifications.

## Policy Best Practices

- Keep Tier 1 notification lightweight (Slack or chat). Reserve paging for Tier 2 and above.
- Set reasonable timeouts. Five minutes is a good starting point for Tier 1.
- Always define a `default_policy` to catch alerts that do not match any routing rules.
- Review escalation policies quarterly. Stale schedules lead to missed alerts.
- Use silences for planned maintenance rather than disabling rules.
