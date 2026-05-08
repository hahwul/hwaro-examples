+++
title = "Buttons That Look Pressable"
date = "2025-02-10"
description = "Affordances drawn from physical hardware and how to render them in CSS."
tags = ["design", "skeuomorphism", "buttons", "css"]
+++

A flat button asks the user to trust a label. A skeuomorphic button asks the user to trust their hands. The difference is affordance, and the engineering of that affordance comes down to four CSS properties applied with discipline: border, box-shadow, background-color, and padding.

The earliest digital buttons borrowed directly from rocker switches, pushbuttons, and elevator panels. They had bezels, lit indicators, and a clear top and bottom edge. The reason they worked was not nostalgia. It was that the user already knew what to do without reading.

### The Anatomy of a Pressable Surface

A button that signals press-ability needs three visual cues: a raised edge, a contrasting face, and a directional shadow. The raised edge is built with a one or two pixel border in a tone slightly darker than the face. The face is a flat fill, not a gradient. Depth comes from a box-shadow offset down and to the right, suggesting a light source in the upper left.

```css
.button {
    background-color: #d8c9a8;
    border: 1px solid #7a6438;
    box-shadow:
        inset 0 1px 0 #ede0c2,
        0 2px 0 #5a4a28,
        0 4px 6px rgba(0, 0, 0, 0.4);
    padding: 0.75rem 1.5rem;
    color: #2a1f0c;
}
```

The inset highlight at the top simulates a beveled edge catching the room light. The two stacked outer shadows produce both the raised face (the hard 2px shadow) and the cast shadow on the surface beneath (the soft blurred shadow).

### The Press State

A press state must reverse the depth. The face drops, the cast shadow shrinks, and the inset highlight disappears. Without these changes the click feels unacknowledged.

```css
.button:active {
    transform: translateY(2px);
    box-shadow:
        inset 0 1px 2px rgba(0, 0, 0, 0.3),
        0 0 0 transparent,
        0 1px 2px rgba(0, 0, 0, 0.3);
}
```

The translate moves the element down by exactly the height of the previous hard shadow, so the visual depth collapses to zero. The inset shadow now points inward, suggesting the face has been pushed below its rest position.

The result is a control that behaves the way the user expects a physical control to behave, which is the entire purpose of a skeuomorphic interface.
