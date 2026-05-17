+++
title = "Warehouse connectors for Databricks and Fabric"
date = "2026-04-22"
description = "Native push-down connectors for Databricks Unity Catalog and Microsoft Fabric OneLake."
tags = ["connectors", "warehouse"]
+++

Two long-requested destinations join the supported warehouse list.

- Databricks Unity Catalog with native Delta Lake writes and column-level lineage
- Microsoft Fabric OneLake destination, including direct lake mode for Power BI
- Both connectors support partition pruning, schema evolution, and `MERGE` semantics
- Workspace-scoped credentials managed through the existing secret store
- Migration guide published for teams moving off the community Spark connector
