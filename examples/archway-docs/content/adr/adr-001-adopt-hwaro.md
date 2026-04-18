+++
title = "ADR 001: Adopt Hwaro for Documentation"
date = 2024-01-15
description = "Decision to use Hwaro as the static site generator for technical documentation."
[extra]
id = "ADR-001"
status = "Accepted"
deciders = "Architecture Board"
+++

## Context

We need a fast, reliable, and easily maintainable static site generator for our project documentation. The current manual process is error-prone and doesn't scale.

## Decision

We will use **Hwaro** for all technical documentation.

## Consequences

### Positive
- High performance build times.
- Native support for common documentation patterns.
- Easy to theme and customize.

### Negative
- Team needs to learn Hwaro's template syntax (Crinja).
