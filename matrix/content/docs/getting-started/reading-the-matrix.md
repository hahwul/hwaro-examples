+++
title = "Reading the Matrix"
description = "How to interpret compatibility matrix tables"
tags = ["getting-started", "guide"]
+++

# Reading the Matrix

Each compatibility matrix table follows a consistent format. Understanding the structure helps you quickly determine whether a given platform or version is supported.

## Table Structure

Every matrix table uses the following columns:

| Column | Description |
|---|---|
| Platform / Component | The environment being tested |
| Version | The specific version or version range |
| Status | One of Supported, Partial, or Unsupported |
| Notes | Additional context or known limitations |

## Status Indicators

Status values appear as colored text throughout this documentation:

- <span class="supported">Supported</span> -- The platform passes all automated test suites. Bugs found on this platform are treated as high priority.
- <span class="partial">Partial</span> -- The platform works for core functionality but has known gaps. See the Notes column for details.
- <span class="unsupported">Unsupported</span> -- The platform is not part of the test matrix. It may work, but no guarantees are provided.

## Version Ranges

When a table lists a version range such as "120+", this means all versions from 120 onward are included. Specific upper bounds are noted when applicable.

## Example Matrix

| Platform | v3.0 | v3.1 | v3.2 |
|---|---|---|---|
| Ubuntu 22.04 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> |
| Ubuntu 20.04 | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> |
| CentOS 7 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> |

In this example, Ubuntu 22.04 is fully supported across all three releases. Ubuntu 20.04 lost full support in v3.1 and was dropped entirely in v3.2. CentOS 7 had partial support only in v3.0.

## Filtering by Version

To find support information for a specific product version, locate the version column in the relevant matrix table. Each column represents a release, and rows represent target platforms.

> When planning upgrades, always check the matrix for your target version before proceeding. Platform support can change between releases.
