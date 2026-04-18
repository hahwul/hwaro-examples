+++
title = "Runtimes"
description = "Language runtime compatibility matrix"
tags = ["platforms", "runtimes"]
+++

# Runtimes

This page documents compatibility across language runtimes and their versions.

## Node.js

| Version | Release Type | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|---|
| 22.x | LTS (Active) | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Recommended |
| 20.x | LTS (Maintenance) | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Until April 2026 |
| 18.x | LTS (EOL) | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | EOL April 2025 |
| 21.x | Current (EOL) | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | Odd releases not LTS |
| 23.x | Current | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Best-effort |

## Python

| Version | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|
| 3.13 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Recommended |
| 3.12 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| 3.11 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Until October 2027 |
| 3.10 | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | EOL October 2026 |
| 3.9 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | EOL October 2025 |

## Go

| Version | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|
| 1.23 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Current |
| 1.22 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Previous stable |
| 1.21 | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | |
| 1.20 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | |

Go follows a policy of supporting the two most recent minor releases.

## Rust

| Version | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|
| 1.82+ | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | MSRV for v4.2 |
| 1.78-1.81 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | |
| 1.74-1.77 | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | Below MSRV |
| 1.70-1.73 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | |

The minimum supported Rust version (MSRV) is bumped with each minor release. Check the release notes for the exact MSRV requirement.

## Runtime Summary (v4.2)

| Runtime | Minimum Supported | Recommended | EOL Next |
|---|---|---|---|
| Node.js | 20.x | 22.x | 20.x (April 2026) |
| Python | 3.11 | 3.13 | 3.11 (October 2027) |
| Go | 1.22 | 1.23 | 1.22 (next release) |
| Rust | 1.82 | Latest stable | N/A |
