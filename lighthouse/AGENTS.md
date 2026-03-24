# AGENTS.md - Lighthouse Directory Example

This is a **Lighthouse Directory** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Elegant Design:** Light theme with clean typography and zero gradients/emojis.
- **Resource Directory:** Resources grouped by categories with `transparent = true` to allow root listing.
- **Search Integration:** Built-in client-side search for resources, tags, and categories using Fuse.js.
- **Alphabetical Index:** Easy navigation through curated resources by first letter.
- **Metadata Support:** Support for tags, badges (Recommended), and ratings in front matter.
- **Category-based Grouping:** Subsections listed as categories with their resources.

## Directory Structure

```
lighthouse/
├── config.toml
├── content/
│   ├── _index.md
│   ├── development/
│   │   ├── _index.md
│   │   ├── react.md
│   │   └── vue.md
│   ├── design/
│   │   ├── _index.md
│   │   └── figma.md
│   └── learning/
│       ├── _index.md
│       └── mdn.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── index.html
│   └── shortcodes/
└── AGENTS.md
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `pagination.enabled` | `false` | All resources on one page |
| `search.enabled` | `true` | Client-side search for discovery |
| `assets.minify` | `true` | Minify CSS for performance |

## Notes for AI Agents

1. Add new categories as subdirectories in `content/` with `_index.md`.
2. Add new resources as `.md` files in the appropriate category directory.
3. Use `extra` fields in front matter for `link`, `tags`, `recommended`, and `rating`.
4. Ensure `transparent = true` in category `_index.md` files for proper grouping.
5. The `index.html` template handles both categories and the alphabetical index.
