+++
title = "Project Orbit"
description = "Satellite-tracking console for a small-team mission operations centre."
date = "2025-01-09"
+++

Orbit replaces the patchwork of legacy tools that mission controllers used to track three low-earth-orbit satellites. The console brings ground-station status, telemetry health, and pass schedules into a single view.

### Display Hierarchy

1. **Pass timeline** — the next four passes occupy the top third of the screen. Anything outside that window is collapsed.
2. **Telemetry strip** — six critical channels stay pinned. Color is reserved for fault states; nominal values stay neutral.
3. **Ground-station map** — secondary, scrollable, used for spot checks rather than continuous monitoring.

### What We Cut

The original brief called for sixteen telemetry channels. We reduced to six after watching controllers actually work — the other ten were either redundant or already covered by alerts. Removing them made the live channels easier to read at a glance.
