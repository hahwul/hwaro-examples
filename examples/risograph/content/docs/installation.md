+++
title = "Installation"
description = "Two commands to a running docs site — install Hwaro, scaffold the docs, and start the press."
weight = 1
date = "2026-05-01"
+++

Risograph runs on the Hwaro static site generator. You can install it from Homebrew, run it under Docker, or build it from source.

## Quickstart

```sh
brew install hahwul/hwaro/hwaro
hwaro init my-docs --scaffold docs
cd my-docs && hwaro serve
```

The dev server runs at `http://localhost:3000`. Any edit to `content/`, `templates/`, or `static/` reloads in well under a second.

## Verifying the install

```sh
hwaro --version
# => 0.14.2 or newer
```

If you see anything older, your package manager has cached an old version. Run `brew upgrade hwaro` and try again.

## Where to next

Move on to **Your first page**, where you will write a single piece of content, give it a template, and watch it render.
