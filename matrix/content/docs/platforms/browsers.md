+++
title = "Browsers"
description = "Browser compatibility matrix with version ranges"
tags = ["platforms", "browsers"]
+++

# Browsers

This page documents web browser compatibility. Testing is performed against the latest stable release and the two preceding major versions unless otherwise noted.

## Desktop Browsers

| Browser | Version Range | v4.0 | v4.1 | v4.2 | Notes |
|---|---|---|---|---|---|
| Chrome | 124+ | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Primary test target |
| Chrome | 120-123 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | |
| Chrome | 110-119 | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | |
| Firefox | 128+ | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| Firefox | 121-127 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | |
| Firefox | 115 ESR | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Extended Support Release |
| Safari | 17.4+ | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | |
| Safari | 16.x | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | Missing WebGL2 features |
| Safari | 15.x | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | <span class="unsupported">Unsupported</span> | |
| Edge | 124+ | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | Chromium-based |
| Edge | 120-123 | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | |

## Mobile Browsers

| Browser | Platform | Version | v4.0 | v4.1 | v4.2 |
|---|---|---|---|---|---|
| Chrome | Android | 124+ | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> |
| Chrome | Android | 120-123 | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="partial">Partial</span> |
| Safari | iOS 17+ | Latest | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> |
| Safari | iOS 16 | Latest | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> |
| Firefox | Android | 128+ | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> |
| Samsung Internet | Android | 24+ | <span class="partial">Partial</span> | <span class="partial">Partial</span> | <span class="partial">Partial</span> |

## Feature Support Matrix

The following table indicates whether specific web APIs are supported across browsers in the current release (v4.2):

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| WebSocket | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> |
| WebRTC | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="supported">Supported</span> |
| Service Workers | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> |
| WebAssembly SIMD | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="unsupported">Unsupported</span> | <span class="supported">Supported</span> |
| Container Queries | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> | <span class="supported">Supported</span> |
| View Transitions | <span class="supported">Supported</span> | <span class="partial">Partial</span> | <span class="unsupported">Unsupported</span> | <span class="supported">Supported</span> |
