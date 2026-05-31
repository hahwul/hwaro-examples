+++
title = "Installation"
description = "First stop on the line. Three commands and you are standing on the platform with a running site."
weight = 1
date = "2026-05-01"
+++

Transit runs on the Hwaro static site generator. You can install it from Homebrew or build it from source. This page is the first station on the Documentation line — board here.

## Quickstart

```sh
brew install hahwul/hwaro/hwaro
hwaro init my-docs --scaffold docs
cd my-docs && hwaro serve --open
```

The dev server will open `http://localhost:3000` in your browser. Any edit to `content/`, `templates/`, or `static/` reloads almost instantly — like a train arriving on time.

## Verifying the install

```sh
hwaro --version
# => 0.14.0 or newer
```

If you see anything older, your package manager has cached an old version. Run `brew upgrade hwaro` and try again.

## Where to next

Ride one stop to **Your first page**, where you will write a single piece of content, give it a template, and watch it render.
