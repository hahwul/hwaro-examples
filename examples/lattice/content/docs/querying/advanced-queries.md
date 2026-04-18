+++
title = "Advanced Queries"
weight = 2
+++

# Advanced Queries

This section covers advanced Cypher patterns for aggregation, path finding, subqueries, and performance optimization.

## Aggregations

Cypher provides built-in aggregation functions that operate on grouped results:

```cypher
// Count, average, and collect
MATCH (c:Company)<-[r:WORKS_AT]-(p:Person)
RETURN c.name AS company,
       count(p) AS headcount,
       avg(p.age) AS averageAge,
       collect(p.name) AS employees
ORDER BY headcount DESC
```

### Aggregation Functions

| Function | Description | Example |
|----------|-------------|---------|
| `count(x)` | Number of non-null values | `count(p)` |
| `count(DISTINCT x)` | Unique value count | `count(DISTINCT p.role)` |
| `sum(x)` | Sum of numeric values | `sum(o.total)` |
| `avg(x)` | Average of numeric values | `avg(p.age)` |
| `min(x)` / `max(x)` | Minimum / maximum value | `min(r.since)` |
| `collect(x)` | Aggregate into a list | `collect(p.name)` |
| `stDev(x)` | Standard deviation | `stDev(p.age)` |
| `percentileCont(x, p)` | Continuous percentile | `percentileCont(p.age, 0.5)` |

### Grouping

Aggregation groups by all non-aggregated return columns:

```cypher
// Group by company and department
MATCH (p:Person)-[r:WORKS_AT]->(c:Company)
RETURN c.name AS company,
       r.department AS department,
       count(p) AS teamSize,
       collect(p.name) AS members
ORDER BY c.name, teamSize DESC
```

## Path Finding

Graph databases excel at traversing paths between nodes:

### Shortest Path

```cypher
// Find the shortest path between two people
MATCH path = shortestPath(
  (alice:Person {name: "Alice"})-[:KNOWS*]-(dave:Person {name: "Dave"})
)
RETURN path, length(path) AS hops

// All shortest paths (multiple equal-length paths)
MATCH path = allShortestPaths(
  (alice:Person {name: "Alice"})-[:KNOWS*]-(dave:Person {name: "Dave"})
)
RETURN [n IN nodes(path) | n.name] AS route, length(path) AS hops
```

### Variable-Length Paths

```cypher
// Find connections within 1-3 hops
MATCH (alice:Person {name: "Alice"})-[:KNOWS*1..3]->(connection:Person)
RETURN DISTINCT connection.name AS reachable,
       min(length(shortestPath((alice)-[:KNOWS*]-(connection)))) AS distance

// Find all reachable nodes (no upper bound -- use with caution)
MATCH (alice:Person {name: "Alice"})-[:KNOWS*]->(connection:Person)
RETURN DISTINCT connection.name
```

### Weighted Shortest Path

For graphs with weighted relationships, use the `reduce` function or APOC procedures:

```cypher
// Manual weighted path using reduce
MATCH path = shortestPath(
  (a:Location {name: "A"})-[:ROAD*]-(b:Location {name: "B"})
)
WITH path, reduce(cost = 0, r IN relationships(path) | cost + r.distance) AS totalDistance
RETURN [n IN nodes(path) | n.name] AS route, totalDistance
ORDER BY totalDistance
LIMIT 1
```

## Pattern Matching

### Optional Match

Return results even when part of the pattern does not exist:

```cypher
// Find all people and optionally their company
MATCH (p:Person)
OPTIONAL MATCH (p)-[:WORKS_AT]->(c:Company)
RETURN p.name, c.name AS company
```

### Negative Patterns

Find nodes that do NOT match a pattern:

```cypher
// People who do not work at any company
MATCH (p:Person)
WHERE NOT EXISTS {
  MATCH (p)-[:WORKS_AT]->(:Company)
}
RETURN p.name AS unemployed

// People who are not connected to Alice
MATCH (p:Person)
WHERE p.name <> "Alice" AND NOT EXISTS {
  MATCH (p)-[:KNOWS]-(:Person {name: "Alice"})
}
RETURN p.name
```

### List Comprehensions

```cypher
// Filter and transform in-line
MATCH (c:Company)<-[:WORKS_AT]-(p:Person)
WITH c, collect(p) AS employees
RETURN c.name,
       [e IN employees WHERE e.age > 30 | e.name] AS seniorMembers,
       size([e IN employees WHERE e.role = "Engineer"]) AS engineerCount
```

## Subqueries

### CALL Subqueries

Execute a subquery for each input row:

```cypher
// Find each company's most recent hire
MATCH (c:Company)
CALL {
  WITH c
  MATCH (c)<-[r:WORKS_AT]-(p:Person)
  RETURN p.name AS latestHire, r.since AS hireDate
  ORDER BY r.since DESC
  LIMIT 1
}
RETURN c.name AS company, latestHire, hireDate
```

### UNION

Combine results from multiple queries:

```cypher
// Find all entities matching a search term
MATCH (p:Person)
WHERE p.name CONTAINS "Al"
RETURN p.name AS name, "Person" AS type
UNION
MATCH (c:Company)
WHERE c.name CONTAINS "Al"
RETURN c.name AS name, "Company" AS type
```

## Performance Tips

### Query Profiling

Use `PROFILE` and `EXPLAIN` to understand query execution:

```cypher
// Show execution plan without running
EXPLAIN
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
WHERE p.age > 30
RETURN p.name, c.name

// Run query and show detailed metrics
PROFILE
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
WHERE p.age > 30
RETURN p.name, c.name
```

### Optimization Patterns

| Pattern | Problem | Solution |
|---------|---------|----------|
| Missing index | Full label scan in PROFILE | Create index on filtered property |
| Cartesian product | Unconnected MATCH patterns | Connect patterns or use WITH |
| Eager aggregation | Large intermediate result sets | Filter early with WHERE |
| Unbounded path | `[:KNOWS*]` without limit | Always set upper bound `[:KNOWS*..5]` |
| Dense node | Millions of relationships on one node | Filter by relationship property or direction |

### Index Hints

Force the query planner to use a specific index:

```cypher
// Use a specific index
MATCH (p:Person)
USING INDEX p:Person(email)
WHERE p.email = "alice@example.com"
RETURN p
```

### Batch Operations

For large write operations, process data in batches:

```cypher
// Process in batches using CALL IN TRANSACTIONS
CALL {
  MATCH (p:Person)
  WHERE p.lastSeen < datetime() - duration("P90D")
  SET p.status = "inactive"
} IN TRANSACTIONS OF 1000 ROWS
```

## Common Query Patterns

### Recommendation Engine

```cypher
// Collaborative filtering: find products bought by similar users
MATCH (user:Person {name: "Alice"})-[:PURCHASED]->(product:Product)
      <-[:PURCHASED]-(similar:Person)-[:PURCHASED]->(rec:Product)
WHERE NOT (user)-[:PURCHASED]->(rec)
RETURN rec.name AS recommendation,
       count(similar) AS score
ORDER BY score DESC
LIMIT 10
```

### Fraud Detection

```cypher
// Find accounts sharing the same device or IP
MATCH (a1:Account)-[:LOGGED_IN_FROM]->(d:Device)<-[:LOGGED_IN_FROM]-(a2:Account)
WHERE a1 <> a2
WITH a1, a2, collect(d.fingerprint) AS sharedDevices
WHERE size(sharedDevices) >= 2
RETURN a1.accountId, a2.accountId, sharedDevices
```

### Knowledge Graph

```cypher
// Find all concepts related to a topic within 2 hops
MATCH path = (topic:Concept {name: "Graph Theory"})-[:RELATED_TO*1..2]-(related:Concept)
RETURN DISTINCT related.name AS concept,
       length(path) AS distance,
       [n IN nodes(path) | n.name] AS path
ORDER BY distance, concept
```
