+++
title = "ADR Templates and Tooling"
weight = 3
description = "Templates, scaffolding scripts, and editor tooling that keep ADRs consistent across teams."
+++

## Why a Shared Template

A consistent template removes friction at every stage of the ADR lifecycle. Authors do not have to think about structure. Reviewers know exactly where to look for context, decision, and consequences. Readers can scan dozens of ADRs without re-learning the layout. The template is small, but it pays compounding returns as the corpus grows.

The Keystone template lives at `tools/adr/template.md` in the documentation repository. It includes the four required sections, a metadata block, and inline guidance comments that the author removes before submission.

## Scaffolding New ADRs

The `adr new` command generates a new ADR file with the correct number, filename, and front matter:

```
$ adr new "Use gRPC for Inter-Service Communication"
Created docs/decisions/adr-004-use-grpc-for-inter-service-communication.md
```

The script reads the highest existing ADR number from the filesystem, increments it, and slugifies the title. It pre-populates the front matter with the current date, a `proposed` status, and the author's name from the local Git configuration. This avoids the most common front-matter errors: duplicate numbers, mismatched dates, and incorrect status values.

## Editor Support

Two snippets are provided for editors that support snippet expansion:

- `adr-context` expands into a structured context block with prompts for forces, constraints, and stakeholders.
- `adr-consequences` expands into the positive, negative, and risks sub-sections with placeholder text.

A linter runs as part of the documentation build and flags ADRs that fail any of the following checks: missing required sections, invalid status values, dates outside the expected range, or filenames that do not match the title. Failures block the merge until corrected.

## Updating the Template

The template itself is governed by an ADR. Changes require Architecture Board approval and follow the standard review process. This may seem heavy-handed for a markdown file, but it ensures the template evolves deliberately rather than through ad-hoc edits that drift from team to team.

When the template changes, existing ADRs are not retroactively updated. The historical record reflects the conventions of its era, which is itself useful information.
