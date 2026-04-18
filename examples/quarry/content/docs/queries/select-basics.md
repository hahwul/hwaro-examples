+++
title = "SELECT Basics"
description = "Fundamental SQL SELECT patterns for warehouse queries"
weight = 1
[taxonomies]
tags = ["sql", "select", "fundamentals"]
+++

## The SELECT Statement

The `SELECT` statement is the foundation of every analytics query. In a data warehouse context, understanding how to write precise, efficient SELECT statements is critical because even small inefficiencies multiply across billions of rows.

### Basic Syntax

```sql
SELECT
    column1,
    column2,
    aggregate_function(column3) AS alias
FROM schema.table_name
WHERE condition
GROUP BY column1, column2
HAVING aggregate_condition
ORDER BY column1
LIMIT 100;
```

### Column Selection

Always select only the columns you need. Warehouse storage is columnar, so each additional column in your SELECT adds I/O cost.

```sql
-- Bad: scans all columns
SELECT * FROM warehouse.orders;

-- Good: scans only required columns
SELECT
    order_id,
    customer_id,
    order_total,
    created_at
FROM warehouse.orders;
```

### Filtering with WHERE

Apply filters early to reduce the amount of data processed downstream.

```sql
SELECT
    customer_id,
    SUM(order_total) AS total_spend
FROM warehouse.orders
WHERE created_at >= '2025-01-01'
  AND status = 'completed'
GROUP BY customer_id;
```

### Common Filter Patterns

| Pattern | Example | Notes |
|---------|---------|-------|
| Date range | `WHERE dt BETWEEN '2025-01-01' AND '2025-03-31'` | Partition-friendly |
| NULL check | `WHERE email IS NOT NULL` | Use IS, not = |
| IN list | `WHERE region IN ('us-east', 'us-west')` | Keep lists short |
| LIKE pattern | `WHERE name LIKE 'prod_%'` | Prefix patterns can use indexes |
| NOT EXISTS | `WHERE NOT EXISTS (SELECT 1 FROM ...)` | Preferred over NOT IN for NULLs |

### Aggregation

Aggregate functions collapse rows into summary values. The most common aggregations in warehouse queries:

```sql
SELECT
    DATE_TRUNC('month', created_at) AS month,
    COUNT(*) AS order_count,
    COUNT(DISTINCT customer_id) AS unique_customers,
    SUM(order_total) AS revenue,
    AVG(order_total) AS avg_order_value,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY order_total) AS median_order
FROM warehouse.orders
WHERE created_at >= '2025-01-01'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month;
```

### CASE Expressions

Use `CASE` to create derived columns based on conditional logic.

```sql
SELECT
    order_id,
    order_total,
    CASE
        WHEN order_total >= 1000 THEN 'high'
        WHEN order_total >= 100  THEN 'medium'
        ELSE 'low'
    END AS value_tier,
    CASE WHEN is_first_order THEN 1 ELSE 0 END AS new_customer_flag
FROM warehouse.orders;
```

### Conditional Aggregation

Combine `CASE` with aggregate functions for pivot-style analysis.

```sql
SELECT
    region,
    COUNT(*) AS total_orders,
    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed,
    SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled,
    ROUND(
        100.0 * SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) / COUNT(*),
        2
    ) AS completion_rate
FROM warehouse.orders
GROUP BY region
ORDER BY total_orders DESC;
```

### Example Schema

The examples in this documentation use the following warehouse schema:

| Table | Description | Approximate Rows |
|-------|-------------|-----------------|
| `warehouse.orders` | Transactional order records | 500M |
| `warehouse.customers` | Customer dimension table | 12M |
| `warehouse.products` | Product catalog dimension | 200K |
| `warehouse.order_items` | Line items per order | 1.8B |
| `warehouse.events` | Clickstream event log | 50B |

### DISTINCT and Deduplication

```sql
-- Simple distinct
SELECT DISTINCT region, country
FROM warehouse.customers;

-- Deduplication with ROW_NUMBER (see Window Functions)
SELECT *
FROM (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY updated_at DESC
        ) AS rn
    FROM warehouse.customers_raw
) t
WHERE rn = 1;
```

### Best Practices

- Select only the columns you need to minimize columnar I/O
- Push filters into WHERE clauses rather than HAVING when possible
- Use date partition columns in WHERE to enable partition pruning
- Prefer `COUNT(DISTINCT x)` carefully -- it can be expensive at scale
- Alias all computed columns for clarity in downstream consumption
