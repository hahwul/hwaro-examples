+++
title = "Runbooks"
weight = 1
tags = ["runbooks", "procedures", "checklists"]
+++

# Runbooks

Standardized runbook templates for common disaster recovery scenarios. Each runbook follows a consistent structure to reduce cognitive load during high-pressure incidents.

## Runbook Template

Every runbook follows this format:

1. **Trigger** -- What condition activates this runbook
2. **Scope** -- What systems are affected
3. **Pre-flight checks** -- Validations before taking action
4. **Steps** -- Ordered recovery actions
5. **Validation** -- How to confirm success
6. **Rollback** -- How to revert if recovery fails

---

## RB-001: Database Primary Failure

**Trigger:** Primary database health check fails for 3 consecutive intervals.

**Scope:** Tier 1 databases (payment-db, user-db).

### Pre-flight Checklist

- [ ] Confirm the primary is truly unreachable (not a monitoring false positive)
- [ ] Check replica lag is within RPO threshold (< 5 seconds)
- [ ] Verify the replica is in streaming replication state
- [ ] Confirm you have the correct access credentials loaded
- [ ] Notify the incident channel that failover is starting

### Steps

```bash
# Step 1: Verify primary failure
pg_isready -h payment-db-primary -p 5432 -t 5
# Expected: no response

# Step 2: Check replica health
psql -h payment-db-replica -c "SELECT pg_is_in_recovery(), pg_last_wal_replay_lsn();"
# Expected: pg_is_in_recovery = true

# Step 3: Promote replica
bulwark db promote --target payment-db-replica --confirm
# Expected: "Promotion complete. New primary: payment-db-replica"

# Step 4: Update connection routing
bulwark pgbouncer update-primary --pool payment --new-primary payment-db-replica
# Expected: "PgBouncer reconfigured. Pool: payment -> payment-db-replica"

# Step 5: Verify application writes
psql -h payment-db.internal -c "INSERT INTO health_check (ts) VALUES (now()) RETURNING ts;"
# Expected: returns current timestamp
```

### Validation

- [ ] Application error rate has returned to baseline
- [ ] No connection errors in application logs
- [ ] Writes to the new primary are succeeding
- [ ] Monitoring shows the new primary as healthy

### Rollback

If the promoted replica is unhealthy, restore from backup:

```bash
bulwark db restore --source s3://bulwark-backups/payment-db/base/latest/ --target payment-db-emergency
bulwark dns update --record payment-db.internal --target payment-db-emergency --ttl 60
```

---

## RB-002: Service Deployment Rollback

**Trigger:** Error rate exceeds 5% within 10 minutes of a deployment.

**Scope:** Any deployed service.

### Pre-flight Checklist

- [ ] Confirm the error spike correlates with the deployment timestamp
- [ ] Identify the service and the deployment version that caused the issue
- [ ] Check if the issue is isolated to one region or global

### Steps

```bash
# Step 1: Identify the bad deployment
bulwark deploy history --service payment-api --limit 5

# Step 2: Rollback to previous version
bulwark deploy rollback --service payment-api --to-version v2.14.3 --confirm

# Step 3: Wait for rollout to complete
bulwark deploy status --service payment-api --watch

# Step 4: Verify error rate has dropped
bulwark metrics query 'rate(http_errors_total{service="payment-api"}[5m])'
```

### Validation

- [ ] Error rate below 0.1%
- [ ] Latency P99 within normal range
- [ ] No new error patterns in logs

---

## RB-003: Full Region Failover

**Trigger:** Multiple services in a region are failing simultaneously, or the cloud provider has declared a regional outage.

**Scope:** All services in the affected region.

### Pre-flight Checklist

- [ ] Confirm multiple services are affected (not a single-service issue)
- [ ] Check cloud provider status page for regional incidents
- [ ] Verify the secondary region is healthy
- [ ] Notify incident commander and executive stakeholders
- [ ] Confirm database replication to secondary region is current

### Steps

```bash
# Step 1: Assess regional health
bulwark check region us-east-1 --all-services

# Step 2: Initiate regional failover
bulwark failover region \
  --from us-east-1 \
  --to us-west-2 \
  --services all \
  --confirm

# Step 3: Shift DNS traffic
bulwark dns failover \
  --record "*.bulwark.io" \
  --from us-east-1 \
  --to us-west-2 \
  --weight-primary 0 \
  --weight-secondary 100

# Step 4: Monitor traffic convergence
bulwark metrics dashboard --region us-west-2 --duration 15m
```

### Validation

- [ ] All services responding in the secondary region
- [ ] DNS propagation confirmed (dig checks from multiple locations)
- [ ] Error rates in the secondary region at baseline
- [ ] No data loss detected (compare transaction counts)

### Rollback

Gradual failback once the primary region is restored:

```bash
bulwark dns failover --record "*.bulwark.io" --weight-primary 10 --weight-secondary 90
# Wait 15 minutes, monitor, then increase primary weight
bulwark dns failover --record "*.bulwark.io" --weight-primary 50 --weight-secondary 50
# Wait 15 minutes, monitor, then complete failback
bulwark dns failover --record "*.bulwark.io" --weight-primary 100 --weight-secondary 0
```

---

## DR Drill Schedule

| Drill | Frequency | Duration | Scope |
|---|---|---|---|
| Database failover (RB-001) | Monthly | 30 minutes | Tier 1 databases |
| Service rollback (RB-002) | Bi-weekly | 15 minutes | Rotating services |
| Region failover (RB-003) | Quarterly | 2 hours | Full stack |
| Tabletop exercise | Monthly | 1 hour | All responders |
| Full chaos day | Semi-annually | 4 hours | All systems |
