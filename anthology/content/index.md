+++
title = "Welcome to Anthology"
tags = ["sdk", "documentation", "api"]
+++

# Anthology SDK

Anthology provides a unified SDK for building integrations with the Anthology platform. Whether you are managing resources, processing webhooks, or automating workflows, the SDK handles authentication, serialization, error handling, and pagination so you can focus on your application logic.

## Supported Languages

The Anthology SDK is available for three languages:

- **Python** -- `pip install anthology-sdk`
- **JavaScript / TypeScript** -- `npm install @anthology/sdk`
- **Go** -- `go get github.com/anthology-io/anthology-go`

Each SDK follows the idioms and conventions of its language while maintaining a consistent API surface.

## Quick Start

Initialize the client and make your first API call in just a few lines:

```python
from anthology import Client

client = Client(api_key="your-api-key")

# List all resources
resources = client.resources.list(limit=10)
for resource in resources:
    print(resource.id, resource.name)
```

```javascript
import { Client } from '@anthology/sdk';

const client = new Client({ apiKey: 'your-api-key' });

// List all resources
const resources = await client.resources.list({ limit: 10 });
resources.forEach(r => console.log(r.id, r.name));
```

```go
package main

import (
    "fmt"
    anthology "github.com/anthology-io/anthology-go"
)

func main() {
    client := anthology.NewClient("your-api-key")

    resources, err := client.Resources.List(&anthology.ListParams{Limit: 10})
    if err != nil {
        panic(err)
    }
    for _, r := range resources.Data {
        fmt.Println(r.ID, r.Name)
    }
}
```

## Next Steps

- [Installation]({{ base_url }}/docs/getting-started/installation/) -- Set up the SDK in your project
- [Authentication]({{ base_url }}/docs/getting-started/authentication/) -- Configure API keys and OAuth tokens
- [API Reference]({{ base_url }}/docs/api-reference/) -- Explore the full API surface
