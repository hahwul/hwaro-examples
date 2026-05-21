# AGENTS.md - AI Agent Instructions for Flux Foundry

## Project Overview

Static website built with [Hwaro](https://github.com/hahwul/hwaro), a Crystal-based static site generator.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro new <path>` | Create new content from archetype |

## Site-Specific Notes

- Theme: light brutalist steelworks operations console. Paper cream (`#f4efe6`) background, near-black (`#0a0908`) ink, molten-red (`#c8201f`) for critical states, steel blue (`#3b556e`) for nominal indicators.
- Typography: `Archivo Black` for display numerals, `Inter` for body, `IBM Plex Mono` for tabular data.
- Signature element: three oversized kiln gauges across the homepage top, each showing live tap temperature, percent of target, and slag/silicon annotations.
- Content sections: `content/shiftlog/` for shift superintendent writeups; plus `index.md` (console) and `about.md`.
- CSS lives in `static/css/style.css`.
- No gradients, no emojis. Solid colours only.

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
