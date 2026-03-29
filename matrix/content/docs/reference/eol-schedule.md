+++
title = "EOL Schedule"
description = "End-of-life dates for all tracked platforms"
tags = ["reference", "eol"]
+++

# End-of-Life Schedule

This page lists the end-of-life (EOL) dates for all platforms currently tracked in the compatibility matrix. Platforms approaching EOL are flagged for deprecation review.

## Operating Systems

| Platform | Version | Vendor EOL | Matrix Status | Removal Target |
|---|---|---|---|---|
| Ubuntu | 20.04 LTS | April 2025 | <span class="unsupported">Unsupported</span> | Removed in v4.1 |
| Ubuntu | 22.04 LTS | April 2027 | <span class="supported">Supported</span> | -- |
| Ubuntu | 24.04 LTS | April 2029 | <span class="supported">Supported</span> | -- |
| Debian | 11 | June 2026 | <span class="partial">Partial</span> | v4.3 |
| Debian | 12 | June 2028 | <span class="supported">Supported</span> | -- |
| RHEL | 8 | May 2029 | <span class="partial">Partial</span> | v5.0 |
| RHEL | 9 | May 2032 | <span class="supported">Supported</span> | -- |
| macOS | 12 Monterey | September 2024 | <span class="unsupported">Unsupported</span> | Removed in v4.1 |
| macOS | 13 Ventura | October 2025 | <span class="partial">Partial</span> | v4.3 |
| Windows 10 | 22H2 | October 2025 | <span class="partial">Partial</span> | v4.3 |
| Windows Server | 2019 | January 2029 | <span class="partial">Partial</span> | v5.0 |

## Browsers

Browser EOL dates correspond to the last version in each range that receives security updates:

| Browser | Version | Approximate EOL | Matrix Status |
|---|---|---|---|
| Chrome | 119 and below | Already EOL | <span class="unsupported">Unsupported</span> |
| Chrome | 120-123 | March 2025 | <span class="partial">Partial</span> |
| Firefox | 120 and below | Already EOL | <span class="unsupported">Unsupported</span> |
| Firefox | 115 ESR | March 2025 | <span class="supported">Supported</span> |
| Safari | 15.x | Already EOL | <span class="unsupported">Unsupported</span> |
| Safari | 16.x | September 2025 | <span class="unsupported">Unsupported</span> |

## Runtimes

| Runtime | Version | Vendor EOL | Matrix Status | Removal Target |
|---|---|---|---|---|
| Node.js | 18.x | April 2025 | <span class="unsupported">Unsupported</span> | Removed in v4.2 |
| Node.js | 20.x | April 2026 | <span class="supported">Supported</span> | v5.0 |
| Node.js | 22.x | April 2027 | <span class="supported">Supported</span> | -- |
| Python | 3.9 | October 2025 | <span class="unsupported">Unsupported</span> | Removed in v4.1 |
| Python | 3.10 | October 2026 | <span class="unsupported">Unsupported</span> | Removed in v4.2 |
| Python | 3.11 | October 2027 | <span class="supported">Supported</span> | v5.0 |
| Go | 1.21 | February 2025 | <span class="unsupported">Unsupported</span> | Removed in v4.2 |
| Go | 1.22 | August 2025 | <span class="supported">Supported</span> | v4.3 |

## Upcoming Changes

The following platforms are scheduled for status changes in the next release (v4.3):

| Platform | Current Status | New Status | Reason |
|---|---|---|---|
| Debian 11 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | Approaching vendor EOL |
| macOS 13 Ventura | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | Vendor EOL October 2025 |
| Windows 10 22H2 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | Vendor EOL October 2025 |
| Go 1.22 | <span class="supported">Supported</span> | <span class="partial">Partial</span> | New stable release available |
