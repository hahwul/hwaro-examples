# AGENTS.md - Personal Blog Example

This is a **Personal Blog** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Sections & Posts**: Blog posts in `content/posts/` with `_index.md` section config
- **Pagination**: Enabled with 5 posts per page (`config.toml` → `[pagination]`)
- **Tags & Categories**: Taxonomy pages at `/tags/` and `/categories/`
- **RSS Feed**: Auto-generated for the posts section
- **Summary**: Posts use `<!-- more -->` to define excerpt break points
- **Reading Time**: Displayed on post cards and individual post pages
- **Prev/Next Navigation**: `page.lower` / `page.higher` for post navigation
- **Shortcodes**: `alert` shortcode used in posts (`templates/shortcodes/alert.html`)
- **Syntax Highlighting**: Code blocks with Highlight.js (`github` theme)

## Directory Structure

```
blog1/
├── config.toml
├── content/
│   ├── index.md
│   ├── about.md
│   └── posts/
│       ├── _index.md
│       ├── getting-started-with-hwaro.md
│       ├── syntax-highlighting-demo.md
│       └── using-tags-and-categories.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── page.html
│   ├── post.html          # Custom post template
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
| `pagination.enabled` | `true` | Paginate section listings |
| `pagination.per_page` | `5` | Posts per page |
| `feeds.sections` | `["posts"]` | RSS feed for posts only |
| `highlight.theme` | `"github"` | Syntax highlight theme |
| `markdown.lazy_loading` | `true` | Lazy-load images |

## Notes for AI Agents

1. Posts go in `content/posts/` with TOML front matter (date, tags, categories)
2. The `post.html` template is used for individual posts (set via section `page_template` or naming convention)
3. `<!-- more -->` in a post defines the summary/excerpt break point
4. Tags/categories are defined in `config.toml` under `[[taxonomies]]`
5. The `alert` shortcode is used as: `{{</* alert type="tip" message="..." */>}}`
