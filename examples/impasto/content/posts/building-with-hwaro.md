+++
title = "Building with Hwaro"
date = "2026-03-10"
tags = ["hwaro", "static-sites"]
categories = ["technical"]
description = "Using a fast static site generator to build a theme with character."
template = "page"
+++

Hwaro is a static site generator written in Crystal. It is fast, opinionated, and refreshingly simple. This site is built with it.

<!-- more -->

## Why Static

Static sites have a quality that dynamic platforms lack: finality. When you build a static site, you are committing to a specific arrangement of words and images. There is no database query deciding what to show. No algorithm reordering your content. What you publish is what exists.

This permanence suits the impasto philosophy. A brushstroke, once laid, stays.

## Project Structure

A Hwaro site is organized around three directories:

```
impasto/
  config.toml
  content/
    index.md
    about.md
    posts/
      _index.md
      my-post.md
  templates/
    home.html
    page.html
    section.html
  static/
    css/
      style.css
```

Content is written in Markdown with TOML front matter. Templates use Jinja2 syntax. Static assets are copied as-is to the output.

## The Build

Building the site is a single command:

```bash
hwaro build
```

The output lands in `public/`. Deploy it anywhere that serves static files. There are no runtime dependencies, no server processes, no moving parts.

## Local Development

For local preview with live reload:

```bash
hwaro serve --open
```

Changes to templates, content, or static files are reflected immediately. The feedback loop is tight, which matters when you are iterating on visual weight and spacing -- the details that make a design feel intentional rather than incidental.
