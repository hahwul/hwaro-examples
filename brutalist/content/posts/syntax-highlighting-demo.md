+++
title = "Syntax Highlighting Demo"
date = "2025-01-20"
tags = ["hwaro", "code"]
categories = ["guides"]
description = "Demonstrating code blocks and syntax highlighting in Hwaro"
template = "post"
+++

Hwaro supports syntax highlighting out of the box. Here are some examples.

<!-- more -->

## JavaScript

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
```

## Python

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Brutalist</title>
</head>
<body>
  <h1>No decoration.</h1>
</body>
</html>
```

## Shell

```bash
hwaro init my-site
cd my-site
hwaro serve -p 8080
```

Code should be displayed as code. No rounded boxes. No soft backgrounds. Just a border and a monospace font.
