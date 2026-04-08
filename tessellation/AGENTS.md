# AGENTS.md - Tessellation Gallery

An M.C. Escher-inspired tessellation art gallery featuring impossible geometries and seamless tiling patterns.

## Project Overview

This Hwaro site showcases tessellation patterns and impossible geometries in the style of M.C. Escher. The theme uses a monochromatic palette (black, white, mid-grey) with gold accents, creating an elegant gallery atmosphere reminiscent of an Escher exhibition.

## Design Philosophy

### Visual Elements
- **Escher Palette**: Black (#1a1a1a), white (#f8f8f8), mid-grey (#6b6b6b), gold accent (#d4af37)
- **Typography**: Merriweather (serif) for headings, Source Sans 3 for body text
- **Background Pattern**: SVG-based tessellation pattern (lizard-inspired) tiles seamlessly
- **Decorative Elements**: Impossible cube icon, geometric dividers, gold accent lines

### Layout
- Clean, centered layout (max-width: 1100px)
- Gallery grid (3-column responsive layout)
- Card-based post listings with gold gradient top borders
- Minimalist navigation with hover effects

## Content Structure

```
tessellation/
├── content/
│   ├── index.md              # Gallery homepage
│   ├── about.md              # About tessellation art
│   └── posts/
│       ├── _index.md         # Posts section index
│       ├── hexagonal-metamorphosis.md
│       ├── penrose-tiling-variation.md
│       ├── impossible-staircase.md
│       ├── birds-and-fish-duality.md
│       └── hyperbolic-geometry.md
├── templates/
│   ├── header.html           # Main header with CSS (inline)
│   ├── footer.html           # Simple footer
│   ├── page.html             # Individual page template
│   ├── section.html          # Section listing (with pagination)
│   ├── taxonomy.html         # Taxonomy overview
│   ├── taxonomy_term.html    # Single taxonomy term
│   └── 404.html              # 404 error page
└── config.toml               # Site configuration
```

## Key Features

1. **Tessellation Background**: The body element features a seamless SVG tessellation pattern that tiles infinitely
2. **Impossible Geometry**: Decorative impossible cube in the header corner
3. **Gallery Grid**: Responsive 3-column grid for artwork displays
4. **Monochromatic Theme**: Escher-inspired black/white/grey palette with gold highlights
5. **Typography Hierarchy**: Serif headings with geometric accents (gold underlines, bars)
6. **Hover Effects**: Subtle transforms and shadows on interactive elements

## Configuration Notes

- **Pagination**: Set to 9 items per page (3x3 grid)
- **Taxonomies**: Tags (e.g., "geometric", "metamorphosis") and categories (e.g., "regular-division")
- **Syntax Highlighting**: GitHub theme (light)
- **SEO**: Full sitemap, robots.txt, and RSS feed enabled

## Content Guidelines

Each artwork post should include:
- Title describing the pattern type
- Date for chronological ordering
- Description (brief summary)
- Tags for pattern characteristics
- Categories for mathematical classification
- Detailed explanation of the tessellation technique
- Mathematical or artistic context
- Escher-related quotes or philosophy

## CSS Architecture

The design uses inline CSS in `header.html` (under 200 lines) featuring:
- CSS custom properties for the color palette
- Flexbox and Grid layouts
- SVG data URIs for patterns
- Responsive breakpoints at 768px
- Transitions and transforms for interactivity

## Tags in tags.json

```json
"tessellation": [
  "light",
  "gallery",
  "escher",
  "pattern-art"
]
```

## Building

```bash
# Development
hwaro serve

# Production
hwaro build --minify
```

## References

- M.C. Escher's regular division drawings
- Wallpaper group symmetries (P6M, P4M, etc.)
- Penrose tiling mathematics
- Hyperbolic geometry visualizations

## Future Enhancements

Potential additions:
- Interactive pattern generator
- Animated metamorphosis transitions
- Educational overlays explaining symmetry groups
- Gallery of user-submitted tessellations
