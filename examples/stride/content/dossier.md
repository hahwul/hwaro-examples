+++
title = "Reports"
description = "Sample audit excerpts from past engagements, published with client names and endpoint paths redacted."
slug = "reports"

[extra]
chapter = "III"
+++

Full audit write-ups are delivered to clients under the engagement's non-disclosure agreement and are not published. The excerpts below are drawn from write-ups clients agreed we could share, with every client name, internal service name, and full endpoint path replaced by a solid bar before publication. Severity ratings and remediation notes are shown exactly as they appeared in the original write-up.

## Sample findings

<div class="finding" role="group" aria-label="Sample audit excerpt, client identifiers redacted">
  <div class="finding-head">
    <span class="finding-id">Item 3.2</span>
    <span class="finding-sev finding-sev-critical">Critical</span>
  </div>
  <h3 class="finding-title">Broken object-level authorization on the internal transfer endpoint</h3>
  <dl class="finding-meta">
    <div><dt>Client</dt><dd><span class="redact redact-md"><span class="sr-only">client name redacted</span></span></dd></div>
    <div><dt>Endpoint</dt><dd><code>POST /api/v3/<span class="redact redact-sm"><span class="sr-only">path segment redacted</span></span>/transfer</code></dd></div>
    <div><dt>Component</dt><dd>Ledger service, internal API</dd></div>
    <div><dt>Status</dt><dd>Remediated, verified 14 days later</dd></div>
  </dl>
  <p class="finding-body">The transfer endpoint accepted an arbitrary <code>source_account_id</code> parameter and authorized the request against the caller's session without confirming that the caller owned the account named as the source. A valid session token from any account holder was sufficient to originate a transfer instruction naming a different customer's account as the source of funds. We verified this by moving a small balance between two test accounts we controlled, then repeating the request with one account substituted for a third account we did not control.</p>
  <p class="finding-remediation"><strong>Fix shipped:</strong> the endpoint now re-derives the source account from the authenticated session server-side rather than trusting the request body, and every transfer instruction is re-verified against the caller's account list at write time, not just at the API gateway.</p>
</div>

<div class="finding" role="group" aria-label="Sample audit excerpt, client identifiers redacted">
  <div class="finding-head">
    <span class="finding-id">Item 5.1</span>
    <span class="finding-sev">High</span>
  </div>
  <h3 class="finding-title">KYC status check race condition on account upgrade</h3>
  <dl class="finding-meta">
    <div><dt>Client</dt><dd><span class="redact redact-lg"><span class="sr-only">client name redacted</span></span></dd></div>
    <div><dt>Endpoint</dt><dd><code>POST /internal/accounts/<span class="redact redact-sm"><span class="sr-only">path segment redacted</span></span>/upgrade</code></dd></div>
    <div><dt>Component</dt><dd>Onboarding service</dd></div>
    <div><dt>Status</dt><dd>Remediated, verified 9 days later</dd></div>
  </dl>
  <p class="finding-body">The account-upgrade path checked KYC verification status, then wrote the new account tier in a separate database transaction several hundred milliseconds later. Two upgrade requests fired in quick succession against an account whose KYC check was still in flight both read the same unverified status and both completed, granting a raised transfer limit to an account that had not actually cleared verification.</p>
  <p class="finding-remediation"><strong>Fix shipped:</strong> the status check and the tier write were combined into a single transaction with a row lock on the account record, closing the window between check and write.</p>
</div>

<div class="finding" role="group" aria-label="Sample audit excerpt, client identifiers redacted">
  <div class="finding-head">
    <span class="finding-id">Item 2.4</span>
    <span class="finding-sev">Medium</span>
  </div>
  <h3 class="finding-title">Reconciliation export leaks full account numbers in filenames</h3>
  <dl class="finding-meta">
    <div><dt>Client</dt><dd><span class="redact redact-md"><span class="sr-only">client name redacted</span></span></dd></div>
    <div><dt>Endpoint</dt><dd><code>GET /admin/exports/<span class="redact redact-sm"><span class="sr-only">path segment redacted</span></span>/download</code></dd></div>
    <div><dt>Component</dt><dd>Internal admin console</dd></div>
    <div><dt>Status</dt><dd>Remediated, verified 6 days later</dd></div>
  </dl>
  <p class="finding-body">Nightly reconciliation exports were named using the full destination account number rather than an internal reference identifier. These filenames were visible in browser download histories, shared-drive sync logs, and a support ticketing tool that mirrored attachment names into its own audit log — none of which were in scope for the account-number handling policy.</p>
  <p class="finding-remediation"><strong>Fix shipped:</strong> exports are now named with an internal batch identifier, with the account number available only inside the file contents under the same access controls as the export itself.</p>
</div>

Items that do not appear here are not necessarily less serious — they are simply the ones a client agreed we could publish. Every engagement's complete write-up, including items we do not excerpt publicly, is delivered directly to the client and to whichever auditors or regulators they choose to share it with. See [methodology](/methodology/) for how each item above was produced and verified.
