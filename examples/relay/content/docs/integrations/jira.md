+++
title = "Jira"
description = "Create and update Jira issues from Relay events"
tags = ["jira", "integrations"]
+++

# Jira Integration

The Jira integration connects Relay events to Atlassian Jira. It can create issues, add comments, and transition issue statuses based on incoming events.

## Setup

Configure the Jira integration with your Atlassian instance URL and API credentials:

```toml
[integrations.jira]
base_url = "https://acme.atlassian.net"
email = "${JIRA_EMAIL}"
api_token = "${JIRA_API_TOKEN}"
default_project = "OPS"
```

Generate an API token from your Atlassian account settings at `https://id.atlassian.com/manage-profile/security/api-tokens`.

## Actions

### Create Issue

Create a Jira issue when a Relay event occurs:

```bash
curl -X POST http://localhost:8080/api/v1/endpoints \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{
    "integration": "jira",
    "events": ["alert.fired"],
    "config": {
      "action": "create_issue",
      "project": "OPS",
      "issue_type": "Bug",
      "priority": "High",
      "summary_template": "Alert: {{ data.alert_name }}",
      "description_template": "h2. Alert Details\n\n||Field||Value||\n|Metric|{{ data.metric }}|\n|Value|{{ data.value }}|\n|Threshold|{{ data.threshold }}|\n|Severity|{{ data.severity }}|\n|Region|{{ data.labels.region }}|",
      "labels": ["relay", "automated", "alert"],
      "components": ["Infrastructure"]
    }
  }'
```

### Severity Mapping

Map event severity levels to Jira priorities:

```toml
[integrations.jira.priority_map]
critical = "Highest"
high = "High"
medium = "Medium"
low = "Low"
info = "Lowest"
```

When an `alert.fired` event arrives with `"severity": "critical"`, Relay creates the Jira issue with priority "Highest".

### Add Comment

Append a comment to an existing Jira issue:

```json
{
  "integration": "jira",
  "events": ["deployment.completed"],
  "config": {
    "action": "add_comment",
    "issue_key_from": "data.jira_ticket",
    "body_template": "Deployed version {{ data.version }} to {{ data.environment }}.\n\nDuration: {{ data.duration_seconds }}s\nStatus: {{ data.status }}"
  }
}
```

### Transition Issue

Move a Jira issue to a different status:

```json
{
  "integration": "jira",
  "events": ["alert.resolved"],
  "config": {
    "action": "transition",
    "issue_key_from": "data.jira_ticket",
    "transition_name": "Done"
  }
}
```

## Example Workflow

A typical alert-to-resolution workflow with Jira:

1. **Alert fires** -- Relay receives an `alert.fired` event and creates a Jira issue in the OPS project with severity-based priority
2. **Team investigates** -- The on-call engineer picks up the Jira issue and begins investigation
3. **Deployment fix** -- A fix is deployed, triggering a `deployment.completed` event. Relay adds a comment to the Jira issue with deployment details
4. **Alert resolves** -- The monitoring system sends an `alert.resolved` event. Relay transitions the Jira issue to "Done"

```
alert.fired --> Create Jira Issue (OPS-1234)
                       |
deployment.completed --> Add Comment to OPS-1234
                       |
alert.resolved --> Transition OPS-1234 to "Done"
```

## Custom Fields

Map event data to Jira custom fields using field IDs:

```json
{
  "config": {
    "action": "create_issue",
    "custom_fields": {
      "customfield_10001": "{{ data.environment }}",
      "customfield_10002": "{{ data.service }}",
      "customfield_10003": "{{ source }}"
    }
  }
}
```

Find custom field IDs by querying the Jira REST API:

```bash
curl -u user@example.com:api-token \
  "https://acme.atlassian.net/rest/api/3/field" | \
  python3 -m json.tool
```

## Rate Limiting

Atlassian Cloud enforces rate limits on API requests. The Jira integration handles this by:

- Respecting `Retry-After` headers from the Jira API
- Queuing deliveries when rate limits are approached
- Automatically resuming delivery when the limit resets

Standard rate limits for Atlassian Cloud:

| Tier | Requests per minute |
|------|-------------------|
| Basic | 60 |
| Standard | 120 |
| Premium | 240 |

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| `401 Unauthorized` | Invalid email or API token | Regenerate the API token |
| `404 Project not found` | Wrong project key | Verify the project key in Jira |
| `400 Field required` | Missing required fields | Check issue type required fields in Jira |
| Issue not transitioning | Invalid transition name | List valid transitions with the Jira API |
