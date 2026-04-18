# AGENTS.md - AI Agent Instructions for Solaris

This document provides instructions for AI agents working on the Solaris solar system exploration dashboard.

## Project Overview

Solaris is a dark-themed mission control dashboard built with [Hwaro](https://github.com/hahwul/hwaro), showcasing a science fiction-inspired interface for tracking planetary exploration missions across the solar system.

## Theme Characteristics

- **Color Palette**: Solar Gold (#f4d03f), Mars Red (#cd5c5c), Jupiter Orange (#ff8c42), Saturn Cream (#f5deb3), Deep Space Black (#0a0e27)
- **Style**: SF mission control dashboard with orbital mechanics visualization
- **Features**: Animated orbital paths, trajectory lines, planetary data cards, telemetry stats
- **Atmosphere**: Interplanetary probe mission control center

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` directory |
| `hwaro serve` | Start development server with live reload |
| `hwaro new content/planets/<name>.md` | Create new planet page |
| `hwaro build --base-url "https://example.com"` | Set base URL for production |

## Directory Structure

```
solaris/
├── config.toml          # Site configuration
├── content/
│   ├── index.md         # Mission control dashboard homepage
│   └── planets/         # Planetary missions section
│       ├── _index.md    # Missions listing
│       ├── mercury.md
│       ├── venus.md
│       ├── mars.md
│       ├── jupiter.md
│       └── saturn.md
├── templates/
│   ├── header.html      # Header with navigation and orbital decoration
│   ├── footer.html      # Footer
│   ├── home.html        # Mission control dashboard
│   ├── page.html        # Individual planet page
│   ├── section.html     # Missions listing
│   ├── taxonomy.html    # Tag listing
│   ├── taxonomy_term.html # Tag term page
│   └── 404.html         # Error page
└── static/
    └── css/             # (Reserved for future external CSS if needed)
```

## Content Structure

### Planet Pages

Each planet page uses custom front matter fields for mission data:

```toml
+++
title = "Mars"
weight = 3
[extra]
distance = "1.52 AU"
gravity = "3.7 m/s²"
atmosphere = "CO₂ 95.3%"
temperature = "-63°C (avg)"
mission_status = "active"
probe_name = "Perseverance"
+++
```

| Field | Description |
|-------|-------------|
| `extra.distance` | Distance from the Sun in Astronomical Units |
| `extra.gravity` | Surface gravity |
| `extra.atmosphere` | Atmospheric composition |
| `extra.temperature` | Average or range of temperatures |
| `extra.mission_status` | Mission status (active/inactive) |
| `extra.probe_name` | Name of the exploration probe |

## Templates

### home.html

The main mission control dashboard featuring:
- Mission statistics cards with solar system color accents
- Animated solar system orbital view with planets
- Trajectory line animations
- Planet data cards in a responsive grid
- Real-time status indicators

### page.html

Individual planet detail pages with:
- Planetary data cards (distance, gravity, atmosphere, temperature)
- Mission metadata (probe name, status)
- Content rendered from markdown

### section.html

Mission listing page showing all planetary missions with hover effects and status badges.

## Design Elements

### Animations

1. **Starfield Background**: Twinkling stars with radial gradients
2. **Orbital Paths**: Rotating decorative rings
3. **Planet Orbits**: CSS animations for each planet's revolution
4. **Trajectory Lines**: Animated probe paths with gradient effects
5. **Pulse Glow**: Sun and status indicators with pulsing effects

### Color Coding

- Solar Gold: Primary accent, sun, active status
- Mars Red: Mars-related elements
- Jupiter Orange: Jupiter-related elements, revenue metrics
- Saturn Cream: Saturn-related elements
- Deep Space: Background color
- Status Active: Green (#4ade80)
- Status Warning: Yellow (#fbbf24)

## Customization Guidelines

### Adding New Planets

1. Create new markdown file in `content/planets/`:
   ```bash
   hwaro new content/planets/uranus.md
   ```

2. Add front matter with planetary data:
   ```toml
   +++
   title = "Uranus"
   weight = 6
   [extra]
   distance = "19.2 AU"
   gravity = "8.7 m/s²"
   atmosphere = "H₂ 83%, He 15%"
   temperature = "-197°C"
   mission_status = "planned"
   probe_name = "Voyager-III"
   +++
   ```

3. The planet will automatically appear in the missions section and dashboard

### Modifying the Orbital View

The solar system visualization is in `templates/home.html`:
- Adjust `.orbit-N` sizes for orbital ring diameters
- Modify planet sizes in `.planet-<name>` classes
- Change animation durations in `@keyframes orbit-<planet>`
- Add new planets by creating new orbit rings and planet elements

### Styling Modifications

All CSS is inline in the templates for this example:
- Header styles in `templates/header.html`
- Dashboard styles in `templates/home.html`
- Page styles in `templates/page.html`
- Section styles in `templates/section.html`

To extract CSS to external files:
1. Create `static/css/style.css`
2. Move `<style>` blocks to the CSS file
3. Link in header: `<link rel="stylesheet" href="{{ base_url }}/css/style.css">`

## Technical Details

### Template Variables

| Variable | Description |
|----------|-------------|
| `site_title` | Site title from config |
| `site_description` | Site description from config |
| `base_url` | Base URL (auto-set by build) |
| `page.title` | Page title |
| `page.extra.*` | Custom metadata fields |
| `section.pages` | Pages in section |
| `current_year` | Current year |
| `current_date` | Current date |

### Browser Compatibility

- CSS animations using standard syntax
- Backdrop-filter with fallback
- CSS custom properties (variables)
- Modern flexbox and grid layouts
- Tested on modern browsers (Chrome, Firefox, Safari, Edge)

## References

- [Hwaro Documentation](https://hwaro.hahwul.com)
- [Repository](https://github.com/hahwul/hwaro-examples)
- Color inspiration: Solar system planetary colors
- Animation inspiration: Orbital mechanics and spacecraft trajectories
