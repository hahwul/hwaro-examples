# AGENTS.md — Vapor Index

Dark terminal-modern gallery (gallery type). Ink black + dim-cyan accent.
Space Grotesk display + JetBrains Mono UI. The home page is rendered as an
index list with stable per-work IDs.

Per-work `page.extra` fields: `artist`, `year`, `duration`, `format`, `region`,
`status`, `signal`.

## Conventions

- No gradients (including CSS `linear-gradient` backgrounds), no emojis.
- Single accent: `--accent: #6ce5e8` (dim cyan).
- All CSS in `static/css/style.css`. Use `{{ base_url }}` for assets.

## Hwaro

| Command | Description |
|---|---|
| `hwaro build` | Build to `public/` |
| `hwaro serve` | Dev server with live reload |
| `hwaro tool doctor --fix` | Validate/patch config |

Full reference: <https://hwaro.hahwul.com>
