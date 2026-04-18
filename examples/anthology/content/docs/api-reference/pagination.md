+++
title = "Pagination"
weight = 2
tags = ["api", "pagination", "cursor"]
+++

# Pagination

All list endpoints in the Anthology API use cursor-based pagination. This approach provides stable results even when new records are added between page requests.

## How It Works

Each list response includes a `pagination` object:

```json
{
  "data": [...],
  "pagination": {
    "cursor": "cur_abc123def456",
    "has_more": true
  }
}
```

- `cursor` -- An opaque string that points to the next page of results
- `has_more` -- A boolean indicating whether additional pages exist

To fetch the next page, pass the `cursor` value as a parameter to the same endpoint.

## Parameters

| Parameter | Type     | Required | Default | Description                              |
|-----------|----------|----------|---------|------------------------------------------|
| `limit`   | `int`    | No       | 20      | Number of results per page (1-100)       |
| `cursor`  | `string` | No       | None    | Cursor from a previous response          |

## Python

### Manual Pagination

```python
resources = client.resources.list(limit=50)
all_resources = list(resources.data)

while resources.has_more:
    resources = client.resources.list(limit=50, cursor=resources.cursor)
    all_resources.extend(resources.data)

print(f"Total resources: {len(all_resources)}")
```

### Auto-Pagination Iterator

The Python SDK provides a convenience iterator that handles pagination automatically:

```python
for resource in client.resources.list_auto(limit=50):
    print(resource.id, resource.name)
```

This iterator yields individual resource objects and fetches new pages transparently as needed.

## JavaScript

### Manual Pagination

```javascript
let response = await client.resources.list({ limit: 50 });
const allResources = [...response.data];

while (response.hasMore) {
  response = await client.resources.list({
    limit: 50,
    cursor: response.cursor
  });
  allResources.push(...response.data);
}

console.log(`Total resources: ${allResources.length}`);
```

### Async Iterator

```javascript
for await (const resource of client.resources.listAuto({ limit: 50 })) {
  console.log(resource.id, resource.name);
}
```

## Go

### Manual Pagination

```go
var allResources []anthology.Resource

params := &anthology.ListParams{Limit: 50}
for {
    result, err := client.Resources.List(params)
    if err != nil {
        log.Fatal(err)
    }
    allResources = append(allResources, result.Data...)

    if !result.HasMore {
        break
    }
    params.Cursor = result.Cursor
}

fmt.Printf("Total resources: %d\n", len(allResources))
```

### Iterator

```go
iter := client.Resources.ListIter(&anthology.ListParams{Limit: 50})
for iter.Next() {
    resource := iter.Current()
    fmt.Println(resource.ID, resource.Name)
}
if err := iter.Err(); err != nil {
    log.Fatal(err)
}
```

## Page Size Limits

| Endpoint             | Min | Default | Max |
|----------------------|-----|---------|-----|
| `resources.list`     | 1   | 20      | 100 |
| `webhooks.list`      | 1   | 20      | 50  |
| `events.list`        | 1   | 50      | 200 |

Requesting a `limit` value outside the allowed range will result in a `ValidationError`.

## Best Practices

- Use a reasonable page size (50-100) for bulk operations to minimize the number of API calls
- Store the cursor value if you need to resume pagination across process restarts
- Use the auto-pagination iterators for simple use cases where you need all results
- For very large datasets, consider using date-range filters to partition the work

See [Webhooks]({{ base_url }}/docs/api-reference/webhooks/) to learn about event-driven integrations.
