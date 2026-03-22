+++
title = "Creating Content"
description = "Learn how to write pages and posts using Markdown with TOML front matter."
date = "2026-03-03"
weight = 3
template = "lesson"
tags = ["content", "markdown"]
difficulty = "beginner"
duration = "15 min"
step = "3"
+++

## Front Matter

Every content file starts with front matter enclosed in `+++` delimiters. This metadata tells Hwaro how to handle the page.

```toml
+++
title = "My First Post"
date = "2026-03-01"
description = "An introduction to writing content in Hwaro."
tags = ["tutorial", "basics"]
draft = false
+++

Your Markdown content starts here.
```

> Hwaro uses TOML front matter (with `+++`), not YAML (with `---`). This is one of the most common mistakes when migrating from other generators.

## Available Fields

Here are the front matter fields you can use:

| Field | Type | Description |
|---|---|---|
| `title` | string | Page title (required) |
| `date` | string | Publication date (YYYY-MM-DD) |
| `description` | string | SEO meta description |
| `tags` | array | Tag taxonomy terms |
| `categories` | array | Category taxonomy terms |
| `draft` | bool | Exclude from production builds |
| `weight` | int | Sort order (lower appears first) |
| `template` | string | Custom template name |
| `slug` | string | Override URL slug |
| `image` | string | Featured image path |

## Custom Metadata

Use the `[extra]` table for any custom fields:

```toml
+++
title = "Advanced Guide"
[extra]
difficulty = "advanced"
duration = "20 min"
author = "Jane"
+++
```

Access these in templates with `page.extra.difficulty`, `page.extra.duration`, etc.

## Writing Markdown

Hwaro supports standard Markdown with some additions:

### Text Formatting

```markdown
**Bold text** and *italic text* and `inline code`.

- Unordered list item
- Another item

1. Ordered list
2. Second item
```

### Code Blocks

Use fenced code blocks with a language identifier for syntax highlighting:

````markdown
```python
def greet(name):
    return f"Hello, {name}!"
```
````

### Links and Images

```markdown
[Link text](https://example.com)
![Alt text](/images/photo.jpg)
```

### Summary Break

Use `<!-- more -->` to define where the summary ends in list views:

```markdown
This text appears in the summary.

<!-- more -->

This text only appears on the full page.
```

## Creating Sections

To create a section (like a blog), make a subdirectory with an `_index.md`:

```toml
+++
title = "Blog Posts"
sort_by = "date"
reverse = true
paginate = 10
+++

Welcome to the blog. Browse recent posts below.
```

Then add content files alongside it. Each file in the directory becomes a page in that section.

## Key Takeaways

- Always use `+++` for TOML front matter
- The `title` field is required for every page
- Use `[extra]` for custom metadata accessible in templates
- Sections are subdirectories with `_index.md` files
- Use `<!-- more -->` to control summaries
