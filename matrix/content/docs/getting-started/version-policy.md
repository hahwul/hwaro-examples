+++
title = "Version Policy"
description = "How version support decisions are made"
tags = ["getting-started", "policy"]
+++

# Version Policy

This document describes how platform versions are added to and removed from the compatibility matrix.

## Support Lifecycle

Each platform version moves through the following stages:

| Stage | Description | Duration |
|---|---|---|
| Preview | Included in CI but failures are non-blocking | 1 release cycle |
| Supported | Fully tested; failures block releases | Until EOL or removal |
| Deprecated | Still tested but scheduled for removal | 1 release cycle |
| Unsupported | Removed from CI; no testing | Permanent |

## Addition Criteria

A platform version is added to the matrix when all of the following conditions are met:

- The version has reached general availability from its vendor.
- The QA team has completed an initial validation pass.
- CI infrastructure supports the platform.
- At least one downstream team has requested support.

## Removal Criteria

A platform version is removed from the matrix when any of the following conditions are met:

- The vendor has ended support or security updates.
- The platform accounts for less than 1% of production traffic for two consecutive quarters.
- Maintaining support requires disproportionate engineering effort.
- A newer version of the same platform has been supported for at least one full release cycle.

## Deprecation Notices

When a platform enters the deprecated stage, the following occurs:

1. The matrix table is updated to show the deprecation status.
2. Release notes include a deprecation warning.
3. Downstream teams are notified via the engineering mailing list.
4. The platform remains in CI for one additional release cycle.

## Exception Process

Teams that require extended support for a deprecated platform may file an exception request. Exceptions are reviewed quarterly and granted based on business impact and engineering cost.
