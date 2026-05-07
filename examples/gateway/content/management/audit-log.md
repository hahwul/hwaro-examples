+++
title = "Audit Log"
+++

The audit log records every administrative action taken against the Gateway control plane. Entries are append-only, signed in chains, and forwarded to the long-term archive within ten seconds of being written.

## Event shape

Each entry is a structured record. Operators consume the log through the management console; downstream consumers read the same records from the archive bucket.

<table>
  <thead>
    <tr>
      <th>FIELD</th>
      <th>TYPE</th>
      <th>NOTES</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ts</code></td>
      <td>RFC3339</td>
      <td>UTC timestamp with millisecond precision.</td>
    </tr>
    <tr>
      <td><code>actor</code></td>
      <td>string</td>
      <td>Operator subject or service principal.</td>
    </tr>
    <tr>
      <td><code>action</code></td>
      <td>string</td>
      <td>Verb-noun pair, e.g. <code>key.rotate</code>.</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>string</td>
      <td>Resource identifier acted upon.</td>
    </tr>
    <tr>
      <td><code>result</code></td>
      <td>enum</td>
      <td><code>allow</code>, <code>deny</code>, or <code>error</code>.</td>
    </tr>
    <tr>
      <td><code>chain</code></td>
      <td>string</td>
      <td>SHA-256 of the previous entry concatenated with this one.</td>
    </tr>
  </tbody>
</table>

## Verifying the chain

The chain field allows a consumer to detect tampering after the fact. To verify a range, compute the SHA-256 of each entry concatenated with the recorded `chain` of the entry before it; compare with the recorded `chain` of the current entry. A mismatch indicates an entry has been altered or removed.

## Retention

Audit records are retained for seven years in cold storage. The hot index, used by the console, retains 90 days of records and is rebuilt on demand from cold storage when older queries are requested.

## Sensitive payloads

Request and response bodies are never written to the audit log. Only the headers that bear on the authorization decision are captured, and bearer tokens are reduced to their final eight characters before being recorded.
