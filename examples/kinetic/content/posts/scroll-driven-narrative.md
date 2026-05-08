+++
title = "Scroll-Driven Narrative and the Vertical Stage"
date = "2026-04-02"
description = "Treating the scroll position as a timeline turns long pages into directed performances rather than passive lists."
tags = ["scroll", "narrative", "interaction"]
categories = ["design"]
+++

The scroll bar is the longest input device most users touch every day. It runs from the top of every page to the bottom, and a finger or a wheel can move through it at any speed. When designers treat scrolling as a navigation tool, they miss the larger opportunity. Scroll position is a timeline, and the page is the stage.

## The Vertical Camera

In a scroll-driven layout, the viewport is a camera that always looks down. As the user scrolls, the camera moves along a vertical track, revealing scenes in a fixed order. The scene metaphor is more useful than the page metaphor because it forces a question: what is the user seeing right now, and what should change when they move?

A scene is a section of the page with a clear beginning and end. Within that section, elements can enter, transform, exit, or remain pinned while other elements move past them. Each scene has a duration measured in scroll distance rather than time.

## Driving Animations from Scroll Position

The Intersection Observer API and the Scroll Timeline API together give precise control over scroll-linked animations. The pattern is consistent:

```javascript
const scene = document.querySelector('.scene');
const timeline = new ScrollTimeline({
  source: document.scrollingElement,
  axis: 'block'
});

scene.animate(
  [
    { transform: 'translateY(100vh)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 }
  ],
  {
    timeline,
    rangeStart: { rangeName: 'cover', offset: '0%' },
    rangeEnd: { rangeName: 'cover', offset: '100%' }
  }
);
```

The animation no longer runs against wall-clock time. It runs against scroll progress. If the user pauses, the animation pauses. If the user scrolls backward, the animation runs in reverse.

## Pacing the Reading Experience

Scroll-driven layouts have a tempo. A scene that resolves in fifty pixels of scroll feels frantic. A scene that takes three thousand pixels feels indulgent. The right tempo depends on the content. A product introduction may want long, deliberate scenes. A data narrative may want short, punchy ones.

Tempo is best tuned during reading rather than during design. Build the layout, then read the page from top to bottom at a natural scroll speed. Sections that feel rushed need more scroll distance. Sections that feel slack need less. The metric is how the reader feels, not how the designer planned.

## Accessibility and the Skip Path

A scroll-driven page that hides content until it animates into view is hostile to users who cannot or will not scroll through the entire timeline. Every scroll-driven layout needs a skip path: a navigation menu, a table of contents, or anchor links that bypass the choreography.

The animations themselves should respect the prefers-reduced-motion query. When a user requests reduced motion, the page should still tell its story, but with fades or instant reveals rather than transforms. The narrative survives the reduction; only the staging changes.
