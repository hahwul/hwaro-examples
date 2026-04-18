+++
title = "Project Log: Building This Site"
date = "2025-03-10"
tags = ["projects", "web", "hwaro"]
categories = ["project-log"]
description = "Notes on setting up this journal site with Hwaro static site generator."
+++

Started building this journal site today using Hwaro. I wanted something that felt like a real notebook -- lined paper, warm colors, a place where the writing is the focus.

## Design Decisions

**Monospace font for body text.** Most journal sites use serif or sans-serif. I wanted something that feels like a typewriter or a text editor. There is an honesty to monospace -- every character takes the same space, no tricks.

**Lined paper background.** Subtle horizontal lines, like a real notebook page. Not too dark, not too prominent. Just enough to give the feeling of writing on paper.

**Margin notes for metadata.** Tags and dates live in the margin, like annotations you might scribble in the side of a physical notebook. They are there if you want them, but they do not interrupt the reading.

## Technical Notes

Hwaro makes the build process straightforward:

```bash
hwaro init notebook --scaffold blog
hwaro serve --open
```

The template system uses Jinja2 syntax, which I already know from Python projects. Custom templates go in `templates/`, content in `content/`. No surprises.

## What is Left

- Fine-tune the line spacing
- Add a proper about page
- Write more entries (the hard part)
- Maybe add a search feature later

The site is simple on purpose. No JavaScript frameworks, no build tools beyond Hwaro itself, no dependencies to worry about. Just HTML, CSS, and words.
