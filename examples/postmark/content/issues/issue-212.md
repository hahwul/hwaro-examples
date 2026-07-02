+++
title = "CSS if() Lands in Canary, Web Locks Goes Baseline"
date = "2026-06-15"
description = "Chrome Canary gets an early build of the CSS if() function, the Web Locks API reaches Baseline, and Intl.DurationFormat ships across engines."
tags = ["css", "javascript", "baseline"]
[extra]
issue_number = 212
dek = "Chrome Canary gets an early build of the CSS if() function, the Web Locks API reaches Baseline, and Intl.DurationFormat ships across engines."
+++

The CSS Working Group's most-requested feature in three separate developer surveys — a real conditional function for stylesheets — has a Canary build to poke at. It is early, gated behind a flag, and the syntax is still shifting under it, but it works.

<!-- more -->

## Shipped this week

The Web Locks API (`navigator.locks.request()`) reaches Baseline Newly Available. It has been available in Chromium and Firefox for years; Safari 18.4 was the last holdout, and its arrival this week closes the interop gap. The API coordinates access to a shared resource — an IndexedDB write, a service worker cache update — across multiple tabs of the same origin without a message-passing library.

```js
await navigator.locks.request("cache-write", async (lock) => {
  const cache = await caches.open("v3");
  await cache.put(request, response);
});
```

`Intl.DurationFormat` also crosses into Baseline this week, giving `"3 hours, 12 minutes"`-style output without a hand-rolled pluralization table.

## Behind a flag

Chrome Canary 129 includes an early implementation of the CSS `if()` function behind `chrome://flags/#enable-experimental-web-platform-features`. The current syntax accepts container-query and media-query conditions inline in a property value:

```css
.card {
  padding: if(media(width > 600px): 2rem; else: 1rem);
}
```

Style-query conditions — testing a custom property's value rather than a media feature — are drafted but not yet in the Canary build. The CSSWG's working note says style-query support is "next," not "soon."

## Spec movement

The CSSWG resolved to rename the `if()` function's `else` branch keyword from a bare `else` to `else:` with a trailing colon, matching the syntax of the other branches, after implementers found the asymmetry confusing to parse by eye during review.

Temporal, the long-running date and time proposal, is one plenary away from Stage 4. The remaining blocker is a disagreement over `Temporal.Instant` string-parsing leniency that the champions expect to resolve by the next meeting.

## Worth tracking

- Firefox's `about:config` gains a `layout.css.if-function.enabled` flag mirroring Chrome's, though it renders nothing yet — parsing only.
- MDN's CSS reference for `if()` already has a stub page, several weeks ahead of any shipping implementation, which the docs team says is deliberate this cycle.
- The Intl Working Group opened discussion on an `Intl.NumberFormat` rounding-mode extension requested by financial-reporting library authors.
- The customizable `<select>` part rename flagged in [last week's issue](/issues/issue-211/) shipped its aliasing period on schedule; the old `::picker-icon` name still resolves for one more release.
