# Blog3: Portfolio

A dark-mode portfolio site with cyan/purple gradient accents.

## Design

- **Theme**: Cyan (#06b6d4) primary, purple (#a855f7) accent, dark (#0f0f0f) surface
- **Typography**: Inter sans-serif throughout
- **Layout**: Single-column (720px max) with 2-column project grid
- **Features**: Gradient text headings, animated underline navigation, hover-lift project cards, skill tags with gradient backgrounds, language switcher (EN/KO)

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for dark-mode markdown content, pagination, gradient text, animated nav underlines) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/blog3
hwaro build
```
