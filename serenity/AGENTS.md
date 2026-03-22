# AGENTS.md - Serenity: Minimalist Elegant Blog Example

This is a **Minimalist Elegant Blog** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Elegant Typography**: Utilizing serif fonts for an sophisticated, balanced aesthetic.
- **Zero Gradient & No Emojis**: A clean, distraction-free environment that prioritizes content.
- **Minimalist Palette**: High-contrast black and white for maximum clarity and focus.
- **Generous Whitespace**: Creating breathing room for content and thought.
- **Vanilla CSS**: Clean, responsive layout without external utility frameworks.
- **Blogging Structure**: Organized sections for `Journal` (posts) and standalone pages.

## Directory Structure

```
serenity/
├── config.toml
├── content/
│   ├── _index.md
│   ├── about.md
│   └── posts/
│       ├── _index.md
│       └── the-art-of-simplicity.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── home.html
│   ├── page.html
│   └── section.html
└── AGENTS.md
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `pagination.enabled` | `true` | Standard blog pagination |
| `highlight.theme` | `"github"` | Minimalist code syntax highlighting |

## Notes for AI Agents

1. This theme strictly avoids gradients and emojis to maintain a professional, elegant atmosphere.
2. The `Playfair Display` serif font is used for headings and content for a classic, literary feel.
3. The `Journal` section lists posts in reverse chronological order.
4. Minimal styling is implemented directly in `header.html` for simplicity and performance.
