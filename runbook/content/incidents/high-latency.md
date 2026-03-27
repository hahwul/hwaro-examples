+++
title = "High Latency Response"
weight = 2
template = "doc"
description = "Steps to investigate and mitigate high API latency."
tags = ["warning", "performance"]
[extra]
severity = "warning"
estimated_time = "10-30 min"
last_tested = "2024-07-15"
+++

## Symptoms

- P95 latency exceeds 2 seconds (normal baseline: 200ms)
- Users reporting slow page loads
- Latency alerts triggered on monitoring dashboard

## Triage Checklist

1. Check current request volume against normal baseline
2. Review CPU and memory utilization on application servers
3. Check database query performance
4. Verify external dependency response times
5. Check for recent deployments

## Resolution Steps

### Step 1: Identify the bottleneck

```bash
curl -w "@curl-timing.txt" -o /dev/null -s https://api.example.com/health
```

Compare DNS, connect, TLS, and transfer times against baseline.

### Step 2: Check application server resources

```bash
kubectl top pods -n production --sort-by=cpu
```

If any pod exceeds 80% CPU, consider scaling.

### Step 3: Scale if needed

```bash
kubectl scale deployment api-server -n production --replicas=6
```

Monitor latency for 5 minutes after scaling. If no improvement, the bottleneck is elsewhere.

### Step 4: Check database slow queries

```sql
SELECT pid, now() - query_start AS duration, query
FROM pg_stat_activity
WHERE state = 'active' AND now() - query_start > interval '5 seconds'
ORDER BY duration DESC;
```

Kill long-running queries if they are non-critical.

## Escalation

If latency does not improve after scaling and query optimization, escalate to the Platform Engineering team.
