+++
title = "A public status.json for every page"
date = "2026-02-19"
description = "Machine-readable status at a stable URL, so teams can wire your uptime into their own dashboards."
[extra]
tag = "api"
+++

People kept scraping the HTML of their own status pages to feed internal
dashboards, and scraping HTML is a promise nobody should have to keep. So every
Hertz page now exposes a stable, versioned `status.json` alongside the human
view.

<!-- more -->

The endpoint lives at `https://status.yourdomain.com/status.json` and needs no
authentication — it carries exactly what the public page shows and nothing more.

```json
{
  "page": "status.northwind.app",
  "updated_at": "2026-02-19T14:03:11Z",
  "overall": "operational",
  "services": [
    { "name": "API Gateway", "status": "operational", "uptime_90d": 99.99 },
    { "name": "Dashboard",   "status": "operational", "uptime_90d": 99.97 },
    { "name": "Webhooks",    "status": "degraded",    "uptime_90d": 99.82 }
  ],
  "active_incidents": 0
}
```

The `overall` field collapses to the worst active service state, so a single
`if` in your monitoring is enough to mirror our verdict. Uptime figures are the
same ratios shown on the page, rounded to two decimals and never up.

The response is cached at the edge for 15 seconds and sends an `ETag`, so polling
it every few seconds is cheap and friendly. As with the page itself, the JSON is
served independently of the service it describes — it stays reachable when your
app does not.
