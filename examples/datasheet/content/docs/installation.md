+++
title = "Installation"
description = "Pin 1 — board bring-up. Install the toolchain, scaffold a docs site, and bring the dev server online."
weight = 1
date = "2026-05-01"
+++

The Datasheet theme runs on the Hwaro static site generator. Install it from Homebrew, then scaffold a site with the docs layout and power up the dev server.

## Quickstart

```sh
brew install hahwul/hwaro/hwaro
hwaro init my-docs --scaffold docs
cd my-docs
hwaro serve
```

The dev server listens on `http://localhost:3000`. Any edit to `content/`, `templates/`, or `static/` reloads the page within a few milliseconds.

## Verifying the install

```sh
hwaro --version
# => 0.14.0 or newer
```

If you see an older build, your package manager has cached a stale bottle. Run `brew upgrade hwaro` and check again.

## Power-on test

The following table is the minimum confirmation that the part is alive on the bench.

| Check | Command | Expected |
| --- | --- | --- |
| Toolchain present | `hwaro --version` | prints a version |
| Site scaffolded | `ls content/` | shows `_index.md` |
| Server responds | `hwaro serve` | serves on `:3000` |

## Where to next

Continue to **Your first page**, where you write one piece of content, give it a template, and watch the build go green.
