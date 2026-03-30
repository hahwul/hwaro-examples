+++
title = "About Logbook"
description = "About the Logbook audit logging platform and project"
tags = ["about", "logbook"]
+++

# About Logbook

Logbook is an open-source audit logging platform built for organizations that must demonstrate compliance with regulatory frameworks and internal governance policies. The project was created to provide a reliable, verifiable record of all system activities without requiring expensive commercial audit solutions.

## Design Principles

Logbook is built around four principles:

- **Append-Only by Default** -- Audit logs are immutable once written. The system does not support in-place modification or deletion of recorded events, ensuring that the audit trail is trustworthy.
- **Cryptographic Verification** -- Each log entry includes a hash that chains it to the previous entry. Any tampering with historical records is detectable through chain verification.
- **Schema-First Events** -- All audit events conform to a well-defined JSON schema. Applications emit structured events through typed SDKs rather than free-form log strings.
- **Compliance as Code** -- Regulatory mappings for SOC 2, GDPR, and HIPAA are encoded as machine-readable policies. Compliance reports are generated programmatically from the event store.

## Project History

Logbook began as an internal tool for managing audit trails across a portfolio of financial services applications. The initial version supported basic event capture and retention. Over time, the project expanded to include cryptographic chaining, compliance report generation, and multi-tenant isolation.

The project is maintained by a team of security and compliance engineers and accepts contributions through standard pull request workflows.

## License

Logbook is released under the Apache 2.0 license. Enterprise support packages with dedicated SLA guarantees are available through separate agreements.

## Contact

- **Source** -- [github.com/logbook-audit/logbook](https://github.com/logbook-audit/logbook)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and compliance framework discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
