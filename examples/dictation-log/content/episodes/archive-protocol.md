+++
title = "Archive Protocol"
description = "How a tape becomes a record."
date = "2026-02-05"
weight = 5
template = "doc"
[extra]
episode_num = 5
runtime = "07:34"
operator = "OPER-7"
tape = "T-05-A"
kind = "archive"
+++

A tape becomes a record when three things are true: it has a slate, it has a transcript, and it has at least one annotation pass. Until all three exist, the recording is a draft. After all three exist, it is permanent.

## The flat-file principle

Every archived tape lives in a single flat directory, keyed by date. No nesting. No taxonomy. No project folders. The taxonomy comes from the tag system inside the transcript — not from the filesystem.

```
archive/
  2026-01-08-session-zero/
    tape.flac
    transcript.md
    annotations.md
  2026-01-15-transcript-format/
    tape.flac
    transcript.md
    annotations.md
  ...
```

Flat directories survive software changes. Nested taxonomies do not. Every nesting scheme this archive has tried in seven years has been migrated to flat, and the flat version has stayed.

## Retention

Tapes are retained indefinitely. Transcripts are retained indefinitely. Annotations are retained indefinitely. Deletion happens only on legal request, and is logged in a public record that survives the deletion.

This is the *one* place where the archive is heavier than it needs to be — and the place where the archive is most worth its weight.

## Destruction protocol

In the rare case that a tape must be destroyed, three signatures are required: the operator who made the recording, the archivist on duty, and the legal officer who approved the destruction. The destruction is logged with the date, the reason, and the three signatures. The tape is then deleted.

Nothing else is deleted. The record of the deletion remains.
