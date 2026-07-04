# hwaro-examples

A **curated collection of 200 example sites** built with
[Hwaro](https://hwaro.hahwul.com), a fast static site generator written in
Crystal. Browse them live at
[examples.hwaro.hahwul.com](https://examples.hwaro.hahwul.com).

Every example is a complete, self-contained Hwaro site — templates, content,
styles, and built-in search — designed as part of a coherent collection:

- **13 categories** (blog, docs, landing, portfolio, magazine, gallery, event,
  resume, changelog, book, wiki, podcast, newsletter) across **light / dark /
  auto** color schemes.
- **Designed up front.** `manifest.json` assigns each example its typography,
  palette, layout pattern, and a unique signature element before any code is
  written; `DESIGN.md` defines the quality bar every site meets.
- **Scaffold-ready.** Start your own site from any example:

  ```bash
  hwaro init my-site --scaffold https://github.com/hahwul/hwaro-examples/tree/main/examples/<name>
  ```

## For contributors and AI agents

- Read [`DESIGN.md`](DESIGN.md) first — design principles, layout catalog,
  typography/color rules, and the exact process for adding a new example.
- [`AGENTS.md`](AGENTS.md) is the reference manual: repo conventions, hwaro
  CLI, template variables, and the tag vocabulary.
- `manifest.json` is the single source of truth for the collection;
  `tags.json` is generated from it by `scripts/sync-tags.sh`.
- `scripts/check-site.sh <name>` is the per-site quality gate (build + lint +
  asset policy + link check). It must pass before a site is committed.

## Installation

To work with these examples you need [Hwaro](https://hwaro.hahwul.com). See
the [official installation guide](https://hwaro.hahwul.com/start/installation/).

### macOS / Linux (Homebrew)
```bash
brew install hahwul/hwaro/hwaro
```

### Linux (Arch)
```bash
yay -S hwaro
```

### Nix
This repository includes a Nix flake that provides a dev shell with Hwaro
pre-installed. With flakes enabled:

```bash
nix develop
```

Supports `x86_64-linux`, `aarch64-linux`, and `aarch64-darwin`.

### Manual / other platforms
Download pre-built binaries (DEB, RPM, APK, or raw binaries) from the
[GitHub Releases page](https://github.com/hahwul/hwaro/releases).

## Working locally

```bash
cd examples/<name>
hwaro serve --open        # dev server at http://localhost:3000
hwaro build               # static output in public/
```

To preview the gallery index without Docker:

```bash
scripts/preview-index.sh
```

---

## Memo

```bash
just full "exmaple name"

# check hwaro serve -i examples/<name>

just pr <name>
```
