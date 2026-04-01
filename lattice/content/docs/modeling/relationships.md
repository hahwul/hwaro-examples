+++
title = "Relationships"
weight = 2
+++

# Relationships

Relationships are the connections between nodes in a graph. Every relationship has a type, a direction, a start node, and an end node. Relationships can also carry properties, making them first-class citizens in the data model.

## Relationship Types

Relationship types describe the nature of the connection. Use UPPER_SNAKE_CASE by convention:

```cypher
// Create typed relationships
CREATE (alice)-[:WORKS_AT]->(acme)
CREATE (alice)-[:KNOWS]->(bob)
CREATE (alice)-[:PURCHASED]->(product)
CREATE (product)-[:BELONGS_TO]->(category)
```

### Common Relationship Types

| Domain | Relationship | Description |
|--------|-------------|-------------|
| Social | `KNOWS`, `FOLLOWS`, `BLOCKED` | Inter-person connections |
| Employment | `WORKS_AT`, `MANAGES`, `REPORTS_TO` | Organizational hierarchy |
| Commerce | `PURCHASED`, `REVIEWED`, `VIEWED` | Customer interactions |
| Content | `AUTHORED`, `TAGGED_WITH`, `REFERENCES` | Content relationships |
| Spatial | `LOCATED_IN`, `ADJACENT_TO`, `CONNECTED_TO` | Geographic connections |

## Directionality

Every relationship has a direction (start node to end node). However, Cypher can match relationships regardless of direction:

```cypher
// Create with direction
CREATE (alice)-[:KNOWS]->(bob)

// Query with direction
MATCH (a:Person)-[:KNOWS]->(b:Person)
RETURN a.name, b.name

// Query ignoring direction
MATCH (a:Person)-[:KNOWS]-(b:Person)
RETURN a.name, b.name
```

### Directionality Guidelines

| Pattern | Direction | Example |
|---------|-----------|---------|
| Hierarchical | Parent to child | `(manager)-[:MANAGES]->(employee)` |
| Action | Actor to target | `(user)-[:PURCHASED]->(product)` |
| Membership | Member to group | `(person)-[:MEMBER_OF]->(team)` |
| Symmetric | Either direction | `(a)-[:KNOWS]-(b)` at query time |

For symmetric relationships like KNOWS or FRIENDS_WITH, store one direction and query without direction. This avoids duplicate relationships.

## Relationship Properties

Properties on relationships store metadata about the connection:

```cypher
CREATE (alice)-[:WORKS_AT {
  since: date("2020-03-15"),
  department: "Engineering",
  role: "Senior Engineer",
  fullTime: true
}]->(acme)
```

```cypher
// Query relationship properties
MATCH (p:Person)-[r:WORKS_AT]->(c:Company)
WHERE r.since < date("2021-01-01")
RETURN p.name, c.name, r.department, r.since
ORDER BY r.since
```

## Cardinality Patterns

### One-to-Many

```cypher
// One company, many employees
MATCH (c:Company {name: "Acme Corp"})<-[:WORKS_AT]-(e:Person)
RETURN c.name, collect(e.name) AS employees
```

### Many-to-Many

```cypher
// People can know multiple people
CREATE (alice)-[:KNOWS]->(bob)
CREATE (alice)-[:KNOWS]->(carol)
CREATE (bob)-[:KNOWS]->(carol)
```

### Self-Referencing

```cypher
// A person manages another person (same label)
CREATE (carol)-[:MANAGES]->(alice)
CREATE (carol)-[:MANAGES]->(bob)
```

## Modeling Decisions

### Relationship vs. Intermediate Node

Use a direct relationship when the connection has few, simple properties:

```cypher
// Simple relationship -- use direct connection
CREATE (alice)-[:FOLLOWS {since: date("2023-06-01")}]->(bob)
```

Use an intermediate node when the connection is complex or needs its own relationships:

```cypher
// Complex -- use intermediate node
CREATE (alice)-[:PLACED]->(order:Order {
  orderId: "ORD-100",
  total: 250.00,
  placedAt: datetime()
})
CREATE (order)-[:CONTAINS]->(product)
CREATE (order)-[:SHIPPED_TO]->(address)
```

### Relationship Type Granularity

Prefer specific types over generic ones with a type property:

```cypher
// Preferred: specific types
CREATE (user)-[:LIKED]->(post)
CREATE (user)-[:SHARED]->(post)
CREATE (user)-[:COMMENTED_ON]->(post)

// Avoid: generic type with property
// CREATE (user)-[:INTERACTED {type: "like"}]->(post)
```

Specific types enable targeted index creation and more efficient query planning.

## GraphQL Mapping

When exposing your graph through GraphQL, relationships map to nested types:

```graphql
type Person {
  name: String!
  email: String!
  worksAt: Employment
  knows: [Person!]!
}

type Employment {
  company: Company!
  since: Date!
  department: String!
  role: String!
}

type Company {
  name: String!
  employees: [Person!]!
}
```

## Best Practices

- **Use descriptive types** -- Relationship types should read naturally: `(alice)-[:WORKS_AT]->(acme)`
- **Store direction consistently** -- Pick one direction for each relationship type and stick with it
- **Keep properties minimal** -- Move complex attributes to intermediate nodes
- **Avoid dense nodes** -- If a node has millions of relationships, consider a different modeling approach
- **Index relationship properties** -- For frequently filtered relationship properties, create indexes
