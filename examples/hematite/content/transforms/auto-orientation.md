+++
title = "Auto Orientation"
description = "Reads the EXIF orientation tag, bakes the rotation into pixels, and strips the tag so nothing downstream double-rotates"
date = "2026-02-18"
weight = 60
toc = true
[extra]
class = "geometry"
+++

Most cameras and phones don't rotate the pixel buffer when you turn the device — they write an EXIF orientation tag instead and let the viewer rotate on display. That's efficient for the camera and a recurring bug for everyone downstream: a browser that respects the tag shows the photo upright, a thumbnail generator that ignores it produces a sideways crop, and the two disagree on the same file. Auto Orientation resolves this once, at ingest: it reads the orientation tag, physically rotates and flips the pixel buffer to match, then strips the tag from the output entirely so there is nothing left for a downstream consumer to misinterpret.

<!-- more -->

## Stripping the tag

```
GET /plateau.jpg?orient=auto&exif=strip
```

`exif=strip` is on by default for this transform and almost always what you want — once the rotation is baked into pixels, a surviving orientation tag can only cause a second, incorrect rotation somewhere else in the chain. Set `exif=keep` only if a downstream system specifically depends on reading orientation metadata itself, which is rare enough that we'd ask why first.

{{ swatch(effect="rotate", id="rotate", chain="?orient=auto&exif=strip", before="EXIF orientation 6", after="auto-leveled · 0°") }}

## Reading the horizon line

The dashed line in each plate marks the horizon. In the source it runs at the tilt encoded by orientation tag 6 — a 90-degree phone rotation that the camera never corrected in the pixel data; in the result it's level, and the tag that would have caused a second rotation downstream is gone.
