# Observatory Example

A deep space astronomy and celestial observation log example for [Hwaro](https://github.com/hahwul/hwaro).

## Quick Start

1. Install Hwaro.
2. Clone this repository.
3. Run `hwaro build` in the `observatory` directory.
4. Preview the generated site.

## Key Aesthetic

- **Starry Background**: A CSS-based starlight effect on a deep indigo background.
- **Monospace Focus**: Using `JetBrains Mono` for a scientific appearance.
- **Minimalist**: No gradients, no emojis, purely textual and data-driven.

## Metadata Structure

Posts use the following metadata in their front matter:

```toml
[extra]
coords = "RA DEC"
magnitude = "Value"
distance = "Distance"
constellation = "Name"
```
