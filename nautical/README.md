# Nautical: Voyage Log Blog

An elegant, dark, nautical-themed blog designed to resemble a ship captain's voyage log.
Features zero gradients and zero emojis, as explicitly requested.

## Design

- **Theme**: Navy blue primary, cream text, dark theme.
- **Typography**: Georgia/Playfair serif for headings (log book feel), Inter sans-serif for UI.
- **Layout**: Centered single-column.
- **Features**: Post cards styled as log entries with nautical metadata (date, coordinates, wind speed, wave height). Nautical chart background pattern. No gradients or emojis.

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd nautical
hwaro build
```
