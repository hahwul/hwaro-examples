+++
title = "Deploy v2.4.1"
date = "2025-03-20"
description = "Production deployment of API v2.4.1 with performance fixes"
tags = ["deploy", "production"]
+++

## Deployment: API v2.4.1

**Date**: 2025-03-20 10:15 UTC
**Duration**: 4 minutes (rolling update)
**Rollback**: Not required

### Changes

- Fixed connection pool exhaustion under high concurrency
- Improved search endpoint query performance by 35%
- Updated rate limiting configuration for partner integrations
- Patched CVE-2025-1234 in dependency `http-router`

### Impact

- Zero downtime during rollout
- p99 latency on `/api/search` dropped from 450ms to 290ms
- No increase in error rates post-deploy
