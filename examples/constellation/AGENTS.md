# AGENTS.md - AI Agent Instructions for Constellation

This is a dark astronomy blog theme example for [Hwaro](https://github.com/hahwul/hwaro).

## Project Overview

Constellation is a celestial-themed dark blog for astronomy and night sky observation. It uses a deep navy background (#0b1026) with white text (#e8ecf1) and gold accents (#d4a843). The design features a CSS star field rendered via box-shadow dots and celestial metadata cards showing magnitude, distance, and classification for each post.

## Directory Structure

```
constellation/
├── config.toml
├── content/
│   ├── index.md              # Homepage (template = "home")
│   ├── about.md              # About page
│   ├── search.md             # Search page (template = "search")
│   └── posts/                # Star catalog section
│       ├── _index.md         # Section listing
│       └── *.md              # Individual observation posts
├── templates/
│   ├── header.html           # Site header with nav
│   ├── footer.html           # Site footer
│   ├── home.html             # Homepage with hero and recent posts
│   ├── page.html             # Post detail with celestial metadata
│   ├── section.html          # Post listing with pagination
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   └── 404.html
└── static/
    └── css/
        └── style.css         # All styles (external file)
```

## Content Conventions

- Post descriptions encode celestial metadata inline (magnitude / distance / classification)
- Celestial metadata cards display structured observation data
- Tags: `dark`, `blog`, `astronomy`
- Google Fonts: Space Mono (headings/mono) + Inter (body)

## Notes

1. `page.extra.*` fields are not reliably accessible in Hwaro templates for individual field access. Celestial metadata is encoded in the description field instead.
2. CSS is in `static/css/style.css` (external file).
3. Star field background uses box-shadow dots, not gradients.
4. No gradients or emojis are used in this theme.
