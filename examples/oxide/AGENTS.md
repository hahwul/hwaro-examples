# AGENTS.md - oxide

Industrial photography gallery exploring rust, patina, and urban decay.

## Theme Overview

Oxide is a dark-themed gallery site designed to showcase industrial decay photography. The aesthetic features:

- **Color Palette**: Rust orange (#c7522a), patina green (#5d7361), corrosion brown (#6b4423), iron grey (#3a3a3a)
- **Visual Effects**: SVG turbulence filters for rust texture, animated oxidation spread, noise grain overlay
- **Typography**: Rajdhani (headers), Roboto Condensed (body) for industrial feel
- **Interactions**: Hover effects simulate time-accelerated oxidation with color/shadow transitions

## Key Features

### Rust Texture Background
Body background uses SVG filters (`feTurbulence`) to create procedural rust/corrosion texture that animates slowly to simulate oxidation spreading.

### Gallery Grid Layout
Posts display in a responsive grid (CSS Grid with `auto-fill` minmax). Each card has:
- Rust-orange left border accent
- Dark gradient background
- Hover state: border widens, patina green shadows appear, simulating accelerated decay

### Typography Hierarchy
- H1: Large uppercase with rust orange color and animated underline
- H2: Orange with vertical rust-colored accent bar
- Body: Light grey on dark background for readability

## Content Structure

```
oxide/
├── content/
│   ├── index.md              # Welcome page with philosophy
│   ├── about.md              # About the gallery and approach
│   └── posts/
│       ├── _index.md
│       ├── steel-mill-rust.md
│       ├── copper-patina.md
│       ├── factory-floor-corrosion.md
│       └── time-lapse-oxidation.md
```

## Template Files

- `header.html`: Complete header with SVG filters, industrial nav, rust palette CSS
- `page.html`: Simple article wrapper
- `section.html`: Gallery grid layout for posts listing
- `taxonomy.html`: Tag/category browser
- `taxonomy_term.html`: Single tag page
- `404.html`: Themed error page
- `footer.html`: Minimal footer

## Building

```bash
cd oxide
hwaro build
hwaro serve --open
```

## Tags

`dark`, `gallery`, `industrial`, `rust-texture`

## Design Philosophy

The site embodies the aesthetic it documents—raw, textured, honest. No smooth gradients or clean lines. Everything has a weathered, oxidized quality. The color palette comes directly from rust and patina chemistry. Animations simulate the slow spread of oxidation. The whole design celebrates material decay as a form of beauty.
