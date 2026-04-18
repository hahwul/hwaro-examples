# Blog5: Studio

A bold creative studio site with rose/pink theme and strong typography.

## Design

- **Theme**: Rose (#e11d48) primary, light pink surface
- **Typography**: Inter with extrabold headings (2.5rem+), tight letter-spacing
- **Layout**: Wide single-column (960px max) with 3-column card grid
- **Features**: Gradient accent lines (`::after`), hover scale cards, case study metadata grid, testimonial blocks, service grid, pill buttons

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, pagination, gradient accent lines, testimonial/service-grid/btn-primary classes from markdown content) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/blog5
hwaro build
```
