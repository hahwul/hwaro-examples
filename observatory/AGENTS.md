# AGENTS.md - Observatory Example

This is a **Deep Space Astronomy & Observation Log** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Dark Theme with Starfield**: Pure CSS implementation of a starry background with a deep space aesthetic.
- **Monospace Typography**: Uses `JetBrains Mono` for a scientific data-focused feel.
- **Custom Metadata (extra)**: Observation data (coordinates, magnitude, distance) rendered via `extra` front matter.
- **Data-Grid Layout**: Post lists include a structured metadata grid for quick data reference.
- **No Gradients & No Emojis**: Strictly follows a minimalist, high-contrast, text-only aesthetic for professional research logs.
- **Taxonomies**: Organized by `tags` and `constellations`.

## Directory Structure

```
observatory/
├── config.toml
├── AGENTS.md
├── content/
│   ├── _index.md
│   ├── about.md
│   └── posts/
│       ├── _index.md
│       ├── m31-andromeda.md
│       ├── m42-orion-nebula.md
│       └── m45-pleiades.md
├── static/
│   └── css/
│       └── style.css
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── home.html
│   ├── page.html
│   ├── section.html
│   └── shortcodes/
└── README.md
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `pagination.enabled` | `true` | Pagination for observation logs |
| `highlight.theme` | `"dracula"` | Code syntax highlighting matching the dark theme |
| `taxonomies` | `["tags", "constellations"]` | Astronomy-specific classification |

## Notes for AI Agents

1. Content should be structured as scientific observation logs.
2. Use `extra` fields in front matter for astronomical metadata (`coords`, `magnitude`, `distance`, `constellation`).
3. Maintain a formal, descriptive, and serious tone.
4. Avoid any use of gradients or emojis in both content and styling.
5. The `home.html` template handles the main log feed with metadata cards.
