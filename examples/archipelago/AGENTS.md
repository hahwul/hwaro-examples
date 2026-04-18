# AGENTS.md - Multi-Project Hub Theme (Archipelago)

This is a **Multi-Project Hub** example for [Hwaro](https://github.com/hahwul/hwaro), inspired by developer-centric project dashboards like GitHub or GitLab.

## Demonstrated Features

- **Multi-Project Layout**: Centrally manage and showcase multiple distinct projects or services.
- **Categorization**: Projects grouped by `category` (Infrastructure, Utility, Storage, etc.) in the home view.
- **Project Status**: Visual indicators for `active` vs. `archived` projects using status dots.
- **Custom Metadata**: Project-specific links (GitHub, Docs, etc.) and category tags managed via `[extra]` front matter.
- **Minimalist Dark Theme**: Elegant, high-contrast dark mode with Inter and JetBrains Mono typography.
- **No Gradients/Emojis**: Clean professional aesthetic without visual clutter.
- **Structural Grouping**: Template logic to iterate and group content based on category taxonomy.

## Directory Structure

```
archipelago/
├── config.toml
├── content/
│   ├── _index.md
│   └── projects/
│       ├── _index.md
│       ├── athena.md
│       ├── chronos.md
│       ├── glacier.md
│       ├── hermes.md
│       ├── legacy-vault.md
│       └── nexus.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── index.html
│   ├── page.html
│   ├── section.html
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   ├── 404.html
│   └── shortcodes/
└── AGENTS.md
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `markdown.emoji` | `false` | Disabled emojis as per design requirements |
| `highlight.enabled` | `true` | Syntax highlighting for technical docs |
| `plugins.processors` | `["markdown"]` | Standard markdown processing |

## Notes for AI Agents

1. Add new projects in `content/projects/` as individual Markdown files.
2. Ensure each project has `category`, `status`, and `links` in the `[extra]` front matter.
3. Categories are currently defined as "Infrastructure", "Utility", and "Storage" in `index.html`.
4. The theme uses a CSS-only approach in `header.html` for maximum simplicity and performance.
5. Status dots and badges are styled specifically in `header.html`.
