+++
title = "How We Index"
description = "The submission, review, and re-check pipeline behind every Orbit listing."
+++

Every page in Orbit passes through the same four stops before it appears in a search result. None of them are automated end to end — a person makes the final call at each one.

## 1. Submission

A site owner or a curator nominates a page through the [for-site-owners](/for-site-owners/) form, or a curator finds it during their own browsing and adds it to their category's queue. We do not accept bulk submissions or sitemap dumps — one URL, one paragraph on why it belongs, submitted by someone who can answer follow-up questions about it.

## 2. The read

A curator assigned to that category opens the page — the actual page, not a cached snapshot — and reads it. They are checking three things: that a specific person wrote it, that it still says what the submission claimed, and that it fits the category's scope rather than being crammed in for the traffic. A page fails here more often than at any other stage.

## 3. Fingerprinting

If the page passes the read, the curator asks the owner to drop a small marker file at their site root. It costs nothing to serve and tells our re-check pass, six months from now, that the same person still maintains the page:

```text
# orbit.txt — https://orbit.example/for-site-owners/
owner: J. Marchetti
maintained-since: 2019
contact: hello@marchetti.example
note: personal site, hand-written, no CMS
```

We don't parse this file with anything clever. A curator reads it, same as the page.

## 4. Placement and re-check

The page is filed under one category — never several, to keep browsing honest — with a one-line description a curator wrote themselves, never copied from the page's own meta description. Every listing returns to a curator's queue on a twelve-month cycle. If the marker file is gone, the writing has changed hands, or the site has gone quiet, the listing is pulled rather than left to rot.

The whole pipeline runs on roughly sixty listings a week across the desk. See [Principles](/principles/) for the reasoning behind why we've kept it that slow.
