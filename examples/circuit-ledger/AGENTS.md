# AGENTS.md - AI Agent Instructions for Hwaro Site

This document provides instructions for AI agents working on this Hwaro-generated website.

## Project Overview

This is a static website built with [Hwaro](https://github.com/hahwul/hwaro), a fast and lightweight static site generator written in Crystal.

The site is the reference specification for **Circuit Ledger**, a fictional embedded
ledger runtime. The visual theme is dark, monospace-dominant, with neon-green
accents and ASCII-art schematic decoration. No gradients. No emojis. Single-color
borders only.

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
│   └── docs/            # Spec chapters
│       ├── _index.md    # Section landing page (underscore-prefixed)
│       └── *.md         # Pages within the section
├── templates/           # Jinja2 templates (Crinja)
│   ├── header.html      # Shared <head> + <body> open
│   ├── footer.html      # Shared <body>/<html> close
│   ├── page.html        # Page template
│   ├── section.html     # Section listing template
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

## Visual Constraints (Hard Rules)

- **No gradients**, anywhere — solid colors only.
- **No emojis**, anywhere — ASCII art (`+`, `-`, `|`, box-drawing characters,
  bullet `▌`) is fine and encouraged.
- Background is near-black `#0d0d10`. Accent is neon green `#3aff8a`, used
  sparingly for navigational signal, links, and key data.
- JetBrains Mono is the dominant face. Inter is only used for display
  headings (`h1` on hero and chapter cards).
- Chapter and section cards are framed with `+` corner glyphs positioned with
  CSS pseudo-elements; do not replace these with rounded boxes or shadows.

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

- When adding a new chapter, give it a `weight` one higher than the current
  last chapter and update the `templates/header.html` sidebar tree by hand.
- Opcode tables in chapter 02 are the source of truth; update them before
  changing any prose that references opcode counts or gas numbers.
