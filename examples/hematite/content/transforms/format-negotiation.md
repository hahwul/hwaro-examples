+++
title = "Format Negotiation"
description = "Reads the Accept header on every request and re-encodes into whichever format the requesting browser decodes best"
date = "2025-03-02"
weight = 20
toc = true
[extra]
class = "delivery"
+++

`fm=auto` is the single parameter that saves the most bytes across a real site, and it's also the one people trust least, because it means the same URL serves different bytes to different visitors. That's the point. A request's `Accept` header tells the pipeline exactly which image formats the browser can decode — Hematite parses it, picks the smallest format the client actually supports, and encodes to that format on the fly. Chrome and a modern Firefox get AVIF. Older Safari gets WebP. Anything that sends no useful `Accept` signal at all gets a conservative JPEG.

<!-- more -->

## Reading the request

Because the negotiated format is part of the cache key, your CDN edge still gets exactly one cached object per client capability class — it does not re-run the pipeline per request, only per distinct `(source, chain, negotiated-format)` triple.

```
GET /plateau.jpg?fm=auto&q=82&accept=avif,webp,jpeg
Accept: image/avif,image/webp,image/*,*/*
→ 200 OK, Content-Type: image/avif, 51 KB
```

The `accept` parameter is a fallback allowlist for callers that can't rely on the browser's own header — a server-side thumbnail generator, for instance, that knows its output only needs to satisfy WebP-capable consumers. Below, the same 2.41 MB PNG source resolves to a 51 KB AVIF response with no visible quality loss at `q=82` — the file-size bar along the bottom of each plate is drawn to scale.

{{ swatch(effect="format", id="format", chain="?fm=auto&q=82&accept=avif,webp,jpeg", before="source.png — 2.41 MB", after="auto.avif — 51 KB") }}

## Where it sits in the chain

Format negotiation always runs last in the chain. Every geometry, color, and texture transform — [Smart Crop](/transforms/smart-crop/), [Palette Reduction](/transforms/palette-reduction/), [Grain & Dither](/transforms/grain-dither/) — operates on raw pixels; only once those pixels are final does the pipeline decide how to encode them for the wire.
