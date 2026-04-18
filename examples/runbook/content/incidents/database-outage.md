+++
title = "Database Outage"
weight = 1
template = "doc"
description = "Steps to diagnose and recover from a database outage."
tags = ["critical", "database"]
[extra]
severity = "critical"
estimated_time = "15-45 min"
last_tested = "2024-08-01"
+++

## Symptoms

- Application returns 500 errors on all database-dependent endpoints
- Connection pool exhaustion alerts firing
- Monitoring dashboard shows zero active connections

## Triage Checklist

1. Check database host status via cloud console
2. Verify network connectivity from application servers
3. Check disk space on database volumes
4. Review recent deployment or migration activity
5. Check for long-running queries or locks

## Resolution Steps

### Step 1: Verify the outage scope

```bash
psql -h db-primary.internal -U monitor -c "SELECT 1;"
```

If the connection fails, proceed to Step 2. If it succeeds, the issue may be network-related — check application-side connectivity.

### Step 2: Check replica status

```bash
psql -h db-replica.internal -U monitor -c "SELECT pg_is_in_recovery();"
```

If the replica is healthy, consider failing over while investigating the primary.

### Step 3: Initiate failover (if necessary)

```bash
cloud-cli db failover --cluster prod-db --target replica-01 --confirm
```

**Warning:** Failover causes 30-60 seconds of downtime. Notify the on-call channel before proceeding.

### Step 4: Post-recovery verification

- Confirm application health checks are passing
- Verify data consistency between old primary and new primary
- Monitor error rates for 30 minutes after recovery

## Escalation

If the outage persists after 30 minutes, escalate to the Database Platform team. Contact: #db-oncall in Slack.
