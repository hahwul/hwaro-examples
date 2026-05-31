+++
title = "Installation"
description = "Three commands to a working press. Homebrew, Docker, or source — then your first edition is on the stand."
weight = 1
date = "2026-05-01"
+++

Newsprint runs on the Hwaro static site generator. You can install it from Homebrew, run it under Docker, or build it from source. Pick whichever gets you to a running press fastest.

## Quickstart

```sh
brew install hahwul/hwaro/hwaro
hwaro init my-docs --scaffold docs
cd my-docs && hwaro serve --open
```

The dev server opens `http://localhost:3000` in your browser. Any edit to `content/`, `templates/`, or `static/` reloads in under 50ms, so the page on screen is always the latest edition.

## Verifying the install

```sh
hwaro --version
# => 0.14.0 or newer
```

If you see anything older, your package manager has cached an old version. Run `brew upgrade hwaro` and try again.

## Where to next

Move on to **Your first page**, where you will set a single piece of content, give it a template, and watch the press render it.
