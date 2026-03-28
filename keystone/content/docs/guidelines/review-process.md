+++
title = "ADR Review Process"
weight = 2
description = "How the Architecture Board reviews and approves Architecture Decision Records."
+++

## Overview

The ADR review process ensures that significant architectural decisions receive appropriate scrutiny before implementation begins. The process balances thoroughness with speed, aiming to complete reviews within two weeks of submission.

## Submission

Any engineer may propose an ADR. To submit a decision for review:

1. Create the ADR document following the structure described in [How to Write ADRs](/docs/guidelines/writing-adrs/).
2. Set the status to `proposed` and assign the next available ADR number.
3. Open a pull request against the ADR repository with the new document.
4. Notify the Architecture Board channel with a link to the pull request and a one-sentence summary of the decision.

The submitting engineer is the ADR's **author** and is responsible for shepherding it through the review process.

## Review Criteria

The Architecture Board evaluates each proposed ADR against the following criteria:

### Completeness

- Does the context section adequately describe the problem and constraints?
- Are alternatives documented with clear rationale for why they were not selected?
- Are consequences honest and thorough, including both benefits and drawbacks?

### Alignment

- Is the decision consistent with existing approved ADRs?
- If it conflicts with a previous decision, does it explicitly propose deprecating that ADR with a clear explanation of what changed?
- Does the decision align with the organization's technology strategy and security requirements?

### Feasibility

- Is the decision technically sound given current infrastructure and team capabilities?
- Are the identified risks accompanied by realistic mitigations?
- Has the team demonstrated sufficient understanding of the chosen approach (through prototypes, proof of concepts, or prior experience)?

### Impact

- Is the scope of the decision appropriate for an ADR, or could it be handled at a team level?
- Are the affected stakeholders identified and have they been consulted?

## Review Meeting

The Architecture Board meets bi-weekly on Tuesdays at 14:00 UTC. Proposed ADRs are added to the agenda in the order they were submitted.

### Meeting Format

1. **Presentation** (10 minutes) -- The author presents the ADR, focusing on context and trade-offs rather than reading the document verbatim.
2. **Questions** (15 minutes) -- Board members ask clarifying questions and probe assumptions.
3. **Discussion** (10 minutes) -- Open discussion among board members and attendees.
4. **Decision** (5 minutes) -- The board reaches one of three outcomes:
   - **Approved** -- The ADR is accepted as written. Status is updated to `approved`.
   - **Revise and resubmit** -- The ADR requires changes before approval. The author addresses feedback and resubmits for the next meeting.
   - **Rejected** -- The decision is not approved. The ADR remains in `proposed` status with a note explaining the rejection rationale.

## After Approval

Once an ADR is approved:

- The pull request is merged and the document is published to this site.
- The status is updated to `approved` with the approval date.
- The author is responsible for communicating the decision to affected teams.
- Implementation may begin according to the team's planning process.

## Deprecation

When a previously approved ADR is no longer valid:

1. Write a new ADR that describes the updated context and new decision.
2. Reference the superseded ADR by number in the new document.
3. After the new ADR is approved, update the original ADR's status to `deprecated` with a note pointing to the replacement.

Deprecated ADRs are never deleted. They remain in the repository as part of the architectural history.

## Emergency Decisions

In rare cases where an architectural decision must be made before the next board meeting (for example, during an incident or to unblock a critical release):

1. The engineering lead may approve the decision provisionally.
2. An ADR must still be written and submitted within five business days.
3. The board reviews the ADR at its next meeting. If rejected, the team must develop a plan to reverse or modify the decision.

Emergency approvals should be the exception. If they occur frequently, it suggests that the review cadence or process needs adjustment.
