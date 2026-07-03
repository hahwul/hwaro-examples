+++
title = "CV"
description = "Full curriculum vitae for Petra Lindqvist — PhD candidate in robotics working on compliant manipulation and grasping."
+++

## Summary

Fifth-year PhD candidate in robotics at Aldergrove Institute of Technology, working on the mechanics and control of compliant manipulators — hands and arms that use passive and variable stiffness to handle contact uncertainty instead of relying on control bandwidth alone. Dissertation work centers on variable-stiffness fingertips and the tactile-informed controllers needed to switch them from soft to stiff automatically. Four years of prior experience designing end-of-arm tooling in industry before returning to graduate study.

## Core stack

`Python` `C++` `ROS 2` `MuJoCo` `Isaac Gym` `PyTorch` `CAN / EtherCAT` `SolidWorks` `KiCad` `Linear & nonlinear control` `Tactile sensing` `Series-elastic actuation`

## Education

**PhD, Robotics — Aldergrove Institute of Technology**
*2021 — present (expected 2026)*

Dissertation: *Variable-Stiffness Fingertips for Contact-Rich Grasping*. Advisor: Prof. Alden Marsh, Thornfield Manipulation Lab.

**M.S., Mechanical Engineering — Cobrenna Polytechnic**
*2019 — 2021*

Thesis on compliant tendon routing for underactuated fingers. Graduated with distinction.

**B.S., Mechanical Engineering — Cobrenna Polytechnic**
*2015 — 2019*

## Research experience

**Graduate Researcher — Thornfield Manipulation Lab**
*2021 — present*

Design, build, and control compliant grasping hardware for the lab's TF-series test arms. Selected outcomes:

- Designed and built three generations of variable-stiffness fingertips, the current one commanding stiffness from 4 to 40 N/mm in under 150 ms.
- Trained and deployed visuotactile grasp policies that transfer from simulation to the physical TF-3 arm without any real-world fine-tuning, evaluated on a 40-object deformable-goods set.
- Built and open-sourced `tfgrasp`, the lab's Python control library for compliant hands, now used by three other groups in the department.
- Mentored four undergraduate research assistants and supervised the lab's introductory mechatronics course for three semesters.

**Mechanical Design Engineer — Harrow Automation**
*2019 — 2021*

Designed end-of-arm tooling — vacuum cups, two- and three-finger jaws, and quick-change mounts — for warehouse pick-and-place cells serving mixed-SKU fulfillment lines.

- Reduced gripper-induced product damage on a soft-goods line from 6% to under 1% by moving from position-controlled jaws to a passively compliant, spring-loaded finger design.
- Standardized the shop's quick-change tooling interface across eleven customer deployments, cutting changeover time from roughly twenty minutes to under three.

## A compliant-grasp loop, roughly

The shape of the fingertip controller looks less like a PID loop and more like a small state machine gated by contact events, because the interesting behavior is almost entirely about *when* to switch stiffness, not how tightly to hold a setpoint:

```python
def close_until_contact(hand, k_min=4.0, k_max=40.0, dx=0.4):
    """Close fingers under low stiffness until tactile contact,
    then ramp stiffness up to hold the grasp."""
    hand.set_stiffness(k_min)
    while not hand.contact_detected():
        hand.step_close(dx)
    hand.ramp_stiffness(k_min, k_max, duration=0.15)
    return hand.grasp_report()
```

Almost every regression I have chased in three years of this project traces back to that stiffness ramp happening at the wrong moment — too early and the hand still crushes soft objects, too late and a rigid grasp never forms before the object shifts.

## Teaching

- Instructor of record, *Introductory Mechatronics Lab*, Aldergrove Institute of Technology, 2023 – 2025 (three semesters).
- Teaching assistant, *Robot Kinematics and Control*, Aldergrove Institute of Technology, 2022.

## Talks

- "Stiffness as a Control Variable" — Compliant Robotics Workshop, 2026.
- "What Warehouse Grippers Taught Me About Softness" — Aldergrove Robotics Seminar, 2024.

## References

Available on request — see [research notes](/research/) for detailed, dated write-ups of the work summarized above.
