+++
title = "About This Theme"
date = "2024-05-10"
+++

This theme was built as a creative experiment to see how far we can push native web technologies like SVG and CSS to create art.

The core of the effect lies in the `<feTurbulence>` and `<feDisplacementMap>` SVG filters. By generating a fractal noise pattern and applying it as a displacement map over CSS gradient blobs, we create the swirling, fluid motion characteristic of oil on water.

### The Code

We define the SVG filter hidden in the HTML, then apply it via CSS:

```css
.oil-background {
    filter: url(#oil-swirl) contrast(1.5) saturate(2);
}
```

The underlying blobs are animated using CSS `@keyframes`, which when distorted by the SVG filter, creates a continuous, organic fluid simulation.
