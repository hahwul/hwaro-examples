+++
title = "Installation"
weight = 1
tags = ["setup", "installation"]
+++

# Installation

The Anthology SDK is available for Python, JavaScript/TypeScript, and Go. Each package is published to the standard registry for its ecosystem.

## Python

Requires Python 3.8 or later.

```python
pip install anthology-sdk
```

Or with Poetry:

```bash
poetry add anthology-sdk
```

Verify the installation:

```python
import anthology
print(anthology.__version__)
# 1.4.0
```

## JavaScript / TypeScript

Requires Node.js 16 or later.

```bash
npm install @anthology/sdk
```

Or with Yarn:

```bash
yarn add @anthology/sdk
```

TypeScript type definitions are included in the package. No separate `@types` package is needed.

```javascript
import { Client } from '@anthology/sdk';
console.log(Client.VERSION);
// 1.4.0
```

## Go

Requires Go 1.21 or later.

```bash
go get github.com/anthology-io/anthology-go@latest
```

```go
package main

import (
    "fmt"
    anthology "github.com/anthology-io/anthology-go"
)

func main() {
    fmt.Println(anthology.Version)
    // 1.4.0
}
```

## Version Compatibility

| SDK Version | API Version | Minimum Runtime        |
|-------------|-------------|------------------------|
| 1.4.x       | v2          | Python 3.8, Node 16, Go 1.21 |
| 1.3.x       | v2          | Python 3.8, Node 14, Go 1.20 |
| 1.2.x       | v1          | Python 3.7, Node 14, Go 1.19 |
| 1.0.x       | v1          | Python 3.7, Node 12, Go 1.18 |

## System Requirements

All SDK packages are pure implementations with no native dependencies. They work on Linux, macOS, and Windows without additional build tools.

Once installed, proceed to [Authentication]({{ base_url }}/docs/getting-started/authentication/) to configure your API credentials.
