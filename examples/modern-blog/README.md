# Blog1: Personal Blog

A warm, serif-based personal blog with coral/orange accent colors.

## Design

- **Theme**: Coral (#e8590c) primary, warm cream surface
- **Typography**: Georgia serif for headings, Inter sans-serif for UI
- **Layout**: Centered single-column (720px max)
- **Features**: Post cards with left accent border, pill-style tags, three-dot `<hr>` dividers

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, pagination, pseudo-elements) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/blog1
hwaro build
```
