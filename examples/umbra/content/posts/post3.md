+++
title = "Obsidian Interface System"
date = "2025-03-05"
description = "A design system for a fintech platform built on shadow-based depth hierarchy and zero-color UI."
tags = ["ui", "design-system", "fintech"]
template = "page"
+++

Obsidian is a wealth management platform serving high-net-worth individuals. The interface needed to communicate security, sophistication, and clarity while handling complex financial data.

## Design Principles

We established three foundational rules for the entire system:

1. **No color signaling** -- status and hierarchy are communicated exclusively through shadow depth and typographic weight
2. **Layered surfaces** -- every interactive element exists on a distinct shadow plane, making the spatial hierarchy immediately legible
3. **Silent motion** -- transitions are slow, deliberate, and shadow-driven rather than position-driven

## Component Architecture

The system contains over one hundred and twenty components organized across five shadow elevation tiers:

- **Tier 0** -- Background plane, no shadow, pure black
- **Tier 1** -- Content surfaces, subtle single-layer shadow
- **Tier 2** -- Interactive cards, three-layer shadow stack
- **Tier 3** -- Overlays and modals, five-layer deep shadow
- **Tier 4** -- Critical alerts, maximum shadow depth with spread

Each tier's shadow values were calibrated to maintain consistent perceived depth across all screen sizes and ambient lighting conditions.

## Typography

The type system uses a single family at six weights. Hierarchy is established through weight and size alone -- no color differentiation. Key figures use a tabular variant for alignment in data-dense contexts.

## Results

The platform launched to its initial cohort of twelve hundred users. Task completion rates improved by twenty-two percent compared to the previous interface, and user satisfaction scores in the "trust and professionalism" category increased from sixty-eight to ninety-one percent.
