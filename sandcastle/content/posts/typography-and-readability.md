+++
title = "Typography and Readability"
date = "2026-03-15"
description = "Why serif fonts, warm colors, and generous spacing make for a better reading experience."
tags = ["design", "typography", "readability"]
categories = ["blog"]
+++

Good typography is invisible. When it works, readers don't notice the font — they just enjoy the writing. Paper's typographic choices are deliberate and focused on long-form readability.

## Serif for the Body

Paper uses **Lora** for body text. Serifs guide the eye along the line, making it easier to read paragraph after paragraph. This is the same reason newspapers and books have used serif fonts for centuries.

For UI elements — navigation, metadata, buttons — we switch to **Inter**, a clean sans-serif that provides contrast and clarity at small sizes.

## Warm Colors

Pure white (`#ffffff`) on a screen is harsh. Paper uses a warm cream (`#faf8f5`) as the background, with text in a soft dark brown (`#3c3836`) instead of pure black. This combination reduces contrast just enough to feel comfortable without sacrificing legibility.

> "The best color palette is one you don't notice."

## Spacing and Rhythm

Paper's line-height is set to `1.8` — slightly more generous than the typical `1.5` to `1.6`. Combined with a maximum width of 680px, this creates a comfortable reading measure of roughly 65-75 characters per line, which research suggests is optimal for reading speed and comprehension.

## Code Blocks

Technical writing needs code. Paper styles code blocks with the same warm palette:

```python
def greet(name: str) -> str:
    """A warm greeting, naturally."""
    return f"Hello, {name}! Welcome to Paper."
```

Inline code like `hwaro serve` uses a subtle background that blends with the page rather than demanding attention.
