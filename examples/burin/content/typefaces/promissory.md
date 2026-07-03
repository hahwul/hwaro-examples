+++
title = "Promissory"
date = "2025-05-22"
description = "A hairline text face revived from the intaglio counter of an 1866 five-pound note, engraved with fine parallel lines meant to defeat forgers, not to be read fast."
tags = ["numerals", "text", "banknote"]
slug = "promissory"
template = "typeface"
[extra]
catalog_no = "02"
source_type = "Banknote engraving"
source_detail = "Five-pound promissory note, counter engraved by Aldous and Kerr, 1866"
year_source = "1866"
classification = "Text face with tabular figures"
styles = "Regular, Regular Numerals"
license = "Desktop and web, studio license, up to 6 seats"
specimen_word = "PROMISSORY"
+++

Banknote engravers of the 1860s were solving a problem type designers rarely face on purpose: making letters that are almost impossible to copy by hand. Aldous and Kerr's counter for an 1866 five-pound note packs its denomination and issuing bank name into a strip barely four millimetres tall, built from parallel hairlines so fine that a forger's engraving tool would wander off true before finishing a single letter. Promissory is what happens when you scale that strip back up to a readable text size and ask what the letters actually look like once the anti-counterfeiting pressure is gone.

<!-- more -->

The answer is a face that still carries the DNA of its defensive purpose: unusually even stroke weight, very little contrast, and a slight geometric stiffness in the counters, as if every curve had been drawn with a compass rather than a hand. It's a strange text face, and I like it for exactly that reason.

## Source

The plate came to me as a set of five uncut proof sheets from a paper conservator clearing a private collection, three of which included the engraver's full counter panel rather than just the printed note. Aldous and Kerr's own hand is documented in only two other surviving plates, both ledger stock rather than currency, which made the counter panel the most complete single source of their lettering I could find.

## Reading the anti-counterfeit logic

Security engraving of the period relied on line density a forger's tool couldn't replicate freehand, not on unusual letterforms — which is why Promissory's shapes are actually quite plain underneath the hairline treatment. I kept the numerals distinctly tabular and slightly wider than the capitals, matching the original counter's practice of giving the denomination figures extra visual weight so a teller could check the amount at a glance without reading the full engraved text.

## Where it wants to be used

Promissory is built for tables, ledgers, and any text where numerals need to line up and hold their identity at small sizes: invoices, specimen labels, colophons. It is not a display face — the hairline discipline that made it forgery-resistant also makes it read slowly above 24 points, where the strokes start to feel thin rather than precise.

```css
.ledger-figure {
  font-family: "Promissory", ui-monospace, monospace;
  font-variant-numeric: tabular-nums;
}
```
