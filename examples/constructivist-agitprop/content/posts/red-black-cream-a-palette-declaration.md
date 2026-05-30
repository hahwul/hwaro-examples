+++
title = "RED, BLACK, CREAM: A PALETTE DECLARATION"
date = "2024-08-22"
description = "Three colors are not a limitation. They are a discipline. How constraint produces identity, and why decorative color is cowardice."
tags = ["color", "theory", "typography"]
authors = ["Konstrukt Press"]
+++

Every designer I have met who uses too many colors is afraid of something.

They are afraid that without variety, the work will look bare. They are afraid of the blank space between the red and the black. They reach for a third grey, a fourth blue, a fifth accent, because **restraint looks like poverty to the untrained eye** and they have not trained themselves out of that fear.

This dispatch is about training yourself out of that fear.

## THE PALETTE

Three colors. Only three.

- `#d11f1f` — Constructivist red. Not traffic red, not cherry, not coral. This specific red. It carries the weight of a century of radical print.
- `#141414` — Near-black. Not pure `#000000`, which is a printing accident. Near-black reads as ink on paper, which is what we are simulating.
- `#efe7d6` — Cream. The color of aged newsprint, of pamphlets handled by many hands. Warm, not white. White is clinical. Cream is *political*.

---

## WHY IT WORKS

A three-color palette creates a **binary system with an accent**. The two neutrals — black and cream — handle all the structure: text on background, background on text. The red does one job: *it fires.* It fires on the most important element of the composition, and because it fires only once, the shot lands.

> When red appears everywhere, it means nothing. When red appears once, it means everything.

This is the lesson that decorative design has not learned. The gradient designers, the shadow-merchants, the people who apply ten shades of blue to a single interface — they have forgotten that **color is punctuation, not prose**.

### THE ASSIGNMENT

Build a page. Any page. Use only `#efe7d6`, `#141414`, and `#d11f1f`. No other colors, including grey. When you reach for grey, stop and ask: is this element important enough to receive red, or unimportant enough to be invisible? The answer is always one or the other. Grey is the refusal to decide.

## ON IMPLEMENTATION

In CSS custom properties, declare the palette once and never deviate:

```css
:root {
  --red:   #d11f1f;
  --black: #141414;
  --cream: #efe7d6;
}
```

Every property in every rule draws from these three variables. **No inline colors. No magic values buried in component files.** If you cannot find the color in the root declaration, it should not exist.

---

The `::selection` pseudo-element should be red with cream text. This is not decoration. It is a reminder, each time a reader highlights a passage, that the palette is a commitment, not an option.

## THE FEAR

The fear I mentioned at the start is real. Restraint looks like poverty. The solution is not to add colors. The solution is to make your three colors do so much work that nobody has time to notice there are only three.

Big type. Heavy rules. Bold geometry. Precise white space.

Work hard enough at those four things and the palette will look **inexhaustible**.
