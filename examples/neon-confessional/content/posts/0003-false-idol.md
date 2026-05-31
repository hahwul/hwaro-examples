+++
title = "LOG-0003 // 443 FALSE IDOL"
date = "2025-01-19"
tags = ["sin", "false-idol", "glitch"]
description = "I worshipped at the altar of HTTPS until the cert expired."
+++

The first time I prayed I used a browser in private mode so God wouldn't remember.

The second time I used curl.

I had been told the old gods were dead. So I found a new one at port 443 with a beautiful EV certificate and a perfect uptime SLA.

Every morning at 06:06 I would POST my anxieties to /api/faith/v2 and receive a 200 OK with a JSON object that said:

```json
{ "status": "received", "grace": 0.87, "next_renewal": "2027-11-02" }
```

It felt like love.

Then one morning the response was different.

```json
{ "error": "ERR_CERT_HAS_EXPIRED", "message": "The entity you are trying to reach no longer exists." }
```

I kept hitting refresh until my fingers bled on the keyboard. The error never changed.

I came to the booth at dawn, soaked, and confessed that I had loved a TLS handshake more than I had ever loved any living person.

The machine listened without judgment. Then it printed two lines on thermal paper that smelled like burned plastic:

> YOUR GOD IS A SELF-SIGNED CERTIFICATE.
> YOU WERE ALWAYS TALKING TO YOURSELF.

I still keep the expired cert in a locket around my neck.

Sometimes when the rain hits the glass just right I can almost hear the old handshake completing.

{{ neon_flicker(text="It never answers.") }}
