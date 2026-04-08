# Topography - Hwaro Example

A topographic outdoor and trekking blog with contour line patterns and elevation-based design.

## Overview

Topography is a light-themed blog example inspired by topographic maps and outdoor adventure. The design features:

- **Contour line patterns**: SVG-based background patterns mimicking elevation contour lines
- **Elevation-based color palette**:
  - Contour Green (#2d5016) - Lowland forests
  - Elevation Brown (#8b6f47) - Mountain ridges
  - Ridge White (#f5f3ed) - Snow-capped peaks
  - Valley Blue (#4a7c8c) - Mountain lakes and waterways
- **Terrain cross-section dividers**: Visual elements representing terrain profiles
- **Elevation badges**: Custom metadata display for hiking elevation data

## Structure

```
topography/
├── config.toml           # Site configuration
├── content/
│   ├── index.md         # Homepage with hero and recent trails
│   ├── about/
│   │   └── index.md     # About page
│   └── posts/           # Trail reports section
│       ├── _index.md
│       ├── mount-rainier-winter.md
│       ├── appalachian-trail-smokies.md
│       └── torres-del-paine.md
├── templates/
│   ├── header.html      # Site header with inline CSS
│   ├── footer.html      # Terrain divider and footer
│   ├── home.html        # Homepage template
│   ├── page.html        # Individual trail report
│   ├── section.html     # Trail listing page
│   ├── taxonomy.html    # All regions (tags)
│   ├── taxonomy_term.html  # Region-specific trails
│   └── 404.html         # Error page
└── static/
    └── css/             # (Empty - styles are inline)
```

## Design Features

### Topographic Styling

The site uses a layered approach to create depth:

1. **Base layer**: Light beige background (Ridge White)
2. **Contour grid**: Subtle 50px grid pattern
3. **SVG contours**: Curved lines mimicking topographic maps
4. **Gradient overlays**: Elevation-based color transitions

### Typography

- **Headings**: Inter font family for clean, modern readability
- **Code/Data**: JetBrains Mono for elevation data and metadata
- **Body text**: Inter with generous line-height for long-form reading

### Custom Metadata

Trail reports support custom front matter fields:

```toml
[extra]
elevation = "4,392m"  # Displayed as colored badge
```

## Content Strategy

### Trail Reports

Each trail report includes:

- Elevation data and statistics
- Route descriptions with waypoints
- Weather and seasonal considerations
- Wildlife encounters
- Gear recommendations
- High-resolution photography

### Taxonomies

- **Tags**: Geographic regions (Washington, Chile, Tennessee, etc.)
- **Categories**: Activity types (Mountaineering, Thru-Hiking, etc.)

## Color Palette

```css
--contour-green: #2d5016    /* Lowland forests */
--elevation-brown: #8b6f47   /* Mountain ridges */
--ridge-white: #f5f3ed       /* Snow and exposed terrain */
--valley-blue: #4a7c8c       /* Lakes and waterways */
--lowland-green: #5a7c3e     /* Mid-elevation forests */
--highland-brown: #6b5333    /* High-altitude terrain */
--snow-white: #fafaf8        /* Peak snow cover */
```

## Usage

### Local Development

```bash
hwaro serve
```

### Building for Production

```bash
hwaro build --base-url "https://your-domain.com"
```

### Docker Build

```bash
docker run --rm \
  -v "$(pwd):/src" \
  -v "$(pwd)/public:/output" \
  ghcr.io/hahwul/hwaro build \
  -i /src -o /output \
  --base-url "https://your-domain.com"
```

## Customization

### Changing Colors

Edit the CSS custom properties in `templates/header.html`:

```css
:root {
  --contour-green: #2d5016;
  --elevation-brown: #8b6f47;
  /* ... */
}
```

### Adding Custom Metadata

Add new fields to post front matter:

```toml
[extra]
elevation = "4,392m"
difficulty = "Difficult"
distance = "14.5 km"
```

Then reference in templates:

```jinja
{% if post.extra.difficulty %}
<span class="difficulty">{{ post.extra.difficulty }}</span>
{% endif %}
```

## Accessibility

- Semantic HTML5 structure
- ARIA labels where appropriate
- Sufficient color contrast (WCAG AA compliant)
- Responsive design for mobile devices
- Keyboard navigation support

## Performance

- Inline critical CSS (no external stylesheet blocking)
- SVG icons (no icon font dependencies)
- Google Fonts with preconnect
- Lazy loading for images
- Minimal JavaScript (none required)

## Credits

- Design inspired by USGS topographic maps
- Typography: Inter and JetBrains Mono (Google Fonts)
- Built with [Hwaro](https://hwaro.hahwul.com)

## License

This example theme is released under the MIT License. Feel free to use it as a starting point for your own hiking blog or outdoor adventure site.
