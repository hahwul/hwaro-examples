# Pixel Quest - Retro Gaming / 8-bit Theme

## Overview
A retro gaming blog theme with 8-bit pixel art aesthetics. Dark theme with CRT scanline effects, pixel fonts, game UI borders, and an NES-inspired color palette.

## Essential Commands
```bash
hwaro init     # Initialize new project
hwaro serve    # Development server (localhost:3000)
hwaro build    # Build static site
```

## Directory Structure
```
pixel/
├── config.toml
├── AGENTS.md
├── content/
│   ├── index.md            (home page, uses home.html)
│   ├── about.md            (about page)
│   ├── search.md           (search page)
│   └── posts/
│       ├── _index.md       (section config)
│       └── *.md            (blog posts)
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── home.html
│   ├── page.html
│   ├── section.html
│   ├── 404.html
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   └── shortcodes/
│       └── alert.html
└── static/
    └── css/
        └── style.css
```

## Content Front Matter
All content uses TOML front matter with `+++` delimiters:
```toml
+++
title = "Post Title"
date = "2026-03-20"
description = "Post description"
tags = ["tag1", "tag2"]
categories = ["category"]
+++
```

## Template Variables
- `{{ site.title }}`, `{{ site.description }}` - Site metadata
- `{{ base_url }}` - Base URL for links
- `{{ current_year }}` - Current year
- `{{ page.title }}`, `{{ page.date }}`, `{{ page.url }}` - Page data
- `{{ page.tags }}`, `{{ page.reading_time }}`, `{{ page.word_count }}`
- `{{ page.higher }}`, `{{ page.lower }}` - Prev/next navigation
- `{{ content | safe }}` - Rendered HTML content
- `{{ section.pages }}`, `{{ section.title }}` - Section data
- `{{ og_all_tags | safe }}` - OpenGraph meta tags
- `{{ highlight_css | safe }}` - Syntax highlighting CSS
- `{{ auto_includes_css | safe }}` - Auto-included assets
- `{{ pagination | safe }}` - Pagination HTML

## Configuration
Key config sections: plugins, content.files, highlight, og, search, pagination, taxonomies, sitemap, robots, feeds.

## Notes for AI Agents
- Front matter is TOML (`+++`), not YAML (`---`)
- Use `{{ content | safe }}` for rendered content, not `{{ page.content }}`
- Custom metadata: `page.extra.field`
- Use `{{ base_url }}` prefix for all internal URLs
- Template engine is Crinja (Crystal Jinja2 implementation)
- Theme uses "Press Start 2P" (headings) and "VT323" (body) pixel fonts
- Color palette is NES-inspired with limited colors
- No gradients used - all flat colors with sharp borders
- CRT scanline overlay via `.scanlines` element
- Game UI metaphors: window titlebars, HP bars, quest terminology
