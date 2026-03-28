+++
title = "Connection Errors"
weight = 1
description = "Diagnosing and resolving connection failures, timeouts, and refused connections"
+++

## Overview

Connection errors occur when the client cannot establish or maintain a network link to the target service. This guide covers the most common connection failure scenarios.

---

## TCP Connection Refused

### Symptom

Requests fail immediately with a "connection refused" message. The client receives a TCP RST packet.

```
2026-03-15 08:12:44 ERROR ConnectionRefusedError: [Errno 111] Connection refused
  target=api.internal.example.com:8443
  attempt=1/3
```

### Cause

The target host is reachable at the network level, but no process is listening on the specified port. Common reasons:

- The service process has crashed or was not started
- The service is listening on a different port than expected
- A firewall rule is rejecting the connection with a RST

### Solution

1. Verify the service is running on the target host:

```bash
systemctl status myservice
# or
ps aux | grep myservice
```

2. Confirm the service is bound to the expected port:

```bash
ss -tlnp | grep 8443
```

3. If the port shows no listener, start the service and check its logs:

```bash
systemctl start myservice
journalctl -u myservice --since "5 minutes ago"
```

4. Check for port conflicts if the service fails to bind:

```bash
ss -tlnp | grep :8443
# If another process holds the port, stop it or reconfigure
```

---

## Connection Timeout

### Symptom

Requests hang for an extended period before failing. The client never receives a response or a RST.

```
2026-03-15 09:30:12 ERROR TimeoutError: Connection to db-primary.internal:5432
  timed out after 30000ms
  source_ip=10.0.4.22
  dest_ip=10.0.8.15
```

### Cause

Packets are being silently dropped between the client and the server. Typical causes:

- Network routing misconfiguration
- Security group or firewall rules dropping traffic without sending RST
- The target host is down or unreachable
- Network congestion causing packet loss

### Solution

1. Test basic connectivity:

```bash
ping -c 4 10.0.8.15
```

2. Trace the route to identify where packets are lost:

```bash
traceroute -T -p 5432 10.0.8.15
```

3. Verify security group and firewall rules allow traffic on the port:

```bash
# AWS example: check security group rules
aws ec2 describe-security-groups --group-ids sg-0abc1234 \
  --query 'SecurityGroups[].IpPermissions[?ToPort==`5432`]'
```

4. Test the connection from a host in the same subnet as the target to isolate whether the issue is network-level:

```bash
# From a bastion host in the same VPC subnet
nc -zv 10.0.8.15 5432 -w 5
```

---

## TLS Handshake Failure

### Symptom

The TCP connection succeeds, but the TLS negotiation fails. The client reports a handshake error.

```
2026-03-15 10:45:33 ERROR SSLError: [SSL: CERTIFICATE_VERIFY_FAILED]
  certificate verify failed: unable to get local issuer certificate
  host=api.example.com:443
```

### Cause

- The server certificate has expired
- The server certificate is signed by an untrusted CA
- The client system CA bundle is outdated
- Intermediate certificates are missing from the server chain

### Solution

1. Inspect the server certificate chain:

```bash
openssl s_client -connect api.example.com:443 -servername api.example.com 2>/dev/null | \
  openssl x509 -noout -dates -issuer -subject
```

2. Check for missing intermediate certificates:

```bash
openssl s_client -connect api.example.com:443 -servername api.example.com 2>&1 | \
  grep -i "verify"
```

3. If the certificate is expired, renew it and reload the service:

```bash
certbot renew --cert-name api.example.com
systemctl reload nginx
```

4. If the CA is untrusted, update the system CA bundle:

```bash
# Debian/Ubuntu
sudo apt update && sudo apt install -y ca-certificates
sudo update-ca-certificates
```

---

## DNS Resolution Failure

### Symptom

The client cannot resolve the hostname to an IP address.

```
2026-03-15 11:20:05 ERROR socket.gaierror: [Errno -2] Name or service not known
  hostname=api.internal.example.com
```

### Cause

- The DNS record does not exist
- The DNS server is unreachable
- The local resolver configuration is incorrect
- DNS cache contains a stale or negative entry

### Solution

1. Test DNS resolution directly:

```bash
dig api.internal.example.com
nslookup api.internal.example.com
```

2. Check which DNS server is being used:

```bash
cat /etc/resolv.conf
resolvectl status
```

3. Query a known public DNS server to determine if the issue is local:

```bash
dig @8.8.8.8 api.internal.example.com
```

4. Flush the local DNS cache if stale entries are suspected:

```bash
# systemd-resolved
sudo resolvectl flush-caches
# or nscd
sudo systemctl restart nscd
```
