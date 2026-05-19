# AGENTS.md — Silver Loom

Light, Swiss-asymmetric gallery (gallery type). Paper + ink-navy + coral
accent. Inter UI + Source Serif Pro italics. The home/section template uses a
12-column subgrid where each row alternates the plate from left to right.

Per-work `page.extra` fields: `artist`, `medium`, `year`, `dimensions`,
`warp`, `weft`, `loom`.

## Conventions

- No gradients (no `linear-gradient` even for underline tricks; use box-shadow).
- No emojis. Single accent: `--accent: #c95a3a`.
- All CSS in `static/css/style.css`. Use `{{ base_url }}` for assets.

## Hwaro

| Command | Description |
|---|---|
| `hwaro build` | Build to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro tool doctor --fix` | Validate/patch config |

Full reference: <https://hwaro.hahwul.com>
