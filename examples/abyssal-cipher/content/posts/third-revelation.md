+++
title = "The Third Revelation"
date = "2024-04-08"
summary = "On hierarchy: what the eye notices first, second, and not at all."
+++

Every interface is a small contract about attention. The third revelation is that hierarchy is not an aesthetic choice — it is a navigational one.

## Three Tiers

Most pages can be cleanly resolved into three reading tiers:

1. **The anchor** — usually a title or a hero element. The eye lands here first.
2. **The orbit** — supporting copy, navigation, structural cues. Skimmed.
3. **The depth** — long-form text, footnotes, fine detail. Reached only when the user has decided to commit.

Treat the three tiers as a budget. Adding a fourth tier means demoting something else; rarely does it mean simply *adding*.

```css
.anchor  { font-size: clamp(2.4rem, 6vw, 4rem); letter-spacing: -0.02em; }
.orbit   { font-size: 1.05rem; line-height: 1.55; }
.depth   { font-size: 0.95rem; color: var(--text-muted); }
```

The cipher is not in the contrast itself — it is in knowing what should *not* be loud.
