# AGENTS.md — Glyph Orbital

## Project Overview

Static site built with [Hwaro](https://github.com/hahwul/hwaro), a Crystal-based static site generator. Theme: dark, high-density satellite ground-station operations console.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` |
| `hwaro serve` | Dev server with live reload (default port 3000) |
| `hwaro new logbook/<slug>.md` | Create new logbook entry from archetype |

## Site-Specific Notes

- Dark theme. Background `#08090e`, foreground `#ece6d6`, single signal-orange accent `#ff7849`, cool cyan `#6ee7ff` for uplink/MEO indicators.
- Typography: `Space Grotesk` for headings, `Inter` for body, `JetBrains Mono` for numerics and labels.
- Content sections: `content/logbook/` for pass reports and anomaly post-mortems. Plus `index.md` (console) and `about.md` (manual/colophon).
- Homepage (`templates/home.html`) is a six-tile dashboard: orbital map (inline SVG), constellation roster, bandwidth budget, pass schedule, telemetry strips, ground-station inventory, plus an open-anomaly block.
- The orbital map is hand-built inline SVG — three nested ellipses with rotated square satellite glyphs on each arc. No gradients or emojis anywhere.
- All CSS in `static/css/style.css` (~500 lines).
- Custom front-matter field: `spacecraft = [...]` on logbook entries, accessed via `page.extra.spacecraft`.

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
