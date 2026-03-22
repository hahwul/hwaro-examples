# AGENTS.md - AI Agent Instructions for Airwave

This is a podcast-style theme example for [Hwaro](https://github.com/hahwul/hwaro).

## Project Overview

Airwave is a dark-themed podcast site featuring an episode list layout, audio player UI elements, host profile, and subscription links. It uses the Inter font family with a purple accent color (#7c6aef) on a near-black background.

## Directory Structure

```
airwave/
├── config.toml
├── content/
│   ├── index.md              # Homepage (template = "home")
│   ├── about.md              # About page
│   └── episodes/             # Episode section
│       ├── _index.md         # Section listing
│       └── *.md              # Individual episodes
├── templates/
│   ├── header.html           # Site header with brand icon + nav
│   ├── footer.html           # Site footer
│   ├── home.html             # Homepage: hero + episode list + host
│   ├── page.html             # Episode/page detail
│   ├── section.html          # Episode listing
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   └── 404.html
└── static/
    └── css/
        └── style.css         # All styles (external file)
```

## Content Conventions

- Episode titles follow the format: `Ep N: Title`
- Episode description encodes metadata: `duration / Guest: name`
- Player bar and guest info are embedded as HTML in markdown content
- Tags: `dark`, `blog`, `podcast`

## Notes

1. `page.extra.*` fields are not reliably accessible in Hwaro templates for individual field access. Episode metadata is encoded in the title and description fields instead.
2. CSS is in `static/css/style.css` (external file, >200 lines).
3. No gradients or emojis are used in this theme.
