+++
title = "Determinism & Rollback"
description = "Integer-anchored math, strict ordering, and cheap snapshots — the properties that make lockstep netcode and frame-perfect rollback possible."
date = "2026-01-20"
weight = 60
toc = true
[extra]
label = "06 · rollback"
+++

Determinism is the property that a simulation, started from identical state and fed identical inputs, produces byte-identical output — on any machine, in any build, every time you run it. Everything else in flint exists to protect this property. This chapter is why it holds and how to use it.

<!-- more -->

## Why floats are not enough

IEEE-754 arithmetic is deterministic *per instruction*, but compilers reorder it, fuse multiply-adds, and vary transcendental functions across platforms. Two machines can disagree on the last bit of a `sin`, and one bit of divergence compounds within a few hundred ticks into two completely different simulations.

flint sidesteps this. Its core integrator and solver run on **fixed-point** arithmetic: positions and velocities are `i64` values with a fixed fractional scale, and every operation is integer add, multiply, and shift. There is no `fma`, no reordering that changes results, no platform-specific math library on the hot path.

```rust
// Q32.32 fixed point: one integer, deterministic everywhere.
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct Fx(i64);

impl Fx {
    pub const ONE: Fx = Fx(1 << 32);
    pub fn mul(self, rhs: Fx) -> Fx {
        Fx(((self.0 as i128 * rhs.0 as i128) >> 32) as i64)
    }
}
```

## Strict ordering

Determinism also requires that operations happen in the same order everywhere. flint never iterates a hash map, never depends on thread scheduling, and never early-outs on a wall-clock timer. Bodies, pairs, contacts, and iterations are all visited in a fixed, index-based order, established in the [broadphase](/manual/collision/) and preserved through the [solver](/manual/solver/).

## Snapshot and restore

Because the world is a flat array of fixed-point bodies with no hidden pointers, a snapshot is a memcpy and a restore is the reverse:

```rust
let frame_42 = world.snapshot();     // packed bytes, no allocation of graphs
// ... simulate ahead speculatively ...
world.restore(&frame_42);            // back to the exact state of frame 42
```

## Rollback netcode

Put those together and you have rollback. Each client simulates forward using predicted remote inputs. When the real inputs arrive, the client restores the last agreed frame and re-simulates the intervening ticks with corrected inputs:

```rust
fn on_remote_input(world: &mut World, log: &InputLog, confirmed: Frame) {
    world.restore(log.snapshot_at(confirmed));
    for frame in confirmed..log.latest() {
        world.set_inputs(log.inputs_at(frame));
        world.step();
    }
}
```

Because the re-simulation is deterministic, the corrected timeline lands on exactly the state the authoritative peer computed — no drift to reconcile, no visible snap beyond the mispredicted frames. Same inputs, same bytes, every machine.

> Determinism is not a feature you switch on at the end. It is a constraint every earlier chapter was written to respect: a fixed timestep, integer-anchored math, a stable pair order, and a solver that never consults the clock. Break any one and rollback stops landing on the same state.
