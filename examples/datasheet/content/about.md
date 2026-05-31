+++
title = "About"
description = "What Datasheet is, the decisions behind the part, and the conditions under which it is guaranteed to operate."
date = "2026-04-01"
+++

Datasheet is a documentation theme that borrows its entire visual language from the electronic component datasheet: the part-number header, the FEATURES column, the absolute-maximum-ratings box, the numbered sections, and the electrical-characteristics table. It is built for technical reference docs where tables carry as much weight as prose.

## The decisions behind the part

- A dark PCB-charcoal substrate with silkscreen-white text and a single phosphor-green data accent. Amber is reserved for caution.
- Monospace for every piece of data, a tight grotesk for prose paragraphs. The two never trade jobs.
- Solid fills and hairline borders only. The stylesheet uses flat colors, box-shadow, and SVG strokes — nothing blended.
- Tables are first-class. Each markdown table renders as an electrical-characteristics block with a tinted unit column and zebra rows.

## Functional description

The homepage carries a pinout diagram: a rectangular IC body with numbered pins on both sides, each pin wired to a documentation section. Every doc page opens with a component header block — a part number, a FEATURES list, and an ABSOLUTE MAXIMUM RATINGS table. Headings are numbered like real datasheet sections, `1.0`, `1.1`, `2.0`.

## Operating conditions

This is a reference theme, not a marketing page. There is no carousel, no testimonial block, and no scroll-triggered motion. It is meant to be read at a workbench.

## License

MIT. Take it, fork it, and send a pull request if you improve the part.
