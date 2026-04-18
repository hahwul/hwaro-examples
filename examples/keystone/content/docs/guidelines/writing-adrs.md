+++
title = "How to Write ADRs"
weight = 1
description = "A practical guide to writing clear, useful Architecture Decision Records."
+++

## When to Write an ADR

Not every technical decision needs an ADR. Write one when the decision:

- Affects the structure or behavior of the system in a way that is difficult to reverse
- Involves significant trade-offs that future engineers will need to understand
- Crosses team boundaries or impacts shared infrastructure
- Establishes a new standard, convention, or technology choice

Examples of decisions that warrant an ADR: choosing a database technology, adopting a messaging pattern, defining service boundaries, selecting an authentication strategy. Examples that typically do not: choosing a logging library, refactoring an internal module, updating a dependency version.

## ADR Structure

Every ADR follows a consistent structure with four required sections:

### Title

Use a short, descriptive title prefixed with the ADR number. The title should convey the decision, not just the topic.

- Good: "ADR-004: Use gRPC for Inter-Service Communication"
- Avoid: "ADR-004: Communication"

### Context

Describe the forces at play. What is the situation? What problem are you solving? What constraints exist? Include relevant data points: traffic volumes, team size, SLA requirements, or technical limitations. The context should be detailed enough that a reader unfamiliar with the project can understand why this decision matters.

### Decision

State the decision clearly and concisely. Begin with "We will..." to make the commitment explicit. Include specific details about implementation approach, technology versions, and any operational standards that accompany the decision.

### Consequences

Enumerate the results of the decision, both positive and negative. Be honest about trade-offs. Separate consequences into:

- **Positive** -- Benefits and improvements the decision enables
- **Negative** -- Costs, risks, and limitations the decision introduces
- **Risks** -- Uncertainties and their mitigations (optional but encouraged)

## Metadata

Each ADR includes the following metadata in the front matter:

| Field | Description | Example |
|-------|-------------|---------|
| status | Current lifecycle state | approved, proposed, deprecated |
| adr_number | Sequential identifier | ADR-001 |
| decision_date | Date the ADR was proposed or approved | 2025-03-15 |

## Writing Tips

- **Be specific.** Avoid vague statements like "we need better performance." Quantify where possible: "Response latency must be under 200ms at the 99th percentile."
- **Record alternatives considered.** Briefly mention the options you evaluated and why they were not selected. This prevents future engineers from re-evaluating the same alternatives.
- **Keep it concise.** An ADR should be readable in five minutes. If it exceeds two pages, consider splitting it into multiple decisions.
- **Write for the future reader.** Assume the reader has general engineering knowledge but no context about your specific project. Define acronyms and link to relevant resources.
- **Separate the decision from the implementation plan.** The ADR captures what was decided and why. Detailed implementation plans, timelines, and task breakdowns belong in separate documents.

## File Naming Convention

ADR files follow this naming pattern:

```
adr-NNN-short-description.md
```

Where `NNN` is a zero-padded three-digit number and the short description uses lowercase words separated by hyphens. Examples:

```
adr-001-use-microservices.md
adr-002-choose-postgresql.md
adr-003-adopt-event-sourcing.md
```

## Lifecycle

An ADR moves through the following states:

1. **Proposed** -- The ADR has been written and is awaiting review by the Architecture Board.
2. **Approved** -- The Architecture Board has reviewed and accepted the decision. Implementation may proceed.
3. **Deprecated** -- The decision has been superseded by a newer ADR or is no longer applicable. The deprecating ADR should reference the original and explain what changed.

Once an ADR is approved, its content is considered immutable. If circumstances change, write a new ADR that references and supersedes the original rather than modifying it.
