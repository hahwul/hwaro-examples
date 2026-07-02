+++
title = "The Constraint Solver"
description = "Sequential impulses, warm starting, and position correction — how flint turns manifolds into believable, stable contact."
date = "2025-09-09"
weight = 50
toc = true
[extra]
label = "05 · solver"
+++

The solver's job is to make bodies stop overlapping and respond to each other the way solids do — without exploding, sinking, or jittering. flint uses **sequential impulses**: it visits every contact, applies a corrective impulse, and repeats for a fixed number of iterations. It is not a global solve, but it converges fast and it is trivially deterministic.

<!-- more -->

## Velocity constraints

For each contact, the solver computes the relative velocity along the normal and applies just enough impulse to remove any approaching component, scaled by restitution. Friction is a second constraint along the tangent, clamped to the Coulomb cone so it can never add energy:

```rust
for _ in 0..world.velocity_iterations {   // default: 8
    for m in &mut manifolds {
        for c in m.contacts_mut() {
            let rv = relative_velocity(a, b, c.point);
            let vn = rv.dot(m.normal);

            let mut lambda = -(vn + c.bias) * c.effective_mass;
            let old = c.normal_impulse;
            c.normal_impulse = (old + lambda).max(0.0);  // impulses only push
            lambda = c.normal_impulse - old;

            apply_impulse(a, b, m.normal * lambda, c.point);
        }
    }
}
```

Because the accumulated `normal_impulse` is clamped rather than the per-iteration delta, an over-correction in one pass is undone in the next. The clamp is what keeps contacts one-sided: flint pushes bodies apart, never pulls them together.

## Warm starting

At the start of each frame the solver applies the impulses cached in the persisted manifold *before* iterating. A stack that was stable last frame is nearly stable this frame, so warm starting means the iterations only correct the small change since — eight passes settle a tall stack that would need dozens from a cold start.

## Position correction

Velocity impulses remove approach speed but leave a little residual overlap. flint corrects position separately using Baumgarte stabilization with a slop tolerance:

| Parameter | Default | Effect |
|-----------|---------|--------|
| `slop` | `0.005` | overlap ignored below this, to avoid jitter |
| `beta` | `0.2` | fraction of remaining penetration removed per step |
| `velocity_iterations` | `8` | passes over the velocity constraints |
| `position_iterations` | `3` | passes over the position constraints |

Splitting velocity and position keeps the response stable: fixing overlap by injecting velocity would add energy the restitution model never accounted for. Leftover penetration is bled off gently, `beta` at a time, so bodies ease apart instead of popping.

> Every loop in the solver iterates in a fixed order — pairs by `BodyId`, contacts by index, iterations by count. No hash-map traversal, no thread scheduling, no early-out that depends on timing. That rigidity is deliberate: it is what lets [rollback](/manual/determinism/) re-run the exact same solve and get the exact same bytes.
