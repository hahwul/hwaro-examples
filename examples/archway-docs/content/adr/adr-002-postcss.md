+++
title = "ADR 002: Use PostCSS for Styling"
date = 2024-02-01
description = "Leveraging PostCSS to manage sophisticated design patterns and vendor prefixes."
[extra]
id = "ADR-002"
status = "Proposed"
deciders = "Frontend Team"
+++

## Context

Managing complex CSS with multiple themes and modern features like container queries requires a robust processing pipeline.

## Decision

We propose using **PostCSS** with a set of curated plugins.

## Status

{{ badge(type="Proposed") }}

## Consequences

- Automated vendor prefixing.
- Future CSS syntax support today.
- Modular CSS architecture.
