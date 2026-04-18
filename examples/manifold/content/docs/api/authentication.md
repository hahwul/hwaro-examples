+++
title = "Authentication"
description = "Authentication and authorization for Manifold APIs"
tags = ["authentication", "authorization", "security", "api"]
+++

# Authentication

Manifold uses token-based authentication for both the Admin API and Tenant API. The platform supports API keys, JWT tokens, and SAML-based SSO for enterprise tenants.

## Authentication Methods

| Method | Admin API | Tenant API | Description |
|--------|-----------|------------|-------------|
| API Key | Yes | Yes | Long-lived token for service-to-service calls |
| JWT Token | No | Yes | Short-lived token issued after user login |
| SAML SSO | No | Yes | Enterprise-tier federated authentication |

## Admin API Authentication

The Admin API uses static API keys configured at the platform level:

```yaml
admin:
  api_keys:
    - name: "ci-pipeline"
      key: "${ADMIN_API_KEY_CI}"
      permissions: ["tenants:read", "tenants:write"]
    - name: "monitoring"
      key: "${ADMIN_API_KEY_MONITOR}"
      permissions: ["tenants:read", "metrics:read"]
```

Include the key in the `Authorization` header:

```bash
curl -H "Authorization: Bearer ${ADMIN_TOKEN}" \
  http://localhost:3001/api/v1/tenants
```

### Admin Permissions

| Permission | Description |
|-----------|-------------|
| `tenants:read` | List and view tenant details |
| `tenants:write` | Create, update, suspend, delete tenants |
| `tiers:read` | List tier definitions |
| `tiers:write` | Update tier limits and features |
| `metrics:read` | View platform and tenant usage metrics |
| `audit:read` | View audit log entries |
| `config:write` | Update platform configuration |

## Tenant API Authentication

### Login Flow

Users authenticate through the login endpoint to receive a JWT token:

```bash
curl -X POST http://acme-corp.app.example.com/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@acme.com",
    "password": "..."
  }'
```

Response:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### JWT Structure

The access token contains the following claims:

```json
{
  "sub": "usr_a1b2c3d4",
  "tenant_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "tenant_slug": "acme-corp",
  "email": "jane@acme.com",
  "role": "admin",
  "iat": 1711929600,
  "exp": 1711933200,
  "iss": "manifold"
}
```

The `tenant_id` claim is used by the tenant resolution strategy when configured with `jwt_claim` type.

### Token Refresh

```bash
curl -X POST http://acme-corp.app.example.com/api/v1/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refresh_token": "eyJhbGciOiJSUzI1NiIs..."}'
```

Refresh tokens are valid for 30 days by default and can be revoked individually or for an entire tenant.

### Token Configuration

```yaml
auth:
  jwt:
    algorithm: "RS256"
    private_key: "${JWT_PRIVATE_KEY_PATH}"
    public_key: "${JWT_PUBLIC_KEY_PATH}"
    access_token_ttl: "1h"
    refresh_token_ttl: "30d"
    issuer: "manifold"

  password:
    min_length: 12
    require_uppercase: true
    require_number: true
    require_special: true
    bcrypt_cost: 12
```

## SAML SSO

Enterprise-tier tenants can configure SAML-based single sign-on:

```yaml
sso:
  saml:
    entity_id: "https://app.example.com/saml/metadata"
    acs_url: "https://app.example.com/saml/acs"
    idp_metadata_url: "https://idp.acme.com/metadata.xml"
    attribute_mapping:
      email: "urn:oid:0.9.2342.19200300.100.1.3"
      name: "urn:oid:2.5.4.3"
      role: "urn:oid:1.3.6.1.4.1.5923.1.1.1.7"
```

### SAML Login Flow

```
  User
    |
    |  1. Access app
    v
  Manifold -----> 2. Redirect to IdP ----> Identity Provider
                                                |
                                           3. User authenticates
                                                |
  Manifold <----- 4. SAML Response <----------- +
    |
    |  5. Validate assertion
    |  6. Create/update user
    |  7. Issue JWT tokens
    v
  User receives access_token + refresh_token
```

## API Key Management

Tenant administrators can create API keys for service-to-service integrations:

### Create API Key

```bash
curl -X POST http://acme-corp.app.example.com/api/v1/auth/api-keys \
  -H "Authorization: Bearer ${USER_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ci-integration",
    "permissions": ["users:read", "settings:read"],
    "expires_at": "2027-03-20T00:00:00Z"
  }'
```

Response:

```json
{
  "id": "key_x1y2z3",
  "name": "ci-integration",
  "key": "mfld_live_a1b2c3d4e5f6...",
  "permissions": ["users:read", "settings:read"],
  "expires_at": "2027-03-20T00:00:00Z",
  "created_at": "2026-03-20T14:30:00Z"
}
```

> The full API key is only returned once at creation time. Store it securely. If lost, revoke the key and create a new one.

### List API Keys

```
GET /api/v1/auth/api-keys
```

### Revoke API Key

```
DELETE /api/v1/auth/api-keys/:id
```

## Session Security

| Setting | Default | Description |
|---------|---------|-------------|
| Access Token TTL | 1 hour | Time before access token expires |
| Refresh Token TTL | 30 days | Time before refresh token expires |
| Max Active Sessions | 10 | Maximum concurrent sessions per user |
| IP Binding | Disabled | Bind tokens to the originating IP |
| Device Fingerprinting | Disabled | Track device information with tokens |
