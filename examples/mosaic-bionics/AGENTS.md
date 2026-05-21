# AGENTS.md - AI Agent Instructions for Mosaic Bionics

## Project Overview

Static website built with [Hwaro](https://github.com/hahwul/hwaro), a Crystal-based static site generator. This site is a fermentation and strain-engineering control console — a wet-lab dashboard for an industrial biotech operation.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro new <path>` | Create new content from archetype |

## Site-Specific Notes

- Theme: dark biotech wet-lab dashboard. Ink-purple (`#0b0a14`) background, bone-white (`#e8e4dd`) foreground, on-spec accent green (`#7df59f`).
- Signature element: a 96-well hexagonal heatmap mosaic (12 cols x 8 rows) with five discrete bin colors — never gradients.
- Typography: IBM Plex Sans for body/headings, IBM Plex Mono for tabular numerics, IBM Plex Serif for captions.
- Content sections: `content/runlog/` for batch run logs; `index.md` (console) and `about.md` (lab colophon).
- CSS lives in `static/css/style.css`.
- No gradients, no emojis.

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
