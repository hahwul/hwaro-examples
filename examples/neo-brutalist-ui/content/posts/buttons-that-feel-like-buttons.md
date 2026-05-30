+++
title = "Buttons That Feel Like Buttons"
date = "2024-09-18"
description = "The neo-brutalist press-down interaction pattern — how a translate transform and a shrinking shadow restore the physical confidence that flat design took away."
tags = ["interaction", "css", "ux"]
authors = ["LOUD.CSS"]
+++

## The Flat Design Hangover

Flat design arrived around 2013 with a reasonable premise: skeuomorphic interfaces had overcorrected. Glossy buttons that looked like they had been photographed under studio lighting, leather textures that had no business being on a calendar app. The backlash was warranted.

The overcorrection was not. By removing all depth cues from buttons, flat design created a generation of interfaces where the user cannot tell at a glance what is interactive and what is decorative. **The affordance crisis is a direct consequence of the depth crisis.**

Neo-brutalism fixes this with a technique that is almost embarrassingly mechanical: the press-down interaction.

---

## How the Press-Down Works

The default state: a button with a thick solid border and a hard offset shadow. The shadow is positioned at `(6px, 6px)` — to the right and downward. This creates the optical impression of a physical object elevated above the surface.

The hover/active state: the button *translates* toward its shadow while the shadow *shrinks* by the same amount.

```css
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #ffd23f;
  border: 3px solid #000;
  box-shadow: 6px 6px 0 #000;
  font-family: 'Arial Black', Helvetica, sans-serif;
  font-weight: 900;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.btn:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 #000;
}

.btn:active {
  transform: translate(6px, 6px);
  box-shadow: 0 0 0 #000;
}
```

Three states. Default is lifted. Hover is halfway down. Active is fully pressed. The element moves *into* the canvas. The physics are fake but the metaphor is precise.

---

> "The best interaction design borrows from the physical world just enough to be understood, and stops before it becomes a lie."

---

## Why the Transition Duration Matters

`0.1s ease` is not arbitrary. The press-down interaction works because it is *fast*. A `0.3s` transition makes the button feel sluggish and deliberate — it starts to feel like an animation rather than a response. At `0.1s`, the response is almost immediate, which is what a physical button does. You press it and it goes down.

The `ease` timing function adds a tiny deceleration that prevents the movement from feeling mechanical. `linear` would work but it reads as robotic. `ease-in` is wrong — it starts slow, meaning the first 30ms of your click are unresponsive, which is the worst possible moment to be unresponsive.

**Details in interaction design compound.** A 0.1s ease transition on a translate-and-shadow pair is about twelve characters of CSS. It is the difference between a button that feels like hardware and one that feels like a picture of hardware.

---

## Applying It to Cards

The same pattern scales to clickable cards:

```css
.post-entry {
  border: 3px solid #000;
  box-shadow: 6px 6px 0 #000;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  cursor: pointer;
}

.post-entry:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 #000;
}
```

The card lifts by being in the elevated state at rest and presses down toward the user's cursor on hover. It communicates *this entire region is interactive*, which eliminates the "is this a link or a block of text?" ambiguity that plagues card-based layouts.

### One Rule for Card Interaction

If a card is entirely wrapped in an anchor tag, apply the press-down to the card. If only part of a card links somewhere, apply it only to the link elements. Do not apply it to elements the user cannot interact with — the physical metaphor breaks immediately if untouchable things respond to the cursor.

---

## The Anti-Pattern: Hover-Only Color Changes

The previous generation's answer to button feedback was `background-color` transitions on hover. It is not wrong exactly, but it communicates *mode change* rather than *physical response*. The user's mental model is not "this button changed color when I put my cursor on it." It is "this button sank slightly into the screen, as all real buttons do."

The press-down does not replace color changes — use both. But if you have to pick one, the transform wins. **Movement communicates response. Color communicates state.** The user, in the moment of clicking, needs response.
