+++
title = "Installation"
description = "Three commands from an empty directory to a running dev server. The lobby is open; walk in."
weight = 1
date = "2026-05-01"
+++

Deco runs on the Hwaro static site generator. The fastest way in is Homebrew, but you can equally run Hwaro under Docker or build it from source.

## Quickstart

```sh
brew install hahwul/hwaro/hwaro
hwaro init my-docs --scaffold docs
cd my-docs && hwaro serve --open
```

The dev server opens `http://localhost:3000` in your browser. Any edit to `content/`, `templates/`, or `static/` reloads almost instantly.

## Verifying the install

```sh
hwaro --version
# => 0.14.0 or newer
```

If you see something older, your package manager has cached an out-of-date build. Run `brew upgrade hwaro` and try again.

## Where to next

Move on to **Your first page**, where you write a single piece of content, give it a template, and watch it render.
