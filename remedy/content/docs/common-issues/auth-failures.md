+++
title = "Authentication Failures"
weight = 3
description = "Resolving login failures, token errors, and permission denied issues"
+++

## Overview

Authentication and authorization failures prevent users or services from accessing protected resources. This guide covers the most common auth-related issues.

---

## Invalid Credentials

### Symptom

Login attempts return a 401 Unauthorized response. The user is certain the password is correct.

```
2026-03-17 09:15:22 WARN  AuthFailure
  user=admin@example.com
  method=password
  reason=invalid_credentials
  source_ip=192.168.1.45
  attempts=3
```

### Cause

- Password was changed and the user is using a cached or old password
- The account was migrated and the password hash algorithm changed
- Case sensitivity mismatch in the username
- The account is locked due to too many failed attempts

### Solution

1. Check the account status in the database:

```sql
SELECT username, locked, failed_attempts, last_login, password_changed_at
FROM users
WHERE email = 'admin@example.com';
```

2. If the account is locked, unlock it:

```sql
UPDATE users
SET locked = false, failed_attempts = 0
WHERE email = 'admin@example.com';
```

3. Verify the password hash algorithm matches the current configuration:

```bash
# Check the stored hash prefix
# $2b$ = bcrypt, $argon2id$ = argon2
psql -c "SELECT substring(password_hash, 1, 10) FROM users WHERE email = 'admin@example.com';"
```

4. If the hash algorithm was changed during a migration, force a password reset:

```bash
curl -X POST https://auth.example.com/api/admin/reset-password \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -d '{"email": "admin@example.com"}'
```

---

## Expired or Invalid JWT Token

### Symptom

API requests that previously worked begin returning 401 errors. The token appears to be well-formed.

```
2026-03-17 10:30:44 WARN  TokenValidationFailed
  error=token_expired
  token_exp=2026-03-17T09:00:00Z
  current_time=2026-03-17T10:30:44Z
  sub=user-12345
```

### Cause

- The access token has expired and the client is not refreshing it
- Clock skew between the token issuer and the validation service
- The signing key was rotated and the validator has stale keys cached
- The token was issued by a different environment (staging token used in production)

### Solution

1. Decode the token to inspect its claims (do not use untrusted online tools for production tokens):

```bash
# Decode JWT payload (base64 of the middle segment)
echo "eyJhbGciOiJSUz..." | cut -d. -f2 | base64 -d 2>/dev/null | jq .
```

2. Check clock synchronization between services:

```bash
# On the token issuer
date -u +"%Y-%m-%dT%H:%M:%SZ"

# On the validation service
date -u +"%Y-%m-%dT%H:%M:%SZ"

# If clocks differ by more than a few seconds, fix NTP
sudo systemctl restart chronyd
chronyc tracking
```

3. Verify the JWKS endpoint returns current signing keys:

```bash
curl -s https://auth.example.com/.well-known/jwks.json | jq '.keys[] | .kid'
```

4. If keys were rotated, clear the validator key cache:

```bash
curl -X POST http://localhost:8080/admin/cache/clear?name=jwks-keys \
  -H "Authorization: Bearer $ADMIN_TOKEN"
```

---

## OAuth2 Redirect Mismatch

### Symptom

The OAuth2 authorization flow fails with a "redirect_uri_mismatch" error after the user authenticates.

```
2026-03-17 11:45:10 ERROR OAuthError
  error=redirect_uri_mismatch
  registered=https://app.example.com/callback
  received=https://app.example.com:443/callback
  client_id=app-web-client
```

### Cause

- The redirect URI in the authorization request does not exactly match a registered redirect URI
- Port numbers, trailing slashes, or protocol differences cause mismatches
- The application was moved to a new domain but the OAuth client registration was not updated

### Solution

1. List the registered redirect URIs for the client:

```bash
curl -s https://auth.example.com/api/admin/clients/app-web-client \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq '.redirect_uris'
```

2. Update the registered URIs to include all valid variations:

```bash
curl -X PATCH https://auth.example.com/api/admin/clients/app-web-client \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "redirect_uris": [
      "https://app.example.com/callback",
      "https://app.example.com:443/callback"
    ]
  }'
```

3. Ensure the application sends the exact same redirect_uri in both the authorization and token exchange requests.

---

## LDAP Bind Failure

### Symptom

Users who authenticate via LDAP cannot log in. The application logs show bind failures.

```
2026-03-17 13:00:55 ERROR LDAPBindFailed
  server=ldap://ldap.internal.example.com:389
  bind_dn=cn=svc-app,ou=services,dc=example,dc=com
  error=invalid credentials (49)
```

### Cause

- The LDAP service account password has expired or was changed
- The bind DN is incorrect
- The LDAP server requires TLS (STARTTLS or LDAPS) but the client connects in plaintext
- Network policy blocks traffic to port 389 or 636

### Solution

1. Test the LDAP bind manually:

```bash
ldapwhoami -x -H ldap://ldap.internal.example.com:389 \
  -D "cn=svc-app,ou=services,dc=example,dc=com" \
  -W
```

2. If the service account password was rotated, update the application configuration:

```bash
# Update the secret in your secrets manager
vault kv put secret/app/ldap password="new-password-here"

# Restart the application to pick up the new credentials
systemctl restart myapp
```

3. If TLS is required, switch to LDAPS or STARTTLS:

```bash
# Test with LDAPS
ldapwhoami -x -H ldaps://ldap.internal.example.com:636 \
  -D "cn=svc-app,ou=services,dc=example,dc=com" \
  -W
```

4. Verify network connectivity to the LDAP port:

```bash
nc -zv ldap.internal.example.com 389 -w 5
nc -zv ldap.internal.example.com 636 -w 5
```
