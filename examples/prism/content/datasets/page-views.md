+++
title = "Page Views"
date = "2026-03-18"
description = "Web analytics page view events with attribution data"
weight = 3
tags = ["analytics", "real-time"]

[extra]
records = "312,445"
throughput = "201/s"
quality_score = "87"
category = "analytics"
+++

## Overview

The `page_views` dataset tracks all page view events across web properties. It includes referrer data, UTM parameters, and Core Web Vitals performance metrics for each view.

## Schema

| Field | Type | Description |
|---|---|---|
| view_id | UUID | Unique view identifier |
| page_url | STRING | Full page URL |
| referrer | STRING | HTTP referrer (nullable) |
| utm_source | STRING | Campaign source |
| utm_medium | STRING | Campaign medium |
| utm_campaign | STRING | Campaign name |
| load_time_ms | INT | Page load time in milliseconds |
| lcp_ms | INT | Largest Contentful Paint |
| cls | FLOAT | Cumulative Layout Shift |
| fid_ms | INT | First Input Delay |
| timestamp | TIMESTAMP | View timestamp (UTC) |

## Top Pages (Last 7 Days)

| Page | Views | Avg. Load Time | Bounce Rate |
|---|---|---|---|
| /pricing | 48,201 | 1.2s | 34.2% |
| /docs/quickstart | 31,877 | 0.9s | 21.5% |
| /blog/release-notes | 27,443 | 1.4s | 45.8% |
| /features | 22,109 | 1.1s | 28.3% |
| /signup | 19,842 | 0.8s | 18.1% |

## Core Web Vitals Summary

| Metric | p50 | p75 | p95 | Target |
|---|---|---|---|---|
| LCP | 1.2s | 1.8s | 3.1s | < 2.5s |
| CLS | 0.04 | 0.08 | 0.18 | < 0.1 |
| FID | 12ms | 28ms | 87ms | < 100ms |
