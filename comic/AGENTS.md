# Comic Theme - Hwaro Example

## Project Overview

This is a **Comic** theme example for [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator written in Crystal. The theme uses a webtoon/comic strip visual language with panel grid layouts, speech bubble blockquotes, bold outlines, and pop colors on a light background.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro serve` | Dev server with live reload (default: localhost:3000) |
| `hwaro build` | Build site into `public/` directory |
| `hwaro new episodes/my-episode.md` | Create a new episode from archetype |
| `hwaro serve -p 8080` | Serve on a custom port |
| `hwaro build --drafts` | Build including draft content |
| `hwaro build --base-url "https://example.com"` | Build with a production base URL |

## Directory Structure

```
comic/
├── config.toml           # Site configuration (TOML)
├── AGENTS.md             # This file
├── content/
│   ├── index.md          # Homepage (uses home.html template)
│   ├── about.md          # About page
│   ├── search.md         # Search page (uses search.html template)
│   └── episodes/         # Episode entries (blog posts)
│       ├── _index.md     # Section listing page
│       └── *.md          # Individual episodes
├── templates/
│   ├── header.html       # Site header with nav
│   ├── footer.html       # Site footer
│   ├── home.html         # Homepage with hero panel + episode grid
│   ├── page.html         # Single episode/page template
│   ├── section.html      # Episode listing grid
│   ├── search.html       # Client-side search
│   ├── taxonomy.html     # Tag/category listing
│   ├── taxonomy_term.html # Individual tag/category page
│   └── 404.html          # Error page
└── static/
    └── css/
        └── style.css     # All theme styles
```

## Content Front Matter

```toml
+++
title = "Ep.1 - Title Here"
date = "2026-03-20"
description = "Short description for listings and SEO"
draft = false
tags = ["tag1", "tag2"]
categories = ["category"]
image = "/images/cover.png"
weight = 0
toc = true

[extra]
custom_field = "value"
+++
```

## Template Variables

### Global
- `{{ site.title }}`, `{{ site.description }}`, `{{ base_url }}`
- `{{ current_year }}`, `{{ og_all_tags | safe }}`, `{{ highlight_css | safe }}`

### Page
- `{{ page.title }}`, `{{ page.date }}`, `{{ page.url }}`
- `{{ page.reading_time }}`, `{{ page.word_count }}`
- `{{ page.tags }}`, `{{ page.image }}`, `{{ page.description }}`
- `{{ page.higher }}`, `{{ page.lower }}` - previous/next navigation
- `{{ content | safe }}` - rendered HTML content

### Section
- `{{ section.pages }}`, `{{ section.pages_count }}`
- `{{ pagination }}` - auto-generated pagination

## Configuration

See `config.toml` for full configuration. Key sections:
- `[search]` - Fuse.js client-side search
- `[pagination]` - 6 episodes per page
- `[[taxonomies]]` - tags and categories
- `[feeds]` - RSS feed for episodes section

## Notes for AI Agents

- Front matter uses **TOML** format with `+++` delimiters (not YAML `---`)
- Template engine is **Crinja** (Crystal Jinja2), mostly identical to Jinja2
- Crinja differences: no `do` extension, filters may differ slightly
- The `.panel` CSS class adds the comic panel border styling
- Blockquotes render as speech bubbles with a tail pointer
- Episode cards use comic-style hover effects (lift + shadow)
- Episode navigation uses "Prev Episode" / "Next Episode" labels
- Color palette is pop-art inspired: bold red, dark navy, warm orange, teal
- No gradients are used anywhere in the theme
