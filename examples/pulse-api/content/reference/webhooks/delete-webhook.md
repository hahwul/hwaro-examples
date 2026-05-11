+++
title = "Delete Webhook"
date = 2025-02-15
description = "Removes a registered webhook endpoint."
[extra]
method = "DELETE"
api_path = "/v1/webhooks/:id"
+++
Use this endpoint to remove a webhook. Once deleted, the system will immediately stop sending events to the configured URL. This is useful for rotating webhook secrets, retiring old integration endpoints, or temporarily disabling a noisy webhook while troubleshooting issues.

## Request

Provide the webhook ID in the URL path. No request body is required. The webhook ID must correspond to an existing, active webhook within your current project context. Providing an invalid or malformed ID will result in a `400 Bad Request` or `404 Not Found` response.

## Response

Returns a `204 No Content` response upon successful deletion. This indicates the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.

```json
// 204 No Content
```

If you delete a webhook that currently has events queued for delivery, those pending events will be discarded and will not be sent. You can recreate the webhook at any time by using the `POST /v1/webhooks` endpoint, but you will need to specify the URL and subscribed events again.
