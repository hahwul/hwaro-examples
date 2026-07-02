+++
title = "From Reading Room to IIIF: Digitizing a Fifteenth-Century Choirbook Without a Single New Crease"
date = "2026-05-18"
description = "How the Hallworth Choirbook was imaged to IIIF standard without unbinding a fragile fifteenth-century binding, and the manifest structure used to publish it."

[extra]
journal = "Digital Collections Quarterly"
citation = "vol. 12, no. 1, pp. 44–61"
+++

The Hallworth Choirbook is a large-format fifteenth-century manuscript in its original — and original is the operative word — sewn binding, too fragile to open past roughly a hundred and twenty degrees without stressing the spine folds. Standard flatbed or overhead-rig digitization assumes a book can open close to flat. This one could not, and conservation would not permit rebinding or disbinding for imaging. This paper documents the imaging solution and the IIIF manifest that made the result usable.

<!-- more -->

## The cradle problem

Working with the conservation lab, we built a custom foam-and-linen support cradle shaped to the choirbook's maximum safe opening angle, with adjustable page-weight snakes to hold each opening flat enough for even lighting without touching the painted initials. Every opening required a fresh cradle adjustment, which meant imaging sessions ran roughly a third of the speed of a standard flatbed pass — 140 openings took four full working days rather than one.

The angled opening also meant every image had intentional perspective distortion at the gutter. Rather than digitally flattening the image (which conservation staff felt risked misrepresenting the physical object), we kept the natural curvature and instead recorded the cradle angle in the technical metadata for each capture, so researchers understand why the gutter reads as it does.

## Publishing the result

The completed image set was published as a IIIF Presentation manifest, structured so that facing pages appear as paired canvases — matching how the book is actually consulted in the reading room — with each canvas carrying its cradle-angle note as a IIIF metadata field rather than burying it in a separate technical report nobody would find.

```json
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://iiif.thornfieldconservatory.org/hallworth/manifest.json",
  "type": "Manifest",
  "label": { "en": ["Hallworth Choirbook, opening 47r-47v"] },
  "metadata": [
    { "label": { "en": ["Cradle angle"] }, "value": { "en": ["approx. 110°, safe-opening limit"] } },
    { "label": { "en": ["Imaging note"] }, "value": { "en": ["Gutter curvature retained, not digitally flattened"] } }
  ]
}
```

## Why this matters beyond one manuscript

The instinct with fragile bindings is often to treat digitization and conservation as competing priorities — either the book gets imaged the easy way, or it stays closed. Recording the physical constraint as structured metadata, rather than working around it invisibly, means the digital surrogate stays honest about what it is: a photograph of a book that could not lie flat, not a corrected reconstruction of one that could. Two other institutions with similarly bound choirbooks have since asked for the cradle specifications.
