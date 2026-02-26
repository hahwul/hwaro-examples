# AGENTS.md - Documentation Site Example

This is a **Documentation Site** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Multiple Sections**: `docs/getting-started/` and `docs/guides/` as separate doc sections
- **Weight-based Sorting**: Documents ordered by `weight` front matter (`sort_by = "weight"`)
- **Table of Contents**: `page.toc` rendered in the sidebar of doc pages
- **Custom Page Template**: Sections use `page_template = "doc.html"` for doc-specific layout
- **Sidebar Navigation**: Auto-generated from section pages with current-page highlight
- **Prev/Next Navigation**: `page.lower` / `page.higher` for sequential doc reading
- **Search Index**: Fuse.js search index generated for client-side search

## Directory Structure

```
blog2/
├── config.toml
├── content/
│   ├── index.md
│   ├── about.md
│   └── docs/
│       ├── getting-started/
│       │   ├── _index.md
│       │   ├── installation.md
│       │   ├── quick-start.md
│       │   └── configuration.md
│       └── guides/
│           ├── _index.md
│           ├── working-with-data.md
│           └── deployment.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── page.html
│   ├── doc.html           # Custom doc page template
│   ├── section.html
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   ├── 404.html
│   └── shortcodes/
│       └── alert.html
└── AGENTS.md
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `pagination.enabled` | `false` | No pagination needed |
| `search.enabled` | `true` | Client-side search |
| `highlight.theme` | `"github"` | Code syntax highlighting |

## Notes for AI Agents

1. Docs go in nested directories under `content/docs/`
2. Each section needs `_index.md` with `sort_by = "weight"` and `page_template = "doc.html"`
3. Use `weight` in front matter to control document order (lower = first)
4. The `doc.html` template provides sidebar navigation and TOC
5. `page.toc` is auto-generated from headings in the content
