+++
title = "Building with Hwaro"
date = "2026-04-02"
tags = ["hwaro", "static-site"]
categories = ["blog"]
description = "How this liquid chrome theme was built using Hwaro, a fast static site generator."
+++

This site is powered by [Hwaro](https://github.com/hahwul/hwaro), a static site generator written in Crystal. Here's why it's a great choice for themed sites.

## Speed

Crystal compiles to native code, which means Hwaro builds sites incredibly fast. Even with complex templates and many pages, build times stay low.

## Template System

Hwaro uses Jinja2-style templates (via Crinja), which means:

- Template inheritance with `{% extends %}` and `{% block %}`
- Partials with `{% include %}`
- Powerful filters like `date()`, `slugify`, and `truncate_words()`
- Conditional logic and loops

## Content Management

Content is written in Markdown with TOML front matter:

```toml
+++
title = "My Post"
date = "2026-04-02"
tags = ["example"]
+++
```

Simple, clean, and version-control friendly.

## Taxonomies

Tags and categories are first-class citizens. Hwaro automatically generates taxonomy pages and feeds, making content organization effortless.

## The Result

A fast, minimal toolchain that gets out of your way and lets the design speak for itself. Perfect for a theme like Liquid Chrome where the visual impact matters most.
