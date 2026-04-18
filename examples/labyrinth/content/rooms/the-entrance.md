+++
title = "The Entrance"
description = "Where every journey into the labyrinth begins"
date = "2026-03-10"
weight = 1
tags = ["project", "web"]
+++

# The Entrance

The heavy stone door grinds open. Torchlight flickers against damp walls. You have entered the first chamber of the labyrinth.

## The Project

A web application built for a non-profit organization managing community resources. The challenge was to create something accessible, fast, and usable by volunteers with minimal technical experience.

## What Was Built

The application serves as a central hub for resource coordination:

- **Inventory system** -- Track donations, supplies, and distribution across multiple locations
- **Volunteer scheduling** -- Self-service shift management with conflict detection
- **Reporting dashboard** -- Automated weekly summaries for board presentations
- **Mobile-first design** -- 80% of users access the system from phones during field work

## Technical Approach

The stack was chosen for simplicity and maintainability. The next maintainer may be a volunteer with limited development experience, so the codebase prioritizes readability:

- Server-rendered HTML with minimal JavaScript
- SQLite database with automated daily backups
- CSS-only responsive layout -- no framework dependencies
- Comprehensive inline documentation

## Outcome

The system replaced a collection of spreadsheets that had grown unmaintainable. Data entry errors dropped by 90%, and the weekly report that previously took 4 hours is now generated automatically.
