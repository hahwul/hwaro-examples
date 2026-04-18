+++
title = "Welcome"
+++

# Bulwark

Disaster recovery planning, RTO/RPO targets, and incident response documentation for mission-critical infrastructure. Bulwark provides a structured framework for preparing, responding to, and recovering from system failures.

## RPO/RTO Summary

| Service Tier | RPO Target | RTO Target | Backup Frequency | Failover Mode |
|---|---|---|---|---|
| Tier 1 (Critical) | 0 minutes | 15 minutes | Continuous replication | Automatic |
| Tier 2 (High) | 15 minutes | 1 hour | Every 15 minutes | Semi-automatic |
| Tier 3 (Standard) | 1 hour | 4 hours | Hourly | Manual |
| Tier 4 (Low) | 24 hours | 24 hours | Daily | Manual |

## Severity Levels

**SEV-1 (Critical)** -- Complete service outage affecting all users. Revenue impact exceeding $10,000/minute. Requires immediate all-hands response with executive notification within 15 minutes.

**SEV-2 (High)** -- Major degradation affecting more than 50% of users or a critical business function. Requires on-call engineer response within 15 minutes and incident commander within 30 minutes.

**SEV-3 (Medium)** -- Partial degradation affecting a subset of users or non-critical functions. Requires on-call response within 1 hour. Standard escalation procedures apply.

**SEV-4 (Low)** -- Minor issue with minimal user impact. Can be addressed during business hours. Tracked in the issue queue for next sprint.

## Quick Navigation

- [Getting Started](docs/getting-started/) -- Initial setup and business impact assessment
- [Recovery Plans](docs/recovery/) -- Database, service, and network recovery procedures
- [Operations](docs/operations/) -- Runbooks, escalation matrix, and operational procedures
