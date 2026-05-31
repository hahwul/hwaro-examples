+++
title = "Setting the Nameplate: Notes on a High-Contrast Masthead"
date = "2026-05-21"
draft = false
description = "The composing room explains how the Gazette nameplate is set in a high-contrast serif, ruled above and below, and why the drop cap still earns its place."
tags = ["typography", "masthead", "design"]
categories = ["editorial"]
reading_time = 3
+++

A broadsheet is recognized before it is read, and recognition lives in the nameplate. The Gazette sets its name in a high-contrast serif, large and centered, ruled with thin lines above and below and a dateline of small caps between them. The intent is plain: the reader should know the paper from across the table.

## The Type, Set Plain

The masthead carries three voices, and no more. Letting a fourth onto the page would muddy the type and break the discipline the desk keeps.

- **Display serif** for the nameplate and every headline, set heavy.
- **Body serif** for prose, set to read at length without fatigue.
- **A small-caps sans** for kickers, datelines, and table labels.

## On the Drop Cap

Every lead opens with a set initial. It is not decoration; it tells the eye where the story begins.

> The drop cap is a door. The reader steps through it into the column, and the column carries them down the page.

For those who set their own pages, the initial is a single rule against the first paragraph:

```css
.prose > p:first-of-type::first-letter {
  font-family: 'Playfair Display', serif;
  float: left;
  font-size: 3.6rem;
  color: #b0231c;
}
```

The nameplate and the drop cap do the same quiet work: they tell the reader, without a word of copy, that this page was set with care and meant to be read.
