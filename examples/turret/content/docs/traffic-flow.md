+++
title = "Traffic Flow"
section = "docs"
+++

# TRAFFIC_PIPELINE_ANALYSIS

The Turret filtering pipeline ensures all incoming traffic is inspected across multiple layers before reaching the origin server.

<div class="diagram">
  <div class="diagram-node">INCOMING_TRAFFIC (EXT)</div>
  <div class="diagram-arrow"></div>
  <div class="diagram-node" style="border-color: var(--primary);">L3_L4_PROTECTION (DDOS)</div>
  <div class="diagram-arrow"></div>
  <div class="diagram-node" style="border-color: var(--accent);">RATE_LIMITER & IP_REPUTATION</div>
  <div class="diagram-arrow"></div>
  <div class="diagram-node" style="border-color: var(--primary);">L7_WAF_INSPECTION (RULES)</div>
  <div class="diagram-arrow"></div>
  <div class="diagram-node">ORIGIN_SERVER (INT)</div>
</div>

## FILTERING_PROCESS_OVERVIEW

1.  **L3_L4_PROTECTION**: Identifies SYN floods, UDP amplification, and other protocol-level anomalies. Traffic is scrubbed at the edge.
2.  **RATE_LIMITER**: Evaluates request frequency against pre-defined thresholds. Excess traffic is dropped with a `429_TOO_MANY_REQUESTS` status.
3.  **L7_WAF_INSPECTION**: Performs deep packet inspection on headers, cookies, and bodies. Matches against active defense rules.
4.  **ORIGIN_SERVER**: Sanitized and verified traffic is forwarded to the application infrastructure.
