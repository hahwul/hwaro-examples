+++
title = "Bodies & Colliders"
description = "Dynamic, static, and kinematic bodies; the four collider shapes; and the material fields that decide how contact feels."
date = "2025-04-22"
weight = 30
toc = true
[extra]
label = "03 · bodies"
+++

A body is a shape with mass and a material. flint keeps the set deliberately small — four shapes, three body types, three material scalars — because a small surface is easier to make deterministic and easier to reason about when a stack refuses to settle.

<!-- more -->

## Body types

| Type | Moves | Mass | Typical use |
|------|-------|------|-------------|
| `dynamic` | integrated by forces and impulses | finite | crates, characters, debris |
| `static` | never | infinite | floors, walls, level geometry |
| `kinematic` | by velocity you set | infinite | platforms, doors, scripted motion |

Static and kinematic bodies have infinite mass, so contacts push *against* them without moving them. A kinematic body carries velocity for the solver to read, which lets a moving platform impart momentum to the crate riding it.

## Shapes

flint ships four colliders: `circle`, `box`, `capsule`, and convex `polygon` (up to 8 vertices). Each computes its own area, centroid, and moment of inertia so mass is derived from density rather than guessed:

```rust
let barrel = Body::dynamic(Shape::circle(0.5))
    .density(0.9)          // mass = density * area
    .restitution(0.35)     // bounciness, 0..1
    .friction(0.6);        // Coulomb coefficient

let ramp = Body::stat(
    Shape::polygon(&[
        Vec2::new(-4.0, 0.0),
        Vec2::new( 4.0, 0.0),
        Vec2::new( 4.0, 1.5),
    ])
);
```

## Materials

Three scalars govern how a contact resolves:

- **restitution** — the bounce ratio. Two bodies in contact combine restitution by taking the maximum, so one lively surface is enough to bounce.
- **friction** — the Coulomb coefficient. Combined by geometric mean, `sqrt(a * b)`, which keeps a slick body slick against a rough one.
- **density** — sets mass; a body can also be given an explicit `mass()` when you want to override the derived value.

> Contacts below flint's velocity threshold are treated as resting, and restitution is suppressed for them. Without that cutoff a stack of boxes would jitter forever, each micro-bounce re-seeding the next. The threshold is why stacks in flint go quiet.

Bodies are cheap to create but not free to simulate; sleep idle dynamic bodies with `world.sleep_below(threshold)` so a settled pile stops consuming solver iterations until something wakes it.
