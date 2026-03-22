+++
title = "About"
+++

## About Letterbox

Letterbox is a newsletter-style blog built with [Hwaro](https://github.com/hahwul/hwaro). It takes inspiration from the email newsletters you love reading -- centered layout, focused typography, and no distractions.

## Design Principles

- **Single column, 660px max** -- like the email newsletters you already read
- **Serif body text** -- Source Serif 4 for comfortable long-form reading
- **Paper-like container** -- bordered white card on a warm off-white background
- **Newsletter metadata** -- issue numbers, dates, and archive-style listings
- **Subscribe CTA** -- built-in call to action for growing your audience

## Getting Started

```bash
# Copy this example
cp -r letterbox my-newsletter
cd my-newsletter

# Start writing
hwaro serve
```

Add new posts in `content/posts/` with issue numbers in the front matter:

```toml
+++
title = "Your Issue Title"
date = "2026-03-22"
[extra]
issue = 1
+++
```

## Contact

- GitHub: [github.com/hahwul](https://github.com/hahwul)
- Email: [hello@example.com](mailto:hello@example.com)
