+++
title = "Designing Loud Without the Mess"
date = "2026-04-18"
draft = false
description = "How we keep a Memphis dashboard playful and still readable at a glance."
tags = ["design", "memphis", "process"]
categories = ["design"]
reading_time = 3
+++

People assume a Memphis layout is chaos by definition. It is not. The 1980s originals were loud, but they were also composed. Every squiggle had a place. We try to hold that same line.

## the rules we actually keep

A dashboard has a job: tell you the number fast. So the playfulness lives in the decoration, never in the data.

1. **Tilt the frame, not the text.** Cards can rotate a degree or two. The numbers inside stay perfectly level.
2. **Decoration is absolute.** Every dot, zigzag, and arc is positioned out of the flow and set to ignore the pointer.
3. **Five accents, no more.** Cobalt, red, yellow, teal, pink. Adding a sixth turns a party into a paint spill.

## the contrast pass

The fun part is easy. The discipline is making sure body copy still reads. We run a quick contrast check on every accent before it ships:

```text
ink on yellow   ......  passes
paper on red    ......  passes
ink on teal     ......  passes
```

Anything that fails the check loses its text and becomes pure decoration instead.

## why bother

Because a dashboard you enjoy looking at is a dashboard you actually check. Loud is not the enemy of clear. Sloppy is.
