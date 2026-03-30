+++
title = "Migration"
description = "Database migration guide for schema versioning, rollback, and deployment"
tags = ["migration", "database", "schema"]
+++

# Migration

Migration is a database schema management platform that tracks, versions, and deploys structural changes across development, staging, and production environments. It provides deterministic migration execution with full rollback support and schema diff tooling.

## Core Capabilities

- **Version Control** -- Track every schema change as a numbered, immutable migration file
- **Forward and Backward** -- Each migration includes both `up` and `down` operations for safe rollback
- **Schema Diffing** -- Compare schemas across environments and generate migration files from differences
- **Validation** -- Verify migration integrity before execution with dry-run and lint checks

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](/docs/getting-started/) | Install, configure, and run your first migration |
| [Migrations](/docs/migrations/) | Create, version, and roll back schema changes |
| [Schemas](/docs/schemas/) | Diff schemas, validate structure, and follow best practices |

## Version Timeline

Migration tracks schema state through a linear version history. Each version corresponds to a single migration file applied in order.

| Version | Date | Operation | Description |
|---------|------|-----------|-------------|
| 001 | 2024-01-15 | CREATE TABLE | Initial `users` table with authentication fields |
| 002 | 2024-02-03 | ALTER TABLE | Add `email_verified` column to `users` |
| 003 | 2024-02-20 | CREATE TABLE | Add `sessions` table with foreign key to `users` |
| 004 | 2024-03-08 | CREATE INDEX | Add composite index on `sessions(user_id, created_at)` |
| 005 | 2024-03-22 | ALTER TABLE | Add `last_login_at` timestamp to `users` |
| 006 | 2024-04-10 | CREATE TABLE | Add `audit_log` table for change tracking |

## Before and After Comparison

Migration files capture the exact transformation between schema states.

**Before (v002):**

```sql
CREATE TABLE users (
    id          BIGSERIAL PRIMARY KEY,
    username    VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
```

**After (v003):**

```sql
CREATE TABLE users (
    id              BIGSERIAL PRIMARY KEY,
    username        VARCHAR(255) NOT NULL UNIQUE,
    password        VARCHAR(255) NOT NULL,
    email_verified  BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE sessions (
    id          BIGSERIAL PRIMARY KEY,
    user_id     BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token       VARCHAR(512) NOT NULL UNIQUE,
    expires_at  TIMESTAMP NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
```

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 1 core | 2 cores |
| Memory | 256 MB | 1 GB |
| Disk | 100 MB | 1 GB |
| Database | PostgreSQL 12+ | PostgreSQL 15+ |

> Migration stores its version history in a dedicated `schema_migrations` table within the target database. No external metadata store is required.
