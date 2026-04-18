+++
title = "About"
description = "About the compatibility matrix project"
tags = ["about"]
+++

# About Matrix

Matrix is a compatibility and support matrix documentation site. It provides a centralized reference for understanding which platforms, browsers, and runtime environments are supported across product releases.

## Purpose

Maintaining accurate compatibility information is critical for QA teams, developers, and release managers. This documentation serves as a single source of truth for support status across all target environments.

## Methodology

All compatibility data is gathered through automated test suites run against each platform configuration. Results are classified into three tiers:

- **Supported** -- All test suites pass; the platform receives active maintenance and priority bug fixes.
- **Partial** -- Core functionality works but some edge cases or features may not behave as expected.
- **Unsupported** -- The platform is not included in the test matrix and no guarantees are made.

## Update Cadence

The matrix is reviewed and updated at the start of each quarter. Out-of-band updates may occur when a platform reaches end-of-life or a critical issue is discovered.

## Contact

For questions about the compatibility matrix or to report a discrepancy, open an issue in the project repository or contact the QA team directly.
