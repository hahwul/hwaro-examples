+++
title = "Spacing"
weight = 3
template = "doc"
description = "Spacing scale and layout spacing conventions."
tags = ["tokens", "layout"]
[extra]
category = "Tokens"
+++

## Spacing Scale

The spacing system uses a 4px base unit. All spacing values are multiples of this base.

| Token | Value | Pixels |
|-------|-------|--------|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.25rem | 20px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |

## Usage Conventions

### Component Internal Spacing

- Use `--space-2` to `--space-4` for padding within compact components (buttons, badges)
- Use `--space-4` to `--space-6` for padding within cards and containers
- Use `--space-2` for gaps between inline elements

### Layout Spacing

- Use `--space-6` to `--space-8` for gaps between sections on a page
- Use `--space-12` to `--space-16` for major page section separators
- Sidebar width: 240px with `--space-6` internal padding

### Stacking

- Use `--space-2` between list items
- Use `--space-4` between form fields
- Use `--space-8` between content blocks
