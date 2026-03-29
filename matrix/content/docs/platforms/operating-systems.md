+++
title = "Operating Systems"
description = "OS compatibility matrix for all supported platforms"
tags = ["platforms", "os"]
+++

# Operating Systems

This page documents compatibility across Linux distributions, macOS versions, and Windows editions.

## Linux Distributions

| Distribution | Version | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|---|
| Ubuntu | 24.04 LTS | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Primary CI target |
| Ubuntu | 22.04 LTS | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| Ubuntu | 20.04 LTS | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | EOL April 2025 |
| Debian | 12 (Bookworm) | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| Debian | 11 (Bullseye) | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | EOL June 2026 |
| RHEL | 9 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| RHEL | 8 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | Maintenance phase |
| Fedora | 40 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| Fedora | 39 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | EOL November 2024 |
| Alpine | 3.20 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | musl libc |
| Alpine | 3.19 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | |

## macOS

| Version | Name | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|---|
| 15 | Sequoia | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Apple Silicon and Intel |
| 14 | Sonoma | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| 13 | Ventura | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | Intel only in v4.2 |
| 12 | Monterey | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | EOL September 2024 |

## Windows

| Edition | Version | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|---|
| Windows 11 | 24H2 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Recommended |
| Windows 11 | 23H2 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| Windows 10 | 22H2 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | EOL October 2025 |
| Windows Server | 2022 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | LTSC |
| Windows Server | 2019 | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="partial">Partial</span> | Extended support |

> For ARM-based platforms (Apple Silicon, Windows on ARM), see the Notes column for architecture-specific details.
