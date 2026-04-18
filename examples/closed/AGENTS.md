# AGENTS.md - AI Agent Instructions for Closed Site

This document provides instructions for AI agents working on this Hwaro-generated website.

## Project Overview

This is a clean, elegant error page example for HTTP 499 (Client Closed Request), built with [Hwaro](https://github.com/hahwul/hwaro).

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` directory |
| `hwaro serve` | Start development server with live reload |

## Directory Structure

```
.
├── config.toml          # Site configuration
├── content/             # Markdown content files
│   └── _index.md        # Homepage content
├── templates/           # Crinja templates
│   └── index.html       # Main template
└── static/              # Static assets
    └── css/style.css    # Minimalist design
```

## Design Constraints

- **No Gradients**: Use solid colors and clean lines.
- **No Emojis**: Maintain a professional, technical aesthetic.
- **Typography**: Focused on 'Inter' and 'IBM Plex Mono'.
