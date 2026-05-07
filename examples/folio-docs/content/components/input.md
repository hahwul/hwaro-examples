+++
title = "Input"
weight = 3
template = "doc"
description = "Text inputs collect single-line text from users in forms and search fields."
tags = ["form", "interactive"]
[extra]
category = "Form"
status = "Stable"
+++

## Overview

Inputs accept short, single-line text entries. Use a textarea for multi-line text. Pair every input with a visible label and a clear error state.

## Variants

| Variant | Usage |
|---------|-------|
| Default | Standard text entry inside a form. |
| Search | Search field with a leading icon and clear affordance. |
| Filled | Surface-toned background, used inside dense panels. |
| Inline | Compact inputs that align with surrounding text. |

## Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 32px | 6px 10px | 14px |
| Medium | 40px | 8px 12px | 16px |
| Large | 48px | 10px 16px | 18px |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | "text" | HTML input type (text, email, password, search, number) |
| `value` | string | "" | Controlled value |
| `placeholder` | string | null | Hint text shown when empty |
| `disabled` | boolean | false | Disables interaction and dims the field |
| `invalid` | boolean | false | Renders the error border and message |
| `prefix` | string | null | Leading icon or unit label |
| `suffix` | string | null | Trailing icon or unit label |

## Usage Example

```html
<label class="field">
  <span class="field-label">Email</span>
  <input class="input input-medium" type="email" placeholder="name@example.com">
  <span class="field-help">We never share your address.</span>
</label>

<label class="field field-invalid">
  <span class="field-label">Workspace</span>
  <input class="input input-medium" value="my workspace" aria-invalid="true">
  <span class="field-error">Workspace names cannot contain spaces.</span>
</label>
```

## Guidelines

- Always associate an input with a `<label>` element using `for` or wrapping
- Place validation errors directly below the field, never as tooltips
- Use placeholder text for examples, not for required information
- Match the input width to the expected length of the value
- Disabled inputs must remain readable and announce state to assistive tech
