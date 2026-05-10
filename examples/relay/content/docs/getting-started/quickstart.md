+++
title = "Quickstart"
description = "Get up and running with Relay in minutes"
tags = ["quickstart", "getting-started", "guide"]
+++

# Quickstart

This guide will walk you through setting up Relay for the first time and processing your first webhook event.

## 1. Start the Server

Assuming you have already installed Relay (see the [Installation](/docs/getting-started/installation/) guide), start the server in development mode:

```bash
relay serve --dev
```

This starts the server on `http://localhost:8080` using an embedded SQLite database, perfect for local testing.

## 2. Create a Webhook Endpoint

Next, you need to register an endpoint where Relay can receive incoming webhooks. You can do this using the Relay CLI:

```bash
relay endpoints create --name "GitHub Events" --path "/webhooks/github"
```

This creates a new endpoint accessible at `http://localhost:8080/webhooks/github`.

## 3. Configure a Destination

A destination is where Relay forwards the events it receives. For this quickstart, we will configure Relay to forward events to a simple local testing server.

```bash
relay destinations create \
  --name "Local Processor" \
  --endpoint-id "GitHub Events" \
  --url "http://localhost:3000/process"
```

## 4. Send a Test Event

Finally, simulate an incoming webhook using `curl`:

```bash
curl -X POST http://localhost:8080/webhooks/github \
  -H "Content-Type: application/json" \
  -H "X-GitHub-Event: ping" \
  -d '{"zen": "Practicality beats purity."}'
```

You should see the event processed in the Relay server logs and forwarded to your destination. You can view the delivery status using the CLI:

```bash
relay events list
```

Congratulations! You have successfully processed your first event with Relay. Check out the [Configuration](/docs/getting-started/configuration/) guide to learn how to customize your setup for production.
