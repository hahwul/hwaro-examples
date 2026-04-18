+++
title = "Pages & Sections"
weight = 1
tags = ["content"]
+++

# Pages & Sections

Content in Book is organized into **pages** and **sections**. Each Markdown file becomes a page, and each directory with an `_index.md` file becomes a section.

## Directory Structure

```
content/
├── index.md              # Home page
├── about.md              # Standalone page
└── docs/
    ├── _index.md         # Section page for /docs/
    ├── getting-started/
    │   ├── _index.md     # Section page
    │   ├── installation.md
    │   └── configuration.md
    └── guide/
        ├── _index.md
        └── pages.md      # This page
```

## Front Matter

Every content file starts with TOML front matter between `+++` delimiters:

```toml
+++
title = "Page Title"
weight = 1
tags = ["example"]
+++

Your content here...
```

### Common Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Page title |
| `weight` | number | Sort order (lower = first) |
| `date` | string | Publication date (YYYY-MM-DD) |
| `description` | string | Page description for SEO |
| `tags` | array | Tags for taxonomy |
| `draft` | bool | Exclude from build if `true` |
| `template` | string | Override default template |

## Section Pages

A section's `_index.md` controls how the section behaves:

```toml
+++
title = "Guide"
sort_by = "weight"
+++

Introductory text for this section.
```

The `sort_by` field controls the order of child pages. Options are `weight`, `date`, and `title`.
