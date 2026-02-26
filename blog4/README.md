# Blog4: DevLog

A developer-focused devlog with emerald green theme and terminal-style aesthetics.

## Design

- **Theme**: Emerald (#059669) primary, light green surface
- **Typography**: Monospace for headings/dates/UI, Inter sans-serif for body
- **Layout**: Single-column (760px max) with timeline post list
- **Features**: `>_` prompt logo, timeline with `::before` dots, dashed blockquotes, monospace tags, version badge shortcode

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, pagination, timeline dots via `::before`, version badge) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/blog4
hwaro build
```
