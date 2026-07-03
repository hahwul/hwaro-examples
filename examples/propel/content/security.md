+++
title = "Security"
description = "How Propel encrypts, audits, and refuses to track the inboxes it handles."
template = "security"
tags = ["security", "trust"]

[[extra.tiles]]
title = "Locked in one shortcut"
keys = ["⌘", "⇧", "L"]
desc = "A three-key shortcut locks your inbox instantly if you have to step away. Everything stays encrypted with AES-256 at rest and TLS 1.3 in transit."

[[extra.tiles]]
title = "Hardware keys and passkeys"
keys = ["⌘", "⇧", "2"]
desc = "Pair a security key or authenticator app from Settings → Security. WebAuthn is supported, so a passkey works as a second factor too."

[[extra.tiles]]
title = "No tracking pixels, ever"
keys = ["⌘", "⇧", "T"]
desc = "Propel strips read-receipt pixels from incoming mail before it renders, and shows you exactly what got blocked in each message."

[[extra.tiles]]
title = "Audit log for every seat"
keys = ["⌘", "⇧", "A"]
desc = "Admins can see every login, forwarding rule, and delegated triage action across the team, exportable as CSV for your own records."

[[extra.tiles]]
title = "Choose where data lives"
keys = ["⌘", "⇧", "G"]
desc = "Company plans pin storage to the US or EU at signup. Nothing moves regions afterward without a support ticket and written confirmation."

[[extra.tiles]]
title = "Independent review, yearly"
keys = ["⌘", "⇧", "R"]
desc = "An outside security firm reviews our infrastructure and application annually. The summary report is available to any customer on request."
+++

Propel handles other people's correspondence, invoices, and legal threads, so security isn't a page we wrote once and stopped thinking about — it's reviewed every time we ship a feature that touches message content. Encryption is the floor, not the pitch: TLS 1.3 protects everything in transit, and AES-256 protects everything at rest, including attachments and the search index built from them.

Access control gets the same seriousness. Every account supports hardware security keys and passkeys, not just app-based codes, and Company plans can require them for every seat. Admins get an audit log that records logins, forwarding rule changes, and delegated triage actions — the kind of trail a security review actually asks for, not a marketing summary of one.

We also draw a hard line on tracking. Read-receipt pixels embedded in incoming mail are stripped before a message ever renders on your screen, and Propel never reports back to a sender whether or when you opened what they sent.

{{ alert(type="note", body="Found a security issue? Email **security@propelmail.example** — we credit and respond to every verified report within two business days, and we don't require a bounty program signup to do it.") }}
