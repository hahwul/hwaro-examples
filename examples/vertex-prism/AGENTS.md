# AGENTS.md - AI Agent Instructions for Vertex Prism

## Project Overview

Static website built with [Hwaro](https://github.com/hahwul/hwaro), a Crystal-based static site generator.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro new <path>` | Create new content from archetype |

## Site-Specific Notes

- Theme: an isometric BI / data-exploration deck. Warm paper bg (`#f7f4ee`), near-black ink (`#181613`). Four hard poster accents — cadmium red `#d23f2a`, prussian blue `#234a76`, mustard `#d4a02f`, forest green `#2f6e3f`. Each tile uses one accent dominantly.
- Signature element: a CSS-3D isometric cube-tower bar chart on the deck home, built with stacked divs using `::before`/`::after` for side faces and three discrete shade steps (no gradients).
- Typography: Space Grotesk (headings), Inter (body), JetBrains Mono (numerics).
- Content: `content/memos/` for analytics memos; `index.md` for the deck home; `about.md` for the colophon.
- CSS lives in `static/css/style.css`.
- **No gradients. No emojis. Anywhere.**

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
