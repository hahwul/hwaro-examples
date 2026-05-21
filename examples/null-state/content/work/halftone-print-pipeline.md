+++
title = "Halftone Print Pipeline"
date = "2025-06-14"
description = "Automated print-ready PDF generation for a small literary magazine. Submission to plate-ready in 20 minutes."
tags = ["tooling", "typography", "static"]
+++

## Project

A literary magazine publishes four issues a year, each running 96 pages. Their previous process: submissions arrive as Word documents, an editor copies them into InDesign, a designer hand-sets each spread, and the issue takes six weeks to produce.

We were asked whether the process could be compressed.

## What we shipped

- A **submission pipeline** that accepts Markdown with a small set of magazine-specific shortcodes (drop caps, pull quotes, footnotes).
- A **typography engine** that emits InDesign-quality paginated PDFs from the Markdown. Built on top of Pandoc and a custom LaTeX template.
- A **proof-reading interface** that shows the editor each spread as it will print, with inline correction markup.
- A **plate-ready PDF generator** that runs in under twenty minutes for a full issue.

## Outcome

The magazine has produced three issues with the new pipeline. The editorial team has been reduced from four to two. The hand-set look of the magazine has been preserved — readers have not noticed the change. Production time is down from six weeks to ten days.

## Tools

Pandoc · LaTeX · Hwaro for the proofing interface · Crystal for the orchestration
