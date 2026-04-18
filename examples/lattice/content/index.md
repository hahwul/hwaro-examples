+++
title = "Welcome"
+++

# Lattice

Graph database modeling and relationship query documentation. Lattice provides comprehensive guides for designing graph schemas, writing Cypher queries, and building connected data models.

## Graph Structure

<div class="graph-diagram">
  <div class="graph-node">Person</div>
  <div class="graph-edge"><span class="arrow"></span>KNOWS<span class="arrow"></span></div>
  <div class="graph-node">Person</div>
  <div class="graph-edge"><span class="arrow"></span>WORKS_AT<span class="arrow"></span></div>
  <div class="graph-node accent">Company</div>
</div>

Graph databases store data as nodes connected by relationships, forming a network of entities and their connections. Unlike relational databases that use joins across tables, graph databases traverse relationships directly, making queries about connected data orders of magnitude faster.

## Features

<div class="feature-grid">
  <div class="feature-card">
    <h4>Schema Design</h4>
    <p>Model your domain as nodes, relationships, and properties with clear labeling conventions and constraint definitions.</p>
  </div>
  <div class="feature-card">
    <h4>Cypher Queries</h4>
    <p>Learn the declarative graph query language for pattern matching, traversals, aggregations, and mutations.</p>
  </div>
  <div class="feature-card">
    <h4>Index Strategies</h4>
    <p>Optimize query performance with composite indexes, full-text search indexes, and constraint-backed indexes.</p>
  </div>
  <div class="feature-card">
    <h4>Path Finding</h4>
    <p>Traverse shortest paths, variable-length relationships, and weighted graphs for recommendation engines and network analysis.</p>
  </div>
</div>

## Quick Example

```cypher
// Find all people who work at the same company as Alice
MATCH (alice:Person {name: "Alice"})-[:WORKS_AT]->(company:Company)
      <-[:WORKS_AT]-(colleague:Person)
RETURN colleague.name AS name, company.name AS company
ORDER BY colleague.name
```

## Getting Started

Explore the sidebar sections to learn about graph data modeling, or jump straight to the [Getting Started](docs/getting-started/) guide to set up your first graph database.
