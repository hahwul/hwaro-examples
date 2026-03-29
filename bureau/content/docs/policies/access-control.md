+++
title = "Access Control Policy"
description = "Policy governing access to organizational systems, data, and facilities."
tags = ["policies", "access-control", "security"]
+++

# Access Control Policy

**Document ID:** POL-001 | **Effective Date:** 2025-03-01 | **Owner:** Chief Information Security Officer

**Classification:** Internal | **Review Cycle:** Annual | **Next Review:** 2026-03-01

---

## Article 1. Purpose and Scope

### Section 1.1 Purpose

This policy establishes the requirements for controlling access to organizational information systems, data assets, and physical facilities.

### Section 1.2 Scope

This policy applies to all employees, contractors, vendors, and third parties who require access to organizational resources.

## Article 2. Role-Based Access Control

### Section 2.1 Access Levels

Access shall be granted on a need-to-know basis according to the principle of least privilege. The following role-based access levels are defined:

| Role | Systems Access | Data Access | Facility Access |
|---|---|---|---|
| Executive | Full | All classifications | All zones |
| Manager | Department systems | Internal + Confidential (own dept) | Department zones |
| Employee | Assigned systems only | Internal only | Assigned work area |
| Contractor | Project systems only | Project-scoped Internal | Escorted access only |
| Visitor | None | None | Reception and meeting rooms |

### Section 2.2 Access Request Process

1. Requester submits access request via the IT Service Portal
2. Line manager approves the business justification
3. System owner validates the requested access level
4. IT Security provisions the access and logs the grant
5. Requester acknowledges the Acceptable Use Policy

## Article 3. Authentication Requirements

### Section 3.1 Password Policy

- Minimum length: 14 characters
- Complexity: at least one uppercase, one lowercase, one digit, one symbol
- Rotation: every 90 days for privileged accounts; every 180 days for standard accounts
- History: last 12 passwords shall not be reused

### Section 3.2 Multi-Factor Authentication

Multi-factor authentication (MFA) shall be required for:

- All remote access connections
- All privileged account logins
- Access to Confidential or Restricted data
- Administrative consoles and dashboards

## Article 4. RACI Matrix

| Activity | IT Security | System Owner | Line Manager | Employee |
|---|---|---|---|---|
| Define access levels | A | R | C | I |
| Request access | I | I | A | R |
| Provision access | R | C | I | I |
| Review access rights | R | A | C | I |
| Revoke on termination | R | C | I | -- |

**Legend:** R = Responsible, A = Accountable, C = Consulted, I = Informed

---

| Version | Date | Author | Changes |
|---|---|---|---|
| 2.1 | 2025-03-01 | CISO | Added MFA requirements for dashboards |
| 2.0 | 2024-09-15 | CISO | Major revision; added RACI matrix |
| 1.0 | 2021-04-01 | CISO | Initial publication |
