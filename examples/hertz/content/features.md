+++
title = "Features"
description = "Checks, incidents, and subscriber updates — the whole product on one page."
+++

Hertz does three things well and refuses to do anything else. There is no
analytics suite bolted on, no AI incident summarizer, no marketing pixel. What
follows is the entire product.

## Checks

A check is an HTTP request Hertz runs on a schedule from three regions. You give
it a URL, an interval, and the response it should expect. Hertz does the rest.

- **Multi-region agreement.** A check only trips when at least two of three
  regions fail within the same window, so a single flaky node never pages you.
- **30-second resolution.** The fastest interval is every 30 seconds; the
  gentlest is every 5 minutes. Uptime is computed from the raw check log, not a
  rolled-up average.
- **Expectations, not just 200s.** Assert on status code, a substring in the
  body, a response header, or a latency ceiling.

```toml
[check.api-gateway]
url = "https://api.northwind.app/healthz"
interval = "30s"
regions = ["iad", "fra", "sin"]
expect_status = 200
expect_body = "\"ok\":true"
max_latency = "800ms"
```

## Incidents

When something breaks, you open an incident from the dashboard or the CLI. Pick
an impact level, write a first update in plain language, and Hertz timestamps
it, flips the affected services on your public board, and emails subscribers.

Every subsequent update is appended in order. When you resolve the incident it
stays in the timeline permanently, and the minutes of downtime are folded into
the 90-day uptime figure automatically. Nothing disappears when the dust
settles.

## Subscribers

Customers subscribe with an email address — no account, no password. They get a
message when an incident opens, when it updates, and when it resolves, and a
one-click link to stop. You can also expose a JSON endpoint and an RSS feed so
teams can wire your status into their own tooling.

Everything is served as static HTML from the edge, so your status page stays up
even when the service it reports on does not.
