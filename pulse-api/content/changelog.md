+++
title = "Changelog"
description = "API version history and changes"
+++

<div class="max-w-4xl mx-auto py-10">

# Changelog

## v2.1 — February 2026

- Added webhook signature verification with `secret` parameter
- New `user.invited` and `user.removed` webhook events
- Increased rate limit for Pro plans from 200 to 300 requests/minute
- Added `last_active_at` field to User objects

## v2.0 — December 2025

- **Breaking**: Pagination now uses `page` and `per_page` instead of `offset` and `limit`
- Added Projects API (`/v1/projects`)
- Added Webhooks API (`/v1/webhooks`)
- New `read-only` API key type
- Response envelope now includes `meta.request_id`

## v1.2 — October 2025

- Added `role` filter to List Users endpoint
- Improved error messages with `request_id` in all error responses
- Added rate limit headers to all responses

## v1.1 — August 2025

- Added User update endpoint (`PATCH /v1/users/:id`)
- Added `avatar_url` field to User objects
- Bug fix: pagination `total` count now excludes deleted records

## v1.0 — June 2025

- Initial API release
- Users API: list, get, create
- Bearer token authentication
- Rate limiting (60 req/min for free tier)

</div>
