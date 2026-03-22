+++
title = "Introduction"
tags = ["design"]
+++

## About This Design System

Palette is a living document for your brand's visual language. It captures the decisions behind every color, typeface, and component so that teams can build consistent interfaces without second-guessing.

Use the sidebar to navigate between sections. Each page provides both visual examples and the corresponding CSS values so that designers and engineers stay aligned.

### What's Included

- **Colors** -- Primary, neutral, and semantic palettes with HEX and RGB values
- **Typography** -- Type scale, weight system, and specimen previews
- **Components** -- Buttons, inputs, badges, cards, and other UI primitives

### Design Tokens

Every value in this system is backed by a CSS custom property (design token). Tokens provide a single source of truth: update a token once and the change propagates everywhere.

| Token | Value | Purpose |
|---|---|---|
| `--accent` | `#364fc7` | Primary brand accent |
| `--surface-0` | `#ffffff` | Base background |
| `--text-primary` | `#212529` | Default body text |
| `--radius-md` | `6px` | Default border radius |
| `--space-md` | `16px` | Standard spacing unit |

### Usage

Reference tokens in your stylesheets instead of hard-coding values:

```css
.button {
  background-color: var(--accent);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
}
```

This ensures consistency and makes future theme updates straightforward.
