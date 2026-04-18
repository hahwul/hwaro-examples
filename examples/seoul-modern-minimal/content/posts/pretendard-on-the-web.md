+++
title = "Pretendard on the Web"
date = "2025-04-14"
description = "Why Pretendard has become the default sans for modern Korean sites, and what it does better than Noto Sans KR alone."
tags = ["typography", "korean", "pretendard"]
template = "page"
+++

## The Missing Sans

For years, the default answer to "what sans serif should I use for a mixed Korean/English site?" was Noto Sans KR. It works. It renders well. But it was never designed to feel like a *system font* — the sort of type that disappears into the interface.

Pretendard, by designer Kilhyung Lee, fills that gap. It borrows the vertical proportions of Apple System Font and Inter, then maps them onto a full set of Hangul glyphs. The result is a Korean sans that sits comfortably next to Latin type without ever announcing itself as a separate face.

## What Changes

When you swap Noto Sans KR for Pretendard on the same layout:

- **Vertical alignment improves.** Hangul and Latin sit on the same baseline without visible drift.
- **Weights feel consistent.** 400, 500, and 600 all look like siblings.
- **Mixed-script lines read more evenly.** No sudden visual weight change where the language switches.

## Loading It

Pretendard ships as a variable font. On the web, the simplest path is the dynamic subset CDN:

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css" />
```

Then use it like any other sans:

```css
body {
  font-family: 'Pretendard Variable', 'Inter', sans-serif;
}
```

## When Not To Use It

Pretendard is excellent for UI, documentation, and editorial web. It is less suited to:

- Formal or traditional contexts (use Noto Serif KR)
- Display sizes where you want a distinctive voice (use a headline face)
- Heritage brands where Hangul should feel explicitly Korean rather than system-neutral

For everything else — and especially for a modern, minimal Seoul site — Pretendard is the safest and most considered choice available today.
