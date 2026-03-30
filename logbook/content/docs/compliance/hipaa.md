+++
title = "HIPAA"
description = "HIPAA compliance mapping and PHI access auditing with Logbook"
tags = ["hipaa", "compliance", "healthcare", "phi"]
+++

# HIPAA

The Health Insurance Portability and Accountability Act (HIPAA) requires covered entities and business associates to implement audit controls for systems that access Protected Health Information (PHI). Logbook maps audit events to HIPAA Security Rule requirements and generates evidence for compliance audits.

## HIPAA Security Rule Mapping

Logbook provides evidence for the following HIPAA Security Rule safeguards:

### Administrative Safeguards

| Standard | Requirement | Logbook Evidence |
|----------|-------------|-----------------|
| 164.312(b) | Audit controls | Complete audit trail of all PHI access via `data.read`, `data.write` events |
| 164.308(a)(1) | Security management process | `admin.policy_update` events tracking security policy lifecycle |
| 164.308(a)(3) | Workforce security | `admin.user_create`, `admin.user_suspend`, `authz.role_change` events |
| 164.308(a)(4) | Information access management | `authz.grant`, `authz.deny`, `authz.permission_change` events |
| 164.308(a)(5) | Security awareness training | `admin.config_change` events for training completion records |
| 164.308(a)(6) | Security incident procedures | `system.error`, `authz.privilege_escalation` events with incident response |

### Technical Safeguards

| Standard | Requirement | Logbook Evidence |
|----------|-------------|-----------------|
| 164.312(a)(1) | Access control | `auth.login`, `auth.mfa_challenge`, `authz.grant`, `authz.deny` events |
| 164.312(a)(2)(i) | Unique user identification | `actor.id` field present on every event, linked to unique user accounts |
| 164.312(a)(2)(iii) | Automatic logoff | `auth.session_expired` events demonstrating session timeout enforcement |
| 164.312(a)(2)(iv) | Encryption and decryption | `data.encrypt`, `data.decrypt` events for PHI at rest |
| 164.312(c)(1) | Integrity controls | Hash chain verification ensuring audit log integrity |
| 164.312(d) | Person or entity authentication | `auth.mfa_success`, `auth.mfa_failure` events |
| 164.312(e)(1) | Transmission security | TLS-only ingestion; `system.certificate_expiry` monitoring |

### Physical Safeguards

| Standard | Requirement | Logbook Evidence |
|----------|-------------|-----------------|
| 164.310(d)(1) | Device and media controls | `admin.backup_created`, `admin.backup_restored` events |

## PHI Access Auditing

Configure Logbook to tag events that involve PHI access:

```yaml
compliance:
  profiles:
    - name: "hipaa"
      enabled: true
      phi_event_types:
        - "data.read"
        - "data.write"
        - "data.delete"
        - "data.export"
        - "data.share"
      phi_resource_types:
        - "patient_record"
        - "medical_chart"
        - "lab_result"
        - "prescription"
        - "insurance_claim"
      retention: "6y"
      access_review_interval: "90d"
```

## HIPAA Checklist

Use this checklist to verify your Logbook deployment meets HIPAA requirements:

- [ ] All access to PHI-containing systems generates audit events
- [ ] Each audit event includes a unique user identifier (`actor.id`)
- [ ] Authentication events capture the method used (password, MFA, SSO)
- [ ] Failed access attempts are logged with source IP and attempted resource
- [ ] PHI access events are retained for a minimum of 6 years
- [ ] Hash chain verification runs at least daily to ensure log integrity
- [ ] Audit logs are encrypted at rest using AES-256 or equivalent
- [ ] Audit log transport uses TLS 1.2 or higher
- [ ] Emergency access procedures generate distinct audit events
- [ ] Periodic access reviews are conducted and documented every 90 days
- [ ] Audit log exports for compliance review are themselves logged
- [ ] Business associate agreements reference Logbook audit capabilities

## Generating HIPAA Evidence

Generate a HIPAA compliance report for an audit period:

```bash
# Generate HIPAA audit evidence
logbook compliance report \
  --framework hipaa \
  --start "2025-04-01T00:00:00Z" \
  --end "2026-03-31T23:59:59Z" \
  --format pdf \
  --output hipaa-evidence-2025-2026.pdf

# PHI access report for a specific resource
logbook compliance phi-access \
  --resource-type "patient_record" \
  --start "2025-04-01T00:00:00Z" \
  --end "2026-03-31T23:59:59Z" \
  --format csv \
  --output phi-access-report.csv
```

## Access Review Reports

HIPAA requires periodic reviews of who has access to PHI. Generate access review reports:

```bash
# Generate quarterly access review
logbook compliance access-review \
  --framework hipaa \
  --period "2026-Q1" \
  --format pdf \
  --output access-review-2026-q1.pdf
```

The access review report includes:

- List of all users who accessed PHI during the review period
- Breakdown of access by resource type and event type
- Users with access who did not access any PHI (over-provisioned access)
- New access grants and revocations during the period
- Anomalous access patterns (off-hours access, unusual volume)

## Breach Notification Timeline

HIPAA requires notification of breaches affecting PHI within 60 days of discovery. Logbook tracks the breach lifecycle:

```bash
# Record a breach discovery
logbook compliance breach \
  --action discover \
  --description "Unauthorized PHI access detected in patient_record system" \
  --affected-records 500 \
  --phi-types "name,dob,ssn,diagnosis"

# Record breach investigation progress
logbook compliance breach \
  --action investigate \
  --breach-id "breach_2026_001" \
  --findings "Access via compromised service account srv_legacy_app"

# Record HHS notification
logbook compliance breach \
  --action notify-authority \
  --breach-id "breach_2026_001" \
  --authority "HHS-OCR" \
  --notification-date "2026-03-28"

# Generate breach timeline report
logbook compliance breach \
  --action report \
  --breach-id "breach_2026_001" \
  --format pdf \
  --output breach-report-2026-001.pdf
```

> HIPAA requires that breaches affecting 500 or more individuals be reported to HHS, affected individuals, and prominent media outlets within 60 days of discovery. Logbook tracks these notification deadlines and generates alerts as deadlines approach.
