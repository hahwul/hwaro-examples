+++
title = "Installation"
description = "Install Migration on your local machine or CI environment"
tags = ["installation", "getting-started"]
+++

# Installation

Migration ships as a single binary with no runtime dependencies. It connects directly to your database using standard connection strings.

## Package Managers

Install using your preferred package manager:

```bash
# macOS (Homebrew)
brew install migration-tool/tap/migration

# Linux (apt)
curl -fsSL https://repo.migration-tool.dev/gpg.key | sudo apt-key add -
echo "deb https://repo.migration-tool.dev/apt stable main" | sudo tee /etc/apt/sources.list.d/migration.list
sudo apt update && sudo apt install migration

# From source
git clone https://github.com/migration-tool/migration.git
cd migration
make build
sudo mv ./bin/migration /usr/local/bin/
```

## Docker

A Docker image is available for CI/CD pipelines:

```bash
docker pull ghcr.io/migration-tool/migration:latest

# Run a migration
docker run --rm \
  -v $(pwd)/migrations:/migrations \
  -e DATABASE_URL="postgres://user:pass@host:5432/mydb" \
  ghcr.io/migration-tool/migration:latest \
  migrate up
```

## Verify Installation

After installation, verify the binary is available:

```bash
migration --version
# migration v2.4.1 (build 2024-03-15)
```

## Initialize a Project

Create a new migration directory in your project root:

```bash
migration init
```

This creates the following structure:

```
migrations/
  .migration.toml
```

The `.migration.toml` file stores project-level configuration. Migration files will be created in the `migrations/` directory as you author them.

## Database Support

| Database | Status | Minimum Version |
|----------|--------|-----------------|
| PostgreSQL | Supported | 12.0 |
| MySQL | Supported | 8.0 |
| SQLite | Supported | 3.35 |
| MariaDB | Supported | 10.6 |
| CockroachDB | Experimental | 22.1 |

> Migration uses database-specific SQL dialects. Migration files authored for PostgreSQL are not portable to MySQL without modification.
