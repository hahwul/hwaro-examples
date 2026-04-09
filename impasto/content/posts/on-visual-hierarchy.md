+++
title = "On Visual Hierarchy"
date = "2026-02-28"
tags = ["design", "typography"]
categories = ["essays"]
description = "How weight, scale, and contrast guide the eye through a composition."
template = "page"
+++

Every page is a composition. The reader's eye does not move randomly across it -- it follows a path shaped by the designer's choices. This path is the visual hierarchy.

<!-- more -->

## The Three Levers

Visual hierarchy relies on three primary tools:

1. **Scale** -- Larger elements are seen first. A heading at 2rem dominates a paragraph at 1rem.
2. **Weight** -- Heavier elements draw attention. Bold text, thick borders, and deep shadows all increase visual mass.
3. **Contrast** -- High contrast between an element and its surroundings makes it stand out. Dark text on a light background. A red accent among warm neutrals.

These three levers interact. A small element with high contrast can outweigh a large element with low contrast. A lightweight heading can recede behind a heavy body paragraph.

## Hierarchy in This Theme

The impasto theme uses all three levers deliberately:

- **Headings** are set in a bold serif at generous scale
- **Post cards** carry thick borders and offset shadows, giving them physical presence
- **The accent color** (cadmium red) appears sparingly -- only on links and active states -- so that it always commands attention when it does appear

```html
<h1 class="post-title">On Visual Hierarchy</h1>
<div class="post-card">
  <span class="post-date">2026-02-28</span>
  <span class="post-title">On Visual Hierarchy</span>
</div>
```

## The Danger of Flatness

When everything on a page has equal visual weight, nothing has weight at all. The eye wanders without purpose. The reader feels lost, even if they cannot articulate why.

Good hierarchy is invisible to the reader but felt in every interaction. They know where to look. They know what matters. They move through the content with confidence, guided by the quiet architecture of scale, weight, and contrast.
