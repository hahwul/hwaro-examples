# AGENTS.md - AI Agent Instructions for Hwaro Site

This document provides instructions for AI agents working on this Hwaro-generated website.

## Project Overview

This is a static website built with [Hwaro](https://github.com/hahwul/hwaro), a fast and lightweight static site generator written in Crystal.

This site is **Prose Spec**, a documentation example with a light, modern-editorial aesthetic: cream paper, a modern serif (Fraunces) for headings, Inter for body, and IBM Plex Mono for the apparatus.

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
│   ├── index.md         # Homepage (single file, no underscore)
│   └── docs/            # Chapter section
│       ├── _index.md    # Section landing page (underscore-prefixed)
│       └── 0N-*.md      # Chapters within the section
├── templates/           # Jinja2 templates (Crinja)
│   ├── header.html      # Shared <head> + <body> open
│   ├── footer.html      # Shared <body>/<html> close
│   ├── home.html        # Homepage template
│   ├── page.html        # Page template
│   ├── section.html     # Section listing template
│   ├── taxonomy.html    # Taxonomy index template
│   ├── taxonomy_term.html # Single taxonomy term template
│   ├── 404.html         # Not-found page
│   └── shortcodes/      # Shortcode templates
├── static/              # Static assets (copied as-is)
└── archetypes/          # Content templates for `hwaro new`
```

## Notes for AI Agents

1. **Front matter** can be TOML (`+++`), YAML (`---`), or JSON (`{...}` at file start). Pick one per file and keep delimiters matched.
2. **Rendered content** is `{{ content }}` in templates (already-safe HTML — no extra `| safe` needed).
3. **Custom metadata** is `page.extra.field`, not `page.params.field`.
4. **Always preview** with `hwaro serve` before committing.
5. **Validate front matter syntax** (TOML, YAML, or JSON) and `config.toml` after edits.
6. **Use `{{ base_url }}` prefix** for URLs in templates.
7. **Escape user content** with `{{ value | e }}` (or `| escape`) in templates.

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

- **No gradients.** The visual language is solid colors and single-color rules only. Do not introduce CSS gradients, even subtle ones.
- **No emojis.** Anywhere — content, templates, or commit messages for this site.
- **Type stack.** Headings: Fraunces (modern serif). Body: Inter. Apparatus / code / labels: IBM Plex Mono. Do not swap these without a redesign.
- **Color stack.** Paper `#f6f1e7`, ink `#1a1815`, accent `#b03a1c`. The accent is for emphasis and rules only — never a background fill.
- **Editorial rhythm.** Body line-height stays at 1.7 or higher. Hairline rules (1px `--rule`) separate sections. Drop-caps appear on the first paragraph of each article via CSS, not in markdown.
- **Margin notes.** Use `<aside class="margin-note">…</aside>` inside an article to add an editorial note in the left margin on wide viewports (it collapses to an inline note on narrow ones).
