+++
title = "Query Tuning"
weight = 2
+++

# Query Tuning

Database query optimization is one of the highest-leverage performance improvements. This guide covers EXPLAIN plan analysis, index strategies, query rewriting, and before/after validation.

## Identifying Slow Queries

### PostgreSQL Slow Query Log

Enable slow query logging:

```sql
-- postgresql.conf
log_min_duration_statement = 100  -- log queries taking > 100ms
log_statement = 'none'
log_duration = off
```

### pg_stat_statements

Install and query the extension for aggregate statistics:

```sql
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Top 10 queries by total execution time
SELECT
    calls,
    round(total_exec_time::numeric, 2) AS total_ms,
    round(mean_exec_time::numeric, 2) AS mean_ms,
    round(max_exec_time::numeric, 2) AS max_ms,
    rows,
    query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;
```

Sample output:

| calls | total_ms | mean_ms | max_ms | rows | query |
|-------|----------|---------|--------|------|-------|
| 1,234,567 | 89,234 | 0.07 | 1,234 | 1,234,567 | SELECT * FROM users WHERE id = $1 |
| 456,789 | 78,901 | 0.17 | 3,456 | 2,345,678 | SELECT * FROM events WHERE user_id = $1 AND created_at > $2 |
| 12,345 | 67,890 | 5.50 | 8,901 | 123,456 | SELECT u.*, COUNT(e.*) FROM users u LEFT JOIN events e ... |

## EXPLAIN Plan Analysis

### Reading EXPLAIN Output

```sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.id, u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
ORDER BY order_count DESC
LIMIT 50;
```

```
Sort  (cost=45678.90..45679.02 rows=50 width=52) (actual time=1234.567..1234.589 rows=50 loops=1)
  Sort Key: (count(o.id)) DESC
  Sort Method: top-N heapsort  Memory: 32kB
  Buffers: shared hit=12345 read=6789
  ->  HashAggregate  (cost=45600.00..45650.00 rows=5000 width=52) (actual time=1200.123..1220.456 rows=5000 loops=1)
        Group Key: u.id, u.name
        Batches: 1  Memory Usage: 1024kB
        ->  Hash Left Join  (cost=1234.00..40000.00 rows=500000 width=44) (actual time=50.123..900.456 rows=487234 loops=1)
              Hash Cond: (o.user_id = u.id)
              ->  Seq Scan on orders o  (cost=0.00..30000.00 rows=1000000 width=8) (actual time=0.012..400.123 rows=987654 loops=1)
                    Buffers: shared hit=8901 read=5678
              ->  Hash  (cost=1000.00..1000.00 rows=5000 width=40) (actual time=45.678..45.678 rows=5123 loops=1)
                    Buckets: 8192  Batches: 1  Memory Usage: 350kB
                    ->  Index Scan using idx_users_created_at on users u  (cost=0.42..1000.00 rows=5000 width=40) (actual time=0.034..30.456 rows=5123 loops=1)
                          Index Cond: (created_at > '2024-01-01'::date)
                          Buffers: shared hit=3444 read=1111
```

Key indicators:
- **Seq Scan on orders** -- sequential scan over 1M rows (needs an index)
- **shared read=5678** -- disk reads (not cached in shared_buffers)
- **actual time** vs **cost** mismatch indicates planner estimate issues

## Index Strategies

### Common Index Types

| Index Type | Use Case | Example |
|-----------|----------|---------|
| B-tree | Equality and range queries | `CREATE INDEX idx_users_email ON users(email)` |
| Hash | Equality only | `CREATE INDEX idx_sessions_token ON sessions USING hash(token)` |
| GIN | Full-text search, JSONB | `CREATE INDEX idx_events_data ON events USING gin(data)` |
| GiST | Geometric, range types | `CREATE INDEX idx_locations_coords ON locations USING gist(coords)` |
| Partial | Filtered subset | `CREATE INDEX idx_orders_pending ON orders(created_at) WHERE status = 'pending'` |
| Covering | Index-only scans | `CREATE INDEX idx_users_lookup ON users(email) INCLUDE (name, role)` |

### Creating Effective Indexes

For the slow join query above, add a composite index on orders:

```sql
-- Before: Seq Scan on orders (400ms)
-- After: Index Scan (2ms)
CREATE INDEX CONCURRENTLY idx_orders_user_id_created
ON orders(user_id, created_at DESC);
```

### Index Maintenance

```sql
-- Check index usage
SELECT
    schemaname,
    tablename,
    indexname,
    idx_scan,
    idx_tup_read,
    pg_size_pretty(pg_relation_size(indexrelid)) AS size
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC
LIMIT 20;

-- Find unused indexes (candidates for removal)
SELECT
    indexname,
    idx_scan,
    pg_size_pretty(pg_relation_size(indexrelid)) AS size
FROM pg_stat_user_indexes
WHERE idx_scan = 0
AND schemaname = 'public'
ORDER BY pg_relation_size(indexrelid) DESC;
```

## Query Rewriting

### Replace Subqueries with JOINs

```sql
-- Before: correlated subquery (executes per row)
SELECT u.id, u.name,
    (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count
FROM users u
WHERE u.active = true;

-- After: JOIN with aggregation (single pass)
SELECT u.id, u.name, COALESCE(o.order_count, 0) AS order_count
FROM users u
LEFT JOIN (
    SELECT user_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY user_id
) o ON o.user_id = u.id
WHERE u.active = true;
```

### Use EXISTS Instead of IN

```sql
-- Before: IN subquery (materializes entire result set)
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE total > 1000);

-- After: EXISTS (short-circuits per row)
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id AND o.total > 1000
);
```

### Pagination Optimization

```sql
-- Before: OFFSET-based (scans and discards rows)
SELECT * FROM events
ORDER BY created_at DESC
LIMIT 20 OFFSET 10000;
-- Scans 10,020 rows, discards 10,000

-- After: cursor-based (seeks directly)
SELECT * FROM events
WHERE created_at < '2024-06-15T10:30:00Z'
ORDER BY created_at DESC
LIMIT 20;
-- Scans exactly 20 rows using index
```

## Before/After: Full Query Optimization

A dashboard endpoint running an expensive aggregation query:

```sql
-- Original query
SELECT
    DATE_TRUNC('hour', e.created_at) AS hour,
    e.event_type,
    COUNT(*) AS event_count,
    COUNT(DISTINCT e.user_id) AS unique_users,
    AVG(e.duration_ms) AS avg_duration
FROM events e
WHERE e.created_at > NOW() - INTERVAL '7 days'
    AND e.project_id = 'proj_abc123'
GROUP BY DATE_TRUNC('hour', e.created_at), e.event_type
ORDER BY hour DESC;
```

Optimizations applied:

1. Added composite index: `(project_id, created_at, event_type)`
2. Added covering columns: `INCLUDE (user_id, duration_ms)`
3. Pre-aggregated into a materialized view refreshed every 5 minutes

```sql
-- Optimized: materialized view
CREATE MATERIALIZED VIEW mv_hourly_events AS
SELECT
    DATE_TRUNC('hour', created_at) AS hour,
    project_id,
    event_type,
    COUNT(*) AS event_count,
    COUNT(DISTINCT user_id) AS unique_users,
    AVG(duration_ms) AS avg_duration
FROM events
WHERE created_at > NOW() - INTERVAL '30 days'
GROUP BY DATE_TRUNC('hour', created_at), project_id, event_type;

CREATE UNIQUE INDEX idx_mv_hourly ON mv_hourly_events(hour, project_id, event_type);

-- Refresh on schedule
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_hourly_events;
```

Results:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Query execution time | 4,200ms | 8ms | -99.8% |
| Rows scanned | 12,400,000 | 1,344 | -99.99% |
| Shared buffers hit | 45,000 | 120 | -99.7% |
| Disk reads | 12,000 | 0 | -100% |
| CPU time (query) | 3,800ms | 2ms | -99.9% |
| Dashboard load time | 5.1s | 0.2s | -96.1% |

## Connection Pool Tuning

```sql
-- Check current connections
SELECT count(*), state
FROM pg_stat_activity
GROUP BY state;

-- Recommended pool sizing formula:
-- pool_size = (core_count * 2) + effective_spindle_count
-- For SSD: pool_size = core_count * 2 + 1
-- Example: 8 cores, SSD = 17 connections
```

```yaml
# pgbouncer.ini
[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 20
min_pool_size = 5
reserve_pool_size = 5
reserve_pool_timeout = 3
server_idle_timeout = 600
```

## Best Practices

- Use `EXPLAIN (ANALYZE, BUFFERS)` on every slow query, not just `EXPLAIN`
- Create indexes concurrently in production: `CREATE INDEX CONCURRENTLY`
- Remove unused indexes -- they consume disk space and slow down writes
- Use connection pooling (PgBouncer, pgpool) to manage connection overhead
- Monitor `pg_stat_statements` continuously, not just during incidents
- Test query changes against production-sized datasets, not small dev databases
- Consider materialized views for expensive aggregations accessed frequently
- Always validate optimizations with before/after EXPLAIN output and load test results
