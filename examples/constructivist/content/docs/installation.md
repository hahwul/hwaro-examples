+++
title = "Installation"
description = "Get the toolchain on your machine and a running site in front of you in under a minute — Homebrew in, scaffold out, dev server live."
weight = 1
date = "2026-05-01"
+++

Constructivist is a theme for the Hwaro static site generator. Install Hwaro from Homebrew, scaffold a docs site, and you are editing in seconds.

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

Move on to **Your first page**, where you will write a single piece of content, give it a template, and watch it render.
