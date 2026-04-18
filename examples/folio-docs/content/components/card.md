+++
title = "Card"
weight = 2
template = "doc"
description = "Cards group related content and actions into a contained unit."
tags = ["layout", "container"]
[extra]
category = "Layout"
status = "Stable"
+++

## Overview

Cards are surface-level containers that group related content. They create visual hierarchy and help users scan content quickly.

## Variants

| Variant | Border | Shadow | Usage |
|---------|--------|--------|-------|
| Default | 1px border | None | Standard content grouping |
| Elevated | None | sm shadow | Prominent content, dashboard widgets |
| Interactive | 1px border | Hover shadow | Clickable cards, list items |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | "default" | Visual style |
| `padding` | string | "medium" | Internal padding (none, small, medium, large) |
| `onClick` | function | null | Click handler (makes card interactive) |

## Structure

```html
<div class="card card-default">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Optional description text.</p>
  </div>
  <div class="card-body">
    Content goes here.
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-small">Action</button>
  </div>
</div>
```

## Guidelines

- Cards should have a clear visual boundary
- Avoid nesting cards more than one level deep
- Card headers are optional but recommended for scanability
- Interactive cards must have visible hover and focus states
