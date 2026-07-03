+++
title = "Anchor Positioning Clears Baseline, the Prompt API Ships Behind a Flag"
date = "2026-06-29"
description = "CSS anchor positioning is Baseline Newly Available across all four engines this week, Chrome puts an on-device Prompt API behind a flag, and TC39 advances Array.fromAsync to Stage 4."
tags = ["css", "baseline", "chrome", "ai"]
[extra]
issue_number = 214
dek = "CSS anchor positioning is Baseline Newly Available across all four engines this week, Chrome puts an on-device Prompt API behind a flag, and TC39 advances Array.fromAsync to Stage 4."
+++

Anchor positioning had been sitting in the "limited availability" column for three quarters; this week all four major engines agree on measured interoperability, so it crosses into Baseline Newly Available. That's the headline. The rest of the issue is smaller motions: an experimental on-device prompt API, a Stage 4 array helper, and a CSSWG resolution that quietly changes how `anchor-name` cascades.

<!-- more -->

## Shipped this week

CSS anchor positioning — `position-anchor`, `anchor()`, and the `@position-try` at-rule — is now Baseline Newly Available. The feature lets an absolutely positioned element read the geometry of another element without JavaScript, which is the piece tooltip and popover libraries have been polyfilling since 2019.

```css
.tooltip {
  position: fixed;
  position-anchor: --trigger;
  top: anchor(--trigger bottom);
  left: anchor(--trigger center);
  translate: -50% 8px;
}

@position-try --flip-up {
  top: anchor(--trigger top);
  translate: -50% -100%;
}
```

Anchor names are declared with `anchor-name: --trigger` on the reference element. `position-try-fallbacks` swaps in `--flip-up` automatically when the tooltip would overflow the viewport, so the flipping logic that used to live in a resize observer now lives in the cascade.

## Behind a flag

Chrome 127 ships an experimental Prompt API behind `chrome://flags/#prompt-api-for-on-device-model`. It exposes a small local language model through `window.ai.createTextSession()` for short rewrite and summarize tasks, with no network request and a hard 4,096-token context window. Origin trial sign-ups open next month; until then it is flag-only and cleared on every profile reset.

## Spec movement

TC39 advanced `Array.fromAsync` to Stage 4 at this month's plenary, closing out the last open editorial question about how it handles non-iterable array-likes. It ships as a normal method addition in the next engine cycle behind no flag at all — Stage 4 items rarely need one.

The CSSWG resolved a smaller but consequential issue: `anchor-name` now cascades and inherits like any other custom-ident property, reversing an earlier draft that treated it as non-inherited. Implementers asked for the change after finding it easier to reason about anchor scoping through the existing cascade rules than a bespoke inheritance model.

## Worth tracking

- Safari Technology Preview 201 adds anchor positioning support, roughly a build behind Chrome and Firefox.
- The `@position-try` shorthand syntax is still marked "at risk" pending a second implementation of the `most-height` try tactic.
- Node's WHATWG streams implementation picked up discussion of a `TextDecoderStream` chunking mode, unrelated to browser news this week but worth a glance if you touch server-side parsing.
- [Last week's issue](/issues/issue-213/) covered Firefox Nightly's cross-document view transition flag; a companion Chromium bug now tracks the same `view-transition-class` grouping syntax for parity.
