+++
title = "Atlas Research Portal"
date = "2026-02-04"
description = "Static research portal for a marine biology institute. 4,200 papers indexed. Offline-first."
tags = ["interface", "static", "research"]
+++

## Project

A marine biology research institute in Busan had accumulated 4,200 research papers over forty years. The papers existed as PDFs scattered across institutional storage, with metadata in an aging FileMaker database. Their researchers wanted a single, searchable, citable portal — but their IT budget did not permit a dynamic application, and their satellite research stations frequently operated without internet for weeks at a time.

## What we shipped

A static research portal with the following properties:

- **Every paper has a permanent URL** following a stable scheme. URLs do not change when papers are re-categorized.
- **Full-text search runs entirely in the browser** using a precomputed index. The index is 8.2mb gzipped — large for a static site, trivial for the researchers' workflow.
- **The whole portal mirrors to a flash drive** in under 90 seconds. Researchers at remote stations carry the entire archive on their person.
- **Citation export** in BibTeX, RIS, and a custom institute format. Generated at build time, served as flat files.

## Outcome

The portal was deployed in eight weeks. The full archive is available offline. The previous database has been retired. The institute has begun moving their internal proceedings into the same pipeline.

## Tools

Hwaro · Lunr.js (precomputed index) · Pandoc for PDF metadata extraction
