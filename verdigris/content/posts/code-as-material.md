+++
title = "Code as Material"
date = "2026-02-20"
tags = ["engineering", "craft"]
categories = ["essays"]
description = "Software has material properties. Treating code like a physical medium changes how we build."
+++

We speak of software as if it were immaterial. Weightless. Infinitely malleable. But anyone who has worked with a large codebase knows this is false. Code has grain. It resists certain changes and accommodates others. It has weight and inertia.

## The Grain of Code

Wood has grain. Cut with it, and the work is smooth. Cut against it, and you fight every inch. Code is the same.

Every codebase develops conventions, patterns, and implicit rules. These form the grain. A well-structured codebase has a clear grain that guides new work into coherent patterns. A poorly structured one has no grain at all -- or worse, contradictory grains that make every change a negotiation.

## Material Constraints

Physical materials have constraints that shape what you can build:

| Material | Constraint | Resulting Form |
|----------|-----------|---------------|
| Stone | Compression strength | Arches, columns |
| Steel | Tensile strength | Bridges, frames |
| Code | Complexity budget | Modules, interfaces |

The complexity budget is real. Every abstraction adds weight. Every dependency adds friction. The art is in knowing what the material can bear.

## Working with the Medium

The best engineers I know approach code the way a sculptor approaches marble. They study the existing form before cutting. They remove material rather than add it when possible. They understand that the negative space -- what they chose *not* to build -- defines the work as much as what they did.

```python
# This function does one thing well
def oxidize(surface: Metal, duration: Duration) -> Patina:
    """Transform a metal surface through controlled exposure."""
    exposure = calculate_exposure(surface.composition, duration)
    return surface.transform(exposure)
```

Simple. Clear. One responsibility. No decoration.

## The Test of Time

Material quality reveals itself over time. Cheap materials degrade. Quality materials develop character. The same is true of code. A well-built module becomes more valuable as the system around it evolves, because its clear boundaries and honest interfaces make it adaptable without modification.

Build with the grain. Respect the material. Let time prove the work.
