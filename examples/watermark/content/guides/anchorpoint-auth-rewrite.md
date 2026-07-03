+++
title = "Rewriting Anchorpoint's Authentication Docs From Scratch"
date = "2025-02-09"
description = "Turning an exported internal wiki into a versioned, docs-as-code authentication reference."
+++

Anchorpoint's authentication documentation began as an internal wiki page, exported to Markdown and dropped into the developer portal with the formatting mostly intact and none of the internal-only caveats removed. It described three different token-refresh strategies without saying which one the public API actually supported. This is the project that replaced it.

<!-- more -->

## Finding the actual behavior first

Before writing anything, the rewrite started with a week of reading the auth service's source and its integration tests, because the wiki page and the code had already diverged in two places. The token lifetime the docs claimed — 24 hours — was wrong; the service issued 12-hour tokens with a 24-hour refresh window. That distinction became the first fixed fact in the new page, verified against the code rather than the previous documentation.

## The refresh flow, documented once

The rewrite settled on a single supported refresh pattern and showed it completely:

```bash
curl https://auth.anchorpoint.dev/oauth/token \
  -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=refresh_token" \
  -d "refresh_token=rft_9Km2LpQ8fA0x3Vn" \
  -d "client_id=your-client-id"
```

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 43200,
  "refresh_token": "rft_2Fk9pLmQ4Nw7Rt"
}
```

Note the returned `refresh_token` is a new value, not the one submitted — the old docs never mentioned that refresh tokens rotate on use, which meant integrators who cached the original refresh token got a confusing invalid-token error on their second refresh attempt. That single sentence, added directly under the response block, resolved a category of support ticket the previous docs never addressed.

## Language coverage

The wiki export had no code examples in any language beyond a single untested cURL command. The rewrite added five: cURL, Python, Go, Node, and Ruby, each generated from the same underlying request definition and tested in CI against a sandbox auth service on every documentation pull request, so a breaking change to the token endpoint fails the docs build before it reaches a reader.

## Result

The authentication pages became the most-visited section of the Anchorpoint developer portal within two months of the rewrite, and stayed there — a sign, more than any traffic number on its own, that the previous version had been actively sending readers back to search rather than answering the question the first time.
