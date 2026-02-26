# Landing1: SaaS Landing Page

A modern SaaS product landing page with blog for "FlowSync" team collaboration tool.

## Design

- **Theme**: Indigo (#4f46e5) primary, light indigo surface
- **Typography**: Inter with bold hero headings (text-5xl), clean body text
- **Layout**: Full-width hero and feature sections, 2-column blog card grid
- **Features**: Gradient hero, 3-column feature grid, pricing cards with highlight, stats strip, CTA banners, blog with pagination

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, pagination, feature/pricing card styles, CTA banner gradients) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/landing1
hwaro build
```
