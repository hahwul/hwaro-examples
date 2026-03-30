+++
title = "Slack"
description = "Send Relay events to Slack channels"
tags = ["slack", "integrations"]
+++

# Slack Integration

The Slack integration delivers Relay events as formatted messages to Slack channels using incoming webhooks or the Slack API.

## Setup

### Using Incoming Webhooks

1. Go to your Slack workspace settings and create a new incoming webhook
2. Select the channel where messages should be posted
3. Copy the webhook URL
4. Register the webhook URL as a Relay endpoint:

```bash
curl -X POST http://localhost:8080/api/v1/endpoints \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{
    "url": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXX",
    "integration": "slack",
    "events": ["deployment.completed", "deployment.failed", "alert.fired"],
    "config": {
      "channel": "#deployments",
      "username": "Relay Bot",
      "format": "rich"
    }
  }'
```

### Using Slack API

For more control over message formatting, use the Slack API with a bot token:

```toml
[integrations.slack]
method = "api"
bot_token = "${SLACK_BOT_TOKEN}"
default_channel = "#engineering"
```

## Message Formatting

The Slack integration supports two formatting modes:

### Simple Format

Posts a plain text message with the event summary:

```
[deployment.completed] api-gateway v2.1.0 deployed to production (142s)
```

### Rich Format

Posts a structured message using Slack Block Kit:

```json
{
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "Deployment Completed"
      }
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*Service:*\napi-gateway"
        },
        {
          "type": "mrkdwn",
          "text": "*Version:*\n2.1.0"
        },
        {
          "type": "mrkdwn",
          "text": "*Environment:*\nproduction"
        },
        {
          "type": "mrkdwn",
          "text": "*Duration:*\n142s"
        }
      ]
    }
  ]
}
```

## Event-to-Channel Routing

Route different event types to different channels:

```toml
[integrations.slack]
method = "api"
bot_token = "${SLACK_BOT_TOKEN}"

[[integrations.slack.routes]]
events = ["deployment.completed", "deployment.failed"]
channel = "#deployments"

[[integrations.slack.routes]]
events = ["alert.fired", "alert.resolved"]
channel = "#alerts"

[[integrations.slack.routes]]
events = ["issue.created"]
channel = "#support"
```

## Rate Limiting

Slack enforces rate limits on incoming webhooks and API calls. The Relay Slack integration handles this automatically:

- Incoming webhooks: 1 request per second per webhook URL
- Slack API: respects `Retry-After` headers returned by Slack

If the rate limit is exceeded, deliveries are queued and retried after the rate limit window resets.

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Messages not appearing | Invalid webhook URL | Verify the webhook URL in Slack settings |
| `channel_not_found` error | Bot not in channel | Invite the bot to the target channel |
| Duplicate messages | Retry after timeout | Increase `delivery.timeout` to 30s |
| Formatting broken | Invalid Block Kit JSON | Test blocks in the Slack Block Kit Builder |
