+++
title = "Typography After Dark"
date = "2025-02-18"
description = "Why most typefaces stop working when the page goes dark, and what to do about it."
tags = ["typography", "design"]
+++

Type that looks crisp on a white page often falls apart on a twilight one. The reason is simple: most digital faces were drawn for positive contrast, with hinting tuned for dark glyphs on a light field. Reverse the polarity and the same letters bloom, the counters fill in, and the rhythm of the line gets noisy.

## Pick Faces Drawn for Reverse

A handful of families were drawn knowing they might run light-on-dark. They tend to share three traits: open apertures, consistent stroke weight, and slightly looser spacing than their print cousins. Inter, Source Serif, and IBM Plex hold up. Heavy display serifs with hairline contrast usually do not.

## Lower the Weight, Raise the Tracking

Body copy that reads as Regular on white needs to drop to a notch lighter on a dark surface, often a Book or a "Text" cut if the family offers one. Add about half a percent of letter spacing. The page will look the same to a casual reader and feel measurably calmer to anyone reading more than a paragraph.

```css
body {
  font-family: "Source Serif", Georgia, serif;
  font-weight: 380;
  letter-spacing: 0.005em;
  line-height: 1.65;
}
```

## Headings Are the Exception

Display sizes can keep their original weight; bloom is less visible above 28 pixels. What does matter is color. Pure white headlines over a dark background create a halation that makes the rest of the page look gray. Knock the heading color back to the same warm off-white used for body text. The hierarchy holds, and the page stops vibrating.

Twilight typography is mostly subtraction. Less weight, less contrast, less ornament.
