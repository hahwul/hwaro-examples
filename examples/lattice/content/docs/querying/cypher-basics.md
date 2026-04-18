+++
title = "Cypher Basics"
weight = 1
+++

# Cypher Basics

Cypher is a declarative graph query language designed for pattern matching in property graphs. It uses an ASCII-art syntax to represent nodes and relationships, making queries visually intuitive.

## MATCH

The `MATCH` clause finds patterns in the graph. It is the starting point for most read queries:

```cypher
// Match all Person nodes
MATCH (p:Person)
RETURN p.name, p.age

// Match a specific person
MATCH (p:Person {name: "Alice"})
RETURN p

// Match nodes connected by a relationship
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
RETURN p.name, c.name
```

### Pattern Syntax

| Pattern | Description |
|---------|-------------|
| `(n)` | Any node |
| `(n:Person)` | Node with label Person |
| `(n:Person {name: "Alice"})` | Node with label and property |
| `(a)-[r]->(b)` | Directed relationship |
| `(a)-[r:KNOWS]->(b)` | Typed relationship |
| `(a)-[r]-(b)` | Undirected relationship |
| `(a)-[r:KNOWS*2]->(b)` | Fixed-length path (2 hops) |
| `(a)-[r:KNOWS*1..3]->(b)` | Variable-length path (1 to 3 hops) |

## WHERE

The `WHERE` clause filters results based on conditions:

```cypher
// Simple comparison
MATCH (p:Person)
WHERE p.age > 30
RETURN p.name, p.age

// String matching
MATCH (p:Person)
WHERE p.name STARTS WITH "A"
RETURN p.name

// Multiple conditions
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
WHERE p.age >= 25 AND c.industry = "Technology"
RETURN p.name, c.name

// Pattern existence check
MATCH (p:Person)
WHERE EXISTS {
  MATCH (p)-[:WORKS_AT]->(:Company {industry: "Technology"})
}
RETURN p.name
```

### Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Equals | `p.name = "Alice"` |
| `<>` | Not equals | `p.status <> "inactive"` |
| `<`, `>` | Less/greater than | `p.age > 30` |
| `<=`, `>=` | Less/greater or equal | `p.age >= 25` |
| `IN` | List membership | `p.role IN ["Engineer", "Manager"]` |
| `IS NULL` | Null check | `p.email IS NULL` |
| `IS NOT NULL` | Not null | `p.email IS NOT NULL` |

## RETURN

The `RETURN` clause specifies what data to output:

```cypher
// Return specific properties
MATCH (p:Person)-[r:WORKS_AT]->(c:Company)
RETURN p.name AS person, c.name AS company, r.since AS startDate

// Return distinct values
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
RETURN DISTINCT c.name AS company

// Return with ordering and limit
MATCH (p:Person)
RETURN p.name, p.age
ORDER BY p.age DESC
LIMIT 10

// Return with aggregation
MATCH (c:Company)<-[:WORKS_AT]-(p:Person)
RETURN c.name AS company, count(p) AS employeeCount
ORDER BY employeeCount DESC
```

## CREATE

The `CREATE` clause adds nodes and relationships:

```cypher
// Create a node
CREATE (p:Person {name: "Eve", age: 27, role: "Analyst"})
RETURN p

// Create a relationship between existing nodes
MATCH (a:Person {name: "Alice"}), (e:Person {name: "Eve"})
CREATE (a)-[:KNOWS {since: date("2024-01-10")}]->(e)

// Create multiple elements
CREATE (p:Person {name: "Frank"})-[:WORKS_AT {since: date("2024-03-01")}]->(c:Company {name: "NewCo"})
```

## MERGE

`MERGE` ensures a pattern exists -- it creates the pattern if it does not exist, or matches it if it does:

```cypher
// Merge a node (create if not exists)
MERGE (p:Person {email: "alice@example.com"})
ON CREATE SET p.name = "Alice", p.createdAt = datetime()
ON MATCH SET p.lastSeen = datetime()
RETURN p

// Merge a relationship
MATCH (a:Person {name: "Alice"}), (b:Person {name: "Bob"})
MERGE (a)-[:KNOWS]->(b)
```

## SET and REMOVE

Update or remove properties:

```cypher
// Update properties
MATCH (p:Person {name: "Alice"})
SET p.age = 33, p.title = "Senior Engineer"
RETURN p

// Add a label
MATCH (p:Person {name: "Alice"})
SET p:TeamLead
RETURN labels(p)

// Remove a property
MATCH (p:Person {name: "Alice"})
REMOVE p.title
RETURN p

// Remove a label
MATCH (p:Person {name: "Alice"})
REMOVE p:TeamLead
RETURN labels(p)
```

## DELETE

Remove nodes and relationships:

```cypher
// Delete a relationship
MATCH (a:Person {name: "Alice"})-[r:KNOWS]->(b:Person {name: "Eve"})
DELETE r

// Delete a node (must have no relationships)
MATCH (p:Person {name: "Eve"})
DELETE p

// Detach delete (removes node and all its relationships)
MATCH (p:Person {name: "Eve"})
DETACH DELETE p
```

## WITH

The `WITH` clause pipes results between query parts, enabling multi-step processing:

```cypher
// Use WITH for intermediate filtering
MATCH (c:Company)<-[:WORKS_AT]-(p:Person)
WITH c, count(p) AS employeeCount
WHERE employeeCount > 5
RETURN c.name, employeeCount

// Use WITH for ordering before aggregation
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
WITH c, p
ORDER BY p.name
WITH c, collect(p.name) AS sortedEmployees
RETURN c.name, sortedEmployees
```

## UNWIND

Expand a list into individual rows:

```cypher
// Create multiple nodes from a list
UNWIND ["Engineering", "Design", "Marketing", "Sales"] AS deptName
CREATE (d:Department {name: deptName})
RETURN d.name

// Process list properties
MATCH (p:Person)
WHERE p.tags IS NOT NULL
UNWIND p.tags AS tag
RETURN tag, count(*) AS usage
ORDER BY usage DESC
```

## Query Cheat Sheet

| Operation | Clause | Example |
|-----------|--------|---------|
| Read | `MATCH ... RETURN` | Find patterns and return data |
| Filter | `WHERE` | Apply conditions to matches |
| Create | `CREATE` | Add nodes and relationships |
| Upsert | `MERGE` | Create if not exists |
| Update | `SET` | Modify properties and labels |
| Delete | `DELETE` / `DETACH DELETE` | Remove elements |
| Sort | `ORDER BY` | Sort results |
| Limit | `LIMIT` / `SKIP` | Paginate results |
| Aggregate | `count`, `sum`, `avg`, `collect` | Summarize data |
| Pipe | `WITH` | Chain query stages |
| Expand | `UNWIND` | Flatten lists into rows |
