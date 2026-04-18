+++
title = "Content Authoring"
weight = 5
description = "Writing content with Markdown and front matter"
tags = ["content"]
[extra]
chapter = "Content"
+++

# Content Authoring

Write in Markdown with TOML front matter.

## Front Matter

```toml
+++
title = "My Post"
date = "2026-01-15"
tags = ["tutorial", "beginner"]
description = "A short summary"
[extra]
author = "Jane Doe"
+++
```

## Markdown Body

Everything below the front matter is your content. Standard Markdown syntax applies:

- **Bold** and *italic* text
- [Links](https://example.com) and images
- Ordered and unordered lists
- Code blocks with syntax highlighting
- Tables, blockquotes, and horizontal rules

## Sections

Group content into sections using directories. Each section needs a `_index.md` file to define sort order and pagination.
