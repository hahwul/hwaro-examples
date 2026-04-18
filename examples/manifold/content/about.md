+++
title = "About Manifold"
description = "About the Manifold multi-tenant SaaS platform and project"
tags = ["about", "manifold"]
+++

# About Manifold

Manifold is an open-source multi-tenant SaaS platform framework designed for teams building applications that serve multiple organizations from a single codebase and deployment. The project was created to eliminate the repetitive infrastructure work involved in adding multi-tenancy to existing applications.

## Design Principles

Manifold is built around four principles:

- **Tenant-First Architecture** -- Every component in the system is designed with tenant isolation as a first-class concern, not an afterthought. Data access, caching, background jobs, and file storage all operate within tenant boundaries by default.
- **Declarative Configuration** -- Tenant tiers, feature gates, and provisioning workflows are defined in YAML configuration files. Changes to tenant policies are version-controlled and deployed through standard CI/CD pipelines.
- **Progressive Isolation** -- Start with shared infrastructure for cost efficiency and move individual tenants to dedicated resources as they grow. The isolation model can be changed without application code modifications.
- **Operator Visibility** -- The admin portal and API provide full visibility into tenant state, resource usage, and operational metrics. Every state transition and configuration change is recorded in the audit log.

## Project History

Manifold began as an internal library for managing multi-tenancy in a B2B SaaS product. The initial version handled tenant resolution and row-level security in PostgreSQL. Over time, the project expanded to include automated provisioning, tiered subscription management, and a full admin API.

The project is maintained by a team of platform engineers and accepts contributions through standard pull request workflows.

## License

Manifold is released under the Apache 2.0 license. Commercial support and managed hosting are available through separate agreements.

## Contact

- **Source** -- [github.com/manifold-platform/manifold](https://github.com/manifold-platform/manifold)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and design discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
