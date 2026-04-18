# AGENTS.md - Lighthouse (Navigation Guide / Directory)

This is a **Navigation Guide / Directory** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Category-based Directory**: Organized resources into `tools/`, `learning/`, and `community/` sections.
- **Resource Meta-data**: Individual resources with `rating`, `recommend` badge, `link` (external link), and `tags`.
- **Search & Filtering**: Client-side search and alphabetical index for quick resource discovery.
- **Grid Layout**: Visual card-based grid for browsing categories.
- **Clean Light Theme**: Focused on information hierarchy and readability.
- **Custom Taxonomies**: Uses `tags` for classifying resources.

## Directory Structure

```
lighthouse/
├── config.toml
├── content/
│   ├── index.md
│   ├── tools/
│   │   ├── index.md
│   │   ├── hwaro.md
│   │   ├── hugo.md
│   │   └── jekyll.md
│   ├── learning/
│   │   ├── index.md
│   │   ├── rust.md
│   │   └── go.md
│   └── community/
│       ├── index.md
│       ├── github.md
│       └── reddit.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── page.html
│   ├── section.html
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   └── 404.html
└── AGENTS.md
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `search.enabled` | `true` | Client-side search index |
| `taxonomies.tags`| `enabled`| Resource classification |

## Notes for AI Agents

1. Add new resources as `.md` files in the appropriate category directory.
2. Each resource should have `rating` (1-5), `recommend` (boolean), and `link` in its `[extra]` front matter.
3. Category overview is controlled by `index.md` in each category directory.
4. The `section.html` template handles the grid display and filtering logic.
