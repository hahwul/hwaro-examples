+++
title = "Database Recovery"
weight = 1
tags = ["database", "recovery", "backup", "replication"]
+++

# Database Recovery

Database recovery procedures for PostgreSQL and Redis. This plan covers backup restoration, point-in-time recovery (PITR), and replication failover for Tier 1 and Tier 2 services.

## Backup Strategy Overview

| Database | Backup Type | Frequency | Retention | Storage Location |
|---|---|---|---|---|
| payment-db | WAL streaming + base backup | Continuous / Daily | 30 days | S3 cross-region |
| user-db | WAL streaming + base backup | Continuous / Daily | 30 days | S3 cross-region |
| order-db | Logical backup (pg_dump) | Every 15 min | 14 days | S3 same-region |
| inventory-db | Logical backup (pg_dump) | Hourly | 7 days | S3 same-region |
| redis-sessions | RDB snapshot + AOF | Every 5 min / Continuous | 3 days | Local + S3 |

## Scenario 1: Replication Failover

When the primary database fails but the replica is healthy, promote the replica to primary.

### Pre-conditions

- Streaming replication is configured and running
- Replica lag is within acceptable RPO threshold
- Application connection pooler supports endpoint switching

### Recovery Steps

```bash
# 1. Verify primary is truly unreachable
pg_isready -h payment-db-primary -p 5432
# Expected: no response or connection refused

# 2. Check replica status and lag
psql -h payment-db-replica -U bulwark -c "SELECT pg_last_wal_replay_lsn(), pg_last_wal_receive_lsn(), now() - pg_last_xact_replay_timestamp() AS replication_lag;"

# 3. Promote replica to primary
bulwark db promote --target payment-db-replica --confirm

# 4. Update connection pooler (PgBouncer)
bulwark pgbouncer update-primary --pool payment --new-primary payment-db-replica

# 5. Verify application connectivity
bulwark check service payment-api --verbose

# 6. Update DNS record for the database endpoint
bulwark dns update --record payment-db.internal --target payment-db-replica --ttl 60
```

### Validation

```bash
# Confirm writes are succeeding
psql -h payment-db.internal -U bulwark -c "INSERT INTO health_check (ts) VALUES (now()) RETURNING ts;"

# Check application error rates
bulwark metrics query 'rate(http_errors_total{service="payment-api"}[5m])'
```

## Scenario 2: Point-in-Time Recovery

When data corruption is detected, restore to a point before the corruption occurred.

### Recovery Steps

```bash
# 1. Identify the corruption timestamp from application logs
bulwark logs search --service payment-api --pattern "integrity constraint" --since "2h"

# 2. Stop writes to the affected database
bulwark db fence --target payment-db-primary --mode read-only

# 3. Create a PITR restore to a new instance
bulwark db restore \
  --source payment-db \
  --target payment-db-pitr \
  --recovery-target-time "2025-03-15 14:30:00 UTC" \
  --storage s3://bulwark-backups/payment-db/

# 4. Validate restored data
psql -h payment-db-pitr -U bulwark -c "SELECT count(*) FROM transactions WHERE created_at > '2025-03-15 14:30:00';"

# 5. Swap traffic to the restored instance
bulwark db swap --old payment-db-primary --new payment-db-pitr --confirm
```

## Scenario 3: Full Backup Restore

When both primary and replica are lost, restore from the latest base backup.

```bash
# 1. Provision a new database instance
bulwark infra provision --template postgres-tier1 --name payment-db-restored

# 2. Restore from S3 backup
bulwark db restore \
  --source s3://bulwark-backups/payment-db/base/latest/ \
  --target payment-db-restored \
  --apply-wal

# 3. Configure new replica
bulwark db replicate \
  --primary payment-db-restored \
  --replica payment-db-replica-new \
  --mode streaming

# 4. Update all connection endpoints
bulwark dns update --record payment-db.internal --target payment-db-restored --ttl 60
```

## Redis Recovery

Redis sessions use a cluster topology with automatic failover via Redis Sentinel.

```yaml
# /etc/redis/sentinel.conf
sentinel monitor redis-sessions 10.0.1.50 6379 2
sentinel down-after-milliseconds redis-sessions 5000
sentinel failover-timeout redis-sessions 60000
sentinel parallel-syncs redis-sessions 1
```

### Manual Redis Failover

```bash
# Force sentinel failover
redis-cli -h sentinel-01 -p 26379 SENTINEL FAILOVER redis-sessions

# Verify new primary
redis-cli -h sentinel-01 -p 26379 SENTINEL get-master-addr-by-name redis-sessions

# Check cluster health
bulwark check redis --cluster redis-sessions --verbose
```
