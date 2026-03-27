+++
title = "Colors"
weight = 1
template = "doc"
description = "Color palette and usage guidelines for the design system."
tags = ["tokens", "visual"]
[extra]
category = "Tokens"
+++

## Color Palette

The Folio color system is built on a set of semantic tokens that map to specific use cases.

### Primary Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | #7c3aed | Primary actions, links, focus rings |
| `--color-primary-hover` | #6d28d9 | Hover state for primary elements |
| `--color-primary-light` | #ede9fe | Backgrounds, badges, highlights |

### Neutral Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text` | #1f2937 | Body text |
| `--color-text-muted` | #6b7280 | Secondary text, captions |
| `--color-border` | #e5e7eb | Borders, dividers |
| `--color-surface` | #f9fafb | Card backgrounds, raised surfaces |
| `--color-background` | #ffffff | Page background |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | #16a34a | Success states, confirmations |
| `--color-warning` | #d97706 | Warning states, caution indicators |
| `--color-error` | #dc2626 | Error states, destructive actions |
| `--color-info` | #2563eb | Informational states |

## Usage Guidelines

- Use primary colors sparingly — they should draw attention to key actions
- Neutral colors form the foundation of the interface
- Semantic colors must only be used for their intended meaning
- Never use color as the sole indicator of state — always pair with text or icons
