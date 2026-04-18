+++
title = "Content Management"
weight = 1
description = "How to create, organize, and manage wiki articles"
tags = ["content", "writing"]
categories = ["guides"]
+++

# Content Management

This guide covers everything you need to know about creating and organizing content in the wiki.

## File Structure

Content is organized in directories that map to URL paths:

```
content/
  index.md                    -> /
  about.md                    -> /about/
  docs/
    _index.md                 -> /docs/
    getting-started/
      _index.md               -> /docs/getting-started/
      installation.md         -> /docs/getting-started/installation/
```

## Front Matter

Every content file starts with TOML front matter between `+++` delimiters:

```toml
+++
title = "Article Title"
date = "2025-01-15"
description = "A brief summary"
weight = 1
tags = ["example"]
draft = false
+++
```

### Required Fields

- **title**: The article title, displayed in headings and navigation

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `date` | string | Publication date (YYYY-MM-DD) |
| `description` | string | Summary for SEO and previews |
| `weight` | integer | Sort order within a section |
| `tags` | array | Tags for categorization |
| `draft` | boolean | If true, excluded from builds |
| `template` | string | Override the default template |

## Sections

A section is a directory containing an `_index.md` file. The `_index.md` file defines metadata for the section:

```toml
+++
title = "Guides"
sort_by = "weight"
page_template = "doc"
+++
```

Setting `page_template` applies a specific template to all pages in the section.

## Writing Markdown

Standard Markdown syntax is fully supported, including:

- Headings, paragraphs, and lists
- Code blocks with syntax highlighting
- Tables
- Links and images
- Blockquotes

### Code Blocks

Use fenced code blocks with a language identifier:

````markdown
```python
def greet(name):
    return f"Hello, {name}!"
```
````

### Tables

```markdown
| Column A | Column B |
|----------|----------|
| Value 1  | Value 2  |
```

## Summary Breaks

Use `<!-- more -->` to define where the summary ends. Content before this marker is used in previews and feeds.

## Draft Content

Set `draft = true` in front matter to exclude an article from production builds. Include drafts during development with:

```bash
acme build --drafts
```
