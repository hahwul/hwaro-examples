+++
title = "Database Migration"
weight = 3
template = "doc"
description = "Procedure for applying schema changes to a production database with minimal downtime."
tags = ["warning", "database", "deployment"]
[extra]
severity = "warning"
estimated_time = "30-120 min"
last_tested = "2024-09-20"
+++

## Pre-Migration Checklist

1. Migration script reviewed by a second engineer and tested against a recent production snapshot
2. Backup taken within the last two hours, restoration verified
3. Migration runtime estimated against the staging dataset; record the figure
4. Application code is backward compatible with both the old and new schemas
5. Maintenance window scheduled if migration runtime exceeds ten minutes

## Migration Steps

### Step 1: Take a fresh logical backup

```bash
pg_dump --format=custom --jobs=4 --file=/backups/pre-migration.dump $DATABASE_URL
```

Verify the file size matches expected volume. Test restore on a scratch instance.

### Step 2: Apply the migration

For online migrations using `pg-online-schema-change` or equivalent:

```bash
osc --alter "ALTER TABLE orders ADD COLUMN refund_reason TEXT" --table orders
```

For short-lived blocking migrations, run inside a single transaction:

```bash
psql $DATABASE_URL -1 -f migrations/2024_09_20_add_refund_reason.sql
```

### Step 3: Verify the change

```sql
\d orders
SELECT count(*) FROM orders WHERE refund_reason IS NULL;
```

Confirm the new column exists and the row count matches expectations.

### Step 4: Deploy dependent application code

Only after migration completes successfully and replication lag returns to normal.

## Rollback Procedure

If the migration introduces lock contention or unexpected failures:

```bash
psql $DATABASE_URL -f migrations/rollback/2024_09_20_drop_refund_reason.sql
```

If the migration cannot be reversed by a script, restore from the backup taken in Step 1. Restoration time is typically two to four times the backup duration.
