+++
title = "About"
description = "About the Hypercube documentation project"
+++

# About Hypercube

Hypercube is a technical documentation framework designed around the concept of multi-dimensional information architecture. Inspired by the mathematical properties of a tesseract -- the four-dimensional analog of a cube -- this project explores how documentation can be structured across intersecting planes of knowledge.

## Design Philosophy

The wireframe aesthetic is intentional. By stripping away visual noise and reducing the interface to its structural elements -- edges, vertices, and the space between them -- we create an environment optimized for reading and comprehension.

Every design decision follows three principles:

- **Structural clarity**: Information hierarchy is communicated through spatial relationships, not decorative elements
- **Dimensional depth**: Content is organized along multiple axes, allowing traversal by topic, complexity, or use case
- **Vector precision**: Navigation paths are direct and predictable, minimizing cognitive overhead

## Technical Stack

Hypercube is built with Hwaro, a static site generator that prioritizes speed, simplicity, and extensibility. The theme uses:

- Pure CSS for all visual effects including 3D transforms
- Space Mono for headings and code, Inter for body text
- A strict wireframe palette: cyan, purple, void black, and vector white
- No JavaScript frameworks -- only structural HTML and CSS

## Project Structure

```
hypercube/
  config.toml          # Site configuration
  content/             # Markdown content files
    docs/              # Documentation section
  templates/           # Jinja2/Crinja templates
  static/              # Static assets
    css/style.css      # Theme stylesheet
```

## Contributing

This documentation site serves as both a reference implementation and a living example of wireframe documentation design. The source is structured for easy modification and extension.
