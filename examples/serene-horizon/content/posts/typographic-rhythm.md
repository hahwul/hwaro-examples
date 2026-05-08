+++
title = "Typographic Rhythm"
description = "Vertical proportion as the backbone of legible reading."
date = "2024-06-12"
[taxonomies]
tags = ["typography", "design"]
+++

A grid governs the page horizontally. Rhythm governs it vertically. The two work in tandem, but most layouts neglect the second axis until something feels wrong and nobody can name the cause.

The unit of vertical rhythm is the baseline grid. Pick a base font size, multiply by a comfortable line-height, and treat that product as a fixed module. Every block of text, every heading, every margin, every image height should resolve to a multiple of that module. The reader will not consciously notice the alignment, but their eye will track from line to line without strain.

```css
:root {
    --base-size: 1rem;
    --line-ratio: 1.6;
    --rhythm: calc(var(--base-size) * var(--line-ratio));
}

p { margin-bottom: var(--rhythm); }
h2 { margin-top: calc(var(--rhythm) * 2); }
```

Heading sizes follow a modular scale. Pick a ratio—1.25, 1.333, the golden ratio if you want flair—and walk it up and down from the base. Resist the urge to override individual headings to taste. The constraint is the design.

When a long-form template feels broken, the cause is usually a single element that fell off the rhythm. An image with a fixed height. A blockquote with arbitrary padding. Track these down and round them to the nearest module. The page will settle.

A reader who finishes the article without rereading a line is the only useful evidence that the rhythm is working.
