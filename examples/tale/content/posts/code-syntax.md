+++
title = "Code and Syntax Highlighting"
date = "2026-03-02"
tags = ["code", "syntax"]
categories = ["tutorial"]
+++

Tale includes built-in syntax highlighting for code blocks. Here are some examples across different languages.

## CSS

```css
.site {
  max-width: 660px;
  margin: 0 auto;
  padding: 0 1.25rem;
}
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tale</title>
</head>
<body>
  <p>Hello, world!</p>
</body>
</html>
```

## JavaScript

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Tale"));
```

## Python

```python
from pathlib import Path

def read_posts(directory):
    posts = []
    for path in Path(directory).glob("*.md"):
        with open(path) as f:
            posts.append(f.read())
    return posts
```

## Go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello from Tale!")
}
```

Code blocks are displayed with a light background and horizontal scrolling for long lines, ensuring readability without breaking the layout.
