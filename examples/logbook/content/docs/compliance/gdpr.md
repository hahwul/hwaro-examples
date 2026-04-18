+++
title = "GDPR"
description = "GDPR compliance mapping and data protection evidence with Logbook"
tags = ["gdpr", "compliance", "data-protection", "privacy"]
+++

# GDPR

The General Data Protection Regulation (GDPR) requires organizations to demonstrate accountability in how they process personal data. Logbook maps audit events to GDPR articles and provides evidence for Data Protection Impact Assessments, data subject access requests, and breach notification timelines.

## GDPR Article Mapping

Logbook provides audit evidence for the following GDPR articles:

### Data Processing Accountability (Article 5)

| Principle | GDPR Requirement | Logbook Evidence |
|-----------|-------------------|-----------------|
| Lawfulness | Processing has a legal basis | `data.read`, `data.write` events with purpose metadata |
| Purpose Limitation | Data used only for stated purposes | `data.export`, `data.share` events with purpose and recipient |
| Data Minimization | Only necessary data processed | `data.read` events with field-level access detail |
| Accuracy | Data kept accurate and up to date | `data.write` events tracking corrections and updates |
| Storage Limitation | Data retained only as long as necessary | Retention policy enforcement records |
| Integrity and Confidentiality | Appropriate security measures | `data.encrypt`, `data.decrypt` events; hash chain integrity |

### Data Subject Rights (Articles 15-22)

| Right | GDPR Article | Logbook Evidence |
|-------|-------------|-----------------|
| Right of Access | Article 15 | `data.read` events filtered by data subject identifier |
| Right to Rectification | Article 16 | `data.write` events showing corrections to subject data |
| Right to Erasure | Article 17 | `data.delete`, `data.anonymize` events for subject data |
| Right to Portability | Article 20 | `data.export` events for subject data in structured format |
| Right to Object | Article 21 | `authz.deny` events enforcing processing objections |

### Breach Notification (Articles 33-34)

Logbook tracks the timeline of data breach detection and notification:

| Phase | GDPR Requirement | Logbook Evidence |
|-------|-------------------|-----------------|
| Detection | Identify the breach | `system.error`, `authz.privilege_escalation` events |
| Assessment | Determine scope and severity | `admin.audit_export` events showing investigation activity |
| Authority Notification | Notify supervisory authority within 72 hours | `admin.config_change` events for breach notification records |
| Subject Notification | Notify affected subjects if high risk | `data.export` events for breach notification distribution |

## GDPR Checklist

Use this checklist to verify your Logbook deployment meets GDPR requirements:

- [ ] All personal data processing operations generate audit events with purpose codes
- [ ] Data subject access requests (DSARs) can be answered from audit event queries
- [ ] Data deletion and anonymization operations are logged with the legal basis
- [ ] Data exports include the recipient and purpose in the event detail
- [ ] Cross-border data transfers are tagged with source and destination regions
- [ ] Retention policies align with stated processing purposes
- [ ] Hash chain verification ensures audit trail integrity
- [ ] Data Protection Impact Assessments reference Logbook evidence
- [ ] Breach detection events trigger alerts within configurable time windows
- [ ] Consent records are linked to corresponding data processing events

## Data Subject Access Requests

Generate a report of all audit events related to a specific data subject:

```bash
# Find all events involving a specific data subject
logbook query \
  --filter 'actor.id == "usr_a1b2c3d4" OR detail.subject_id == "usr_a1b2c3d4"' \
  --start "2025-01-01T00:00:00Z" \
  --end "2026-03-30T23:59:59Z" \
  --format json \
  --output dsar-response.json

# Generate a GDPR-formatted DSAR response
logbook compliance dsar \
  --subject-id "usr_a1b2c3d4" \
  --format pdf \
  --output dsar-usr_a1b2c3d4.pdf
```

## Right to Erasure

When processing an erasure request, Logbook creates an anonymized record that the deletion occurred without retaining the personal data:

```bash
# Process a right-to-erasure request
logbook compliance erasure \
  --subject-id "usr_a1b2c3d4" \
  --legal-basis "gdpr-article-17" \
  --reason "Data subject erasure request received 2026-03-28" \
  --dry-run

# Execute the erasure (anonymizes personal data in audit events)
logbook compliance erasure \
  --subject-id "usr_a1b2c3d4" \
  --legal-basis "gdpr-article-17" \
  --reason "Data subject erasure request received 2026-03-28" \
  --confirm
```

> Logbook anonymizes personal data fields in historical audit events rather than deleting the events entirely. This preserves the integrity of the hash chain while satisfying the right to erasure. The anonymization is itself logged as a `data.anonymize` event.

## Data Protection Impact Assessment

Generate evidence for a DPIA from Logbook audit data:

```bash
logbook compliance dpia \
  --processing-activity "customer-onboarding" \
  --start "2025-01-01T00:00:00Z" \
  --end "2026-03-30T23:59:59Z" \
  --format pdf \
  --output dpia-customer-onboarding.pdf
```

The DPIA report includes data flow summaries derived from audit events, showing which actors accessed which resources, the volume of processing, and the geographic distribution of access.
