+++
title = "Rollback"
description = "Roll back migrations safely with procedures for emergency and planned reversals"
tags = ["migrations", "rollback", "recovery"]
+++

# Rollback

Rolling back migrations reverses schema changes by executing the `down` section of each migration file in reverse order. Rollbacks are used for planned reversals during development and for emergency recovery in production.

## Basic Rollback

Roll back the most recently applied migration:

```bash
migration down --step 1
# Rolling back 006_create_audit_log...done (9ms)
# 1 migration rolled back successfully
```

Roll back multiple migrations:

```bash
migration down --step 3
# Rolling back 006_create_audit_log...done (9ms)
# Rolling back 005_add_last_login...done (6ms)
# Rolling back 004_add_session_index...done (4ms)
# 3 migrations rolled back successfully
```

Roll back to a specific version:

```bash
migration down --to 003
# Rolling back 006_create_audit_log...done (9ms)
# Rolling back 005_add_last_login...done (6ms)
# Rolling back 004_add_session_index...done (4ms)
# Schema is now at version 003
```

## Rollback Dry Run

Preview what a rollback would execute without modifying the database:

```bash
migration down --step 1 --dry-run
# Would roll back 006_create_audit_log:
#   DROP TABLE IF EXISTS audit_log;
```

<div class="warning-block">
<strong>WARNING:</strong> Always run <code>--dry-run</code> before rolling back in production. Verify the SQL statements are safe and expected before proceeding.
</div>

## Data Loss Considerations

Not all rollbacks are safe. Operations that destroy data cannot be fully reversed:

| Operation | Rollback Risk |
|-----------|---------------|
| `CREATE TABLE` | Safe -- `DROP TABLE` removes the table cleanly |
| `ADD COLUMN` | Data loss -- dropping the column removes all stored values |
| `DROP COLUMN` | Not reversible -- original data is permanently lost |
| `DROP TABLE` | Not reversible -- all table data is permanently lost |
| `ALTER COLUMN TYPE` | Possible data loss -- type narrowing may truncate values |
| `CREATE INDEX` | Safe -- `DROP INDEX` removes the index without data loss |

<div class="warning-block">
<strong>WARNING:</strong> If a migration includes <code>DROP TABLE</code> or <code>DROP COLUMN</code>, the <code>down</code> migration can recreate the structure but not the data. Always take a backup before applying destructive migrations.
</div>

## Emergency Rollback Procedure

For production incidents requiring immediate rollback, follow this procedure:

**Step 1: Assess the situation**

```bash
# Check current migration status
migration status

# Identify which migration caused the issue
migration log --last 5
```

**Step 2: Take a backup**

```bash
# PostgreSQL
pg_dump -Fc --no-owner mydb > backup_$(date +%Y%m%d_%H%M%S).dump

# MySQL
mysqldump --single-transaction mydb > backup_$(date +%Y%m%d_%H%M%S).sql
```

**Step 3: Dry run the rollback**

```bash
migration down --step 1 --dry-run
# Review the output carefully
```

**Step 4: Execute the rollback**

```bash
migration down --step 1
```

**Step 5: Verify the schema**

```bash
migration status
migration validate
```

## Rollback in CI/CD Pipelines

Automated rollback can be integrated into deployment pipelines. If the application health check fails after migration, the pipeline rolls back:

```yaml
# .github/workflows/deploy.yml
deploy:
  steps:
    - name: Apply migrations
      run: migration up

    - name: Health check
      run: |
        sleep 10
        curl --fail http://localhost:8080/health || {
          echo "Health check failed, rolling back..."
          migration down --step 1
          exit 1
        }
```

<div class="info-block">
<strong>TIP:</strong> Set an appropriate delay before the health check. The application may need time to restart and establish database connections after a migration.
</div>

## Partial Rollback Recovery

If a rollback fails midway (for example, due to a dependent view or trigger), you may need to intervene manually:

```bash
migration down --step 1
# Rolling back 005_add_user_roles...
# ERROR: cannot drop column "role" because view "active_admins" depends on it
```

To resolve this:

1. Drop the dependent object first:

```sql
DROP VIEW IF EXISTS active_admins;
```

2. Retry the rollback:

```bash
migration down --step 1
```

3. If the dependent object was important, recreate it in the new schema state or create a new migration that properly handles the dependency.

## Preventing Accidental Rollbacks

In production, enable rollback protection to require explicit confirmation:

```toml
[environments.production]
settings.require_rollback_confirmation = true
```

With this setting, rollback commands will prompt for confirmation:

```bash
migration down --step 1
# WARNING: You are about to roll back in a production environment.
# Migration: 006_create_audit_log
# Type the migration version to confirm: 006
> 006
# Rolling back 006_create_audit_log...done (9ms)
```
