+++
title = "Code & Syntax Highlighting"
date = "2026-03-17"
tags = ["code", "tutorial"]
categories = ["tutorial"]
description = "Showcasing code blocks and syntax highlighting with the Monokai theme."
+++

Cactus uses the Monokai syntax highlighting theme, which pairs well with the dark background.

## Inline Code

Use backticks for `inline code` like variable names or `commands`.

## Code Blocks

### JavaScript

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### Python

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

### Go

```go
package main

import "fmt"

func main() {
    ch := make(chan string)
    go func() {
        ch <- "hello from goroutine"
    }()
    fmt.Println(<-ch)
}
```

### Crystal

```crystal
class Greeter
  def initialize(@name : String)
  end

  def greet
    puts "Hello, #{@name}!"
  end
end

Greeter.new("Cactus").greet
```

The Monokai theme gives a warm, readable look to code blocks against the dark background.
