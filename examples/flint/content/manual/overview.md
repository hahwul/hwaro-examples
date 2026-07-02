+++
title = "The Simulation Model"
description = "A world, a set of bodies, and a step function. What flint simulates and the shape of a frame."
date = "2025-02-11"
weight = 10
toc = true
[extra]
label = "01 · model"
+++

flint models a **world**: a collection of rigid bodies that move under forces and resolve their overlaps once per tick. There is no scene graph, no rendering, and no allocation during a step. You own the loop; flint owns the math.

<!-- more -->

A frame is four ordered phases, always in this sequence:

1. **Integrate** — apply gravity and forces, advance velocities and positions by the fixed `dt`.
2. **Broadphase** — find pairs of bodies whose bounds might overlap.
3. **Narrowphase** — for each candidate pair, compute a contact manifold.
4. **Solve** — apply impulses so bodies stop interpenetrating and bounce correctly.

## A minimal world

```rust
use flint::{World, Body, Shape, Vec2};

let mut world = World::new(Vec2::new(0.0, -9.81));

// A static floor and one dynamic box.
world.add(Body::stat(Shape::segment(Vec2::new(-40.0, 0.0), Vec2::new(40.0, 0.0))));
let cube = world.add(
    Body::dynamic(Shape::box(1.0, 1.0))
        .position(Vec2::new(0.0, 12.0))
        .restitution(0.2),
);

// Advance exactly one tick.
world.step();

let p = world.body(cube).position();
println!("cube is at {:.3}, {:.3}", p.x, p.y);
```

`World::step` takes no arguments. The timestep is a property of the world, fixed at construction, and never varies from frame to frame — that invariant is what the next chapter is about.

## What a body is

Every body carries a shape, a transform, a velocity, and a small material (mass, restitution, friction). Bodies are referenced by a lightweight `BodyId` handle rather than a pointer, so the world can relocate its storage between frames without invalidating anything you hold. Handles are also what make [snapshots](/manual/determinism/) cheap: a snapshot is just the packed body array, and a `BodyId` means the same body before and after a restore.
