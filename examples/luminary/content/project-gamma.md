+++
title = "Project Gamma"
date = 2024-09-11
description = "A reading room for archival photography."
template = "page"
+++

## Premise

Project Gamma serves a small archive of mid-century photography that had previously been distributed across several incompatible viewers. The objective was a single reading room where each plate could be examined at full resolution alongside its provenance record, with no browser plugin and no client-side framework heavier than the images themselves.

## Image Pipeline

Source plates arrive as uncompressed scans in the eight thousand pixel range. The pipeline produces three derivatives at fixed widths and one tiled pyramid for deep zoom. Tiles are served from a static prefix and cached aggressively. The viewer assembles tiles only for the visible region, which keeps initial load below half a megabyte even for the largest plates.

## Reading Room

The reading room presents one plate at a time on a neutral background. A narrow rail at the right edge of the screen holds the provenance record: photographer, date, location, accession number, and any cross-references to related plates in the archive. The rail is collapsible and remembers its state across sessions.

> Photography preserves an instant. The reading room preserves the instant of looking.

## Search

Plates are indexed by year, location, and a controlled vocabulary of subject terms. The index is precomputed at build time and ships as a single compressed file, which the client loads on demand. Queries return ranked results in under fifty milliseconds on the local network.

The reading room has been in continuous use for nine months and now serves a working scholarly community of about two hundred readers.
