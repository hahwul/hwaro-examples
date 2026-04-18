+++
title = "Creating Migrations"
description = "Author new migration files with up and down operations"
tags = ["migrations", "creating", "sql"]
+++

# Creating Migrations

Every schema change is captured as a migration file containing two operations: `up` (apply the change) and `down` (reverse the change). Migration files are SQL scripts with a special comment separator.

## Generate a Migration

Use the `new` command to scaffold a migration file:

```bash
migration new "create_users_table"
# Created: migrations/001_create_users_table.sql
```

This generates a file with the following structure:

```sql
-- migrate:up
CREATE TABLE users (
    id         BIGSERIAL PRIMARY KEY,
    username   VARCHAR(255) NOT NULL UNIQUE,
    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- migrate:down
DROP TABLE IF EXISTS users;
```

## Migration File Anatomy

Each migration file has exactly two sections separated by comment directives:

| Directive | Purpose |
|-----------|---------|
| `-- migrate:up` | SQL statements to apply the change |
| `-- migrate:down` | SQL statements to reverse the change |

Both sections are required. The `down` section must fully reverse the `up` section, returning the schema to its previous state.

## Common Migration Patterns

### Adding a Column

```sql
-- migrate:up
ALTER TABLE users
    ADD COLUMN email_verified BOOLEAN NOT NULL DEFAULT FALSE;

-- migrate:down
ALTER TABLE users
    DROP COLUMN IF EXISTS email_verified;
```

### Creating an Index

```sql
-- migrate:up
CREATE INDEX CONCURRENTLY idx_users_email
    ON users (email);

-- migrate:down
DROP INDEX IF EXISTS idx_users_email;
```

<div class="info-block">
<strong>TIP:</strong> Use <code>CREATE INDEX CONCURRENTLY</code> on PostgreSQL to avoid locking the table during index creation. This is critical for tables with active read/write traffic.
</div>

### Adding a Foreign Key

```sql
-- migrate:up
CREATE TABLE orders (
    id          BIGSERIAL PRIMARY KEY,
    user_id     BIGINT NOT NULL,
    total_cents INTEGER NOT NULL DEFAULT 0,
    status      VARCHAR(50) NOT NULL DEFAULT 'pending',
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_orders_user_id ON orders (user_id);
CREATE INDEX idx_orders_status ON orders (status);

-- migrate:down
DROP TABLE IF EXISTS orders;
```

### Renaming a Column

```sql
-- migrate:up
ALTER TABLE users
    RENAME COLUMN username TO display_name;

-- migrate:down
ALTER TABLE users
    RENAME COLUMN display_name TO username;
```

### Modifying a Column Type

```sql
-- migrate:up
ALTER TABLE products
    ALTER COLUMN price TYPE NUMERIC(12, 4);

-- migrate:down
ALTER TABLE products
    ALTER COLUMN price TYPE NUMERIC(10, 2);
```

<div class="warning-block">
<strong>WARNING:</strong> Changing column types on large tables can lock the table for extended periods. For tables over 1 million rows, consider creating a new column, backfilling data, and swapping columns in separate migrations.
</div>

## Multi-Statement Migrations

A single migration can contain multiple statements. Wrap them in a transaction for atomicity:

```sql
-- migrate:up
BEGIN;

CREATE TABLE categories (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

ALTER TABLE products
    ADD COLUMN category_id INTEGER REFERENCES categories(id);

CREATE INDEX idx_products_category ON products (category_id);

COMMIT;

-- migrate:down
BEGIN;

ALTER TABLE products
    DROP COLUMN IF EXISTS category_id;

DROP TABLE IF EXISTS categories;

COMMIT;
```

## Applying Migrations

Run all pending migrations:

```bash
migration up
# Applying 001_create_users_table...done (12ms)
# Applying 002_add_email_verified...done (8ms)
# Applying 003_create_sessions...done (15ms)
# 3 migrations applied successfully
```

Apply a specific number of migrations:

```bash
migration up --step 1
# Applying 001_create_users_table...done (12ms)
# 1 migration applied successfully
```

## Dry Run

Preview the SQL that would be executed without modifying the database:

```bash
migration up --dry-run
# Would apply 001_create_users_table:
#   CREATE TABLE users (
#       id BIGSERIAL PRIMARY KEY,
#       ...
#   );
# Would apply 002_add_email_verified:
#   ALTER TABLE users ADD COLUMN email_verified BOOLEAN NOT NULL DEFAULT FALSE;
```

<div class="info-block">
<strong>TIP:</strong> Always run <code>--dry-run</code> against production databases before executing migrations. Review the output with your team.
</div>
