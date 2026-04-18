+++
title = "Authentication"
+++

Authentication is the process of verifying the identity of a user or service. The Security Gateway supports several authentication mechanisms to ensure only authorized entities can access protected resources.

## Supported Methods

- **OAuth2 / OIDC** - Modern token-based authentication for web and mobile applications.
- **API Keys** - Simple and secure access for server-to-server communication.
- **Mutual TLS (mTLS)** - Certificate-based authentication for high-security environments.

## Token Lifecycle

Access tokens issued by the Gateway have a configurable expiration time. Refresh tokens can be used to obtain new access tokens without re-authenticating.

[Learn more about the Auth Flow ->](flow/)
