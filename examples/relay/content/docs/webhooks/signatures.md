+++
title = "Signatures"
description = "Webhook signature verification for secure delivery"
tags = ["signatures", "security", "webhooks"]
+++

# Signatures

Relay signs every webhook delivery with an HMAC-SHA256 signature. This allows your endpoint to verify that incoming requests genuinely originated from Relay and have not been tampered with in transit.

## How Signing Works

When Relay delivers a webhook, it computes a signature using:

1. The raw JSON request body
2. The delivery timestamp (Unix epoch seconds)
3. The endpoint's signing secret

The signature is included in the `X-Relay-Signature` header:

```
X-Relay-Signature: sha256=5d7d3e8c9f2a1b4e6d8c0a3f5e7b9d1c3a5f7e9b1d3c5a7f9e1b3d5c7a9f1e
X-Relay-Timestamp: 1710500700
```

## Signature Computation

The signed content is formed by concatenating the timestamp and the request body with a period separator:

```
signed_content = timestamp + "." + body
```

The HMAC-SHA256 is computed over this string using the endpoint secret as the key:

```
signature = HMAC-SHA256(secret, signed_content)
```

## Verification Examples

### Python

```python
import hmac
import hashlib
import time

def verify_signature(payload_body, signature_header, timestamp_header, secret):
    """Verify a Relay webhook signature."""
    # Check timestamp is recent (within 5 minutes)
    timestamp = int(timestamp_header)
    if abs(time.time() - timestamp) > 300:
        raise ValueError("Timestamp is too old")

    # Compute expected signature
    signed_content = f"{timestamp}.{payload_body}"
    expected = hmac.new(
        secret.encode("utf-8"),
        signed_content.encode("utf-8"),
        hashlib.sha256
    ).hexdigest()

    # Compare signatures
    received = signature_header.replace("sha256=", "")
    if not hmac.compare_digest(expected, received):
        raise ValueError("Signature verification failed")

    return True
```

### Node.js

```javascript
const crypto = require("crypto");

function verifySignature(body, signatureHeader, timestampHeader, secret) {
  // Check timestamp is recent (within 5 minutes)
  const timestamp = parseInt(timestampHeader, 10);
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestamp) > 300) {
    throw new Error("Timestamp is too old");
  }

  // Compute expected signature
  const signedContent = `${timestamp}.${body}`;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(signedContent)
    .digest("hex");

  // Compare signatures
  const received = signatureHeader.replace("sha256=", "");
  const isValid = crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(received)
  );

  if (!isValid) {
    throw new Error("Signature verification failed");
  }

  return true;
}
```

### Go

```go
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"math"
	"strconv"
	"time"
)

func VerifySignature(body, signatureHeader, timestampHeader, secret string) error {
	// Check timestamp is recent (within 5 minutes)
	ts, err := strconv.ParseInt(timestampHeader, 10, 64)
	if err != nil {
		return fmt.Errorf("invalid timestamp: %w", err)
	}
	diff := math.Abs(float64(time.Now().Unix() - ts))
	if diff > 300 {
		return fmt.Errorf("timestamp is too old")
	}

	// Compute expected signature
	signedContent := fmt.Sprintf("%s.%s", timestampHeader, body)
	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(signedContent))
	expected := hex.EncodeToString(mac.Sum(nil))

	// Compare signatures
	received := signatureHeader[len("sha256="):]
	if !hmac.Equal([]byte(expected), []byte(received)) {
		return fmt.Errorf("signature verification failed")
	}

	return nil
}
```

### Ruby

```ruby
require "openssl"

def verify_signature(body, signature_header, timestamp_header, secret)
  # Check timestamp is recent (within 5 minutes)
  timestamp = timestamp_header.to_i
  if (Time.now.to_i - timestamp).abs > 300
    raise "Timestamp is too old"
  end

  # Compute expected signature
  signed_content = "#{timestamp}.#{body}"
  expected = OpenSSL::HMAC.hexdigest("SHA256", secret, signed_content)

  # Compare signatures
  received = signature_header.sub("sha256=", "")
  unless OpenSSL.secure_compare(expected, received)
    raise "Signature verification failed"
  end

  true
end
```

## Secret Management

Each endpoint has a unique signing secret generated when the endpoint is created. You can view and rotate secrets through the API:

```bash
# View the current secret
curl http://localhost:8080/api/v1/endpoints/ep_01H8KR4WMXN9/secret \
  -H "Authorization: Bearer your-api-key"
```

```json
{
  "secret": "whsec_MIGfMA0GCSqGSIb3DQEBAQUAA4GNA",
  "created_at": "2025-01-10T08:00:00Z"
}
```

### Rotating Secrets

When you rotate a secret, Relay enters a grace period where both the old and new secrets are valid. This prevents delivery failures during the transition:

```bash
curl -X POST http://localhost:8080/api/v1/endpoints/ep_01H8KR4WMXN9/secret/rotate \
  -H "Authorization: Bearer your-api-key" \
  -d '{"grace_period": "24h"}'
```

```json
{
  "new_secret": "whsec_QWxsIHlvdXIgYmFzZSBhcmUgYmVs",
  "old_secret_expires_at": "2025-03-16T10:30:00Z"
}
```

During the grace period, verify against both secrets and accept the delivery if either signature matches.

## Security Recommendations

- **Always verify signatures** -- Never process webhook payloads without verifying the signature first.
- **Check timestamps** -- Reject deliveries with timestamps older than 5 minutes to prevent replay attacks.
- **Use constant-time comparison** -- Always use timing-safe string comparison functions to prevent timing attacks.
- **Store secrets securely** -- Keep endpoint secrets in environment variables or a secrets manager, never in source code.
- **Rotate secrets periodically** -- Rotate signing secrets every 90 days as a standard security practice.
