+++
title = "Syntax Highlighting in the Nexus"
date = 2024-04-18
description = "Demonstrating code blocks and syntax highlighting."

[taxonomies]
tags = ["code", "design", "hwaro"]
+++

One of the essential features for any technical blog is syntax highlighting. The Scarlet Nexus template leverages Hwaro's built-in `highlight.enabled` configuration alongside custom CSS scoping to ensure code blocks integrate seamlessly into the dark theme.

Here is an example in Crystal:

```crystal
require "http/server"

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello from the Scarlet Nexus!"
end

address = server.bind_tcp 8080
puts "Listening on http://#{address}"
server.listen
```

And some Python:

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

### Styling Approach

To prevent the default highlighter themes from overriding the dark background with bright white boxes, the CSS specifically targets the `.hljs` class injected by Hwaro:

```css
pre {
  background: var(--bg-alt) !important;
  border: 1px solid var(--border);
}

.hljs {
  background: transparent !important;
}
```

This approach allows the rich syntax colors (like base16/monokai) to shine on a custom, controlled background.
