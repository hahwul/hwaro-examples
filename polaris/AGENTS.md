# AGENTS.md - AI Agent Instructions for Polaris

This is a dark celestial navigation guide theme example for [Hwaro](https://github.com/hahwul/hwaro).

## Project Overview

Polaris is a celestial navigation guide centered on the North Star (Polaris). It features a dark theme inspired by high-altitude astronomical observatories, with a polar star chart layout using concentric circles to represent the celestial sphere. The design uses a star white/night navy/constellation gold/infinity black color palette (#f0f4f8, #0a1628, #c9a961, #010409).

## Directory Structure

```
polaris/
├── config.toml
├── content/
│   ├── _index.md              # Homepage (template = "home")
│   ├── about.md               # About page
│   ├── search.md              # Search page (template = "search")
│   └── guides/                # Navigation guides section
│       ├── _index.md          # Section listing
│       └── *.md               # Individual guide articles
├── templates/
│   ├── header.html            # Site header with constellation line navigation
│   ├── footer.html            # Site footer
│   ├── home.html              # Homepage with polar hero and guide grid
│   ├── page.html              # Guide page with celestial metadata card
│   ├── section.html           # Guide listing
│   ├── taxonomy.html          # Taxonomy listing (tags, constellations)
│   ├── taxonomy_term.html     # Taxonomy term pages
│   ├── 404.html               # Error page
│   └── search.html            # Search with Fuse.js
└── static/
    └── css/
        └── style.css          # All styles (external file)
```

## Design Specifications

### Color Palette
- **Star White**: #f0f4f8 - Main text, bright stars
- **Night Navy**: #0a1628 - Background gradient layer
- **Constellation Gold**: #c9a961 - Accent, headings, links
- **Infinity Black**: #010409 - Deep background

### Typography
- **Headings**: Space Mono (monospace, 400-700 weight)
- **Body**: Inter (sans-serif, 400-600 weight)
- **Font weights mapped to star magnitude**: Brighter stars (h1) = heavier weight

### Visual Effects
- **Polar star field**: CSS box-shadow stars distributed in concentric pattern
- **Concentric circles**: Radial gradient background suggesting star chart circles
- **Star twinkle**: Subtle opacity animation
- **North Star marker**: Pulsing ✦ symbol before site title
- **Constellation line navigation**: Dots (·) connecting nav items

### Layout Philosophy
- **Concentric design**: Content radiates from center like a polar star chart
- **Celestial coordinate system**: Visual hierarchy mimics star brightness
- **Observatory aesthetic**: Dark, minimal distractions, focus on content
- **Navigation metaphor**: Site navigation styled as constellation connections

## Content Conventions

### Guide Articles
- Focus on celestial navigation techniques
- Include practical exercises and examples
- Reference specific stars and constellations
- Provide historical context where relevant

### Taxonomies
- **tags**: General categorization (navigation, beginner, intermediate, etc.)
- **constellations**: Specific constellation references (ursa-major, ursa-minor, etc.)
- **categories**: Thematic grouping

### Front Matter
```toml
+++
title = "Guide Title"
date = "2026-03-15"
description = "Brief overview displayed in guide cards"
tags = ["navigation", "beginner"]
constellations = ["ursa-major"]
+++
```

## Technical Notes

1. **Search**: Uses Fuse.js for client-side fuzzy search
2. **CSS**: External stylesheet in static/css/style.css (>200 lines)
3. **Star field**: Pure CSS using box-shadow (no JavaScript)
4. **Responsive**: Mobile-friendly with collapsing navigation
5. **Performance**: Minimal dependencies, fast loading

## Design Principles

1. **Dark theme authenticity**: Mimics actual observatory environment
2. **Functional navigation**: Every design element serves navigation purpose
3. **Educational focus**: Content-first, distraction-free reading
4. **Celestial metaphors**: UI elements reference astronomical concepts
5. **No emoji**: Professional astronomical aesthetic

## Tags

`dark`, `guide`, `astronomy`, `constellation`

## References

This theme draws inspiration from:
- High-altitude astronomical observatory control rooms
- Traditional star charts and celestial maps
- Nautical navigation instruments
- The unchanging presence of Polaris in the northern sky
