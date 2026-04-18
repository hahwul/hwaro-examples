+++
title = "GitHub"
description = "Integrate Relay with GitHub repositories and workflows"
tags = ["github", "integrations"]
+++

# GitHub Integration

The GitHub integration connects Relay events to GitHub repositories. It can create issues, post comments, update commit statuses, and trigger GitHub Actions workflows.

## Setup

Create a GitHub personal access token or GitHub App with the required permissions, then configure the integration:

```toml
[integrations.github]
auth = "token"
token = "${GITHUB_TOKEN}"
default_owner = "acme"
```

For GitHub App authentication:

```toml
[integrations.github]
auth = "app"
app_id = 12345
private_key_path = "/etc/relay/github-app.pem"
installation_id = 67890
```

## Actions

### Create Commit Status

Update the build status on a commit when a deployment event occurs:

```bash
curl -X POST http://localhost:8080/api/v1/endpoints \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{
    "integration": "github",
    "events": ["deployment.completed", "deployment.failed"],
    "config": {
      "action": "commit_status",
      "owner": "acme",
      "repo": "web-app",
      "context": "relay/deploy"
    }
  }'
```

This maps event data to commit statuses:

| Event | Status | Description |
|-------|--------|-------------|
| `deployment.completed` | `success` | Deployment succeeded |
| `deployment.failed` | `failure` | Deployment failed |
| `deployment.started` | `pending` | Deployment in progress |

### Create Issue

Automatically create a GitHub issue when an alert fires:

```json
{
  "integration": "github",
  "events": ["alert.fired"],
  "config": {
    "action": "create_issue",
    "owner": "acme",
    "repo": "infrastructure",
    "labels": ["alert", "automated"],
    "title_template": "Alert: {{ data.alert_name }} ({{ data.severity }})",
    "body_template": "## Alert Details\n\n- **Metric:** {{ data.metric }}\n- **Value:** {{ data.value }}\n- **Threshold:** {{ data.threshold }}\n- **Region:** {{ data.labels.region }}"
  }
}
```

### Trigger Workflow

Trigger a GitHub Actions workflow in response to Relay events:

```json
{
  "integration": "github",
  "events": ["deployment.completed"],
  "config": {
    "action": "trigger_workflow",
    "owner": "acme",
    "repo": "web-app",
    "workflow": "post-deploy-tests.yml",
    "ref": "main",
    "inputs": {
      "environment": "{{ data.environment }}",
      "version": "{{ data.version }}"
    }
  }
}
```

### Post Comment

Add a comment to a pull request or issue:

```json
{
  "integration": "github",
  "events": ["deployment.completed"],
  "config": {
    "action": "comment",
    "owner": "acme",
    "repo": "web-app",
    "issue_number_from": "data.pull_request_number",
    "body_template": "Deployed version {{ data.version }} to {{ data.environment }}."
  }
}
```

## Payload Mapping

The GitHub integration maps Relay event fields to GitHub API parameters. You can use template expressions to reference event data:

| Template | Resolves To |
|----------|-------------|
| `{{ event.type }}` | The event type string |
| `{{ data.field }}` | A field from the event data |
| `{{ data.nested.field }}` | A nested field from the event data |
| `{{ source }}` | The event source identifier |

## Rate Limiting

GitHub imposes API rate limits based on your authentication method:

| Auth Method | Rate Limit |
|-------------|------------|
| Personal access token | 5,000 requests/hour |
| GitHub App | 5,000 requests/hour per installation |
| OAuth App | 5,000 requests/hour per user |

Relay tracks remaining rate limit quota and pauses deliveries when the limit is approaching. Queued deliveries resume automatically when the rate limit window resets.

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| `401 Unauthorized` | Invalid or expired token | Regenerate the access token |
| `403 Forbidden` | Insufficient permissions | Check token scopes: `repo`, `workflow` |
| `404 Not Found` | Repository does not exist or is private | Verify owner/repo and token access |
| `422 Validation Failed` | Invalid API parameters | Check template expressions in config |
