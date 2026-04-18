+++
title = "Database"
weight = 2
description = "Database performance, replication, and query analytics"
tags = ["infrastructure", "database"]
+++

## Database Metrics

Primary PostgreSQL instance with one read replica.

### Connection Pool

- **Active connections**: 142 / 200
- **Idle connections**: 38
- **Waiting queries**: 0
- **Max connections**: 200

### Replication Status

| Replica | Lag | State | Last Sync |
|---------|-----|-------|-----------|
| replica-01 | 0.4s | Streaming | 2025-03-22 14:32:01 |

### Slow Queries (Last 24h)

| Query Pattern | Avg Duration | Calls | Total Time |
|--------------|-------------|-------|------------|
| `SELECT ... FROM orders WHERE ...` | 245ms | 1,204 | 295s |
| `SELECT ... FROM users JOIN ...` | 180ms | 892 | 160s |
| `INSERT INTO events ...` | 120ms | 3,401 | 408s |

### Storage

- **Database size**: 84.2 GB
- **Index size**: 12.8 GB
- **WAL size**: 2.1 GB
- **Growth rate**: ~1.2 GB/week
