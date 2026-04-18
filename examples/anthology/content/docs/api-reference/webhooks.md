+++
title = "Webhooks"
weight = 3
tags = ["api", "webhooks", "events"]
+++

# Webhooks

Webhooks allow your application to receive real-time notifications when events occur in the Anthology platform. Instead of polling the API, you register an endpoint URL that Anthology will send HTTP POST requests to.

## Webhook Events

| Event Type               | Description                              |
|--------------------------|------------------------------------------|
| `resource.created`       | A new resource was created               |
| `resource.updated`       | A resource was modified                  |
| `resource.deleted`       | A resource was permanently deleted       |
| `resource.archived`      | A resource was archived                  |
| `export.completed`       | A bulk export job finished               |
| `export.failed`          | A bulk export job failed                 |

## Creating a Webhook

**Signature:**

- Python: `client.webhooks.create(**params) -> Webhook`
- JavaScript: `client.webhooks.create(params) -> Promise<Webhook>`
- Go: `client.Webhooks.Create(params *WebhookCreateParams) (*Webhook, error)`

**Parameters:**

| Parameter  | Type       | Required | Description                              |
|------------|------------|----------|------------------------------------------|
| `url`      | `string`   | Yes      | The endpoint URL to receive events       |
| `events`   | `string[]` | Yes      | List of event types to subscribe to      |
| `secret`   | `string`   | No       | Signing secret (auto-generated if omitted) |
| `metadata` | `object`   | No       | Arbitrary metadata for the webhook       |

### Python

```python
webhook = client.webhooks.create(
    url="https://yourapp.com/webhooks/anthology",
    events=["resource.created", "resource.updated", "resource.deleted"]
)
print(webhook.id)      # whk_abc123
print(webhook.secret)  # whsec_xyz789...
```

### JavaScript

```javascript
const webhook = await client.webhooks.create({
  url: 'https://yourapp.com/webhooks/anthology',
  events: ['resource.created', 'resource.updated', 'resource.deleted']
});
console.log(webhook.id);     // whk_abc123
console.log(webhook.secret); // whsec_xyz789...
```

### Go

```go
webhook, err := client.Webhooks.Create(&anthology.WebhookCreateParams{
    URL:    "https://yourapp.com/webhooks/anthology",
    Events: []string{"resource.created", "resource.updated", "resource.deleted"},
})
if err != nil {
    log.Fatal(err)
}
fmt.Println(webhook.ID)     // whk_abc123
fmt.Println(webhook.Secret) // whsec_xyz789...
```

## Payload Schema

Every webhook delivery sends a JSON payload with the following structure:

```json
{
  "id": "evt_abc123",
  "type": "resource.created",
  "created_at": "2025-03-15T14:30:00Z",
  "data": {
    "id": "res_def456",
    "name": "New Document",
    "type": "document",
    "status": "active",
    "metadata": {},
    "created_at": "2025-03-15T14:30:00Z",
    "updated_at": "2025-03-15T14:30:00Z"
  }
}
```

## Verifying Signatures

Every webhook request includes an `X-Anthology-Signature` header containing an HMAC-SHA256 signature of the request body. Always verify this signature before processing the payload.

### Python

```python
from anthology.webhooks import verify_signature

payload = request.body
signature = request.headers["X-Anthology-Signature"]
secret = "whsec_xyz789..."

is_valid = verify_signature(payload, signature, secret)
if not is_valid:
    return Response(status=401)
```

### JavaScript

```javascript
import { verifySignature } from '@anthology/sdk/webhooks';

const payload = req.body;
const signature = req.headers['x-anthology-signature'];
const secret = 'whsec_xyz789...';

const isValid = verifySignature(payload, signature, secret);
if (!isValid) {
  return res.status(401).send('Invalid signature');
}
```

### Go

```go
import "github.com/anthology-io/anthology-go/webhook"

payload := r.Body
signature := r.Header.Get("X-Anthology-Signature")
secret := "whsec_xyz789..."

err := webhook.VerifySignature(payload, signature, secret)
if err != nil {
    http.Error(w, "Invalid signature", http.StatusUnauthorized)
    return
}
```

## Signature Verification Details

The signature is computed as:

```
HMAC-SHA256(webhook_secret, timestamp + "." + raw_body)
```

The `X-Anthology-Timestamp` header contains the Unix timestamp used in the signature computation. You should also verify that the timestamp is within a reasonable window (e.g., 5 minutes) to prevent replay attacks.

## Retry Policy

If your endpoint returns a non-2xx status code or fails to respond within 30 seconds, Anthology will retry the delivery with exponential backoff:

| Attempt | Delay After Failure |
|---------|---------------------|
| 1       | 1 minute            |
| 2       | 5 minutes           |
| 3       | 30 minutes          |
| 4       | 2 hours             |
| 5       | 24 hours            |

After 5 failed attempts, the webhook is marked as `failed` and no further deliveries are attempted. You can re-enable the webhook from the dashboard or via the API.

## Listing Webhooks

```python
webhooks = client.webhooks.list()
for wh in webhooks:
    print(wh.id, wh.url, wh.events)
```

## Deleting a Webhook

```python
client.webhooks.delete("whk_abc123")
```

## Best Practices

- Always verify webhook signatures before processing payloads
- Respond with a 200 status code quickly and process the event asynchronously
- Implement idempotency using the `id` field to handle duplicate deliveries
- Store the webhook secret securely and rotate it periodically
- Monitor your webhook endpoint for failures using the dashboard
