# AGENTS.md - Igloo Theme Example

This is a **Nordic / Scandinavian Minimalist** blog example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Minimalist Aesthetic**: Focus on typography, whitespace, and cold color tones.
- **No Gradients / No Emojis**: Clean, professional look adhering to strict design constraints.
- **Light Theme**: High contrast with subtle accents in Ice Blue and Slate Grey.
- **Blog Functionality**: Organized content structure for articles and pages.
- **Responsive Design**: Fluid layout that maintains elegance across devices.

## Directory Structure

```
igloo/
├── config.toml
├── AGENTS.md
├── README.md
├── content/
│   ├── index.md
│   ├── about.md
│   └── posts/
│       ├── _index.md
│       └── first-post.md
├── static/
│   └── css/
│       └── style.css
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── home.html
│   ├── page.html
│   ├── section.html
│   └── 404.html
└── tags.json (Updated)
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `highlight.theme` | `"github-light"` | Clean syntax highlighting for light theme |
| `pagination.enabled` | `false` | Minimalist single-page list |
| `search.enabled` | `true` | Integrated search |

## Notes for AI Agents

1. **Design Constraint**: Do NOT use any gradients or emojis in templates or content.
2. **Color Palette**: Use `#ffffff` (White), `#f0f8ff` (Ice Blue), and `#708090` (Slate Grey).
3. **Typography**: Prefer thin, clean sans-serif fonts.
4. **Content**: Keep sentences concise and layout airy.
