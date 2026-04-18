+++
title = "Installation"
description = "Install the Manifold multi-tenant platform"
tags = ["installation", "setup", "getting-started"]
+++

# Installation

Manifold is distributed as a container image and a CLI binary. The platform requires PostgreSQL and Redis as external dependencies.

## Prerequisites

Ensure the following are available in your environment:

| Dependency | Version | Purpose |
|-----------|---------|---------|
| PostgreSQL | 14+ | Tenant metadata and application data |
| Redis | 7+ | Session cache, rate limiting, pub/sub |
| Docker | 24+ | Container runtime (optional) |

## CLI Installation

Download the Manifold CLI for your platform:

```bash
# Linux (amd64)
curl -LO https://releases.manifold.dev/v1.8.0/manifold-linux-amd64.tar.gz
tar xzf manifold-linux-amd64.tar.gz
sudo mv manifold /usr/local/bin/

# macOS (arm64)
curl -LO https://releases.manifold.dev/v1.8.0/manifold-darwin-arm64.tar.gz
tar xzf manifold-darwin-arm64.tar.gz
sudo mv manifold /usr/local/bin/
```

## Docker Compose

For local development, use the provided Docker Compose configuration:

```yaml
version: "3.9"
services:
  manifold:
    image: ghcr.io/manifold-platform/manifold:1.8.0
    ports:
      - "3000:3000"
      - "3001:3001"
    environment:
      DATABASE_URL: "postgres://manifold:secret@postgres:5432/manifold"
      REDIS_URL: "redis://redis:6379/0"
      ADMIN_API_PORT: "3001"
      TENANT_API_PORT: "3000"
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: manifold
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: manifold
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redisdata:/data

volumes:
  pgdata:
  redisdata:
```

Start the stack:

```bash
docker compose up -d
```

## Database Initialization

After starting the services, initialize the database schema:

```bash
manifold db migrate --url "postgres://manifold:secret@localhost:5432/manifold"
```

This creates the control plane tables for tenant metadata, plan definitions, and audit logs. Tenant-specific schemas are created automatically during provisioning.

## Verify Installation

Check that the platform is running:

```bash
manifold version
```

Expected output:

```
manifold v1.8.0 (build 4c7e1a9, 2026-03-20)
```

Verify API availability:

```bash
# Admin API health check
curl -s http://localhost:3001/health | jq .

# Tenant API health check
curl -s http://localhost:3000/health | jq .
```

Both endpoints should return:

```json
{
  "status": "healthy",
  "version": "1.8.0",
  "database": "connected",
  "redis": "connected"
}
```

## Package Managers

Manifold CLI is available through several package managers:

| Platform | Command |
|----------|---------|
| Homebrew | `brew install manifold-platform/tap/manifold` |
| APT | `apt install manifold-cli` |
| DNF | `dnf install manifold-cli` |
