+++
title = "WAF Rules"
section = "docs"
+++

# WAF_DEFENSE_RULE_MAPPING

The following table summarizes the primary attack patterns and their corresponding Turret defense rule identifiers.

| ATTACK_PATTERN | RULE_ID | SEVERITY | ACTION |
| :--- | :--- | :--- | :--- |
| SQL_INJECTION | TR-WAF-101 | CRITICAL | BLOCK |
| CROSS_SITE_SCRIPTING | TR-WAF-202 | HIGH | STRIP/ALERT |
| REMOTE_CODE_EXECUTION | TR-WAF-303 | CRITICAL | BLOCK |
| DIRECTORY_TRAVERSAL | TR-WAF-404 | MEDIUM | BLOCK |
| SESSION_FIXATION | TR-WAF-505 | HIGH | RESET |
| BRUTE_FORCE | TR-WAF-606 | MEDIUM | CHALLENGE |

## RULE_SPECIFICATIONS

### TR-WAF-101 (SQLi)
Specifically targets `SELECT`, `UNION`, `DROP`, and other SQL keywords within query parameters and POST bodies. Uses entropy analysis to detect obfuscated payloads.

### TR-WAF-606 (Brute-Force)
Monitors `/login` and `/api/auth` endpoints for excessive failed attempts. Triggers a CAPTCHA challenge or temporary IP null-routing.
