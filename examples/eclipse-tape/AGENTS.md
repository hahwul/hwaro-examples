# AGENTS.md - AI Agent Instructions for Hwaro Site

## Project Overview

Static website built with [Hwaro](https://github.com/hahwul/hwaro), a Crystal-based static site generator.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro new <path>` | Create new content from archetype |

## Site-Specific Notes

- Theme: dark trading-desk readout. Graphite `#0a0a0c` background, bone `#e9e6df` foreground, signal-green `#34d28e` for bids/up, blood-red `#ff4d5a` for asks/down, electric-yellow `#ffd24d` for highlights only. No blue, no purple. No gradients, no emojis.
- Typography: JetBrains Mono for all numerics and tabular data; Inter Tight for non-numeric labels. Tabular numerals everywhere.
- Signature: giant 200px P&L number anchors the home dashboard. Pure CSS marquee tape under it. Level-2 book uses solid color blocks sized by `width: %` (not opacity).
- Content sections: `content/wraps/` for end-of-day desk wraps; plus `index.md` (tape) and `about.md` (desk).
- CSS lives in `static/css/style.css`.
- Crinja: `{% if x in [a,b] %}` does not work — use `or` chains. Rendered content is `{{ content }}`, custom metadata is `page.extra.field`.

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
