+++
title = "Button"
weight = 1
template = "doc"
description = "Buttons trigger actions and navigation. Available in multiple variants and sizes."
tags = ["interactive", "form"]
[extra]
category = "Interactive"
status = "Stable"
+++

## Overview

Buttons are used to trigger actions. Use the appropriate variant to communicate the importance and nature of the action.

## Variants

| Variant | Usage |
|---------|-------|
| Primary | Main call-to-action. One per section recommended. |
| Secondary | Secondary actions alongside a primary button. |
| Ghost | Tertiary actions, toolbar buttons. |
| Destructive | Irreversible or dangerous actions (delete, remove). |

## Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 32px | 8px 12px | 14px |
| Medium | 40px | 10px 16px | 16px |
| Large | 48px | 12px 24px | 18px |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | "primary" | Visual style variant |
| `size` | string | "medium" | Button size |
| `disabled` | boolean | false | Disables interaction |
| `loading` | boolean | false | Shows loading spinner |
| `icon` | string | null | Icon name to display |
| `fullWidth` | boolean | false | Stretches to container width |

## Usage Example

```html
<button class="btn btn-primary btn-medium">
  Save Changes
</button>

<button class="btn btn-secondary btn-medium">
  Cancel
</button>

<button class="btn btn-destructive btn-small">
  Delete
</button>
```

## Guidelines

- Always use a verb or verb phrase for button labels
- Primary buttons should be limited to one per visible section
- Destructive actions should require confirmation
- Disabled buttons should include a tooltip explaining why they are disabled
