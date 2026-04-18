+++
title = "Building with Hwaro"
date = "2026-03-10"
tags = ["hwaro", "static-sites"]
categories = ["blog"]
description = "Why Hwaro is the perfect engine for creative, visually rich static sites."
+++

Static site generators have come a long way. With Hwaro, you get the speed and simplicity of static sites with the flexibility to create truly unique designs.

<!-- more -->

## Why Static?

Static sites offer compelling advantages for creative projects:

- **Speed** — No server-side rendering means instant page loads
- **Security** — No database or backend to compromise
- **Hosting** — Deploy anywhere: GitHub Pages, Netlify, Cloudflare Pages
- **Focus** — Spend time on design and content, not infrastructure

## Why Hwaro?

Hwaro brings several features that make it ideal for visually ambitious themes:

### Jinja2 Templates

The Crinja template engine provides powerful template inheritance, macros, and filters. This means you can create complex layouts with clean, maintainable code:

```jinja
{% extends "base.html" %}
{% block content %}
  <article class="glass-card">
    <h1>{{ page.title }}</h1>
    {{ content | safe }}
  </article>
{% endblock %}
```

### Built-in Asset Pipeline

Hwaro handles static assets seamlessly. Drop your CSS, JavaScript, and images into the `static/` directory and they're available everywhere through `{{ base_url }}`.

### Taxonomy Support

Tags, categories, and custom taxonomies are built in. This theme uses them to create a browsable archive of posts organized by topic.

## Getting Started

Creating a new Hwaro site is as simple as:

```bash
hwaro init my-blog
cd my-blog
hwaro serve --open
```

From there, customize templates, add content, and make it your own.
