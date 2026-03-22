+++
title = "How do I set up webhooks?"
date = "2026-03-06"
tags = ["api", "webhooks"]
weight = 4
+++

Webhooks let you receive real-time notifications when events occur:

1. Go to **Settings** then **API** then **Webhooks**
2. Click **Add Webhook**
3. Enter the URL where you want to receive events
4. Select the event types to subscribe to (e.g., task.created, task.updated)
5. Click **Save**

Each webhook delivery includes a signature header (`X-Webhook-Signature`) for verifying authenticity. Failed deliveries are retried up to 3 times with exponential backoff.
