+++
title = "Colophon"
description = "How this quiet single-tone gallery was made, and why every plate wears a torn paper edge."
+++

This is a fictional gallery, built to honour the Korean monochrome painting movement known as *dansaekhwa* — literally, single-colour painting. The works shown here do not exist as physical objects. Each study plate is drawn entirely in SVG and CSS: layered strokes, scraped clay bands, and repeated pencil hatching are all vector art, tinted in a single warm neutral and set against broad bands of unpainted ground.

## The deckled edge

The signature of the site is that every plate is framed by a hanji-paper deckled edge — the soft, torn border of hand-made Korean mulberry paper. It is drawn once as an SVG `clipPath` in object-bounding-box coordinates, then applied to each plate through CSS, so a single irregular outline clips every study no matter its size:

```css
.plate__art {
  clip-path: url(#deckle);
  aspect-ratio: 12 / 5;
}
```

Because the clip path is normalised to the box (values from 0 to 1), the same torn contour wraps a small thumbnail on the index and a full-bleed plate on a study page. The notches let the ivory ground show through the edge, so each work reads as a sheet laid on the surface rather than a rectangle painted into it.

## Type and colour

The whole site is set in Hanken Grotesk, a humanist grotesque, used at a light weight for the display sizes and a regular weight for reading. There is exactly one accent — a muted clay brown — reserved for study numbers, links, and a single ornament in the footer. Everything else is drawn from a narrow ramp of warm neutrals, keeping the promise the movement made: near-total absence of colour, and generous silence between works.

## Method notes

No raster images are used anywhere. The paper grain, the scraped clay, and the pooled ink are produced with SVG turbulence and displacement filters rather than photographs, which keeps the entire gallery small, sharp at any zoom, and fully diffable in version control. If you scaffold your own site from this example, the plates are the place to start: swap the six texture blocks in `templates/plate.html` for your own, and the layout, deckled edge, and type system will carry them.

Return to [all studies](/studies/) to see the six plates in sequence, beginning with the bare [ground](/studies/ground-unpainted/).
