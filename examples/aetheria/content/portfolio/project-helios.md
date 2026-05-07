+++
title = "Project Helios"
description = "Solar-array operations dashboard built around peak-load forecasts."
date = "2024-11-22"
+++

Helios consolidates the operational view for an off-grid solar farm. The interface centers on three live signals: panel output, ambient temperature, and predicted load over the next six hours.

### Design Decisions

- A dark slate canvas keeps the panel-output gauge legible from across the control room.
- Forecast curves use a single accent hue so deviations from the predicted band are immediately visible without colour memory.
- Alert states never animate on entry — they snap on. Operators trust the signal more when it does not "blink" into the layout.

### Outcome

Triage time on demand spikes dropped by half once the forecast band joined the live output trace. Operators stopped switching tabs to compare curves.
