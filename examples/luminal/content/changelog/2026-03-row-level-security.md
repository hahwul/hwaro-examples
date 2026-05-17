+++
title = "Row-level security policies"
date = "2026-03-03"
description = "Declarative row filters that compile down to native warehouse policies."
tags = ["security", "governance"]
+++

Define row-level access once in your model spec and Luminal compiles it into native policies on every supported warehouse.

- Single `access` block compiles to Snowflake, BigQuery, Redshift, and Databricks policies
- Attribute-based rules that reference your IdP claims (department, region, clearance)
- Preview mode renders the effective SQL for each grant before apply
- Audit log captures every grant change with the responsible principal and commit
- Compatible with existing column-level masking introduced in February
