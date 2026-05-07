+++
title = "Token Lifecycle"
+++

Bearer tokens issued by the Gateway are short-lived signed envelopes. Each token carries the subject, issuing audience, granted scopes, and a hard expiry. Refresh tokens are rotated on every exchange.

## Token shape

The Gateway issues opaque access tokens by default and signed JWTs on request. JWTs are signed with the active asymmetric key; the public half is published at the discovery endpoint.

<table>
  <thead>
    <tr>
      <th>CLAIM</th>
      <th>TYPE</th>
      <th>NOTES</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>iss</code></td>
      <td>string</td>
      <td>Always <code>https://gateway.local</code>.</td>
    </tr>
    <tr>
      <td><code>sub</code></td>
      <td>string</td>
      <td>Stable subject identifier.</td>
    </tr>
    <tr>
      <td><code>aud</code></td>
      <td>string[]</td>
      <td>Audience for which the token is valid.</td>
    </tr>
    <tr>
      <td><code>exp</code></td>
      <td>int</td>
      <td>Expiry in epoch seconds.</td>
    </tr>
    <tr>
      <td><code>scope</code></td>
      <td>string</td>
      <td>Space-separated scope list.</td>
    </tr>
  </tbody>
</table>

## Lifetimes

Access tokens default to 15 minutes. Refresh tokens default to 30 days and are single-use; each refresh issues a new pair and invalidates the previous refresh token. Service tokens, used for machine-to-machine traffic, may be configured with a longer lifetime up to 24 hours.

## Revocation

A token may be revoked by calling the revocation endpoint with the token value and the issuing client credentials. Revoked tokens are added to a denylist that is consulted on every request; the denylist is propagated across edge nodes within five seconds.

When a refresh token is reused after a successful exchange, the Gateway treats the event as a possible replay and revokes the entire token family. The subject is required to re-authenticate.

## Key rotation

Signing keys rotate on a 90-day schedule. The previous key remains valid for verification for the length of the longest configured token lifetime so that tokens issued under the old key continue to verify until they expire on their own.
