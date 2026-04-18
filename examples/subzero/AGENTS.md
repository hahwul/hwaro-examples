# SubZero - Cryogenic Research Laboratory

A dark-themed Hwaro example site simulating a cryogenic research facility observation log. Features ultra-low temperature aesthetics with frost animations and scientific data presentation.

## Theme Overview

**SubZero** presents a cryogenic research laboratory interface with:
- Ultra-cold color palette (cryo blues, frost cyan, ice whites)
- Frost crystalline particle animations
- Edge frost creeping effects
- Scientific temperature indicators
- Research log presentation with experimental metadata
- Clean, professional dark theme inspired by laboratory observation windows

## Design Elements

### Color Palette
- **Cryo Void**: `#060d18` - Deep frozen void background
- **Cryo Blue**: `#0a1428` - Primary dark blue-black
- **Freeze White**: `#e8f2ff` - Ice white text
- **Frost Cyan**: `#00d9ff` - Crystalline cyan accent
- **Liquid N2 Cyan**: `#00b8e6` - Liquid nitrogen blue
- **Ice Silver**: `#a8c5dd` - Frosted silver

### Animations
1. **Frost Creeping**: Animated gradient borders on viewport edges with blur effects
2. **Frost Drift**: Floating ice crystal particles that slowly drift across the screen
3. **Thaw Effect**: Hover animations on post items create a "thawing" light sweep

### Typography
- **Headers**: JetBrains Mono (monospace, scientific feel)
- **Body**: Inter (clean, readable sans-serif)
- **Style**: Uppercase headers with letter-spacing for clinical precision

## Technical Features

### Custom Metadata
Research posts support scientific metadata in front matter:
```toml
[extra]
temperature = "-196°C"
pressure = "1 atm"
material = "YBa₂Cu₃O₇"
viability = "89%"
```

### Taxonomies
- **tags**: General research topics
- **categories**: Research classifications
- **temperature-zones**: Temperature range classifications (liquid-nitrogen, ultra-low, millikelvin)

### Site Configuration
- Syntax highlighting: Monokai theme
- Search: Enabled with fuse_json format
- RSS feeds: Enabled for posts section
- OpenGraph tags: Configured for social sharing
- SEO: Sitemap and robots.txt enabled

## Content Structure

```
subzero/
├── config.toml
├── AGENTS.md (this file)
├── content/
│   ├── _index.md           # Home page with lab overview
│   ├── about.md            # Lab facilities and mission
│   └── posts/
│       ├── _index.md
│       ├── superconductivity-ceramic-compound.md
│       ├── neural-tissue-preservation.md
│       └── quantum-phase-transition.md
├── templates/
│   ├── header.html         # Header with frost particles
│   ├── footer.html         # Footer with temperature badge
│   ├── home.html           # Home page layout
│   ├── page.html           # Single page/post layout
│   ├── section.html        # Research logs listing
│   ├── taxonomy.html       # Tag/category listings
│   ├── taxonomy_term.html  # Individual tag pages
│   └── 404.html           # Error page
└── static/
    └── css/
        └── style.css       # Complete styling with animations
```

## Sample Content

The example includes three research log posts:
1. **Superconductivity Observed in Novel Ceramic Compound** - Liquid nitrogen superconductivity
2. **Cryogenic Preservation of Neural Tissue** - Biological cryopreservation study
3. **Quantum Phase Transition at Millikelvin Temperatures** - Bose-Einstein condensate formation

Each post demonstrates:
- Scientific writing style
- Temperature indicators
- Material specifications
- Experimental protocols
- Custom metadata display

## Visual Effects

### Frost Particles (10 elements)
Animated ice crystals drift vertically with:
- Staggered animation delays (0s to 5s)
- Variable durations (11s to 15s)
- Opacity fade in/out
- Slight horizontal drift
- Rotation during descent

### Viewport Frost
Top and bottom borders feature:
- Animated gradient frost patterns
- Cyan glow effects
- Blur transitions
- Alternating animation directions

### Hover Effects
Post items feature:
- Thaw light sweep animation
- Border glow intensification
- Subtle upward translation
- Inset shadow enhancement

## Usage Notes

This example demonstrates:
- **Scientific aesthetics**: Professional research facility interface
- **Animation integration**: CSS-only particle effects without JavaScript
- **Metadata handling**: Custom front matter fields displayed in templates
- **Dark theme mastery**: Deep color palette with high contrast accents
- **Typography hierarchy**: Monospace technical headers with readable body text

Perfect for:
- Science blogs
- Research logs
- Technical documentation
- Laboratory journals
- Scientific portfolio sites

## Customization

To adapt this theme:
1. Adjust color variables in CSS `:root` section
2. Modify animation durations for faster/slower frost effects
3. Change typography fonts in CSS variables
4. Add more custom metadata fields in post front matter
5. Adjust particle count by adding/removing `.frost-particle` spans in header.html

## Build Command

```bash
# From repository root
docker run --rm -v "$(pwd)/subzero:/src" -v "$(pwd)/public/subzero:/output" \
  ghcr.io/hahwul/hwaro build -i /src -o /output --base-url "https://examples.hwaro.hahwul.com/subzero"
```

## Tags

- `dark` - Dark color scheme
- `research` - Scientific research theme
- `cryogenic` - Ultra-low temperature aesthetic
- `frozen` - Ice and frost visual elements

---

Built with [Hwaro](https://github.com/hahwul/hwaro) - A fast static site generator written in Crystal.
