+++
title = "Execution Plans"
description = "Reading and understanding query execution plans for performance analysis"
weight = 1
[taxonomies]
tags = ["optimization", "execution-plans", "explain"]
+++

## Understanding Execution Plans

An execution plan (or query plan) shows how the database engine will execute your query. Reading these plans is the single most important skill for query optimization.

### Generating a Plan

Most warehouse platforms support `EXPLAIN` or similar commands.

```sql
-- PostgreSQL / Redshift
EXPLAIN ANALYZE
SELECT
    c.region,
    COUNT(*) AS order_count,
    SUM(o.order_total) AS revenue
FROM warehouse.orders o
JOIN warehouse.customers c ON o.customer_id = c.customer_id
WHERE o.created_at >= '2025-01-01'
GROUP BY c.region;
```

### Example EXPLAIN Output

```text
HashAggregate  (cost=45892.33..45892.45 rows=12 width=44)
  Group Key: c.region
  ->  Hash Join  (cost=3412.00..42678.21 rows=428549 width=36)
        Hash Cond: (o.customer_id = c.customer_id)
        ->  Seq Scan on orders o  (cost=0.00..35120.00 rows=428549 width=16)
              Filter: (created_at >= '2025-01-01 00:00:00'::timestamp)
              Rows Removed by Filter: 571451
        ->  Hash  (cost=2150.00..2150.00 rows=120000 width=28)
              ->  Seq Scan on customers c  (cost=0.00..2150.00 rows=120000 width=28)

Planning Time: 0.284 ms
Execution Time: 312.447 ms
```

### Reading the Plan

Plans are read from the inside out (bottom to top, most indented to least).

| Component | Meaning |
|-----------|---------|
| **Seq Scan** | Full table scan -- reads every row |
| **Index Scan** | Uses an index to find specific rows |
| **Hash Join** | Builds a hash table from one input, probes with the other |
| **Merge Join** | Joins two sorted inputs -- efficient for large sorted datasets |
| **Nested Loop** | For each row in outer, scan inner -- efficient for small outer sets |
| **HashAggregate** | Aggregation using a hash table |
| **Sort** | Explicit sort operation |
| **cost** | Estimated startup and total cost (arbitrary units) |
| **rows** | Estimated number of rows produced |

### Key Metrics

When using `EXPLAIN ANALYZE`, you get actual execution statistics:

```text
->  Seq Scan on orders o
      (cost=0.00..35120.00 rows=428549 width=16)
      (actual time=0.012..187.340 rows=428549 loops=1)
      Filter: (created_at >= '2025-01-01')
      Rows Removed by Filter: 571451
      Buffers: shared hit=12480 read=3200
```

| Metric | Description |
|--------|-------------|
| `actual time` | Real elapsed time (startup..total) in ms |
| `rows` | Actual rows returned vs. estimated |
| `loops` | Number of times this node was executed |
| `Buffers: shared hit` | Pages read from cache |
| `Buffers: read` | Pages read from disk |
| `Rows Removed by Filter` | Rows scanned but discarded by filter |

### Identifying Problems

#### Inaccurate Row Estimates

When estimated rows differ significantly from actual rows, the planner may choose a suboptimal strategy.

```text
-- Estimated 100 rows, actually 2.5 million
->  Index Scan on events
      (cost=0.57..385.20 rows=100 width=64)
      (actual time=0.032..4521.889 rows=2500000 loops=1)
```

This typically means statistics are stale. Run `ANALYZE` on the table.

#### Sequential Scans on Large Tables

If you see `Seq Scan` on a table with millions of rows and a selective filter, consider adding an index or using partition pruning.

#### Spill to Disk

Hash operations that exceed `work_mem` spill to disk, dramatically slowing execution.

```text
->  HashAggregate
      Batches: 4  Memory Usage: 8241kB  Disk Usage: 45632kB
```

### Warehouse-Specific Plans

#### Snowflake

```sql
-- Snowflake uses a profile, not traditional EXPLAIN
SELECT *
FROM TABLE(RESULT_SCAN(LAST_QUERY_ID()));

-- Or use the Query Profile in the web UI
```

Key Snowflake metrics:
- **Partitions scanned** vs. **total partitions** -- measures pruning efficiency
- **Bytes spilled to local/remote storage** -- indicates insufficient memory
- **Percentage scanned from cache** -- measures warehouse cache effectiveness

#### BigQuery

```sql
-- BigQuery shows plan in the execution details tab
-- Estimated bytes processed is shown before execution
SELECT
    region,
    COUNT(*) AS cnt
FROM `project.dataset.orders`
WHERE DATE(created_at) >= '2025-01-01'
GROUP BY region;
```

BigQuery key metrics:
- **Bytes processed** -- directly impacts cost
- **Slot time** -- total compute time across all workers
- **Shuffle bytes** -- data moved between stages

### Optimization Workflow

1. Run the query with `EXPLAIN ANALYZE`
2. Identify the most expensive node (highest actual time)
3. Check if row estimates match actuals
4. Look for sequential scans that could benefit from indexes or partitioning
5. Check for disk spills in hash operations
6. Apply fixes (add index, update statistics, rewrite query)
7. Re-run `EXPLAIN ANALYZE` to verify improvement

### Common Plan Improvements

| Problem | Solution |
|---------|----------|
| Seq Scan with selective filter | Add an index on filter column |
| Large hash join spilling to disk | Increase `work_mem` or pre-filter tables |
| Inaccurate row estimates | Run `ANALYZE` to update statistics |
| Sort on large dataset | Add index matching ORDER BY |
| Nested Loop with large outer | Rewrite to use Hash or Merge Join |
