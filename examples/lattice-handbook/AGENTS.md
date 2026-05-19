# AGENTS.md - AI Agent Instructions for Lattice Handbook

This is a Hwaro static site. See [Hwaro Documentation](https://hwaro.hahwul.com)
for full reference and [Full LLM Reference](https://hwaro.hahwul.com/llms-full.txt)
for an AI-optimized version.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build to `public/` |
| `hwaro serve` | Dev server on port 3000 |
| `hwaro new docs/05-foo.md` | Create new content |

## Notes

1. Front matter is TOML between `+++` delimiters.
2. Rendered content is `{{ content | safe }}`.
3. Custom metadata is `page.extra.field`.
4. Use `{{ base_url }}` for all links and assets.
5. CSS lives in `static/css/style.css`; do not inline.
