+++
title = "Building with Hwaro"
date = "2026-01-03"
tags = ["hwaro", "static-site"]
categories = ["blog"]
description = "Why Hwaro is the perfect static site generator for creative, design-forward themes."
+++

When choosing a static site generator for a visually ambitious project, you need something fast, flexible, and stay out of your way. That's [Hwaro](https://github.com/hahwul/hwaro).

## What Makes Hwaro Different

Written in Crystal, Hwaro compiles to native code and builds sites at remarkable speed. But performance is just the beginning:

- **Jinja2/Crinja templates** — familiar, powerful, and expressive
- **TOML front matter** — clean, unambiguous configuration
- **Taxonomy support** — tags, categories, and custom taxonomies
- **RSS feeds** — built-in, zero configuration needed
- **Syntax highlighting** — multiple themes, CDN-powered

## The Template System

Hwaro's template system gives designers full control. Every element on this site is crafted through a handful of template files:

```
templates/
├── header.html       # Navigation and head meta
├── footer.html       # Footer and closing scripts
├── home.html         # Landing page
├── page.html         # Individual articles
├── section.html      # Post listings
├── taxonomy.html     # Tag/category index
├── taxonomy_term.html # Single tag/category
└── 404.html          # Not found page
```

## Getting Started

```bash
hwaro init my-site
cd my-site
hwaro serve --open
```

Three commands and you're live. From there, the only limit is your imagination.
