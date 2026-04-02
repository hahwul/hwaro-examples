+++
title = "Table Partitioning"
description = "Partitioning strategies for warehouse tables to improve query performance and manageability"
weight = 2
[taxonomies]
tags = ["optimization", "partitioning", "storage"]
+++

## What is Partitioning?

Partitioning divides a large table into smaller, manageable segments based on column values. The primary benefit is **partition pruning**: the query engine skips partitions that cannot contain relevant data, dramatically reducing I/O.

### Partitioning vs. Sharding

| Aspect | Partitioning | Sharding |
|--------|-------------|----------|
| Scope | Single database/warehouse | Multiple databases/nodes |
| Transparency | Queries treat it as one table | Application must route queries |
| Purpose | Performance and manageability | Horizontal scaling |

## Partitioning Strategies

### Range Partitioning

Divide data by continuous ranges, most commonly dates.

```sql
-- PostgreSQL declarative partitioning
CREATE TABLE warehouse.orders (
    order_id     BIGINT,
    customer_id  BIGINT,
    order_total  DECIMAL(12,2),
    created_at   TIMESTAMP NOT NULL,
    status       VARCHAR(20)
) PARTITION BY RANGE (created_at);

CREATE TABLE warehouse.orders_2025_q1
    PARTITION OF warehouse.orders
    FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');

CREATE TABLE warehouse.orders_2025_q2
    PARTITION OF warehouse.orders
    FOR VALUES FROM ('2025-04-01') TO ('2025-07-01');

CREATE TABLE warehouse.orders_2025_q3
    PARTITION OF warehouse.orders
    FOR VALUES FROM ('2025-07-01') TO ('2025-10-01');

CREATE TABLE warehouse.orders_2025_q4
    PARTITION OF warehouse.orders
    FOR VALUES FROM ('2025-10-01') TO ('2026-01-01');
```

### List Partitioning

Divide data by discrete values.

```sql
CREATE TABLE warehouse.orders (
    order_id     BIGINT,
    customer_id  BIGINT,
    order_total  DECIMAL(12,2),
    region       VARCHAR(20) NOT NULL,
    created_at   TIMESTAMP
) PARTITION BY LIST (region);

CREATE TABLE warehouse.orders_us
    PARTITION OF warehouse.orders
    FOR VALUES IN ('us-east', 'us-west', 'us-central');

CREATE TABLE warehouse.orders_eu
    PARTITION OF warehouse.orders
    FOR VALUES IN ('eu-west', 'eu-central', 'eu-north');

CREATE TABLE warehouse.orders_apac
    PARTITION OF warehouse.orders
    FOR VALUES IN ('ap-east', 'ap-south', 'ap-southeast');
```

### Hash Partitioning

Distribute data evenly across N partitions. Useful when no natural range or list column exists.

```sql
CREATE TABLE warehouse.events (
    event_id     BIGINT,
    user_id      BIGINT,
    event_type   VARCHAR(50),
    payload      JSONB,
    created_at   TIMESTAMP
) PARTITION BY HASH (user_id);

CREATE TABLE warehouse.events_p0
    PARTITION OF warehouse.events
    FOR VALUES WITH (MODULUS 4, REMAINDER 0);

CREATE TABLE warehouse.events_p1
    PARTITION OF warehouse.events
    FOR VALUES WITH (MODULUS 4, REMAINDER 1);

CREATE TABLE warehouse.events_p2
    PARTITION OF warehouse.events
    FOR VALUES WITH (MODULUS 4, REMAINDER 2);

CREATE TABLE warehouse.events_p3
    PARTITION OF warehouse.events
    FOR VALUES WITH (MODULUS 4, REMAINDER 3);
```

### Composite Partitioning

Combine multiple strategies for large-scale tables.

```sql
-- Range by date, then list by region
CREATE TABLE warehouse.orders (
    order_id     BIGINT,
    region       VARCHAR(20),
    created_at   DATE NOT NULL,
    order_total  DECIMAL(12,2)
) PARTITION BY RANGE (created_at);

CREATE TABLE warehouse.orders_2025_q1
    PARTITION OF warehouse.orders
    FOR VALUES FROM ('2025-01-01') TO ('2025-04-01')
    PARTITION BY LIST (region);
```

## Partition Pruning

Partition pruning is automatic when your WHERE clause references the partition key.

```sql
-- Prunes to only Q1 partition
SELECT COUNT(*) FROM warehouse.orders
WHERE created_at >= '2025-01-15'
  AND created_at < '2025-02-15';

-- No pruning: filter does not reference partition key
SELECT COUNT(*) FROM warehouse.orders
WHERE customer_id = 12345;
```

### Verifying Pruning

```sql
EXPLAIN
SELECT COUNT(*) FROM warehouse.orders
WHERE created_at >= '2025-01-01'
  AND created_at < '2025-04-01';
```

Look for output like:

```text
Append  (cost=0.00..28450.00 rows=1000000 width=0)
  ->  Seq Scan on orders_2025_q1
        Filter: (created_at >= '2025-01-01' AND created_at < '2025-04-01')
```

Only `orders_2025_q1` is scanned; other partitions are pruned.

## Warehouse-Specific Partitioning

### BigQuery

BigQuery uses partitioning on ingestion time, date/timestamp columns, or integer ranges.

```sql
CREATE TABLE project.dataset.orders
PARTITION BY DATE(created_at)
CLUSTER BY customer_id, region
AS SELECT * FROM project.dataset.orders_staging;
```

### Snowflake

Snowflake uses automatic micro-partitioning. You influence pruning through clustering keys.

```sql
ALTER TABLE warehouse.orders
    CLUSTER BY (created_at, region);
```

### Redshift

Redshift uses distribution keys and sort keys rather than traditional partitions.

```sql
CREATE TABLE warehouse.orders (
    order_id     BIGINT,
    customer_id  BIGINT,
    order_total  DECIMAL(12,2),
    created_at   TIMESTAMP
)
DISTSTYLE KEY
DISTKEY (customer_id)
SORTKEY (created_at);
```

## Choosing a Partition Key

| Factor | Recommendation |
|--------|---------------|
| Time-series data | Partition by date (daily, monthly, or quarterly) |
| Regional data | Partition by region if queries filter by region |
| High cardinality | Avoid -- too many partitions harm metadata performance |
| Even distribution | Ensure partitions are roughly equal in size |
| Query patterns | Choose the column most frequently used in WHERE |

### Partition Size Guidelines

- Target 100MB to 1GB per partition for columnar warehouses
- Avoid more than 10,000 partitions per table
- Too few partitions limits pruning benefit
- Too many partitions increases planning overhead and metadata storage

## Maintenance

### Adding New Partitions

```sql
-- Monthly partition creation (automate via scheduled job)
CREATE TABLE warehouse.orders_2025_10
    PARTITION OF warehouse.orders
    FOR VALUES FROM ('2025-10-01') TO ('2025-11-01');
```

### Dropping Old Partitions

Dropping a partition is instantaneous compared to deleting rows.

```sql
-- Remove data older than retention period
DROP TABLE warehouse.orders_2023_q1;
```

### Detaching Partitions

Detach without dropping for archival or analysis.

```sql
ALTER TABLE warehouse.orders
    DETACH PARTITION warehouse.orders_2023_q1;
```
