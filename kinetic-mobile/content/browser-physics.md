---
title = "Physics in the Browser"
date = "2023-10-25"
---

Simulating real-world physics in a web browser requires balancing mathematical accuracy with performance and aesthetics.

The hanging elements in this theme utilize a simplified pendulum simulation. When the user scrolls, the scroll velocity is translated into an angular force applied to the bottom of the element.

* **Weight (Inertia):** Elements with higher 'weight' require more force to start moving and more time to slow down.
* **Length:** The length of the wire affects the frequency of the swing. Shorter wires swing faster; longer wires swing slower but arc further.
* **Damping:** A friction coefficient is applied every frame to gradually slow the swinging to a halt, simulating air resistance.

By attaching the rotation to the scroll event in a passive manner and computing the physics inside a `requestAnimationFrame` loop, the browser can maintain a smooth 60fps even as multiple elements swing simultaneously.