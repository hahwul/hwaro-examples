+++
title = "Scroll-State Queries Land Behind a Flag, Temporal Clears Stage 4"
date = "2026-06-01"
description = "Chrome puts scroll-state container queries behind a flag, TC39 formally advances Temporal to Stage 4, and Baseline adds the last has() edge case engines spent a year aligning on."
tags = ["css", "javascript", "tc39"]
[extra]
issue_number = 210
dek = "Chrome puts scroll-state container queries behind a flag, TC39 formally advances Temporal to Stage 4, and Baseline adds the last has() edge case engines spent a year aligning on."
+++

Temporal's Stage 4 promotion closes out a proposal that has been in committee since 2021, longer than some of the engineers now shipping it have worked on their respective JavaScript teams.

<!-- more -->

## Shipped this week

The last outstanding `:has()` interop bug — a mismatch in how engines handled `:has()` combined with a following-sibling combinator inside `:not()` — is resolved across Chromium, Firefox, and Safari, and the full `:has()` feature moves from "Newly Available" to plain "Available" in the Baseline tracker, its final status tier.

## Behind a flag

Chrome 128 adds scroll-state container queries behind `chrome://flags/#enable-container-queries`. These let a stylesheet respond to whether a container is stuck, snapped, or scrollable, without a scroll event listener:

```css
.sticky-header {
  container-type: scroll-state;
}

@container scroll-state(stuck: top) {
  .sticky-header {
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.15);
  }
}
```

Only the `stuck` state is implemented behind the flag so far; `snapped` and `scrollable` are drafted in the spec but return `unknown` in this build.

## Spec movement

TC39 formally advanced Temporal to Stage 4 at this month's plenary — the proposal is now spec-complete and slated for the next edition of ECMA-262, with engine work already well underway in all three major JavaScript engines ahead of formal ratification.

The CSSWG opened a new issue asking whether `@position-try` fallback conditions should be able to reference container query state directly, rather than only viewport-relative overflow. No resolution is expected before the rest of the anchor positioning surface stabilizes.

## Worth tracking

- Safari 18.5 beta adds partial support for `text-wrap: pretty`, trailing Chrome and Firefox by about two months.
- Deno and Bun both merged experimental Web Locks API support this week, following the browsers rather than leading for once.
- The TAG published a review of the scroll-state container query explainer with one open concern about interaction with `overflow: clip` ancestors, unresolved as of this issue.
- The Interop 2026 focus list finalized in [the previous issue](/issues/issue-209/) is now linked from every relevant MDN status banner, a first for the project.
