+++
title = "Installation"
weight = 1
date = "2025-08-15"
description = "Install the Beacon SDK in your project"
+++

# Installation

Beacon provides official SDKs for JavaScript/TypeScript, Python, and Go. Choose the one that matches your stack.

## JavaScript / TypeScript

Install via npm or yarn:

```bash
npm install @beacon/sdk
```

Or with yarn:

```bash
yarn add @beacon/sdk
```

## Python

Install from PyPI:

```bash
pip install beacon-sdk
```

For projects using Poetry:

```bash
poetry add beacon-sdk
```

## Go

Fetch the Go module:

```bash
go get github.com/beacon-flags/sdk-go@latest
```

## Requirements

| Language | Minimum Version | Package Manager |
|---|---|---|
| Node.js | 18.0+ | npm, yarn, pnpm |
| Python | 3.9+ | pip, poetry |
| Go | 1.21+ | go modules |

> All SDKs communicate with the Beacon server over HTTPS. Ensure your environment allows outbound connections on port 443.

## Verify installation

After installation, verify the SDK is available by importing it in your project:

```typescript
import { BeaconClient } from '@beacon/sdk';
console.log('Beacon SDK loaded');
```

```python
from beacon_sdk import BeaconClient
print("Beacon SDK loaded")
```

```go
import "github.com/beacon-flags/sdk-go"
```

Next, proceed to the [Quick Start](/getting-started/quick-start/) guide to initialize the client and evaluate your first flag.
