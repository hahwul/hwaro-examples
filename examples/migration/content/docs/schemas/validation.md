+++
title = "Validation"
description = "Validate migration files and schema integrity before execution"
tags = ["schemas", "validation", "lint"]
+++

# Validation

Migration includes a validation suite that checks migration files for correctness, safety, and consistency before they are applied to the database. Validation runs automatically before `migration up` and can be invoked manually.

## Running Validation

```bash
migration validate
```

```
Checking migration files...
  001_create_users_table.sql         OK
  002_add_email_verified.sql         OK
  003_create_sessions.sql            OK
  004_add_session_index.sql          OK
  005_add_last_login.sql             OK
  006_create_audit_log.sql           OK

All 6 migrations valid.
Checksums: verified
Sequence: no gaps, no duplicates
```

## Validation Checks

Migration performs the following checks:

| Check | Description |
|-------|-------------|
| Syntax | SQL statements are parseable |
| Structure | Both `-- migrate:up` and `-- migrate:down` directives are present |
| Sequence | Version numbers are sequential with no gaps or duplicates |
| Checksums | Applied migration files match their recorded checksums |
| Reversibility | The `down` section is not empty |
| Naming | File names follow the configured naming convention |

## Lint Rules

In addition to structural validation, Migration includes lint rules that flag potentially dangerous operations:

```bash
migration lint
```

```
migrations/007_drop_legacy_columns.sql:
  WARNING: DROP COLUMN detected on table "users"
    Line 3: ALTER TABLE users DROP COLUMN legacy_flag;
    This operation will permanently delete data in the "legacy_flag" column.
    Consider backing up data before applying.

migrations/008_change_column_type.sql:
  WARNING: ALTER COLUMN TYPE detected on table "products"
    Line 3: ALTER TABLE products ALTER COLUMN price TYPE NUMERIC(8, 2);
    Narrowing column type from NUMERIC(12,4) to NUMERIC(8,2) may
    cause data truncation. Review existing data ranges.

  WARNING: Missing transaction wrapper
    This migration contains multiple statements but is not wrapped
    in BEGIN/COMMIT. Consider adding explicit transaction control.
```

## Lint Rule Reference

| Rule | Severity | Description |
|------|----------|-------------|
| `drop-table` | Error | `DROP TABLE` permanently deletes data |
| `drop-column` | Warning | `DROP COLUMN` removes stored values |
| `alter-type-narrow` | Warning | Narrowing a column type may truncate data |
| `no-down` | Error | Missing `down` section prevents rollback |
| `empty-down` | Warning | Empty `down` section has no rollback effect |
| `no-transaction` | Warning | Multi-statement migration without explicit transaction |
| `lock-risk` | Warning | Operation likely to acquire exclusive lock on large table |
| `reserved-word` | Info | Column or table name is a SQL reserved word |

## Configuring Lint Rules

Override lint severity or disable specific rules in `.migration.toml`:

```toml
[lint]
enabled = true

[lint.rules]
drop-table = "error"       # Block migration if DROP TABLE is detected
drop-column = "warning"    # Warn but allow
alter-type-narrow = "warning"
no-transaction = "info"    # Downgrade to informational
reserved-word = "off"      # Disable this rule
```

## Pre-Apply Validation

When `migration up` runs, it performs validation before executing any SQL. If validation fails, no migrations are applied:

```bash
migration up
# Validating migrations...
# ERROR: Checksum mismatch for version 003
#   Expected: a3f8c9d2e1b4...
#   Found:    7c2d1e9f4a8b...
# Aborting. No migrations were applied.
```

<div class="warning-block">
<strong>WARNING:</strong> If validation reports a checksum mismatch, do not force-apply migrations. Investigate whether the migration file was modified after being applied. This typically indicates a workflow problem that needs to be resolved at the process level.
</div>

## CI Integration

Run validation as part of your CI pipeline to catch issues before merging:

```yaml
# .github/workflows/ci.yml
validate-migrations:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4

    - name: Install Migration
      run: |
        curl -fsSL https://get.migration-tool.dev | sh

    - name: Validate migration files
      run: migration validate

    - name: Lint migration files
      run: migration lint --fail-on warning
```

The `--fail-on` flag sets the minimum severity that causes a non-zero exit code:

| Flag Value | Exits Non-Zero On |
|------------|-------------------|
| `error` | Errors only |
| `warning` | Warnings and errors |
| `info` | All findings |

## Dry Run Validation

Combine validation with a dry run to verify both file integrity and SQL correctness against a real database:

```bash
migration up --dry-run --validate
# Validating migrations...OK
# Dry run against database...
# Would apply 007_drop_legacy_columns:
#   ALTER TABLE users DROP COLUMN legacy_flag;
# Would apply 008_change_column_type:
#   ALTER TABLE products ALTER COLUMN price TYPE NUMERIC(8, 2);
# Dry run complete. No changes were made.
```
