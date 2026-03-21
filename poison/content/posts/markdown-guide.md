+++
title = "Markdown Syntax Guide"
date = "2026-02-01"
tags = ["markdown", "guide", "writing"]
categories = ["tutorial"]
description = "A guide to Markdown syntax supported in the Poison theme."
+++

This post demonstrates the Markdown rendering in the Poison theme.

## Headings

Use `#` through `######` for different heading levels. Each level is styled with the Lora serif font.

## Emphasis

*Italic text* and **bold text** work as expected. You can also use ***bold and italic*** together.

## Links and Images

Links: [Hwaro on GitHub](https://github.com/hahwul/hwaro)

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

| Language | Typing  | Speed    |
|----------|---------|----------|
| Crystal  | Static  | Fast     |
| Ruby     | Dynamic | Moderate |
| Rust     | Static  | Fast     |

---

That's it! Markdown is simple yet expressive.
