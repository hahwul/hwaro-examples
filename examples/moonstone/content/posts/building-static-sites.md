+++
title = "Building Beautiful Static Sites with Hwaro"
date = "2025-03-01"
description = "Getting started with Hwaro for fast, elegant static site generation"
tags = ["hwaro", "tutorial"]
template = "post"
+++

Static site generators have become the go-to choice for blogs, documentation, and portfolios. Among them, Hwaro stands out for its speed and simplicity.

<!-- more -->

## Why Static?

Static sites offer compelling advantages:

- **Speed** — Pre-built HTML loads instantly
- **Security** — No server-side code to exploit
- **Simplicity** — Deploy anywhere that serves files
- **Cost** — Free hosting on GitHub Pages, Netlify, and more

## Getting Started with Hwaro

Setting up a Hwaro site takes just a few commands:

```bash
hwaro init my-site
cd my-site
hwaro serve --open
```

Your site is running at `http://localhost:3000` with live reload enabled.

## Customizing Your Theme

Hwaro uses Jinja2-style templates, making it straightforward to create unique designs. The template system supports:

- Template inheritance with `{% extends %}` and `{% block %}`
- Partials with `{% include %}`
- Rich filter library (`date`, `slugify`, `truncate_words`, etc.)
- Custom shortcodes for reusable components

## Deployment

Deploy to GitHub Pages with a single workflow file. Hwaro's Docker image makes CI/CD builds reproducible and fast.

The result? A site that loads in milliseconds and looks exactly how you designed it.
