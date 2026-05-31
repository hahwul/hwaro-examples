+++
title = "Installation"
description = "Tap, install, scaffold — three commands to a ruled page, then settings to taste."
weight = 1
date = "2026-05-01"
+++

Quadrille is a theme for the Hwaro static site generator. Install Hwaro from Homebrew, scaffold a docs site, and you are looking at your own graph paper in under a minute.

## Quickstart

```sh
brew install hahwul/hwaro/hwaro
hwaro init my-docs --scaffold docs
cd my-docs && hwaro serve
```

The dev server opens `http://localhost:3000`. Any edit to `content/`, `templates/`, or `static/` reloads almost instantly, so you can write with the page open beside you.

## Verifying the install

```sh
hwaro --version
# => 0.14.0 or newer
```

If you see something older, your package manager has cached a previous release. Run `brew upgrade hwaro` and check again.

## Where to next

Move on to **Your first page**, where you write one sheet of content, give it a template, and watch it render on the grid.
