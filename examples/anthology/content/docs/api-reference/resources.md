+++
title = "Resources"
weight = 1
tags = ["api", "resources", "crud"]
+++

# Resources

Resources are the primary objects in the Anthology API. This page documents all CRUD operations, their parameters, and return types.

## The Resource Object

| Field        | Type       | Description                              |
|--------------|------------|------------------------------------------|
| `id`         | `string`   | Unique identifier (prefixed with `res_`) |
| `name`       | `string`   | Human-readable name                      |
| `type`       | `string`   | Resource type (`document`, `image`, `data`) |
| `status`     | `string`   | Current status (`active`, `archived`, `deleted`) |
| `metadata`   | `object`   | Arbitrary key-value metadata             |
| `created_at` | `datetime` | ISO 8601 creation timestamp              |
| `updated_at` | `datetime` | ISO 8601 last update timestamp           |

---

## List Resources

Retrieves a paginated list of resources.

**Signature:**

- Python: `client.resources.list(**params) -> ResourceList`
- JavaScript: `client.resources.list(params?) -> Promise<ResourceList>`
- Go: `client.Resources.List(params *ListParams) (*ResourceList, error)`

**Parameters:**

| Parameter  | Type     | Required | Default | Description                          |
|------------|----------|----------|---------|--------------------------------------|
| `limit`    | `int`    | No       | 20      | Number of results per page (1-100)   |
| `cursor`   | `string` | No       | None    | Pagination cursor for the next page  |
| `type`     | `string` | No       | None    | Filter by resource type              |
| `status`   | `string` | No       | None    | Filter by status                     |
| `sort`     | `string` | No       | `created_at` | Sort field (`created_at`, `name`) |
| `order`    | `string` | No       | `desc`  | Sort direction (`asc`, `desc`)       |

**Returns:** `ResourceList` -- contains `data` (array of Resource) and `pagination`.

### Python

```python
resources = client.resources.list(limit=25, type="document", status="active")
for resource in resources:
    print(resource.id, resource.name, resource.type)

# Access pagination
if resources.has_more:
    next_page = client.resources.list(cursor=resources.cursor)
```

### JavaScript

```javascript
const resources = await client.resources.list({
  limit: 25,
  type: 'document',
  status: 'active'
});

resources.data.forEach(r => console.log(r.id, r.name, r.type));

if (resources.hasMore) {
  const nextPage = await client.resources.list({ cursor: resources.cursor });
}
```

### Go

```go
resources, err := client.Resources.List(&anthology.ListParams{
    Limit:  25,
    Type:   "document",
    Status: "active",
})
if err != nil {
    log.Fatal(err)
}

for _, r := range resources.Data {
    fmt.Println(r.ID, r.Name, r.Type)
}
```

---

## Get Resource

Retrieves a single resource by ID.

**Signature:**

- Python: `client.resources.get(id: str) -> Resource`
- JavaScript: `client.resources.get(id: string) -> Promise<Resource>`
- Go: `client.Resources.Get(id string) (*Resource, error)`

**Parameters:**

| Parameter | Type     | Required | Description            |
|-----------|----------|----------|------------------------|
| `id`      | `string` | Yes      | The resource identifier |

**Returns:** `Resource`

```python
resource = client.resources.get("res_abc123")
print(resource.name)       # "Quarterly Report"
print(resource.status)     # "active"
print(resource.created_at) # 2025-01-15T09:30:00Z
```

---

## Create Resource

Creates a new resource.

**Signature:**

- Python: `client.resources.create(**params) -> Resource`
- JavaScript: `client.resources.create(params) -> Promise<Resource>`
- Go: `client.Resources.Create(params *CreateParams) (*Resource, error)`

**Parameters:**

| Parameter  | Type     | Required | Description                      |
|------------|----------|----------|----------------------------------|
| `name`     | `string` | Yes      | Human-readable name              |
| `type`     | `string` | Yes      | Resource type                    |
| `metadata` | `object` | No       | Arbitrary key-value metadata     |

**Returns:** `Resource` -- the newly created resource.

### Python

```python
resource = client.resources.create(
    name="Quarterly Report",
    type="document",
    metadata={"department": "finance", "quarter": "Q4"}
)
print(resource.id)  # res_def456
```

### JavaScript

```javascript
const resource = await client.resources.create({
  name: 'Quarterly Report',
  type: 'document',
  metadata: { department: 'finance', quarter: 'Q4' }
});
console.log(resource.id); // res_def456
```

### Go

```go
resource, err := client.Resources.Create(&anthology.CreateParams{
    Name: "Quarterly Report",
    Type: "document",
    Metadata: map[string]string{
        "department": "finance",
        "quarter":    "Q4",
    },
})
if err != nil {
    log.Fatal(err)
}
fmt.Println(resource.ID) // res_def456
```

---

## Update Resource

Updates an existing resource. Only the fields you provide will be changed.

**Signature:**

- Python: `client.resources.update(id: str, **params) -> Resource`
- JavaScript: `client.resources.update(id: string, params) -> Promise<Resource>`
- Go: `client.Resources.Update(id string, params *UpdateParams) (*Resource, error)`

**Parameters:**

| Parameter  | Type     | Required | Description                      |
|------------|----------|----------|----------------------------------|
| `id`       | `string` | Yes      | The resource identifier          |
| `name`     | `string` | No       | New name                         |
| `metadata` | `object` | No       | Metadata to merge                |

**Returns:** `Resource` -- the updated resource.

```python
resource = client.resources.update(
    "res_def456",
    name="Q4 Financial Report",
    metadata={"reviewed": "true"}
)
```

---

## Delete Resource

Permanently deletes a resource.

**Signature:**

- Python: `client.resources.delete(id: str) -> None`
- JavaScript: `client.resources.delete(id: string) -> Promise<void>`
- Go: `client.Resources.Delete(id string) error`

**Parameters:**

| Parameter | Type     | Required | Description            |
|-----------|----------|----------|------------------------|
| `id`      | `string` | Yes      | The resource identifier |

**Returns:** None. Raises `NotFoundError` if the resource does not exist.

```python
client.resources.delete("res_def456")
```

```javascript
await client.resources.delete('res_def456');
```

```go
err := client.Resources.Delete("res_def456")
```

See [Pagination]({{ base_url }}/docs/api-reference/pagination/) for details on iterating through large result sets.
