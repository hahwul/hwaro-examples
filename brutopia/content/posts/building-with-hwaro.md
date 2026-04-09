+++
title = "Building with Hwaro"
date = "2025-01-20"
tags = ["hwaro", "tutorial"]
categories = ["guides"]
description = "A quick guide to building a static site with Hwaro"
template = "post"
+++

Hwaro is a static site generator written in Crystal. It is fast, minimal, and direct. A good foundation for a brutalist site.

<!-- more -->

## Installation

Install via Homebrew:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

## Create a Site

```bash
hwaro init my-site
cd my-site
hwaro serve
```

Your site runs at `http://localhost:3000`. No build tools. No package managers. No configuration beyond `config.toml`.

## Project Structure

A Hwaro site is a flat hierarchy:

| Directory | Purpose |
|-----------|---------|
| `config.toml` | Site configuration |
| `content/` | Markdown files |
| `templates/` | Jinja2 templates |
| `static/` | Assets copied as-is |

## Templates

Hwaro uses Jinja2 (Crinja) templates. The essential variables:

- `{{ site.title }}` -- site name from config
- `{{ page.title }}` -- current page title
- `{{ content }}` -- rendered markdown (use with `safe` filter)
- `{{ section.pages }}` -- list of pages in a section

## What Next

Create a post in `content/posts/` and watch live reload do its work. No restart needed.
