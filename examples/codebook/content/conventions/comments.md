+++
title = "Comments and Documentation"
weight = 30
+++

Comments are a tool for communicating intent that the code itself cannot express. They are not a substitute for clear naming, and they are not a place for changelog entries.

## Principles

1.  **Explain Why, Not What:** The code already shows what it does. The comment exists to explain the reason behind a non-obvious decision.
2.  **Keep Comments Close:** A comment must sit directly above the line or block it describes. Comments that drift from their target become misleading as the code evolves.
3.  **Delete Stale Comments Aggressively:** A comment that no longer matches the code is worse than no comment at all.

## When a Comment Is Required

Write a comment when the reader cannot reconstruct the reason for a decision from the code alone. Typical cases include workarounds for upstream bugs, performance trade-offs, and references to specifications or tickets.

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-javascript">// Increment i by 1
i = i + 1;</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-javascript">// The upstream API returns 0-based page indexes,
// but the dashboard displays 1-based labels.
// See ticket BILL-1428.
displayPage = apiPage + 1;</code></pre>
  </div>
</div>

## Public API Documentation

Every exported function, class, and type must carry a doc comment that describes its contract: what it accepts, what it returns, and what it throws. Use the documentation format native to the language (`JSDoc`, `rustdoc`, `///` for C#, etc.).

## TODO Markers

A `TODO` comment must include an owner and a tracking ticket. A bare `TODO` is a memory leak in the codebase.

```javascript
// TODO(alice, BILL-1503): replace with the canonical retry helper
//                        once it lands in shared/http.
```

## Comments to Avoid

Do not commit commented-out code. Version control already preserves history. Do not write banner comments that decorate sections; structure the code so that the structure itself is the banner.
