+++
title = "Authentication Flow"
+++

This section illustrates the standard OAuth2 authentication flow within the Security Gateway.

## Authorization Code Flow

The Authorization Code flow is the most common way to authenticate users for web and mobile applications.

<div class="sequence-diagram">
  <div class="sequence-line">
    <div class="sequence-actor">Client App</div>
    <div class="sequence-arrow"><div class="sequence-label">Auth Request</div></div>
    <div class="sequence-actor">Gateway</div>
  </div>
  <div class="sequence-line">
    <div class="sequence-actor">Gateway</div>
    <div class="sequence-arrow"><div class="sequence-label" style="transform: scaleX(-1);">Redirect to Login</div></div>
    <div class="sequence-actor">User Agent</div>
  </div>
  <div class="sequence-line">
    <div class="sequence-actor">User Agent</div>
    <div class="sequence-arrow"><div class="sequence-label">Submit Credentials</div></div>
    <div class="sequence-actor">Gateway</div>
  </div>
  <div class="sequence-line">
    <div class="sequence-actor">Gateway</div>
    <div class="sequence-arrow"><div class="sequence-label" style="transform: scaleX(-1);">Auth Code</div></div>
    <div class="sequence-actor">Client App</div>
  </div>
  <div class="sequence-line">
    <div class="sequence-actor">Client App</div>
    <div class="sequence-arrow"><div class="sequence-label">Exchange Code for Token</div></div>
    <div class="sequence-actor">Gateway</div>
  </div>
  <div class="sequence-line">
    <div class="sequence-actor">Gateway</div>
    <div class="sequence-arrow"><div class="sequence-label" style="transform: scaleX(-1);">Access Token</div></div>
    <div class="sequence-actor">Client App</div>
  </div>
</div>

## Key Points

1. **Secure Redirects**: Only pre-registered redirect URIs are allowed.
2. **PKCE**: Proof Key for Code Exchange is recommended for all clients.
3. **Short-lived Codes**: Authorization codes expire after 60 seconds.

<div class="info-box warning">
  <div class="info-box-title">Security Alert</div>
  Never expose your Client Secret in client-side code (JavaScript, Mobile Apps). Use the backend-for-frontend pattern or PKCE instead.
</div>
