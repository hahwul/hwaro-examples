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

## Directory Structure

```
.
├── config.toml          # Site configuration
├── content/             # Markdown content files
│   ├── index.md         # Homepage content
│   ├── about.md         # About page
│   └── docs/            # Documentation sections
│       ├── queries/     # SQL query reference
│       │   ├── _index.md
│       │   ├── select-basics.md
│       │   ├── joins-and-subqueries.md
│       │   └── window-functions.md
│       └── optimization/ # Query optimization guides
│           ├── _index.md
│           ├── execution-plans.md
│           ├── partitioning.md
│           └── indexing.md
├── templates/           # HTML templates
│   ├── header.html      # Dark theme header with Tailwind CDN
│   ├── footer.html      # Footer with Hwaro credit
│   ├── doc.html         # Sidebar + content doc layout
│   ├── page.html        # Simple centered page layout
│   ├── section.html     # Card grid section listing
│   ├── taxonomy.html    # Taxonomy term listing
│   ├── taxonomy_term.html # Pages for a taxonomy term
│   ├── 404.html         # Error page
│   └── shortcodes/
│       └── alert.html   # Alert box shortcode
└── static/
    └── js/
        └── mobile-menu.js # Mobile menu toggle
```

## Theme Details

- **Design**: Dark theme data analytics console
- **Color palette**: Dark navy (#0f172a / #1e293b), amber accent (#f59e0b / #d97706), white text (#e2e8f0), slate muted (#94a3b8)
- **Fonts**: Inter (body), JetBrains Mono (code)
- **CSS Framework**: Tailwind CSS via CDN with custom config
- **No gradients**: All backgrounds use solid colors

## Key Features

- Dark themed documentation layout with sidebar navigation
- Three-column doc layout: sidebar, content, table of contents
- Mobile-responsive with collapsible navigation
- SQL syntax highlighting via Highlight.js
- Keyboard shortcut (/) to focus search
- Breadcrumb navigation in doc pages
- Previous/next page navigation
- Tag taxonomy for content classification
- Alert shortcode for callout boxes
