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
│   ├── _index.md        # Homepage content
│   └── recipes/         # Recipe section
│       ├── _index.md    # Section listing page
│       └── *.md         # Individual recipes
├── templates/           # Jinja2 templates (Crinja)
│   ├── header.html      # Site header and navigation
│   ├── footer.html      # Site footer
│   ├── page.html        # Recipe detail template
│   ├── section.html     # Recipe grid listing template
│   ├── taxonomy.html    # Taxonomy listing
│   ├── taxonomy_term.html # Taxonomy term page
│   ├── 404.html         # Error page
│   └── shortcodes/      # Shortcode templates
├── static/              # Static assets (copied as-is)
│   └── css/
│       └── style.css    # Main stylesheet
└── archetypes/          # Content templates for `hwaro new`
```

## Content

### Pages

Create `.md` files in `content/`. Front matter uses TOML (`+++`).

```toml
+++
title = "Page Title"
date = "2024-01-15"
description = "SEO description"
draft = false
tags = ["tag1", "tag2"]
image = "/images/cover.png"
weight = 0
toc = true
authors = ["Author"]
template = "page"

[extra]
custom_field = "value"
+++

Markdown content here.
```

| Field | Type | Description |
|-------|------|-------------|
| title | string | Page title (required) |
| date | string | Publication date (YYYY-MM-DD) |
| description | string | SEO description |
| draft | bool | Exclude from production builds |
| tags | array | Tag taxonomy terms |
| image | string | Featured image for social sharing |
| weight | int | Sort order (lower = first) |
| toc | bool | Enable table of contents |
| template | string | Custom template name |
| slug | string | Custom URL slug |
| aliases | array | Redirect URLs to this page |
| authors | array | Author names |
| extra | table | Custom metadata (access via `page.extra`) |

### Recipe-Specific Extra Fields

Recipes use `[extra]` fields for metadata displayed on cards and detail pages:

| Field | Type | Description |
|-------|------|-------------|
| cook_time | string | Total cooking time (e.g., "35 min") |
| difficulty | string | Difficulty level (Easy, Medium, Hard) |
| servings | string | Number of servings |
| ingredient_count | int | Number of ingredients |

### Sections

A directory with `_index.md` groups related content.

```toml
+++
title = "Blog"
sort_by = "date"
paginate = 10
+++
```

| Field | Type | Description |
|-------|------|-------------|
| sort_by | string | Sort by: `date`, `weight`, `title` |
| paginate | int | Pages per page |
| transparent | bool | Pass pages to parent section |
| generate_feeds | bool | Generate RSS feed for this section |
| page_template | string | Default template for child pages |

### Internal Links

Use `@/` to link to content by source path:
```markdown
[Read the post](@/recipes/my-recipe.md)
[Recipe section](@/recipes/_index.md)
```

### Content Summary

Use `<!-- more -->` to define a summary for listings:
```markdown
This appears in listings.

<!-- more -->

Full content continues here.
```

## Templates

### Template Selection

| Content | Template |
|---------|----------|
| `content/index.md` | `index.html` or `page.html` |
| `content/about.md` | `page.html` |
| `content/recipes/_index.md` | `section.html` |
| `content/recipes/post.md` | `page.html` |
| Taxonomy listing | `taxonomy.html` |
| Taxonomy term | `taxonomy_term.html` |

### Key Variables

**In page.html:**
```jinja
{{ page.title }}          {# Page title #}
{{ page.date }}           {# Publication date #}
{{ page.url }}            {# Relative URL #}
{{ page.description }}    {# SEO description #}
{{ page.image }}          {# Featured image #}
{{ page.reading_time }}   {# Reading time in minutes #}
{{ page.word_count }}     {# Word count #}
{{ page.extra.field }}    {# Custom front matter #}
{{ content | safe }}      {# Rendered HTML content #}
{{ toc | safe }}          {# Table of contents HTML #}
```

**In section.html:**
```jinja
{{ section.title }}
{{ section.pages }}       {# Array of pages #}
{{ section.pages_count }}
{{ section.subsections }} {# Child sections #}
```

**Global:**
```jinja
{{ site.title }}
{{ site.description }}
{{ base_url }}
{{ current_year }}
```

**SEO (pre-rendered HTML):**
```jinja
{{ og_all_tags | safe }}       {# OpenGraph + Twitter meta tags #}
{{ canonical_tag | safe }}     {# Canonical link #}
{{ jsonld | safe }}            {# JSON-LD structured data #}
{{ highlight_tags | safe }}    {# Syntax highlighting CSS + JS #}
{{ auto_includes | safe }}     {# Auto-included CSS + JS #}
```

### Navigation

```jinja
{# Previous/Next page #}
{% if page.lower %}<a href="{{ page.lower.url }}">{{ page.lower.title }}</a>{% endif %}
{% if page.higher %}<a href="{{ page.higher.url }}">{{ page.higher.title }}</a>{% endif %}

{# Breadcrumbs #}
{% for ancestor in page.ancestors %}
  <a href="{{ ancestor.url }}">{{ ancestor.title }}</a> /
{% endfor %}
```

### Shortcodes

Reusable components in `templates/shortcodes/`. Use in markdown:
```markdown
{{ youtube(id="dQw4w9WgXcQ") }}
{% alert(type="warning") %}Warning text{% endalert %}
```

### Common Filters

| Filter | Description |
|--------|-------------|
| `safe` | Output raw HTML |
| `escape` | Escape HTML entities |
| `default(value="fallback")` | Default value if nil |
| `truncate(length=100)` | Truncate string |
| `slugify` | Convert to URL slug |
| `strip_html` | Remove HTML tags |
| `markdownify` | Render markdown to HTML |
| `date(format="%Y-%m-%d")` | Format date |
| `upper` / `lower` | Case conversion |
| `join(sep=", ")` | Join array |

## Configuration

Key `config.toml` sections:

```toml
title = "My Site"
base_url = "https://example.com"

[highlight]
enabled = true
theme = "github-dark"

[search]
enabled = true

[sitemap]
enabled = true

[feeds]
enabled = true

[og]
default_image = "/images/og.png"
twitter_card = "summary_large_image"

[[taxonomies]]
name = "tags"
```

See [Hwaro Documentation](https://hwaro.hahwul.com/start/config/) for the full configuration reference.

## Notes for AI Agents

1. **Front matter is TOML** (`+++`), not YAML (`---`).
2. **Rendered content** is `{{ content | safe }}`, not `{{ page.content }}`.
3. **Custom metadata** is `page.extra.field`, not `page.params.field`.
4. **Always preview** with `hwaro serve` before committing.
5. **Validate TOML syntax** in config.toml and front matter after edits.
6. **Use `{{ base_url }}` prefix** for URLs in templates.
7. **Escape user content** with `{{ value | escape }}` in templates.

## Site-Specific Instructions

- Recipes should always include `[extra]` fields: `cook_time`, `difficulty`, `servings`, `ingredient_count`
- Use `<!-- more -->` in recipe content to define the summary shown on cards
- Recipe body should follow the structure: intro paragraph, Ingredients (h2), Steps (h2), Notes (h2)
- Tags should use lowercase category names (e.g., "korean", "dessert", "quick")
