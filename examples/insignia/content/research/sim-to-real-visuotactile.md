+++
title = "Sim-to-Real Transfer for Visuotactile Grasp Policies on Deformable Objects"
date = "2025-07-22"
description = "Training a grasp policy entirely in simulation with domain randomization and deploying it zero-shot on soft, deformable lab objects — what transferred cleanly and what didn't."
+++

Deformable objects are the case where sim-to-real transfer usually breaks first: simulators are good at rigid-body contact and bad at foam, fabric, and produce-like softness, which is exactly the class of object a compliant hand is supposed to be good at. This note covers a visuotactile grasp policy trained entirely in MuJoCo with heavy domain randomization and deployed zero-shot on the physical TF-3 arm.

<!-- more -->

## Setup

The policy takes a top-down RGB-D crop of the target object plus the five-channel resistive contact reading from each fingertip (see the fingertip array note) and outputs a target grasp pose and a fingertip stiffness command. Training used a soft-body approximation for deformable objects — a coarse mass-spring mesh rather than a full FEM solver, which was the single biggest factor in keeping training fast enough to iterate on.

Domain randomization covered:

- Object mass, softness, and friction, sampled per episode from ranges wider than anything measured on the real object set.
- Camera pose, intrinsics noise, and lighting.
- Tactile sensor noise and a simulated 15–40ms reporting delay, since the real resistive foam layer is noticeably laggier than the rest of the control loop.

## Results

Evaluated zero-shot on a 40-object set spanning foam blocks, silicone produce replicas, and loosely packed fabric bundles, none of which the policy had seen even in simulation:

- 34 / 40 successful grasps (85%) on the first attempt, versus 22 / 40 (55%) for a rigid-grasp baseline policy trained on the same object set without softness randomization.
- Failures clustered almost entirely on the loosely packed fabric bundles, where the mass-spring approximation used in training visibly underestimates how much the object can slump between the visual crop being taken and the grasp executing.
- Median stiffness command on soft objects came out close to what we would have picked by hand, which was reassuring — the policy is not accomplishing this through some peculiar sensor exploit.

## Reward shaping that mattered

The reward term that made the biggest visible difference was not grasp success but a penalty proportional to peak fingertip force during the approach, which pushed the policy toward the "soft first, stiffen after" strategy engineers had assumed a hand-written controller would need but the learned one found on its own:

```python
def step_reward(contact_force, grasp_success, obj_deformed_frac):
    force_penalty = -0.4 * max(0.0, contact_force - FORCE_LIMIT)
    success_bonus = 10.0 if grasp_success else 0.0
    deform_penalty = -3.0 * obj_deformed_frac  # visible dents/creases
    return force_penalty + success_bonus + deform_penalty
```

## Open question

The fabric-bundle failures point at a real gap: cheap soft-body approximations are good enough for rigid-adjacent deformables but not for anything that can meaningfully rearrange itself between perception and contact. A higher-fidelity solver would help, at the cost of training throughput, and finding that tradeoff point is the next thing on the list.
