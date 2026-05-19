# AGENTS.md — Carbon Folio

Dark bold-display gallery (gallery type). Carbon-black + ember accent.
Sora display + Inter body + JetBrains Mono UI. Cards alternate 7-/5-column
widths in a 12-col deck; each card carries a stamped CF-id badge and an
inline SVG plate.

Per-work `page.extra` fields: `studio`, `discipline`, `year`, `cycle`,
`material`, `client`, `cf_id`.

## Conventions

- No gradients, no emojis. Single accent: `--accent: #ff5a1f` (ember).
- All CSS in `static/css/style.css`. Use `{{ base_url }}` for assets.

## Hwaro

| Command | Description |
|---|---|
| `hwaro build` | Build to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro tool doctor --fix` | Validate/patch config |

Full reference: <https://hwaro.hahwul.com>
