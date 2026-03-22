# AGENTS.md - AI Agent Instructions for Hwaro Site

This document provides instructions for AI agents working on this Hwaro-generated website.

## Project Overview

This is a microblog theme for [Hwaro](https://github.com/hahwul/hwaro). A timeline-style stream of short posts without titles, where timestamps serve as the primary navigation element.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` directory |
| `hwaro serve` | Start development server with live reload |
| `hwaro new <path>` | Create new content from archetype |
| `hwaro deploy` | Deploy the site (requires configuration) |
| `hwaro build --drafts` | Include draft content |
| `hwaro serve -p 8080` | Serve on custom port (default: 3000) |
| `hwaro build --base-url "https://example.com"` | Set base URL for production |

## Directory Structure

```
.
├── config.toml          # Site configuration
├── content/             # Markdown content files
│   ├── index.md         # Homepage (timeline view)
│   ├── about.md         # About page
│   └── posts/           # Microblog posts
│       ├── _index.md    # Section listing page
│       └── *.md         # Individual posts (date-prefixed filenames)
├── templates/           # Jinja2 templates (Crinja)
│   ├── header.html      # Site header with identity and nav
│   ├── footer.html      # Site footer
│   ├── home.html        # Timeline view
│   ├── post.html        # Single post view
│   ├── page.html        # Static pages
│   ├── section.html     # Section listing
│   ├── taxonomy.html    # Taxonomy listing
│   ├── taxonomy_term.html # Taxonomy term page
│   ├── 404.html         # Error page
│   └── shortcodes/      # Shortcode templates
├── static/              # Static assets
│   └── css/style.css    # Main stylesheet
└── AGENTS.md            # This file
```

## Design Principles

- Posts are body-only, no titles
- Timestamps are the core navigation and identity of each post
- Minimal UI focused entirely on content
- Light theme with clean typography
- Social feed aesthetic (Twitter/Mastodon-like)
- No gradients, no decorative elements

## Content Convention

- Posts live in `content/posts/` with date-prefixed filenames
- Front matter uses empty `title = ""` since posts are untitled
- Each post should set `template = "post"`
- Tags are the primary taxonomy

## Notes for AI Agents

1. **Front matter is TOML** (`+++`), not YAML (`---`).
2. **Rendered content** is `{{ content | safe }}`, not `{{ page.content }}`.
3. **Custom metadata** is `page.extra.field`, not `page.params.field`.
4. **Always preview** with `hwaro serve` before committing.
5. **Validate TOML syntax** in config.toml and front matter after edits.
6. **Use `{{ base_url }}` prefix** for URLs in templates.
7. **Escape user content** with `{{ value | escape }}` in templates.

## Full Reference

For detailed documentation on content, templates, configuration, and more:

- [Hwaro Documentation](https://hwaro.hahwul.com)
- [Configuration Guide](https://hwaro.hahwul.com/start/config/)
- [Full LLM Reference](https://hwaro.hahwul.com/llms-full.txt)

To generate the full embedded AGENTS.md locally, run:
```
hwaro tool agents-md --local --write
```

## Site-Specific Instructions

<!-- Add your site-specific rules and conventions below -->
