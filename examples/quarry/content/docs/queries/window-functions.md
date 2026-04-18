+++
title = "Window Functions"
description = "ROW_NUMBER, RANK, LAG, LEAD, and other window functions for analytics"
weight = 3
[taxonomies]
tags = ["sql", "window-functions", "analytics"]
+++

## Window Functions Overview

Window functions perform calculations across a set of rows related to the current row, without collapsing the result set like GROUP BY. They are essential for ranking, running totals, moving averages, and row-to-row comparisons.

### Syntax

```sql
function_name(arguments) OVER (
    [PARTITION BY partition_columns]
    [ORDER BY sort_columns [ASC|DESC]]
    [ROWS|RANGE BETWEEN frame_start AND frame_end]
)
```

### Window Function Categories

| Category | Functions | Purpose |
|----------|-----------|---------|
| Ranking | `ROW_NUMBER`, `RANK`, `DENSE_RANK`, `NTILE` | Assign ordinal positions |
| Offset | `LAG`, `LEAD`, `FIRST_VALUE`, `LAST_VALUE` | Access other rows |
| Aggregate | `SUM`, `AVG`, `COUNT`, `MIN`, `MAX` | Running/sliding calculations |

## Ranking Functions

### ROW_NUMBER

Assigns a unique sequential number within each partition. No ties -- every row gets a distinct number.

```sql
SELECT
    customer_id,
    order_id,
    order_total,
    created_at,
    ROW_NUMBER() OVER (
        PARTITION BY customer_id
        ORDER BY created_at DESC
    ) AS order_recency_rank
FROM warehouse.orders;
```

Common use: deduplication. Keep only the most recent record per entity.

```sql
WITH ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY updated_at DESC
        ) AS rn
    FROM warehouse.customers_raw
)
SELECT * FROM ranked WHERE rn = 1;
```

### RANK and DENSE_RANK

Unlike `ROW_NUMBER`, these handle ties.

```sql
SELECT
    product_id,
    category,
    total_revenue,
    RANK() OVER (
        PARTITION BY category
        ORDER BY total_revenue DESC
    ) AS revenue_rank,
    DENSE_RANK() OVER (
        PARTITION BY category
        ORDER BY total_revenue DESC
    ) AS dense_revenue_rank
FROM warehouse.product_summary;
```

| product_id | category | total_revenue | revenue_rank | dense_revenue_rank |
|-----------|----------|---------------|-------------|-------------------|
| 101 | Electronics | 50000 | 1 | 1 |
| 102 | Electronics | 50000 | 1 | 1 |
| 103 | Electronics | 42000 | 3 | 2 |
| 104 | Electronics | 38000 | 4 | 3 |

- `RANK` skips numbers after ties (1, 1, 3)
- `DENSE_RANK` does not skip (1, 1, 2)

### NTILE

Divides rows into N roughly equal groups.

```sql
SELECT
    customer_id,
    lifetime_value,
    NTILE(10) OVER (ORDER BY lifetime_value DESC) AS decile
FROM warehouse.customer_summary;
```

## Offset Functions

### LAG and LEAD

Access values from preceding or following rows.

```sql
SELECT
    month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY month) AS prev_month,
    LEAD(revenue, 1) OVER (ORDER BY month) AS next_month,
    revenue - LAG(revenue, 1) OVER (ORDER BY month) AS mom_change,
    ROUND(
        100.0 * (revenue - LAG(revenue, 1) OVER (ORDER BY month))
        / NULLIF(LAG(revenue, 1) OVER (ORDER BY month), 0),
        2
    ) AS mom_change_pct
FROM warehouse.monthly_revenue
ORDER BY month;
```

| month | revenue | prev_month | next_month | mom_change | mom_change_pct |
|-------|---------|------------|------------|------------|----------------|
| 2025-01 | 1200000 | NULL | 1350000 | NULL | NULL |
| 2025-02 | 1350000 | 1200000 | 1280000 | 150000 | 12.50 |
| 2025-03 | 1280000 | 1350000 | 1420000 | -70000 | -5.19 |
| 2025-04 | 1420000 | 1280000 | NULL | 140000 | 10.94 |

### FIRST_VALUE and LAST_VALUE

```sql
SELECT
    order_id,
    customer_id,
    order_total,
    created_at,
    FIRST_VALUE(order_total) OVER (
        PARTITION BY customer_id
        ORDER BY created_at
    ) AS first_order_value,
    LAST_VALUE(order_total) OVER (
        PARTITION BY customer_id
        ORDER BY created_at
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS latest_order_value
FROM warehouse.orders;
```

Note: `LAST_VALUE` requires an explicit frame clause. The default frame (`ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`) only looks at rows up to the current row, which makes `LAST_VALUE` return the current row's value.

## Aggregate Window Functions

### Running Totals

```sql
SELECT
    created_at,
    order_total,
    SUM(order_total) OVER (
        ORDER BY created_at
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM warehouse.orders
WHERE customer_id = 12345
ORDER BY created_at;
```

### Moving Averages

```sql
SELECT
    dt,
    daily_revenue,
    AVG(daily_revenue) OVER (
        ORDER BY dt
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS seven_day_avg,
    AVG(daily_revenue) OVER (
        ORDER BY dt
        ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
    ) AS thirty_day_avg
FROM warehouse.daily_revenue_summary
ORDER BY dt;
```

### Percent of Total

```sql
SELECT
    region,
    category,
    revenue,
    ROUND(
        100.0 * revenue / SUM(revenue) OVER (PARTITION BY region),
        2
    ) AS pct_of_region,
    ROUND(
        100.0 * revenue / SUM(revenue) OVER (),
        2
    ) AS pct_of_total
FROM warehouse.regional_category_revenue;
```

## Frame Specification

The frame clause controls which rows are included in the window calculation.

| Frame | Meaning |
|-------|---------|
| `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` | All rows from start to current (default) |
| `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` | Current row plus 6 preceding rows |
| `ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING` | Centered window of 7 rows |
| `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` | Entire partition |
| `RANGE BETWEEN INTERVAL '7' DAY PRECEDING AND CURRENT ROW` | Date-based range window |

### Best Practices

- Name your window with `WINDOW` clause when reusing the same partition and order across multiple functions
- Be explicit about frame clauses, especially with `LAST_VALUE`
- Use `QUALIFY` (where supported) to filter on window function results without a subquery
- Window functions are computed after WHERE, GROUP BY, and HAVING -- plan accordingly
- Avoid ordering by non-deterministic expressions in window definitions

```sql
-- Using QUALIFY to simplify deduplication (Snowflake, BigQuery, DuckDB)
SELECT *
FROM warehouse.customers_raw
QUALIFY ROW_NUMBER() OVER (
    PARTITION BY customer_id
    ORDER BY updated_at DESC
) = 1;
```
