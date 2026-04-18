+++
title = "Syntax Highlighting"
date = "2025-02-01"
description = "Showcasing code syntax highlighting capabilities with various programming languages."
tags = ["code", "syntax"]
categories = ["Even"]
+++

Even theme supports syntax highlighting for a wide variety of programming languages. Here are some examples.

## Ruby

```ruby
class Greeter
  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello, #{@name}!"
  end
end

greeter = Greeter.new("World")
greeter.greet
```

## Python

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i))
```

## JavaScript

```javascript
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Go

```go
package main

import "fmt"

func main() {
    ch := make(chan string)
    go func() {
        ch <- "Hello from goroutine!"
    }()
    msg := <-ch
    fmt.Println(msg)
}
```

## Crystal

```crystal
require "http/server"

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello world!"
end

puts "Listening on http://127.0.0.1:8080"
server.listen(8080)
```

Syntax highlighting makes code much easier to read and understand.
