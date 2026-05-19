# AGENTS.md — Prism Archive

Light, museum-archive gallery (gallery type). Paper-cream + coral accent.
Fraunces display + Inter UI. Cards use inline SVG plates keyed by `loop.index`.

Per-work `page.extra` fields: `artist`, `medium`, `year`, `dimensions`,
`origin`, `accession`.

## Conventions

- No gradients, no emojis. Single accent: `--accent: #e25c4a`.
- All CSS in `static/css/style.css`. Use `{{ base_url }}` for assets.
- Home and section share the inline-SVG card pattern; first 4 cards have unique
  thumbnails, all later cards fall back to a generic plate.

## Hwaro

| Command | Description |
|---|---|
| `hwaro build` | Build to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro tool doctor --fix` | Validate/patch config |

Full reference: <https://hwaro.hahwul.com>
