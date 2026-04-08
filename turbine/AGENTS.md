# Turbine - Clean Energy Corporate Site

A corporate website theme for clean energy companies, showcasing wind and steam turbine technology with rotating turbine animations and energy flow effects.

## Design Concept

This site represents an offshore wind farm control room interface, featuring:
- **Turbine Silver/Wind Sky Blue/Energy Green/Carbon Dark** color palette
- Rotating turbine blade CSS animations at various speeds and directions
- Energy flow line effects connecting sections (Sankey diagram style)
- Animated Watt/Volt/Ampere metric counters
- Light theme with professional corporate aesthetic

## Features

- Hero section with three animated wind turbines rotating at different speeds
- Real-time energy metrics display with counter animations
- Energy flow lines that activate on card hover
- Clean, professional corporate design
- Rotating turbine icon in the navigation brand
- Comprehensive energy solutions showcase

## Color Palette

```css
--turbine-silver: #c0c5ce
--turbine-silver-dark: #8f95a0
--wind-blue: #5B9BD5
--wind-blue-dark: #4A90E2
--energy-green: #2ECC71
--energy-green-dark: #27AE60
--carbon-dark: #1a1d23
```

## Typography

- **Display**: Rajdhani (headings, metrics)
- **Body**: Inter (content)

## Animation Highlights

1. **Turbine Rotations**: Three turbines with different rotation speeds (3s, 4s, 5s) and directions
2. **Energy Flow**: Animated gradient lines on card hover
3. **Grid Background**: Subtle flowing grid pattern
4. **Metric Counters**: Numbers animate on page load (requires JavaScript)
5. **Brand Icon**: Rotating turbine in header

## Structure

- `config.toml` - Site configuration
- `content/` - Markdown content files
  - `index.md` - Homepage
  - `about.md` - About page
  - `energy/` - Energy solutions section
- `templates/` - Jinja2 templates
- `static/css/style.css` - All styles and animations (814 lines)

## Tags

`light`, `corporate`, `energy`, `rotation`
