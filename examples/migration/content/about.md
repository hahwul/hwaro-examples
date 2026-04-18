+++
title = "About Migration"
description = "About the Migration database schema management platform"
tags = ["about", "migration"]
+++

# About Migration

Migration is an open-source database schema management tool designed for teams that operate relational databases across multiple environments. The project was started to provide a reliable, auditable workflow for applying structural changes to production databases.

## Design Principles

Migration is built around four principles:

- **Immutable History** -- Once a migration file is applied, it is never modified. Corrections are made by creating new migration files that amend the schema forward.
- **Deterministic Execution** -- Migrations execute in strict version order. The resulting schema is identical regardless of when or where the migrations run.
- **Explicit Rollback** -- Every migration includes a `down` function that reverses the change. Rollbacks are tested as part of the migration authoring workflow.
- **Environment Parity** -- The same migration files run in development, staging, and production. Environment-specific configuration is limited to connection parameters.

## Project History

Migration began as a set of shell scripts for managing PostgreSQL schema changes across a fleet of microservices. The initial version tracked applied migrations in a simple table and executed SQL files in sorted order. Over time, the project expanded to include schema diffing, validation checks, dry-run support, and multi-database targeting.

The project is maintained by a team of database administrators and backend engineers. Contributions are accepted through standard pull request workflows.

## License

Migration is released under the MIT license. Commercial support and enterprise features are available through separate agreements.

## Contact

- **Source** -- [github.com/migration-tool/migration](https://github.com/migration-tool/migration)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and design discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
