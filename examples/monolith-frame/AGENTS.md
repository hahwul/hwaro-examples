# AGENTS.md — Monolith Frame

Dark theatrical gallery site (gallery type). Black + sodium-yellow palette,
Cormorant Garamond display with Inter Tight UI labels. Site uses a `works/`
section with custom per-work front-matter (`artist`, `medium`, `year`,
`dimensions`, `hall`).

## Conventions

- All CSS lives in `static/css/style.css` (no inline `<style>` blocks).
- The home template (`home.html`) reads from the `works/` section directly.
- No gradients, no emojis. Single accent: `--accent: #e4c96a`.
- Use `{{ base_url }}` for all asset and link references.

## Hwaro

| Command | Description |
|---|---|
| `hwaro build` | Build to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro tool doctor --fix` | Validate/patch config |

Full reference: <https://hwaro.hahwul.com>
