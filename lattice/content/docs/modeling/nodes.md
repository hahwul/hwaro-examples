+++
title = "Nodes"
weight = 1
+++

# Nodes

Nodes are the primary entities in a graph database. Each node represents a discrete object in your domain -- a person, a product, a location, or any concept that has identity and attributes.

## Node Labels

Labels categorize nodes into types. A node can have one or more labels, enabling flexible classification:

```cypher
// Single label
CREATE (p:Person {name: "Alice"})

// Multiple labels
CREATE (u:Person:Employee:Admin {name: "Bob", employeeId: "E-1042"})
```

Labels serve as the entry point for queries and indexes. Choose labels that reflect your domain vocabulary.

### Label Naming Conventions

| Convention | Example | Usage |
|-----------|---------|-------|
| PascalCase | `Person`, `BankAccount` | Standard for node labels |
| Singular | `Person` not `Persons` | Always use singular form |
| Domain-specific | `Customer`, `Vendor` | Prefer specific over generic |
| Multi-label | `Person:Employee` | Use for role-based classification |

## Node Properties

Properties are key-value pairs attached to nodes. They store the attributes of the entity:

```cypher
CREATE (p:Person {
  name: "Alice Chen",
  email: "alice@example.com",
  age: 32,
  active: true,
  joined: date("2023-01-15"),
  tags: ["engineer", "team-lead"]
})
```

### Supported Property Types

| Type | Example | Description |
|------|---------|-------------|
| String | `"Alice"` | UTF-8 text |
| Integer | `42` | 64-bit signed integer |
| Float | `3.14` | 64-bit IEEE 754 |
| Boolean | `true` | true or false |
| Date | `date("2023-01-15")` | Calendar date |
| DateTime | `datetime()` | Timestamp with timezone |
| Duration | `duration("P1Y2M")` | Time duration |
| Point | `point({x: 1.0, y: 2.0})` | Spatial coordinate |
| List | `["a", "b"]` | Homogeneous list |

## Schema Definitions

Define constraints and indexes to enforce data integrity:

```cypher
// Uniqueness constraint (also creates an index)
CREATE CONSTRAINT person_email_unique
FOR (p:Person)
REQUIRE p.email IS UNIQUE

// Existence constraint
CREATE CONSTRAINT person_name_exists
FOR (p:Person)
REQUIRE p.name IS NOT NULL

// Node key (composite uniqueness)
CREATE CONSTRAINT employee_key
FOR (e:Employee)
REQUIRE (e.companyId, e.employeeId) IS NODE KEY
```

## Node Design Patterns

### Entity Node

The most common pattern. Each node represents a single real-world entity:

```cypher
CREATE (c:Customer {
  customerId: "C-2048",
  name: "Acme Corp",
  tier: "enterprise",
  createdAt: datetime()
})
```

### Event Node

Reify actions or events as nodes to attach metadata and enable temporal queries:

```cypher
CREATE (o:Order {
  orderId: "ORD-9821",
  total: 450.00,
  currency: "USD",
  placedAt: datetime(),
  status: "confirmed"
})
```

### Intermediate Node

When a relationship itself has complex attributes, introduce an intermediate node:

```cypher
// Instead of a relationship with many properties,
// create an intermediate node
CREATE (r:Review {
  rating: 4.5,
  text: "Excellent product",
  verifiedPurchase: true,
  createdAt: datetime()
})
```

## Best Practices

- **Use meaningful labels** -- Labels should reflect domain language, not technical terms
- **Limit label count** -- Most nodes need 1-3 labels; avoid excessive labeling
- **Normalize property names** -- Use consistent camelCase for property keys
- **Define constraints early** -- Uniqueness and existence constraints prevent data quality issues
- **Avoid storing derived data** -- Compute aggregates at query time rather than storing them on nodes
