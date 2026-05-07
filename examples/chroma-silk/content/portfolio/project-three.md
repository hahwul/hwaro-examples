+++
title = "Helio Atlas: Solar-Field Operations"
description = "An operations console for a 90-megawatt solar field, designed to fail loudly and never silently."
date = "2024-09-30"
+++

## Brief

Helio Atlas operates a 90-megawatt solar field across three sites. Their previous monitoring tool aggregated all alerts into a single feed, which meant the operator on shift had to read every entry to find the one that mattered. The brief: triage, not aggregation.

## What We Built

- **Severity-first feed.** The console sorts alerts by severity, then by time. Critical alerts pin to the top until acknowledged.
- **Silent failures are loud.** A panel that stops reporting telemetry generates a "missing heartbeat" alert at the same severity as a fault. Most monitoring tools treat silence as nominal; we treated it as suspicious.
- **Acknowledged is not resolved.** The console distinguishes between *seen* and *fixed*. An acknowledged-but-unresolved alert stays visible at lower severity until the underlying telemetry returns to nominal.

## What We Cut

We removed the historical chart strip from the alert detail page. Operators on shift were not consulting it, and it took up half the screen. We replaced it with a single sparkline in the alert header — enough to confirm a trend without claiming visual real estate.
