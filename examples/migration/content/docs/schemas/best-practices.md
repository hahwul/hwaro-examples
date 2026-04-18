+++
title = "Best Practices"
description = "Best practices for database schema management and migration workflows"
tags = ["schemas", "best-practices", "patterns"]
+++

# Best Practices

This guide covers established patterns for managing database schemas at scale. These practices reduce risk, improve team coordination, and keep schema history maintainable over the long term.

## One Change Per Migration

Each migration file should contain exactly one logical change. Do not combine unrelated alterations in a single migration.

**Correct** -- separate migrations for separate concerns:

```
migrations/
  007_add_user_avatar.sql
  008_create_notifications_table.sql
```

**Incorrect** -- unrelated changes bundled together:

```sql
-- migrate:up
ALTER TABLE users ADD COLUMN avatar_url TEXT;
CREATE TABLE notifications (...);
```

Keeping changes atomic makes rollbacks precise. If the notifications table has a problem, you can roll back migration 008 without reverting the avatar column.

## Always Write Reversible Migrations

Every `up` operation should have a corresponding `down` operation. Before applying a migration, verify the rollback:

```bash
# Apply
migration up --step 1

# Verify rollback
migration down --step 1

# Re-apply
migration up --step 1
```

If a migration cannot be reversed (for example, dropping a column with irreplaceable data), document this explicitly:

```sql
-- migrate:down
-- IRREVERSIBLE: The "legacy_token" column contained authentication
-- tokens that are no longer generated. Data cannot be restored.
-- Manual intervention required for rollback.
SELECT 1; -- no-op placeholder
```

## Use Transactions for Multi-Statement Migrations

Wrap multi-statement migrations in explicit transactions to ensure atomicity:

```sql
-- migrate:up
BEGIN;

ALTER TABLE orders ADD COLUMN discount_cents INTEGER DEFAULT 0;
ALTER TABLE orders ADD COLUMN coupon_code VARCHAR(50);
CREATE INDEX idx_orders_coupon ON orders (coupon_code) WHERE coupon_code IS NOT NULL;

COMMIT;

-- migrate:down
BEGIN;

DROP INDEX IF EXISTS idx_orders_coupon;
ALTER TABLE orders DROP COLUMN IF EXISTS coupon_code;
ALTER TABLE orders DROP COLUMN IF EXISTS discount_cents;

COMMIT;
```

<div class="warning-block">
<strong>WARNING:</strong> In PostgreSQL, some DDL operations cannot run inside a transaction. <code>CREATE INDEX CONCURRENTLY</code> and <code>ALTER TYPE ... ADD VALUE</code> (for enums) must be executed outside of a transaction block.
</div>

## Handle Large Table Migrations Carefully

Operations on large tables require special consideration. A naive `ALTER TABLE` on a table with 100 million rows can lock the table for minutes or hours.

### Safe Column Addition (PostgreSQL)

Adding a column with a default value is safe in PostgreSQL 11+ because it does not rewrite the table:

```sql
-- migrate:up
ALTER TABLE events
    ADD COLUMN processed BOOLEAN NOT NULL DEFAULT FALSE;
```

### Unsafe Pattern -- Backfilling in the Same Migration

```sql
-- migrate:up
ALTER TABLE events ADD COLUMN processed BOOLEAN;
UPDATE events SET processed = FALSE;  -- locks table, may take hours
ALTER TABLE events ALTER COLUMN processed SET NOT NULL;
ALTER TABLE events ALTER COLUMN processed SET DEFAULT FALSE;
```

### Safe Pattern -- Backfill in a Separate Step

Split the operation across migrations and a background job:

```
Migration 009: Add nullable column
Migration 010: (after backfill completes) Add NOT NULL constraint
```

```sql
-- 009_add_processed_column.sql
-- migrate:up
ALTER TABLE events ADD COLUMN processed BOOLEAN;

-- migrate:down
ALTER TABLE events DROP COLUMN IF EXISTS processed;
```

After running a background backfill to populate existing rows:

```sql
-- 010_enforce_processed_not_null.sql
-- migrate:up
ALTER TABLE events ALTER COLUMN processed SET NOT NULL;
ALTER TABLE events ALTER COLUMN processed SET DEFAULT FALSE;

-- migrate:down
ALTER TABLE events ALTER COLUMN processed DROP NOT NULL;
ALTER TABLE events ALTER COLUMN processed DROP DEFAULT;
```

## Index Creation on Production Tables

Always create indexes concurrently on production PostgreSQL databases:

```sql
-- migrate:up
CREATE INDEX CONCURRENTLY idx_events_user_id
    ON events (user_id);

-- migrate:down
DROP INDEX IF EXISTS idx_events_user_id;
```

<div class="info-block">
<strong>TIP:</strong> <code>CREATE INDEX CONCURRENTLY</code> does not lock the table for writes, but it takes longer to complete and cannot run inside a transaction. Set <code>statement_timeout</code> to a higher value for this operation.
</div>

## Naming Conventions

Use consistent, descriptive names for database objects:

| Object | Convention | Example |
|--------|-----------|---------|
| Table | Plural, snake_case | `user_sessions` |
| Column | Singular, snake_case | `created_at` |
| Primary Key | `id` | `id` |
| Foreign Key | `{table}_id` | `user_id` |
| Index | `idx_{table}_{columns}` | `idx_users_email` |
| Unique Constraint | `uq_{table}_{columns}` | `uq_users_username` |
| Check Constraint | `ck_{table}_{description}` | `ck_orders_positive_total` |
| Foreign Key Constraint | `fk_{table}_{ref_table}` | `fk_orders_users` |

## Migration File Naming

Use descriptive names that communicate the change:

```
# Good
007_add_email_to_users.sql
008_create_notifications_table.sql
009_add_index_on_orders_user_id.sql

# Bad
007_update.sql
008_fix.sql
009_changes.sql
```

## Review Checklist

Before merging a migration, verify:

- [ ] The `up` section applies the change correctly
- [ ] The `down` section fully reverses the `up` section
- [ ] The migration has been tested locally (apply, rollback, re-apply)
- [ ] Large table operations use non-blocking patterns
- [ ] Indexes are created concurrently on production-facing tables
- [ ] No database credentials or environment-specific values are hardcoded
- [ ] The migration file name clearly describes the change
- [ ] Destructive operations include backup reminders in comments

## Environment Promotion Workflow

Follow this sequence when promoting migrations through environments:

```
1. Author migration locally
2. Test on local database (up, down, up)
3. Apply to shared development database
4. Apply to staging and run integration tests
5. Schedule production deployment window
6. Take production backup
7. Apply to production with --dry-run first
8. Apply to production
9. Verify application health
```

<div class="warning-block">
<strong>WARNING:</strong> Never skip the staging step. Migrations that work in development may fail in staging or production due to data volume, existing constraints, or concurrent access patterns that do not exist in smaller environments.
</div>
