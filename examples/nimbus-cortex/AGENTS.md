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

- Theme: dark ML/AI training cluster console. Deep gray-blue (`#0a0c10`) bg, cyan (`#00d4d4`) primary, magenta (`#ff5e9c`) secondary, yellow (`#d9d959`) for power. Terminal aesthetic in IBM Plex Mono with Inter for prose.
- Content sections: `content/runs/` for training journal; plus `index.md` (cluster overview) and `about.md` (handbook).
- CSS lives in `static/css/style.css`.
- No gradients, no emojis.

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
