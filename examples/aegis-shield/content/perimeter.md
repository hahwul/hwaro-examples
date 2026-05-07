+++
title = "Perimeter Module"
description = "Outer boundary specification for the Aegis structural framework."
date = "2024-02-01"
weight = 1
template = "page"
+++

## Mandate

The perimeter module defines the absolute outer boundary of the Aegis structure. All ingress and egress paths terminate here.

## Specifications

- Wall thickness: 4px solid, no fade.
- Color: monochrome charcoal `#1a1a1a` against pure white `#ffffff`.
- Joint behavior: zero radius. Rectangular joins only.
- Permitted accents: cyan `#00d4ff` for active state indicators.

## Failure Conditions

A perimeter is considered breached if any of the following occur:

1. A border-radius greater than 0 appears on a top-level container.
2. A gradient is applied to any wall surface.
3. An accent color other than the approved cyan enters the layout.

Each violation requires immediate structural review.
