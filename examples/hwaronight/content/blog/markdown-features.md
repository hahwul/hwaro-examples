+++
title = "Markdown Features in Hwaro"
date = "2025-12-20"
description = "A showcase of markdown rendering features supported by Hwaro."
tags = ["hwaro", "markdown", "tutorial"]
categories = ["guides"]
+++

# Markdown Features in Hwaro

Hwaro supports standard markdown plus some extras. Here's a showcase.

## Text Formatting

You can use **bold**, *italic*, ~~strikethrough~~, and `inline code`.

## Links and Images

Links look like this: [Hwaro on GitHub](https://github.com/hahwul/hwaro)

## Blockquotes

> This is a blockquote. It's styled with a magenta left border in the HwaroNight theme.
>
> Multiple paragraphs work too.

## Code Blocks

Fenced code blocks with syntax highlighting:

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i))
```

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("Hwaro");
```

## Tables

| Feature     | Status |
|-------------|--------|
| Markdown    | Yes    |
| Syntax highlighting | Yes |
| Taxonomies  | Yes    |
| Pagination  | Yes    |
| RSS Feed    | Yes    |

## Lists

Ordered:

1. First item
2. Second item
3. Third item

Unordered:

- Bullet point one
- Bullet point two
- Bullet point three

## Horizontal Rule

---

That's the full set of markdown features rendered with the Tokyo Night theme.
