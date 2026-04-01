+++
title = "Identity Policies"
description = "Configure identity verification, MFA, SSO, and certificate-based authentication"
weight = 1
+++

# Identity Policies

Identity policies govern how users and services authenticate to Bastion. Every access request must present a verifiable identity before any resource policy is evaluated.

## Supported Authentication Methods

| Method | Use Case | Credential Type |
|--------|----------|-----------------|
| OIDC / SSO | Interactive user login | JWT bearer token |
| Mutual TLS | Service-to-service auth | X.509 client certificate |
| SSH Certificate | Infrastructure access | SSH CA-signed certificate |
| API Key | Automation and CI/CD | HMAC-signed token |
| SAML 2.0 | Enterprise SSO federation | SAML assertion |

## OIDC / SSO Configuration

Connect Bastion to your identity provider using OpenID Connect:

```yaml
identity:
  provider: oidc
  issuer: "https://auth.example.com"
  client_id: "bastion-gateway"
  client_secret_env: "BASTION_OIDC_SECRET"
  scopes:
    - openid
    - profile
    - groups
  claim_mappings:
    username: preferred_username
    groups: groups
    email: email
  token_validation:
    algorithms: ["RS256", "ES256"]
    audience: "bastion-gateway"
    max_clock_skew: 30s
```

## Multi-Factor Authentication

Require MFA for sensitive resources:

```yaml
apiVersion: bastion.io/v1
kind: IdentityPolicy
metadata:
  name: require-mfa-production
spec:
  match:
    resources:
      labels:
        environment: production
  requirements:
    mfa:
      enabled: true
      methods:
        - totp
        - webauthn
        - push
      remember_device: 12h
      grace_period: 0s
```

### MFA Method Priority

| Priority | Method | Security Level |
|----------|--------|----------------|
| 1 | WebAuthn / FIDO2 | High -- phishing-resistant |
| 2 | TOTP (authenticator app) | Medium -- time-based OTP |
| 3 | Push notification | Medium -- requires device |
| 4 | SMS OTP | Low -- vulnerable to SIM swap |

Bastion recommends WebAuthn as the primary MFA method. SMS-based OTP can be disabled in the policy configuration.

## Certificate-Based Authentication

For service-to-service communication, Bastion supports mutual TLS with X.509 certificates:

```yaml
identity:
  mtls:
    enabled: true
    ca_bundle: /etc/bastion/certs/ca-bundle.pem
    verify_client: true
    allowed_dns_names:
      - "*.internal.example.com"
    allowed_ous:
      - "platform-services"
      - "data-pipeline"
    crl_url: "https://pki.example.com/crl"
    ocsp_url: "https://pki.example.com/ocsp"
```

## SSH Certificate Authority

Bastion can act as an SSH Certificate Authority, issuing short-lived certificates instead of long-lived SSH keys:

```yaml
ssh_ca:
  enabled: true
  signing_key: /etc/bastion/certs/ssh-ca
  default_ttl: 8h
  max_ttl: 24h
  allowed_principals:
    - ubuntu
    - ec2-user
    - deploy
  extensions:
    permit-pty: true
    permit-port-forwarding: false
    permit-agent-forwarding: false
  critical_options: {}
```

### Issuing SSH Certificates

Users request certificates through the Bastion CLI:

```bash
# Authenticate and request a certificate
$ bastion ssh cert --principal ubuntu --ttl 4h

Certificate issued:
  Type:       user
  Principal:  ubuntu
  Valid:      2025-01-15T09:00:00Z to 2025-01-15T13:00:00Z
  Key ID:     alice@example.com-1705312800
  Serial:     48291

Wrote: ~/.ssh/bastion-cert.pub
```

Configure SSH to use the certificate automatically:

```bash
# ~/.ssh/config
Host *.internal.example.com
  CertificateFile ~/.ssh/bastion-cert.pub
  IdentityFile ~/.ssh/id_ed25519
  ProxyCommand bastion proxy %h %p
```

## Group-Based Access Control

Map identity provider groups to Bastion roles:

```yaml
apiVersion: bastion.io/v1
kind: IdentityPolicy
metadata:
  name: group-role-mapping
spec:
  mappings:
    - group: "platform-admins"
      roles:
        - admin
        - audit-reader
    - group: "developers"
      roles:
        - developer
    - group: "security-team"
      roles:
        - audit-reader
        - policy-editor
    - group: "contractors"
      roles:
        - read-only
      conditions:
        require_mfa: true
        max_session_duration: 4h
```

## Session Management

Control session lifetimes and re-authentication requirements:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `session_ttl` | 8h | Maximum session duration |
| `idle_timeout` | 30m | Timeout after inactivity |
| `reauth_interval` | 0 | Force re-authentication interval (0 = disabled) |
| `single_session` | false | Allow only one active session per user |
| `bind_ip` | true | Bind session to originating IP address |
