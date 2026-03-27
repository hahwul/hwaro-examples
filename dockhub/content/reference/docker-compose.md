+++
title = "Docker Compose"
weight = 1
template = "doc"
description = "Multi-container application configuration with Docker Compose."
tags = ["compose", "config"]
[extra]
category = "Configuration"
+++

## Basic Structure

```yaml
version: "3.9"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://db:5432/app
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:
```

## Common Commands

| Command | Description |
|---------|-------------|
| `docker compose up -d` | Start all services in background |
| `docker compose down` | Stop and remove containers |
| `docker compose logs -f` | Follow logs from all services |
| `docker compose ps` | List running services |
| `docker compose exec web sh` | Shell into a running service |
| `docker compose build --no-cache` | Rebuild without cache |

## Environment-Specific Overrides

Create override files for each environment:

```bash
# Development (uses docker-compose.override.yml automatically)
docker compose up

# Production
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### docker-compose.prod.yml

```yaml
services:
  web:
    restart: always
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
```

## Health Checks

```yaml
services:
  web:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
```
