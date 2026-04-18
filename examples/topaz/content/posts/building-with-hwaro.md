+++
title = "Building with Hwaro"
date = "2026-03-20"
tags = ["hwaro", "static-sites"]
categories = ["development"]
description = "Why Hwaro is the perfect engine for fast, beautiful static sites."
+++

[Hwaro](https://github.com/hahwul/hwaro) is a static site generator written in Crystal, and it's blazing fast. Here's why it's the engine behind this theme.

## Speed

Crystal compiles to native code, which means Hwaro builds sites in milliseconds. Even sites with hundreds of pages render almost instantly.

## Simplicity

The template system uses Jinja2-style syntax that's intuitive and powerful:

```jinja
{% for post in section.pages %}
  <a href="{{ base_url }}{{ post.url }}">{{ post.title }}</a>
{% endfor %}
```

## Features

Out of the box, Hwaro provides:

- **Markdown processing** with syntax highlighting
- **Taxonomy support** for tags and categories
- **RSS feeds** for content syndication
- **Sitemap generation** for SEO
- **Live reload** during development

## Getting Started

```bash
hwaro init my-site
cd my-site
hwaro serve --open
```

That's all it takes. Write your content in Markdown, design your templates in HTML, and let Hwaro handle the rest.
