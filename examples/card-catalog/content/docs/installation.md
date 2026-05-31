+++
title = "Installation"
description = "Three commands from an empty folder to a live preview. Pick how strict you want the config and pull the drawer."
weight = 1
date = "2026-05-01"
+++

Card Catalog runs on the Hwaro static site generator. You can install it from Homebrew, run it under Docker, or build it from source.

## Quickstart

```sh
brew install hahwul/hwaro/hwaro
hwaro init my-docs --scaffold docs
cd my-docs && hwaro serve --open
```

The dev server will open `http://localhost:3000` in your browser. Any edit to `content/`, `templates/`, or `static/` reloads in under 50ms.

## Verifying the install

```sh
hwaro --version
# => 0.14.0 or newer
```

If you see anything older, your package manager has cached an old version. Run `brew upgrade hwaro` and try again.

## Where to next

Move on to **Your first page**, where you will type up a single card, give it a template, and watch it file itself into the drawer.
