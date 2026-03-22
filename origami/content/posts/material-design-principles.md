+++
title = "Material Design Principles in Web Typography"
date = "2026-03-21"
description = "How Origami applies Material Design's type system to create readable, well-structured blog content."
tags = ["design", "typography", "material"]
categories = ["design"]
+++

Good typography is invisible. When it works, you don't notice the fonts -- you just read. Origami's type system follows Material Design's guidelines while adapting them for long-form reading.

## The Type Scale

Origami uses two typefaces from the Roboto family:

- **Roboto Slab** for headings -- the slab serif adds weight and anchors section titles
- **Roboto** for body text -- neutral and highly legible at any size

This pairing creates a clear distinction between structural elements and flowing prose without introducing visual conflict.

## Sizing and Rhythm

The base font size is 16px with a line-height of 1.7. These values prioritize readability on screens:

| Element | Size | Weight |
|---------|------|--------|
| H1 | 1.75rem | 700 |
| H2 | 1.35rem | 500 |
| H3 | 1.1rem | 500 |
| Body | 1rem | 400 |
| Caption | 0.875rem | 400 |

Generous line-height gives each line room to breathe. Paragraphs are separated by a full em of space, matching the rhythm of the body text.

## Color and Contrast

Text colors follow a three-level hierarchy:

- **High emphasis** (`#212121`) -- Primary text, headings, and important content
- **Medium emphasis** (`#616161`) -- Secondary information like dates and metadata
- **Low emphasis** (`#9E9E9E`) -- Disabled states and decorative text

This layered approach guides the reader's eye without relying on size alone.

## Code Typography

Code blocks use a dark surface (`#263238`) that references Material Design's dark theme. The monospace font is Roboto Mono, keeping the entire type system within one family.

```javascript
function fold(paper, direction) {
  const crease = paper.mark(direction);
  return paper.foldAlong(crease);
}
```

Inline `code` uses a light gray background to distinguish it from surrounding prose without breaking the reading flow.
