+++
title = "Indexing Strategies"
description = "Index types, design patterns, and maintenance strategies for warehouse workloads"
weight = 3
[taxonomies]
tags = ["optimization", "indexing", "performance"]
+++

## Why Indexing Matters

Indexes allow the database to locate rows without scanning the entire table. In warehouse environments with billions of rows, the right index can reduce query time from minutes to milliseconds.

### Index vs. Full Table Scan

| Approach | Row Access Pattern | Best For |
|----------|-------------------|----------|
| Full scan | Reads every row | Queries returning large fraction of table |
| Index scan | Reads specific rows via index | Selective queries (small result set) |
| Index-only scan | Reads from index alone | Queries where all columns are in the index |

## Index Types

### B-Tree Index

The default and most common index type. Supports equality and range queries.

```sql
-- Single column
CREATE INDEX idx_orders_customer
    ON warehouse.orders (customer_id);

-- Composite (multi-column)
CREATE INDEX idx_orders_customer_date
    ON warehouse.orders (customer_id, created_at);

-- Supports these queries efficiently:
-- WHERE customer_id = 12345
-- WHERE customer_id = 12345 AND created_at >= '2025-01-01'
-- WHERE customer_id BETWEEN 1000 AND 2000
```

### Column Order in Composite Indexes

The order of columns in a composite index matters. The index is useful for queries that filter on a **leftmost prefix** of the index columns.

```sql
-- Index: (customer_id, created_at, status)

-- Uses index (full prefix match):
WHERE customer_id = 12345 AND created_at >= '2025-01-01' AND status = 'completed'

-- Uses index (leftmost prefix):
WHERE customer_id = 12345 AND created_at >= '2025-01-01'

-- Uses index (leftmost column only):
WHERE customer_id = 12345

-- Cannot use index (skips leftmost column):
WHERE created_at >= '2025-01-01' AND status = 'completed'
```

### Hash Index

Optimized for equality lookups only. Smaller than B-Tree for this use case.

```sql
CREATE INDEX idx_orders_status_hash
    ON warehouse.orders USING HASH (status);

-- Efficient: WHERE status = 'completed'
-- Not efficient: WHERE status IN ('completed', 'pending')
-- Not supported: WHERE status > 'a'
```

### GIN (Generalized Inverted Index)

For columns containing arrays, JSONB, or full-text search vectors.

```sql
-- Index on JSONB column
CREATE INDEX idx_events_payload
    ON warehouse.events USING GIN (payload);

-- Supports queries like:
-- WHERE payload @> '{"type": "purchase"}'
-- WHERE payload ? 'coupon_code'
```

### BRIN (Block Range Index)

Extremely small indexes for naturally ordered data. Stores min/max values per block range.

```sql
CREATE INDEX idx_orders_created_brin
    ON warehouse.orders USING BRIN (created_at)
    WITH (pages_per_range = 128);
```

BRIN works well when the physical order of rows on disk correlates with the indexed column (e.g., append-only tables with a timestamp).

| Index Type | Size | Equality | Range | Array/JSON | Best For |
|-----------|------|----------|-------|------------|----------|
| B-Tree | Medium | Yes | Yes | No | General purpose |
| Hash | Small | Yes | No | No | Equality-only lookups |
| GIN | Large | Yes | No | Yes | JSONB, arrays, full-text |
| BRIN | Tiny | No | Yes | No | Naturally ordered large tables |

## Partial Indexes

Index only a subset of rows, reducing index size and maintenance cost.

```sql
-- Only index active orders
CREATE INDEX idx_orders_active
    ON warehouse.orders (customer_id, created_at)
    WHERE status = 'active';

-- Only index recent data
CREATE INDEX idx_orders_recent
    ON warehouse.orders (customer_id)
    WHERE created_at >= '2025-01-01';
```

## Covering Indexes (INCLUDE)

Add non-key columns to the index to enable index-only scans.

```sql
CREATE INDEX idx_orders_covering
    ON warehouse.orders (customer_id, created_at)
    INCLUDE (order_total, status);

-- This query can be answered entirely from the index:
SELECT customer_id, created_at, order_total, status
FROM warehouse.orders
WHERE customer_id = 12345
  AND created_at >= '2025-01-01';
```

## Expression Indexes

Index the result of a function or expression.

```sql
-- Index on date truncation
CREATE INDEX idx_orders_month
    ON warehouse.orders (DATE_TRUNC('month', created_at));

-- Index on lower-cased email
CREATE INDEX idx_customers_email_lower
    ON warehouse.customers (LOWER(email));
```

## Index Design Process

1. **Identify slow queries** from query logs or monitoring
2. **Check execution plans** to see where scans occur
3. **Identify selective columns** -- columns that filter to a small percentage of rows
4. **Design the index** based on query patterns (consider composite indexes)
5. **Test with EXPLAIN ANALYZE** to verify the index is used
6. **Monitor index usage** and drop unused indexes

### Checking Index Usage

```sql
-- PostgreSQL: check index usage statistics
SELECT
    schemaname,
    tablename,
    indexname,
    idx_scan AS times_used,
    idx_tup_read AS rows_read,
    idx_tup_fetch AS rows_fetched,
    pg_size_pretty(pg_relation_size(indexrelid)) AS index_size
FROM pg_stat_user_indexes
WHERE schemaname = 'warehouse'
ORDER BY idx_scan DESC;
```

## Warehouse-Specific Considerations

### Columnar Warehouses

Many modern warehouses (Snowflake, BigQuery, Redshift) use columnar storage with zone maps or micro-partitions instead of traditional indexes.

| Platform | Index Equivalent | How to Influence |
|----------|-----------------|-----------------|
| Snowflake | Micro-partition pruning | Clustering keys |
| BigQuery | Partition + cluster pruning | PARTITION BY + CLUSTER BY |
| Redshift | Zone maps + sort keys | SORTKEY declaration |
| DuckDB | Automatic zone maps | Natural insertion order |

### Redshift Sort Keys

```sql
-- Compound sort key: optimizes filters on leading columns
CREATE TABLE warehouse.orders (
    order_id BIGINT,
    customer_id BIGINT,
    created_at TIMESTAMP,
    order_total DECIMAL(12,2)
)
SORTKEY (created_at, customer_id);

-- Interleaved sort key: equal weight to all specified columns
CREATE TABLE warehouse.orders (
    order_id BIGINT,
    customer_id BIGINT,
    created_at TIMESTAMP,
    region VARCHAR(20)
)
INTERLEAVED SORTKEY (created_at, region, customer_id);
```

## Index Maintenance

### Bloat and Reindexing

Indexes accumulate bloat from updates and deletes. Periodically rebuild.

```sql
-- Rebuild a specific index
REINDEX INDEX idx_orders_customer;

-- Rebuild all indexes on a table
REINDEX TABLE warehouse.orders;

-- Concurrent rebuild (no lock, PostgreSQL 12+)
REINDEX INDEX CONCURRENTLY idx_orders_customer;
```

### Monitoring Index Size

```sql
SELECT
    indexname,
    pg_size_pretty(pg_relation_size(indexrelid)) AS size
FROM pg_stat_user_indexes
WHERE tablename = 'orders'
ORDER BY pg_relation_size(indexrelid) DESC;
```

### When to Drop an Index

- The index is never used (check `idx_scan` in `pg_stat_user_indexes`)
- The index duplicates another index (e.g., single-column index on the first column of a composite)
- Write performance is more critical than read performance for that table
- The table is small enough that sequential scans are fast

```sql
-- Drop unused index
DROP INDEX IF EXISTS idx_orders_old_status;
```
