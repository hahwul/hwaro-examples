# Event1: Conference Site

A bold developer conference site for "DevConf 2026" with orange/warm theme.

## Design

- **Theme**: Orange (#ea580c) primary, warm orange surface
- **Typography**: Inter with extrabold hero headings, clean body text
- **Layout**: Full-width hero with countdown, 3-column speaker grid, schedule timeline
- **Features**: JavaScript countdown timer, track color badges, schedule timeline with keynote highlights, speaker profile cards, news feed

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, countdown digits, track badges, schedule timeline styles, speaker card hover effects) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/event1
hwaro build
```
