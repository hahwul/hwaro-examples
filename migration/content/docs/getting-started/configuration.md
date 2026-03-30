+++
title = "Configuration"
description = "Configure Migration for your database and environment"
tags = ["configuration", "getting-started"]
+++

# Configuration

Migration is configured through a `.migration.toml` file in your project root and environment variables for sensitive values like database credentials.

## Configuration File

A typical `.migration.toml` file:

```toml
[database]
driver = "postgres"
schema = "public"
migrations_table = "schema_migrations"

[migrations]
directory = "migrations"
format = "sql"
timestamp_format = "sequential"

[settings]
lock_timeout = "10s"
statement_timeout = "60s"
dry_run = false
verbose = false
```

## Environment Variables

Database connection details should be set via environment variables, not stored in configuration files.

```bash
# Connection string format
export DATABASE_URL="postgres://username:password@localhost:5432/mydb?sslmode=disable"

# Or individual components
export DB_HOST="localhost"
export DB_PORT="5432"
export DB_USER="admin"
export DB_PASSWORD="secret"
export DB_NAME="mydb"
export DB_SSLMODE="disable"
```

<div class="warning-block">
<strong>WARNING:</strong> Never commit database credentials to version control. Use environment variables or a secrets manager for all connection parameters.
</div>

## Configuration Reference

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `database.driver` | string | `postgres` | Database driver (`postgres`, `mysql`, `sqlite`) |
| `database.schema` | string | `public` | Target schema for migrations |
| `database.migrations_table` | string | `schema_migrations` | Table name for tracking applied versions |
| `migrations.directory` | string | `migrations` | Path to migration files |
| `migrations.format` | string | `sql` | Migration format (`sql` or `go`) |
| `migrations.timestamp_format` | string | `sequential` | Version numbering (`sequential` or `timestamp`) |
| `settings.lock_timeout` | string | `10s` | Advisory lock wait timeout |
| `settings.statement_timeout` | string | `60s` | Per-statement execution timeout |
| `settings.dry_run` | bool | `false` | Print SQL without executing |
| `settings.verbose` | bool | `false` | Enable detailed output |

## Multi-Environment Setup

Use environment-specific configuration by setting the `MIGRATION_ENV` variable:

```bash
# Development
MIGRATION_ENV=development migration status

# Staging
MIGRATION_ENV=staging migration status

# Production
MIGRATION_ENV=production migration status
```

Each environment reads from its own `DATABASE_URL` or can override specific settings:

```toml
[environments.development]
database_url = "postgres://dev:dev@localhost:5432/myapp_dev"

[environments.staging]
database_url_env = "STAGING_DATABASE_URL"
settings.dry_run = true

[environments.production]
database_url_env = "PRODUCTION_DATABASE_URL"
settings.lock_timeout = "30s"
settings.statement_timeout = "120s"
```

<div class="info-block">
<strong>TIP:</strong> In production environments, always set longer timeouts. Large table alterations can take minutes or hours depending on table size.
</div>

## Advisory Locking

Migration uses database advisory locks to prevent concurrent migration execution. This is critical in environments where multiple deployment processes might attempt to migrate simultaneously.

```toml
[settings]
# Wait up to 30 seconds for the advisory lock
lock_timeout = "30s"

# If another process holds the lock, fail immediately instead of waiting
lock_fail_fast = false
```

When `lock_fail_fast` is enabled, Migration will exit with an error code if it cannot acquire the lock immediately. This is useful in CI pipelines where you want fast failure rather than queuing.
