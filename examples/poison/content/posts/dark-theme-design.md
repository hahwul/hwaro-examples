+++
title = "Designing Dark Themes"
date = "2026-03-01"
tags = ["design", "css", "dark-theme"]
categories = ["design"]
description = "Best practices for designing readable dark color schemes."
+++

Dark themes have become increasingly popular. Here are some principles behind the Poison theme's dark design.

## Color Choices

The Poison theme uses a carefully selected palette:

- **Background**: `#121212` — A very dark gray, softer than pure black
- **Text**: `#eee` — Off-white for reduced contrast and eye strain
- **Sidebar**: `#202020` — Slightly lighter than the content background for visual separation
- **Links**: `#268bd2` — Solarized blue, providing good contrast without being harsh

## Typography

The theme pairs two fonts:

- **Lora** (serif) — Used for headings, adding personality and warmth
- **Fira Sans** (sans-serif, light 300) — Body text with a clean, airy feel

The light font weight is essential to the theme's aesthetic. Heavy fonts on dark backgrounds can feel oppressive.

## Contrast Ratios

Good dark themes maintain adequate contrast without being too bright:

```
Background (#121212) + Text (#eee)     → 15.3:1 ✓
Background (#121212) + Links (#268bd2) → 5.8:1  ✓
Background (#121212) + Dates (#9a9a9a) → 6.8:1  ✓
```

All combinations exceed WCAG AA requirements (4.5:1 for normal text).

## Code Blocks

The Monokai color scheme for code blocks provides syntax highlighting that blends naturally with the dark theme. The code background (`#272822`) is slightly different from the page background to create visual separation.
