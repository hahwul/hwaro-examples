+++
title = "Markdown Syntax Guide"
date = "2026-02-15"
tags = ["markdown", "guide", "writing"]
categories = ["tutorial"]
description = "A guide to Markdown syntax supported in Hwaro."
+++

Markdown is all you need to write content for this site.

## Headings

Use `#` through `######` for heading levels.

## Emphasis

*Italic*, **bold**, and ***bold italic***.

## Links

[Hwaro on GitHub](https://github.com/hahwul/hwaro) — just text and a URL.

## Lists

- First item
- Second item
  - Nested item
- Third item

1. Step one
2. Step two
3. Step three

## Code

Inline: `const x = 42;`

Block:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

```bash
hwaro build
hwaro serve
```

## Blockquotes

> Simplicity is the ultimate sophistication.
>
> — Leonardo da Vinci

## Tables

| Tool | Language | Build Speed |
|------|----------|-------------|
| Hwaro | Crystal | Fast |
| Hugo | Go | Fast |
| Jekyll | Ruby | Slow |

## Horizontal Rules

---

That covers the essentials.
