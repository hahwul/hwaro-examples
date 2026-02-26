# Blog2: Documentation Site

A clean documentation site with indigo/purple theme and sidebar navigation.

## Design

- **Theme**: Indigo (#5b21b6) primary, light purple surface
- **Typography**: Inter sans-serif throughout
- **Layout**: Dark header bar, sidebar grid (220px + 1fr) for doc pages, single-column for sections
- **Features**: Sidebar navigation with active state, breadcrumbs, table of contents panel, doc card grid, search box placeholder

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, pagination, TOC, table styling) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/blog2
hwaro build
```
