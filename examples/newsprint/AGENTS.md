# AGENTS.md - AI Agent Instructions for the Newsprint theme (Hwaro broadsheet documentation site)

This document provides instructions for AI agents working on this Hwaro-generated website.

## Project Overview

This is a static website built with [Hwaro](https://github.com/hahwul/hwaro), a fast and lightweight static site generator written in Crystal.

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
│   ├── _index.md        # Homepage content
│   └── blog/            # Blog section
│       ├── _index.md    # Section listing page
│       └── *.md         # Individual pages
├── templates/           # Jinja2 templates (Crinja)
│   ├── base.html        # Base layout (optional)
│   ├── page.html        # Page template
│   ├── section.html     # Section listing template
│   └── shortcodes/      # Shortcode templates
├── static/              # Static assets (copied as-is)
└── archetypes/          # Content templates for `hwaro new`
```

## Notes for AI Agents

1. **Front matter** can be TOML (`+++`), YAML (`---`), or JSON (`{...}` at file start). Pick one per file and keep delimiters matched.
2. **Rendered content** is `{{ content | safe }}`, not `{{ page.content }}`.
3. **Custom metadata** is `page.extra.field`, not `page.params.field`.
4. **Always preview** with `hwaro serve` before committing.
5. **Validate front matter syntax** (TOML, YAML, or JSON) and `config.toml` after edits.
6. **Use `{{ base_url }}` prefix** for URLs in templates.
7. **Escape user content** with `{{ value | escape }}` in templates.

## Full Reference

For detailed documentation on content, templates, configuration, and more:

- [Hwaro Documentation](https://hwaro.hahwul.com)
- [Configuration Guide](https://hwaro.hahwul.com/start/config/)
- [Full LLM Reference](https://hwaro.hahwul.com/llms-full.txt) — comprehensive reference optimized for AI agents

To generate the full embedded AGENTS.md locally, run:
```
hwaro tool agents-md --local --write
```

## Site-Specific Instructions

<!-- Add your site-specific rules and conventions below -->

- **Theme:** Newsprint — a broadsheet newspaper documentation theme (a daily technical gazette). Keep the editorial voice: datelines, kickers, decks, pull-quotes.
- **No color washes / fades, ever.** Avoid that CSS technique entirely; the word for it must not appear in any file. Use solid fills, borders, box-shadow, and outlines only.
- **No emojis.** Geometric Unicode glyphs (squares, section marks) are fine.
- **Palette lives in CSS variables** in `static/css/style.css`: newsprint off-white (`--paper`), black ink (`--ink`), single spot red (`--spot`). Do not introduce new accent colors.
- **Type system:** Playfair Display (nameplate/display), PT Serif (body), Oswald (kickers/labels), JetBrains Mono (code). Loaded in `templates/header.html`.
- **Signature components:** the masthead/nameplate, the front-page (home.html), article pages, and the classifieds-style sidebar (`_sidebar.html`). Restyle freely but keep the Crinja variable patterns intact.