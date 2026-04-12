+++
title = "ADR 003: Monolithic vs Microservices"
date = 2024-03-10
description = "Strategic decision regarding the core application architecture."
[extra]
id = "ADR-003"
status = "Accepted"
deciders = "CTO, Arch Group"
+++

## Context

The system has reached a scale where the monolithic approach is causing deployment bottlenecks.

## Decision

We will migrate to a **Microservices Architecture** over the next 12 months.

## Consequences

- Increased operational complexity.
- Better scaling of individual components.
- Independent deployment cycles.
