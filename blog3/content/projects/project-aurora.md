+++
title = "Project Aurora"
weight = 1
description = "Real-time analytics dashboard"
tags = ["web", "data"]
skills = ["TypeScript", "React", "D3"]

[extra]
year = 2025
client = "Acme Corp"
url = "https://example.com/aurora"
status = "Live"
+++

## Overview

Aurora is a real-time analytics dashboard that processes millions of events per second and presents them in intuitive visualizations.

## Highlights

- Sub-second query response times on 10M+ row datasets
- Interactive charts built with D3.js
- Role-based access control with SSO integration

{{< alert type="info" message="This project won the 2025 Best Dashboard award." >}}

## Technical Details

The frontend is a React SPA with server-side rendering for initial load performance. The backend uses a custom streaming pipeline built on Apache Kafka.

```typescript
const stream = kafka.subscribe("events");
stream.pipe(transform).pipe(aggregate).pipe(broadcast);
```
