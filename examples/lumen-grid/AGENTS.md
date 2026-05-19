# AGENTS.md - AI Agent Instructions for Hwaro Site

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

## Site-Specific Notes

- Theme: dark, NOC/SRE edge observability console. Lime green (`#b4ff39`) accent.
- Content sections: `content/incidents/` for postmortems, plus `index.md` (console) and `about.md` (operator manual).
- CSS lives in `static/css/style.css` (over 200 lines, extracted per repo convention).
- Use `{{ base_url }}` for all asset/link references.
- No gradients, no emojis — design brief.

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
- [Configuration Guide](https://hwaro.hahwul.com/start/config/)
- [Full LLM Reference](https://hwaro.hahwul.com/llms-full.txt)
