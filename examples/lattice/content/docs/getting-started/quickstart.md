+++
title = "Quick Start"
weight = 2
+++

# Quick Start

Create your first graph by modeling a small social network. This walkthrough demonstrates the core operations: creating nodes, defining relationships, and querying connected data.

## Create Nodes

Nodes represent entities in your domain. Each node can have one or more labels and a set of properties:

```cypher
// Create person nodes
CREATE (alice:Person {name: "Alice", age: 32, role: "Engineer"})
CREATE (bob:Person {name: "Bob", age: 28, role: "Designer"})
CREATE (carol:Person {name: "Carol", age: 35, role: "Manager"})
CREATE (dave:Person {name: "Dave", age: 30, role: "Engineer"})

// Create company nodes
CREATE (acme:Company {name: "Acme Corp", founded: 2015, industry: "Technology"})
CREATE (globex:Company {name: "Globex Inc", founded: 2010, industry: "Consulting"})
```

## Create Relationships

Relationships connect nodes and carry a type and optional properties:

```cypher
// Employment relationships
MATCH (alice:Person {name: "Alice"}), (acme:Company {name: "Acme Corp"})
CREATE (alice)-[:WORKS_AT {since: 2020, department: "Engineering"}]->(acme)

MATCH (bob:Person {name: "Bob"}), (acme:Company {name: "Acme Corp"})
CREATE (bob)-[:WORKS_AT {since: 2021, department: "Design"}]->(acme)

MATCH (carol:Person {name: "Carol"}), (globex:Company {name: "Globex Inc"})
CREATE (carol)-[:WORKS_AT {since: 2018, department: "Operations"}]->(globex)

// Social relationships
MATCH (alice:Person {name: "Alice"}), (bob:Person {name: "Bob"})
CREATE (alice)-[:KNOWS {since: 2019}]->(bob)

MATCH (bob:Person {name: "Bob"}), (carol:Person {name: "Carol"})
CREATE (bob)-[:KNOWS {since: 2020}]->(carol)

MATCH (alice:Person {name: "Alice"}), (dave:Person {name: "Dave"})
CREATE (alice)-[:KNOWS {since: 2021}]->(dave)
```

## Query the Graph

Retrieve data by matching patterns in the graph:

```cypher
// Find all people and where they work
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
RETURN p.name AS person, c.name AS company

// Find Alice's connections
MATCH (alice:Person {name: "Alice"})-[:KNOWS]->(friend:Person)
RETURN friend.name AS friend, friend.role AS role

// Find friends-of-friends (2 hops)
MATCH (alice:Person {name: "Alice"})-[:KNOWS*2]->(fof:Person)
WHERE fof.name <> "Alice"
RETURN DISTINCT fof.name AS friend_of_friend
```

## Inspect the Schema

View the structure of your graph:

```cypher
// Show all node labels
CALL db.labels()

// Show all relationship types
CALL db.relationshipTypes()

// Count nodes by label
MATCH (n)
RETURN labels(n) AS label, count(n) AS count
```

## Next Steps

With your first graph created, explore the following topics:

- [Data Modeling](../../modeling/) -- Learn about schema design patterns
- [Cypher Basics](../../querying/cypher-basics/) -- Deep dive into query syntax
- [Relationships](../../modeling/relationships/) -- Understand relationship types and directionality
