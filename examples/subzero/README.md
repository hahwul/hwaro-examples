# SubZero - Cryogenic Research Laboratory

A dark-themed Hwaro example site that simulates a cryogenic research facility observation log interface.

![Theme: Dark](https://img.shields.io/badge/theme-dark-000000)
![Tags: research, cryogenic, frozen](https://img.shields.io/badge/tags-research%20%7C%20cryogenic%20%7C%20frozen-blue)

## Overview

SubZero presents a professional cryogenic research laboratory interface featuring:
- **Ultra-cold aesthetics** with cryo blue and frost cyan color palette
- **Animated frost particles** drifting across the viewport
- **Edge frost creeping** with glowing cyan borders
- **Thaw hover effects** on research log items
- **Scientific metadata** display (temperature, pressure, materials)
- **Monospace typography** for that technical laboratory feel

## Features

### Visual Design
- Deep frozen void background (`#060d18`)
- Crystalline cyan accents (`#00d9ff`)
- Ice-white text on dark surfaces
- Frost particle animations (10 floating elements)
- Animated border glow effects
- Professional scientific presentation

### Content Features
- Research log posts with experimental data
- Custom metadata fields (temperature, pressure, material, etc.)
- Multiple taxonomies (tags, categories, temperature-zones)
- Temperature badges on section headers
- Scientific writing style examples
- Experiment protocol documentation

### Technical Features
- Syntax highlighting with Monokai theme
- Search functionality (fuse_json)
- RSS feed generation
- OpenGraph social sharing tags
- Responsive design
- Accessibility considerations

## Demo Content

Three sample research posts included:
1. **Superconductivity in Ceramic Compounds** - Liquid nitrogen experiments
2. **Neural Tissue Cryopreservation** - Biological preservation at -196°C
3. **Quantum Phase Transitions** - Ultra-cold physics at millikelvin temperatures

## Color Palette

```css
--cryo-void:         #060d18  /* Background */
--cryo-blue:         #0a1428  /* Surface */
--freeze-white:      #e8f2ff  /* Primary text */
--frost-cyan:        #00d9ff  /* Accent */
--liquid-n2-cyan:    #00b8e6  /* Secondary accent */
--ice-silver:        #a8c5dd  /* Muted text */
```

## Typography

- **Headers**: JetBrains Mono (monospace, technical)
- **Body**: Inter (clean sans-serif)
- **Style**: Uppercase headers, letter-spacing for precision

## Installation

### Local Development

```bash
# Clone the repository
git clone https://github.com/hahwul/hwaro-examples.git
cd hwaro-examples/subzero

# Serve with hwaro
hwaro serve --open
```

### Build

```bash
# Build static site
hwaro build

# With Docker
docker run --rm \
  -v "$(pwd):/src" \
  -v "$(pwd)/public:/output" \
  ghcr.io/hahwul/hwaro build \
  -i /src -o /output
```

## Customization

### Colors
Edit CSS custom properties in `static/css/style.css`:
```css
:root {
  --cryo-void: #060d18;
  --frost-cyan: #00d9ff;
  /* ... modify as needed */
}
```

### Animations
Adjust frost particle behavior:
```css
/* Change duration for faster/slower drift */
.frost-particle {
  animation-duration: 12s; /* default: 11s-15s */
}

/* Modify frost creep speed */
@keyframes frostCreep {
  /* adjust timing and blur values */
}
```

### Content
Add custom metadata to posts:
```toml
+++
title = "Your Research Post"
date = "2025-01-20"
[extra]
temperature = "-269°C"
pressure = "10⁻¹¹ torr"
material = "Rubidium-87"
+++
```

## Structure

```
subzero/
├── config.toml              # Site configuration
├── AGENTS.md                # AI agent documentation
├── README.md                # This file
├── content/
│   ├── _index.md           # Homepage
│   ├── about.md            # About page
│   └── posts/              # Research logs
│       └── *.md
├── templates/
│   ├── header.html         # Header with frost particles
│   ├── footer.html         # Footer
│   ├── home.html          # Homepage layout
│   ├── page.html          # Single page layout
│   ├── section.html       # Post listing
│   ├── taxonomy.html      # Tag index
│   ├── taxonomy_term.html # Single tag
│   └── 404.html           # Error page
└── static/
    └── css/
        └── style.css       # Complete styling
```

## Use Cases

Perfect for:
- Scientific research blogs
- Laboratory journals
- Technical documentation sites
- Physics/chemistry portfolios
- Educational science content
- Research institution sites

## License

This example is part of the [Hwaro Examples](https://github.com/hahwul/hwaro-examples) collection.

## Links

- [Live Demo](https://examples.hwaro.hahwul.com/subzero)
- [Hwaro Documentation](https://hwaro.hahwul.com)
- [Hwaro GitHub](https://github.com/hahwul/hwaro)

---

❄ **Maintained at -196°C** ❄
