# AGENTS.md - Multilingual Portfolio Example

This is a **Multilingual Portfolio** example for [Hwaro](https://github.com/hahwul/hwaro).

## Demonstrated Features

- **Multilingual**: English (default) and Korean (`content/*.ko.md` → `/ko/...`)
- **Custom Permalinks**: `projects` section remapped to `/work/` via permalink
- **Custom Taxonomy**: `skills` taxonomy in addition to `tags`
- **Extra Front Matter**: `[extra]` fields like `year`, `client`, `url`, `status`
- **Shortcodes**: `alert` and `note` shortcodes
- **Atom Feed**: Uses Atom format instead of RSS

## Directory Structure

```
blog3/
├── config.toml
├── content/
│   ├── index.md           # English home
│   ├── index.ko.md        # Korean home
│   ├── about.md           # English about
│   ├── about.ko.md        # Korean about
│   └── projects/
│       ├── _index.md
│       ├── project-aurora.md
│       └── project-nebula.md
├── templates/
│   ├── header.html        # With language switcher
│   ├── footer.html
│   ├── page.html          # Shows extra fields for projects
│   ├── section.html
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   ├── 404.html
│   └── shortcodes/
│       ├── alert.html
│       └── note.html      # Custom note shortcode
└── AGENTS.md
```

## Key Config Options

| Setting | Value | Purpose |
|---------|-------|---------|
| `default_language` | `"en"` | English as default |
| `languages.ko` | configured | Korean as second language |
| `permalinks.projects` | `"work"` | Remap projects dir to /work/ |
| `taxonomies` | `tags`, `skills` | Custom skills taxonomy |
| `feeds.type` | `"atom"` | Atom feed format |
| `highlight.theme` | `"atom-one-dark"` | Dark code theme |

## Notes for AI Agents

1. Multilingual pages use filename suffix: `about.md` (en) + `about.ko.md` (ko)
2. Korean pages are served under `/ko/` prefix automatically
3. The `[extra]` section in front matter stores custom metadata (accessible via `page.extra.*`)
4. Custom `skills` taxonomy works like tags but at `/skills/`
5. Projects use `[permalinks] projects = "work"` to remap `/projects/` → `/work/`
6. The `note` shortcode wraps content: `{{</* note title="..." */>}}content{{</* /note */>}}`
