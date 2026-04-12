# AGENTS.md - AI Agent Instructions for Atlas Docs

This document provides instructions for AI agents working on this Hwaro-generated website.

## Project Overview

This is a documentation website built with [Hwaro](https://github.com/hahwul/hwaro), featuring an "Atlas" explorer theme.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` directory |
| `hwaro serve` | Start development server with live reload |
| `hwaro new <path>` | Create new content from archetype |

## Directory Structure

```
.
├── config.toml          # Site configuration
├── content/             # Markdown content files
│   ├── _index.md        # Homepage content
│   ├── expeditions/     # Expedition protocols
│   ├── cartography/     # Mapping standards
│   └── equipment/       # Field gear specs
├── templates/           # Jinja2 templates (Crinja)
│   ├── header.html      # Header & Navigation
│   ├── footer.html      # Footer
│   ├── page.html        # Page template
│   ├── section.html     # Section listing template
│   └── shortcodes/      # Shortcode templates
├── static/              # Static assets (copied as-is)
└── archetypes/          # Content templates for `hwaro new`
```

## Notes for AI Agents

1. **Front matter is TOML** (`+++`), not YAML (`---`).
2. **Rendered content** is `{{ content | safe }}`, not `{{ page.content }}`.
3. **Always preview** with `hwaro serve` before committing.
4. **Use `{{ base_url }}` prefix** for URLs in templates.
5. **Escape user content** with `{{ value | escape }}` in templates.

## Site-Specific Instructions

- **Theme Palette:** Parchment (#fdfcf0), Ink (#1a1a1a), Exploration Blue (#2c4a63), Terracotta (#b35a44).
- **Cartographic Elements:** Use coordinates, dashed lines, and grid patterns in styling.
- **Tone:** Sophisticated, authoritative, and discovery-oriented.
