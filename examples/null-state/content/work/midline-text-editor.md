+++
title = "Midline Text Editor"
date = "2025-11-20"
description = "Distraction-free writing tool. Local-first. Single 78kb binary. No accounts."
tags = ["tooling", "interface", "typography"]
+++

## Project

A long-form journalist asked us to build them a writing tool with three constraints: it had to be installable as a single binary, it had to support custom typography for paginated prose, and it had to refuse any feature that involved the network.

## What we shipped

- A native macOS and Linux binary, 78kb each, written in Crystal.
- A **modal interface** with three states — drafting, revising, and exporting. Each state hides the controls relevant to the others.
- A **custom typography pipeline** built around the writer's preferred face (Iowan Old Style). Line lengths are restricted to 66 characters and the page is set in a single column.
- **Export to a paginated PDF** and to plain markdown. Nothing else.

The editor stores no telemetry, calls no server, and has no auto-update mechanism. Updates are distributed as new binaries by email.

## Outcome

The journalist used the tool to draft three books, two of which have been published. We have since shipped the binary to seventeen other writers by personal request.

We do not publish the source.

## Tools

Crystal · TUI rendering via libtermbox · ImGui for menus · no networking
