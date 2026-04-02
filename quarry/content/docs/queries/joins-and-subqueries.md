+++
title = "Joins and Subqueries"
description = "JOIN types, subquery patterns, and set operations for warehouse analytics"
weight = 2
[taxonomies]
tags = ["sql", "joins", "subqueries"]
+++

## JOIN Operations

Joins combine rows from two or more tables based on a related column. In warehouse environments, join performance is heavily influenced by data distribution and table sizes.

### JOIN Types

| Type | Behavior | Use Case |
|------|----------|----------|
| `INNER JOIN` | Returns only matching rows | Fact-to-dimension lookups |
| `LEFT JOIN` | All rows from left, matched from right | Preserving all base records |
| `RIGHT JOIN` | All rows from right, matched from left | Rarely used; rewrite as LEFT |
| `FULL OUTER JOIN` | All rows from both sides | Reconciliation and diff queries |
| `CROSS JOIN` | Cartesian product | Date spine generation |

### INNER JOIN

The most common join in analytics. Returns only rows that match in both tables.

```sql
SELECT
    o.order_id,
    o.order_total,
    c.customer_name,
    c.region
FROM warehouse.orders o
INNER JOIN warehouse.customers c
    ON o.customer_id = c.customer_id
WHERE o.created_at >= '2025-01-01';
```

### LEFT JOIN

Preserves all rows from the left table. Unmatched right-side columns return NULL.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.order_total), 0) AS lifetime_value
FROM warehouse.customers c
LEFT JOIN warehouse.orders o
    ON c.customer_id = o.customer_id
    AND o.created_at >= '2025-01-01'
GROUP BY c.customer_id, c.customer_name;
```

Note the filter on `created_at` is placed in the ON clause, not WHERE. Placing it in WHERE would convert the LEFT JOIN into an INNER JOIN.

### Multi-Table Joins

Warehouse queries commonly join a fact table to multiple dimension tables.

```sql
SELECT
    o.order_id,
    o.created_at,
    c.customer_name,
    c.region,
    p.product_name,
    p.category,
    oi.quantity,
    oi.unit_price
FROM warehouse.orders o
INNER JOIN warehouse.customers c
    ON o.customer_id = c.customer_id
INNER JOIN warehouse.order_items oi
    ON o.order_id = oi.order_id
INNER JOIN warehouse.products p
    ON oi.product_id = p.product_id
WHERE o.created_at BETWEEN '2025-01-01' AND '2025-03-31';
```

### CROSS JOIN for Date Spines

Generate a complete date range, useful for filling gaps in time series data.

```sql
WITH date_spine AS (
    SELECT
        DATEADD('day', seq, '2025-01-01'::DATE) AS dt
    FROM (
        SELECT ROW_NUMBER() OVER (ORDER BY 1) - 1 AS seq
        FROM warehouse.orders
        LIMIT 365
    )
),
daily_orders AS (
    SELECT
        DATE_TRUNC('day', created_at) AS dt,
        COUNT(*) AS order_count
    FROM warehouse.orders
    WHERE created_at >= '2025-01-01'
    GROUP BY 1
)
SELECT
    ds.dt,
    COALESCE(do.order_count, 0) AS order_count
FROM date_spine ds
LEFT JOIN daily_orders do
    ON ds.dt = do.dt
ORDER BY ds.dt;
```

## Subqueries

Subqueries are queries nested inside other queries. They appear in SELECT, FROM, and WHERE clauses.

### Scalar Subqueries

Return a single value. Useful in SELECT for per-row calculations against aggregates.

```sql
SELECT
    customer_id,
    order_total,
    order_total - (
        SELECT AVG(order_total)
        FROM warehouse.orders
        WHERE created_at >= '2025-01-01'
    ) AS diff_from_avg
FROM warehouse.orders
WHERE created_at >= '2025-01-01';
```

### Correlated Subqueries

Reference columns from the outer query. Executed once per outer row, so use with caution on large tables.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    (
        SELECT MAX(o.created_at)
        FROM warehouse.orders o
        WHERE o.customer_id = c.customer_id
    ) AS last_order_date
FROM warehouse.customers c;
```

### EXISTS and NOT EXISTS

Test for the presence or absence of related rows. Generally more efficient than IN for large datasets.

```sql
-- Customers who have placed at least one order in 2025
SELECT c.customer_id, c.customer_name
FROM warehouse.customers c
WHERE EXISTS (
    SELECT 1
    FROM warehouse.orders o
    WHERE o.customer_id = c.customer_id
      AND o.created_at >= '2025-01-01'
);

-- Customers with no orders at all
SELECT c.customer_id, c.customer_name
FROM warehouse.customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM warehouse.orders o
    WHERE o.customer_id = c.customer_id
);
```

### Common Table Expressions (CTEs)

CTEs improve readability by breaking complex queries into named steps.

```sql
WITH monthly_revenue AS (
    SELECT
        DATE_TRUNC('month', created_at) AS month,
        SUM(order_total) AS revenue
    FROM warehouse.orders
    WHERE status = 'completed'
    GROUP BY 1
),
revenue_with_growth AS (
    SELECT
        month,
        revenue,
        LAG(revenue) OVER (ORDER BY month) AS prev_month_revenue,
        ROUND(
            100.0 * (revenue - LAG(revenue) OVER (ORDER BY month))
            / NULLIF(LAG(revenue) OVER (ORDER BY month), 0),
            2
        ) AS growth_pct
    FROM monthly_revenue
)
SELECT * FROM revenue_with_growth
ORDER BY month;
```

## Set Operations

Combine result sets from multiple queries.

| Operation | Behavior |
|-----------|----------|
| `UNION ALL` | Concatenate all rows (including duplicates) |
| `UNION` | Concatenate and deduplicate |
| `INTERSECT` | Rows present in both result sets |
| `EXCEPT` | Rows in first set but not in second |

```sql
-- All customers who ordered in Q1 or Q2
SELECT DISTINCT customer_id FROM warehouse.orders
WHERE created_at BETWEEN '2025-01-01' AND '2025-03-31'

UNION

SELECT DISTINCT customer_id FROM warehouse.orders
WHERE created_at BETWEEN '2025-04-01' AND '2025-06-30';

-- Customers who ordered in Q1 but not Q2
SELECT DISTINCT customer_id FROM warehouse.orders
WHERE created_at BETWEEN '2025-01-01' AND '2025-03-31'

EXCEPT

SELECT DISTINCT customer_id FROM warehouse.orders
WHERE created_at BETWEEN '2025-04-01' AND '2025-06-30';
```

### Join Performance Tips

- Join on integer keys rather than strings when possible
- Filter fact tables before joining to dimension tables
- Use `UNION ALL` instead of `UNION` when duplicates are acceptable
- Prefer CTEs over deeply nested subqueries for readability
- Be cautious with `CROSS JOIN` -- the output size is the product of both inputs
