+++
title = "ADR-002: Choose PostgreSQL as Primary Database"
weight = 2
description = "Standardize on PostgreSQL as the default relational database for all new microservices."

[extra]
status = "approved"
adr_number = "ADR-002"
decision_date = "2025-04-02"
+++

## Context

With the transition to microservices (see ADR-001), each service owns its data store. We need to establish a default database choice to reduce decision fatigue, consolidate operational expertise, and maintain a manageable infrastructure footprint.

Our current environment includes:

- **MySQL 5.7** -- Used by the legacy monolith, approaching end of extended support.
- **MongoDB 4.4** -- Used by the analytics pipeline for semi-structured event data.
- **Redis 7.0** -- Used as a caching layer and session store.

Key requirements for the primary database:

- ACID compliance for transactional workloads (orders, payments, inventory).
- Strong ecosystem of tooling, client libraries, and managed service offerings across major cloud providers.
- Support for JSON data types for flexibility in schema evolution during early service development.
- Row-level security and robust access control for multi-tenant isolation patterns.
- Proven scalability to handle our projected growth to 200,000 daily active users within two years.

The team evaluated PostgreSQL 16, MySQL 8.0, and CockroachDB as candidates.

## Decision

We will adopt PostgreSQL 16 as the default relational database for all new microservices. Teams may request an exception from the Architecture Board when a different data store is more appropriate for their specific access patterns (for example, a time-series database for metrics or a document store for content management).

Specific operational standards:

- All production databases will use managed PostgreSQL offerings from our cloud provider.
- Connection pooling via PgBouncer will be mandatory for services with more than 20 concurrent connections.
- Schema migrations will be managed through versioned migration files using a tool compatible with CI/CD pipelines.
- Automated backups with point-in-time recovery will be configured with a 30-day retention period.

## Consequences

### Positive

- Consolidating on a single relational database reduces operational burden and allows the platform team to develop deep expertise in PostgreSQL administration, tuning, and troubleshooting.
- PostgreSQL's JSONB support provides schema flexibility without sacrificing query performance, easing the transition for teams accustomed to document-oriented databases.
- The extensive extension ecosystem (PostGIS for geospatial, pg_trgm for full-text search, timescaledb for time-series) reduces the need for specialized databases in many cases.
- Strong community support and mature tooling lower the barrier for developer onboarding.

### Negative

- Teams with existing MySQL expertise will need training and time to become proficient with PostgreSQL-specific idioms and tooling.
- Some workloads (high-write-throughput event streams, graph traversals) are not well-suited to a relational model. The exception process must be lightweight enough to not become a bottleneck.
- Vendor lock-in to managed PostgreSQL offerings may limit future cloud migration options, though PostgreSQL's open-source nature mitigates this risk.

## Status

Approved by the Architecture Board on 2025-04-02. The User Service and Order Service are the first two services to adopt PostgreSQL in production.

## Authors

- David Park, Staff Database Engineer
- Sarah Chen, Principal Engineer
