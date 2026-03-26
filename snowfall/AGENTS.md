# AGENTS.md - Snowfall Blog Example

This is a **Snowfall Blog** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Winter Atmosphere**: Uses `#f8fbff` (light ice blue) as background and `#ffffff` (pure white) for cards.
- **CSS Snowflakes**: 20 falling snow particles with varied sizes and animation durations.
- **Frost Card Borders**: Subtle `::after` pseudo-element with a semi-transparent white border.
- **Sticky Header**: Navigation bar that stays at the top of the viewport.
- **Search Integration**: Ready-to-use search modal using `search.js`.
- **Pure CSS/HTML**: No external UI frameworks or preprocessors needed.
- **Strict Guidelines**: Absolutely no gradients and no emojis for a clean aesthetic.

## Directory Structure

```
snowfall/
├── config.toml
├── content/
│   ├── index.md
│   ├── about.md
│   └── posts/
│       ├── _index.md
│       ├── hello-world.md
│       └── ...
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── page.html
│   ├── post.html
│   └── ...
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── search.js
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `markdown.emoji` | `false` | Explicitly disabled emojis |
| `search.enabled` | `true` | Client-side search enabled |
| `highlight.theme` | `"github"` | Light-themed code blocks |

## Notes for AI Agents

1. Avoid adding emojis to content or metadata.
2. Do not use linear-gradient or radial-gradient in `style.css`.
3. The snow particle animation is defined in `style.css` and the particles are in `header.html`.
4. Wrap new page/post content in card-like containers (e.g., `<article class="page">`) for consistent styling.
