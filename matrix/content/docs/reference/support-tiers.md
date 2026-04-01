+++
title = "Support Tiers"
description = "Definitions and SLAs for each support tier"
tags = ["reference", "tiers"]
+++

# Support Tiers

All platforms in the compatibility matrix are assigned to one of three support tiers. Each tier defines the level of testing, maintenance, and response commitment.

## Tier Definitions

| Tier | Label | CI Status | Bug Priority | Response SLA |
|---|---|---|---|---|
| 1 | <span class="supported">Supported</span> | Required to pass | P1 - Critical | 24 hours |
| 2 | <span class="partial">Partial</span> | Monitored, non-blocking | P3 - Normal | 5 business days |
| 3 | <span class="unsupported">Unsupported</span> | Not tested | P5 - Won't fix | No SLA |

## Tier 1: Supported

Platforms in Tier 1 are the primary targets for development and testing:

- All automated test suites must pass on these platforms before a release is cut.
- Bugs reported on Tier 1 platforms are treated as critical and receive immediate attention.
- Performance benchmarks are collected and tracked over time.
- Security patches are validated on all Tier 1 platforms before deployment.

### Current Tier 1 Platforms

| Category | Platforms |
|---|---|
| Linux | Ubuntu 24.04, Ubuntu 22.04, Debian 12, RHEL 9 |
| macOS | 15 Sequoia, 14 Sonoma |
| Windows | 11 23H2+, Server 2022 |
| Browsers | Chrome 124+, Firefox 128+, Safari 17.4+, Edge 124+ |
| Node.js | 22.x, 20.x |
| Python | 3.13, 3.12, 3.11 |

## Tier 2: Partial

Platforms in Tier 2 receive best-effort support:

- CI runs are monitored but failures do not block releases.
- Bug reports are accepted and triaged at normal priority.
- Known limitations are documented in the Notes column of each matrix table.
- Community contributions for Tier 2 fixes are welcome and reviewed promptly.

## Tier 3: Unsupported

Platforms in Tier 3 are not part of the test matrix:

- No CI coverage exists for these platforms.
- Bug reports may be closed as "won't fix" at the maintainers' discretion.
- Users running on Tier 3 platforms do so at their own risk.
- Tier 3 platforms are typically those that have reached vendor end-of-life.

## Promotion and Demotion

Platforms move between tiers based on the criteria defined in the [Version Policy](../../getting-started/version-policy/). Tier changes are announced in release notes and take effect at the start of the next release cycle.
