+++
title = "Versioning"
description = "Understand migration versioning strategies and version tracking"
tags = ["migrations", "versioning"]
+++

# Versioning

Migration tracks schema state through a linear sequence of version numbers. Each migration file is assigned a unique version, and the migration tool records which versions have been applied in a dedicated database table.

## Version Numbering

Migration supports two numbering strategies:

### Sequential Numbering

Versions are assigned as incrementing integers: `001`, `002`, `003`. This is the default and works well for teams with a linear development workflow.

```
migrations/
  001_create_users_table.sql
  002_add_email_verified.sql
  003_create_sessions.sql
  004_add_session_index.sql
```

### Timestamp Numbering

Versions are assigned as UTC timestamps in `YYYYMMDDHHMMSS` format. This reduces merge conflicts in teams with parallel feature branches.

```
migrations/
  20240115093045_create_users_table.sql
  20240203141230_add_email_verified.sql
  20240220160800_create_sessions.sql
```

Configure the strategy in `.migration.toml`:

```toml
[migrations]
timestamp_format = "timestamp"  # or "sequential"
```

## Version Tracking Table

Migration creates a `schema_migrations` table to record applied versions:

```sql
CREATE TABLE schema_migrations (
    version    VARCHAR(255) NOT NULL PRIMARY KEY,
    applied_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

Query the current state:

```bash
migration status
```

```
+----------+---------------------+---------------------------------+
| Version  | Applied At          | Description                     |
+----------+---------------------+---------------------------------+
| 001      | 2024-01-15 09:30:45 | create_users_table              |
| 002      | 2024-02-03 14:12:30 | add_email_verified              |
| 003      | 2024-02-20 16:08:00 | create_sessions                 |
| 004      | 2024-03-08 10:22:15 | add_session_index               |
+----------+---------------------+---------------------------------+
Current version: 004
Pending migrations: 0
```

## Version Integrity

Migration enforces strict ordering rules:

1. **No gaps** -- All versions between the earliest and current must be present
2. **No duplicates** -- Each version number appears exactly once
3. **No modifications** -- Applied migration files must not be altered after execution

If a file is modified after being applied, Migration detects the checksum mismatch:

```bash
migration status
# ERROR: Checksum mismatch for version 002
#   Expected: a3f8c9d2e1b4...
#   Found:    7c2d1e9f4a8b...
# Migration 002 has been modified after it was applied.
# This indicates the migration history is inconsistent.
```

<div class="warning-block">
<strong>WARNING:</strong> Never edit a migration file after it has been applied to any environment. If you need to change the schema, create a new migration that applies the correction. Editing applied migrations breaks the integrity chain across all environments.
</div>

## Handling Merge Conflicts

When two developers create migrations on separate branches, version conflicts can occur:

**Branch A:**
```
migrations/
  004_add_user_roles.sql
```

**Branch B:**
```
migrations/
  004_create_audit_log.sql
```

### Resolution Strategy

1. Merge the base branch into your feature branch
2. Renumber your migration to the next available version
3. Run `migration status` to verify no gaps or duplicates

```bash
# After merging, renumber your migration
mv migrations/004_create_audit_log.sql migrations/005_create_audit_log.sql

# Verify the sequence
migration validate
# All migrations valid. No gaps, no duplicates.
```

Using timestamp-based versioning avoids this problem entirely, since two developers will never generate the same timestamp.

## Squashing Migrations

Over time, the number of migration files grows. For long-running projects, you can squash applied migrations into a single baseline:

```bash
migration squash --up-to 010
# Squashed migrations 001-010 into migrations/000_baseline.sql
# Original files moved to migrations/.archive/
```

The baseline file contains the full schema as of version 010. New migrations continue from version 011.

<div class="warning-block">
<strong>WARNING:</strong> Only squash migrations that have been applied to all environments (development, staging, and production). Squashing migrations that are pending in any environment will cause those environments to fail.
</div>

## Comparing Versions

View the difference between two schema versions:

```bash
migration diff 003 005
```

```diff
--- Schema at version 003
+++ Schema at version 005

  CREATE TABLE users (
      id              BIGSERIAL PRIMARY KEY,
      username        VARCHAR(255) NOT NULL UNIQUE,
      password        VARCHAR(255) NOT NULL,
      email_verified  BOOLEAN NOT NULL DEFAULT FALSE,
-     created_at      TIMESTAMP NOT NULL DEFAULT NOW()
+     created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
+     last_login_at   TIMESTAMP
  );

+ CREATE TABLE audit_log (
+     id          BIGSERIAL PRIMARY KEY,
+     table_name  VARCHAR(255) NOT NULL,
+     record_id   BIGINT NOT NULL,
+     action      VARCHAR(50) NOT NULL,
+     old_data    JSONB,
+     new_data    JSONB,
+     performed_by VARCHAR(255),
+     performed_at TIMESTAMP NOT NULL DEFAULT NOW()
+ );
```
