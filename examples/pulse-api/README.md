# Docs1: API Reference

An API documentation site for "Pulse API" with teal theme and sidebar navigation.

## Design

- **Theme**: Teal (#0d9488) primary, method-specific colors (GET=green, POST=blue, PATCH=amber, DELETE=red)
- **Typography**: Inter with clean weights, code-focused hierarchy
- **Layout**: 2-column sidebar layout with breadcrumb navigation and TOC
- **Features**: Search index (fuse_json), llms.txt, HTTP method badges, parameter tables, response blocks, sidebar navigation, dark code blocks

## Tailwind CSS

This example uses **Tailwind CSS Play CDN** (`cdn.tailwindcss.com`) for styling. No build step is required for Tailwind — it processes classes at runtime in the browser.

Custom styles that cannot be expressed with utility classes alone (prose typography for markdown content, method badges, parameter tables, sidebar navigation, breadcrumbs) use `<style type="text/tailwindcss">` with `@apply` directives.

## Build

```bash
cd examples/docs1
hwaro build
```
