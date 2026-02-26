# Resume1: CV / Portfolio

A minimal resume and portfolio site with slate/amber theme.

## Design

- **Theme**: Slate (#334155) primary, Amber (#f59e0b) accent
- **Typography**: Inter with clean weights, resume-style hierarchy
- **Layout**: Narrow single-column (max-w-3xl), CV feel
- **Features**: Job timeline with amber dots, animated skill bars, project cards with hover amber left-border, extra metadata grid

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, timeline dots, skill bar animations, project card hover effects) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/resume1
hwaro build
```
