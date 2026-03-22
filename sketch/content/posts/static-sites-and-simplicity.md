+++
title = "Static Sites and Simplicity"
date = "2026-03-10"
description = "Why static site generators pair well with a hand-drawn aesthetic."
tags = ["web", "tools"]
categories = ["tech"]
template = "post"
+++

There is a philosophical alignment between hand-drawn design and static sites. Both reject complexity in favor of directness.

## No layers of abstraction

A static site generator takes Markdown and templates, and produces HTML files. There is no database, no server-side rendering, no state management. What you write is what gets served.

This directness mirrors the sketch ethos: pencil touches paper, mark appears. There is no "build step" between thought and expression.

## Hwaro in particular

Hwaro is written in Crystal, which makes it fast. But speed is not the point. The point is that it stays out of your way:

- Write content in Markdown
- Design templates with familiar Jinja syntax
- Drop in CSS for styling
- Run `hwaro build` and you are done

No plugin ecosystem to navigate. No configuration rabbit holes. Just the essentials.

## When simple is enough

Not every site needs a component library, a design token system, and a CI/CD pipeline. Sometimes you just need:

```
content/
templates/
static/css/
config.toml
```

Four directories. One config file. That is the whole architecture. And for a personal blog, a portfolio, or a collection of notes -- that is more than enough.

## The cost of complexity

Every dependency is a future maintenance burden. Every abstraction is a concept someone has to learn. Every build tool is a thing that can break.

A hand-drawn sketch does not break. A static HTML file does not break. There is something reassuring about that.
