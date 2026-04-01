+++
title = "Properties"
weight = 3
+++

# Properties

Properties are key-value pairs stored on nodes and relationships. They define the attributes and metadata of your graph entities. Effective property design is critical for query performance, data integrity, and schema evolution.

## Property Types

Graph databases support a range of primitive and composite types:

| Category | Types | Example Values |
|----------|-------|----------------|
| Text | String | `"Alice"`, `"Engineering"` |
| Numeric | Integer, Float | `42`, `3.14159` |
| Boolean | Boolean | `true`, `false` |
| Temporal | Date, DateTime, LocalDateTime, Time, Duration | `date("2024-01-15")` |
| Spatial | Point (2D/3D, Cartesian/WGS-84) | `point({latitude: 37.7, longitude: -122.4})` |
| Collection | List (homogeneous) | `["tag1", "tag2"]` |

### Temporal Types

```cypher
CREATE (e:Event {
  name: "Launch",
  scheduledDate: date("2024-06-15"),
  startTime: time("09:00:00"),
  createdAt: datetime("2024-01-10T14:30:00Z"),
  duration: duration("PT2H30M")
})
```

### Spatial Types

```cypher
CREATE (l:Location {
  name: "Headquarters",
  coordinates: point({latitude: 37.7749, longitude: -122.4194}),
  elevation: point({x: 37.7749, y: -122.4194, z: 16.0, crs: "wgs-84-3d"})
})
```

## Property Constraints

Constraints enforce data integrity rules on properties:

### Uniqueness Constraints

```cypher
// Single property uniqueness
CREATE CONSTRAINT user_email_unique
FOR (u:User)
REQUIRE u.email IS UNIQUE

// Composite uniqueness (Node Key)
CREATE CONSTRAINT order_item_key
FOR (oi:OrderItem)
REQUIRE (oi.orderId, oi.productId) IS NODE KEY
```

### Existence Constraints

```cypher
// Node property must exist
CREATE CONSTRAINT person_name_required
FOR (p:Person)
REQUIRE p.name IS NOT NULL

// Relationship property must exist
CREATE CONSTRAINT works_at_since_required
FOR ()-[r:WORKS_AT]-()
REQUIRE r.since IS NOT NULL
```

### Type Constraints

```cypher
// Enforce property type
CREATE CONSTRAINT person_age_type
FOR (p:Person)
REQUIRE p.age IS :: INTEGER

CREATE CONSTRAINT person_email_type
FOR (p:Person)
REQUIRE p.email IS :: STRING
```

## Indexes

Indexes accelerate property lookups. Choose index types based on your query patterns:

### Index Types

| Index Type | Use Case | Example |
|-----------|----------|---------|
| Range | Equality, range, prefix, existence | General-purpose lookups |
| Text | Full-text search, contains, suffix | Search across text fields |
| Point | Distance, bounding box | Geospatial queries |
| Composite | Multi-property lookups | Compound filters |

### Creating Indexes

```cypher
// Range index (most common)
CREATE INDEX person_name_idx
FOR (p:Person) ON (p.name)

// Composite index
CREATE INDEX person_name_email_idx
FOR (p:Person) ON (p.name, p.email)

// Text index for full-text search
CREATE TEXT INDEX person_bio_text_idx
FOR (p:Person) ON (p.bio)

// Point index for spatial queries
CREATE POINT INDEX location_coords_idx
FOR (l:Location) ON (l.coordinates)

// Relationship property index
CREATE INDEX works_at_since_idx
FOR ()-[r:WORKS_AT]-() ON (r.since)
```

### Index Usage in Queries

```cypher
// Uses person_name_idx
MATCH (p:Person {name: "Alice"})
RETURN p

// Uses person_name_idx (range scan)
MATCH (p:Person)
WHERE p.name STARTS WITH "Al"
RETURN p

// Uses location_coords_idx
MATCH (l:Location)
WHERE point.distance(l.coordinates, point({latitude: 37.77, longitude: -122.42})) < 1000
RETURN l.name, point.distance(l.coordinates, point({latitude: 37.77, longitude: -122.42})) AS distance

// Uses person_bio_text_idx
MATCH (p:Person)
WHERE p.bio CONTAINS "graph database"
RETURN p.name
```

## Property Design Patterns

### Computed vs. Stored

Store values that are expensive to compute and rarely change. Compute values that depend on frequently changing data:

```cypher
// Stored: rarely changes, expensive to compute
CREATE (p:Product {
  name: "Widget",
  averageRating: 4.3,
  ratingCount: 1247
})

// Computed at query time: depends on current state
MATCH (p:Product)<-[r:REVIEWED]-()
RETURN p.name, avg(r.rating) AS currentAverage, count(r) AS totalReviews
```

### Enumerated Values

Use string properties for enumerated types. Document valid values in your schema:

```cypher
// Status as enumerated string
CREATE (o:Order {
  orderId: "ORD-500",
  status: "pending"  // pending | confirmed | shipped | delivered | cancelled
})
```

| Property | Valid Values | Description |
|----------|-------------|-------------|
| `status` | pending, confirmed, shipped, delivered, cancelled | Order lifecycle stage |
| `priority` | low, medium, high, critical | Issue priority level |
| `visibility` | public, private, internal | Access control level |
| `tier` | free, starter, professional, enterprise | Subscription tier |

### Versioning Properties

Track changes by including version metadata:

```cypher
CREATE (d:Document {
  docId: "DOC-100",
  title: "Architecture Guide",
  content: "...",
  version: 3,
  updatedAt: datetime(),
  updatedBy: "alice@example.com"
})
```

## Managing Schema

List all constraints and indexes:

```cypher
// Show all constraints
SHOW CONSTRAINTS

// Show all indexes
SHOW INDEXES

// Drop a constraint
DROP CONSTRAINT person_email_unique

// Drop an index
DROP INDEX person_name_idx
```

## Best Practices

- **Name properties consistently** -- Use camelCase across all node and relationship properties
- **Define constraints before loading data** -- Constraints are cheaper to enforce during bulk import
- **Index selectively** -- Only index properties that appear in WHERE clauses or join conditions
- **Avoid property overload** -- If a node has more than 15-20 properties, consider splitting into related nodes
- **Use temporal types** -- Store dates and times as native temporal types, not strings
- **Document valid values** -- Maintain a schema reference for enumerated string properties
