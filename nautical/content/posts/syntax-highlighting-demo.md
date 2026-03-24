+++
title = "Navigating Code Highlighting"
date = "2025-02-10"
tags = ["navigation", "code"]
categories = ["guides"]
description = "Demonstrating code syntax highlighting in the logbook"

[extra]
coordinates = "12°14'N 68°55'W"
wind = "10 knots E"
waves = "1.5m"
+++

Hwaro supports syntax highlighting out of the box via Highlight.js. Here are some examples.

<!-- more -->

## Crystal

```crystal
class Greeter
  def initialize(@name : String)
  end

  def greet
    puts "Hello, #{@name}!"
  end
end

Greeter.new("World").greet
```

## JavaScript

```javascript
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10)); // 55
```

## HTML + Jinja2

```html
{% for post in section.pages %}
  <article>
    <h2>{{ post.title }}</h2>
    <p>{{ post.summary }}</p>
  </article>
{% endfor %}
```

The theme is configured in `config.toml` under `[highlight]`. Try changing it to `monokai` or `atom-one-dark` for a different look.
