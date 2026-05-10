+++
title = "Delete Project"
date = 2025-02-15
description = "Permanently removes a project and all associated data."
[extra]
method = "DELETE"
api_path = "/v1/projects/:id"
+++
This endpoint permanently deletes a project and all of its associated resources. This action cannot be undone. When a project is deleted, any API keys, webhooks, and associated team member access linked to this project are also immediately invalidated and removed from our systems.

## Request

You must provide the project ID in the path. No request body is required for this operation. Ensure that you have the appropriate administrative permissions to execute this request, as standard users are not authorized to delete projects. If you attempt this without the correct permissions, you will receive a `403 Forbidden` response.

## Response

Returns a `204 No Content` response on success, indicating that the project was successfully deleted and no further information is available. If the project ID does not exist, a `404 Not Found` response will be returned.

```json
// 204 No Content
```

It is highly recommended that you export any necessary audit logs or historical data before invoking this endpoint, as our support team cannot recover projects once the deletion process has completed.
