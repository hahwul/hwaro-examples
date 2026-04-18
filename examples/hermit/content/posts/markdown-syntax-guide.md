+++
title = "Markdown Syntax Guide"
date = "2026-02-01"
tags = ["markdown", "guide", "writing"]
categories = ["tutorial"]
description = "A comprehensive guide to Markdown syntax supported in Hwaro."
+++

This post demonstrates the Markdown syntax you can use with Hwaro.

## Headings

Use `#` through `######` for headings of different levels.

## Emphasis

*This text is italic* and **this text is bold**. You can also use ***bold and italic*** together.

## Links and Images

Links are written as `[text](url)`. For example: [Hwaro on GitHub](https://github.com/hahwul/hwaro).

## Lists

### Unordered

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered

1. First step
2. Second step
3. Third step

## Code

Inline code: `const x = 42;`

Code blocks with syntax highlighting:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return true;
}

greet("World");
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i))
```

## Blockquotes

> The best way to predict the future is to invent it.
>
> — Alan Kay

## Tables

| Language | Typing | Speed |
|----------|--------|-------|
| Crystal  | Static | Fast  |
| Ruby     | Dynamic | Moderate |
| Rust     | Static | Fast  |

## Horizontal Rules

---

That's it! Markdown is simple yet expressive.
