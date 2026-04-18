+++
title = "Diff View"
description = "Compare schemas across environments and migration versions"
tags = ["schemas", "diff", "comparison"]
+++

# Diff View

The diff view compares database schemas between two states -- either two migration versions, two environments, or a migration directory against a live database. This is used to detect drift, verify deployments, and generate corrective migrations.

## Version-to-Version Diff

Compare the schema at two migration versions:

```bash
migration diff 003 006
```

```diff
--- Schema at version 003
+++ Schema at version 006

  CREATE TABLE users (
      id              BIGSERIAL PRIMARY KEY,
      username        VARCHAR(255) NOT NULL UNIQUE,
      password        VARCHAR(255) NOT NULL,
      email_verified  BOOLEAN NOT NULL DEFAULT FALSE,
-     created_at      TIMESTAMP NOT NULL DEFAULT NOW()
+     created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
+     last_login_at   TIMESTAMP
  );

  CREATE TABLE sessions (
      id          BIGSERIAL PRIMARY KEY,
      user_id     BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      token       VARCHAR(512) NOT NULL UNIQUE,
      expires_at  TIMESTAMP NOT NULL,
      created_at  TIMESTAMP NOT NULL DEFAULT NOW()
  );

+ CREATE INDEX idx_sessions_user_created
+     ON sessions (user_id, created_at);

+ CREATE TABLE audit_log (
+     id            BIGSERIAL PRIMARY KEY,
+     table_name    VARCHAR(255) NOT NULL,
+     record_id     BIGINT NOT NULL,
+     action        VARCHAR(50) NOT NULL,
+     old_data      JSONB,
+     new_data      JSONB,
+     performed_by  VARCHAR(255),
+     performed_at  TIMESTAMP NOT NULL DEFAULT NOW()
+ );
```

## Environment Diff

Compare schemas between two live environments:

```bash
migration diff --source staging --target production
```

```diff
--- staging (version 008)
+++ production (version 006)

  CREATE TABLE users (
      id              BIGSERIAL PRIMARY KEY,
      username        VARCHAR(255) NOT NULL UNIQUE,
      password        VARCHAR(255) NOT NULL,
      email_verified  BOOLEAN NOT NULL DEFAULT FALSE,
      created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
-     last_login_at   TIMESTAMP,
-     display_name    VARCHAR(255),
-     avatar_url      TEXT
+     last_login_at   TIMESTAMP
  );

- CREATE TABLE notifications (
-     id          BIGSERIAL PRIMARY KEY,
-     user_id     BIGINT NOT NULL REFERENCES users(id),
-     message     TEXT NOT NULL,
-     read_at     TIMESTAMP,
-     created_at  TIMESTAMP NOT NULL DEFAULT NOW()
- );
```

This output shows that staging is two versions ahead of production. The `display_name`, `avatar_url` columns and the `notifications` table exist in staging but not in production.

## Database-to-Migrations Diff

Detect schema drift by comparing a live database against the expected state from migration files:

```bash
migration diff --live --target production
```

```diff
--- Expected (from migration files)
+++ Live (production database)

  CREATE TABLE users (
      id              BIGSERIAL PRIMARY KEY,
      username        VARCHAR(255) NOT NULL UNIQUE,
      password        VARCHAR(255) NOT NULL,
      email_verified  BOOLEAN NOT NULL DEFAULT FALSE,
      created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
-     last_login_at   TIMESTAMP
+     last_login_at   TIMESTAMP,
+     temp_flag       BOOLEAN DEFAULT FALSE
  );
```

<div class="warning-block">
<strong>WARNING:</strong> Schema drift indicates that manual changes were made directly to the database outside the migration workflow. The <code>temp_flag</code> column in this example was added manually and is not tracked in any migration file. This must be resolved by either creating a migration to formalize the change or reverting the manual modification.
</div>

## Generating Migrations from Diffs

Migration can generate a migration file from a schema diff:

```bash
migration diff --source staging --target production --generate
# Generated: migrations/009_sync_staging_to_production.sql
```

The generated file contains the SQL needed to bring production up to the staging schema:

```sql
-- migrate:up
ALTER TABLE users
    ADD COLUMN display_name VARCHAR(255),
    ADD COLUMN avatar_url TEXT;

CREATE TABLE notifications (
    id          BIGSERIAL PRIMARY KEY,
    user_id     BIGINT NOT NULL REFERENCES users(id),
    message     TEXT NOT NULL,
    read_at     TIMESTAMP,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

-- migrate:down
DROP TABLE IF EXISTS notifications;

ALTER TABLE users
    DROP COLUMN IF EXISTS avatar_url,
    DROP COLUMN IF EXISTS display_name;
```

<div class="info-block">
<strong>TIP:</strong> Always review generated migration files before applying them. Automated generation handles structural changes but may not capture the correct order for dependent objects like foreign keys and views.
</div>

## Diff Output Formats

Control the output format for integration with other tools:

```bash
# Human-readable (default)
migration diff 003 006 --format text

# JSON for programmatic consumption
migration diff 003 006 --format json

# SQL statements only
migration diff 003 006 --format sql
```

JSON output example:

```json
{
  "source_version": "003",
  "target_version": "006",
  "changes": [
    {
      "type": "add_column",
      "table": "users",
      "column": "last_login_at",
      "data_type": "TIMESTAMP",
      "nullable": true
    },
    {
      "type": "create_index",
      "table": "sessions",
      "name": "idx_sessions_user_created",
      "columns": ["user_id", "created_at"]
    },
    {
      "type": "create_table",
      "table": "audit_log",
      "columns": [
        {"name": "id", "type": "BIGSERIAL", "primary_key": true},
        {"name": "table_name", "type": "VARCHAR(255)", "nullable": false},
        {"name": "record_id", "type": "BIGINT", "nullable": false},
        {"name": "action", "type": "VARCHAR(50)", "nullable": false},
        {"name": "old_data", "type": "JSONB", "nullable": true},
        {"name": "new_data", "type": "JSONB", "nullable": true},
        {"name": "performed_by", "type": "VARCHAR(255)", "nullable": true},
        {"name": "performed_at", "type": "TIMESTAMP", "nullable": false}
      ]
    }
  ]
}
```
