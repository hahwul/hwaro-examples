+++
title = "Stride"
description = "Source-level security audits for fintech teams who need proof, not promises"
template = "home"

[extra]
tagline = "Every finding in this report is reproducible, timestamped, and signed by the engineer who found it — or it does not go in the report."
classification = "PREPARED FOR CLIENT REVIEW"
letter_to = "Engineering and compliance leadership at fintech and payments companies"
letter_re = "Manual source-code security audit engagement"
doc_ref = "STRIDE / ENG-2026-014"
prepared_date = "2 July 2026"
+++

Stride is a boutique security practice that reads source code the way an attacker would: line by line, with an engineer who understands how money actually moves through your system. We do not run a scanner and forward you the output. Every finding in this document was produced by a person, checked by a second person, and written in language your engineering leads and your auditors can both act on.

## Who we work with

We take on a small number of engagements a year, almost all of them fintech and payments startups somewhere between a seed round and a banking charter: ledger and settlement systems, card issuing platforms, KYC and sanctions-screening pipelines, custody and wallet infrastructure. If a bug in your codebase could move money to the wrong account, misstate a balance, or let one customer see another customer's transaction history, that is the class of problem we are built to find.

## Method

We do not price by lines of code or promise a fixed number of findings. Every engagement runs the same six-step process, condensed here and detailed in full on the methodology page.

<ol class="method-steps">
<li><h3>Scoping call and threat model</h3><p>We map the systems in scope, the assets that matter, and the specific ways money or data could move incorrectly.</p></li>
<li><h3>Source acquisition and environment mirror</h3><p>Read access to the real repository, plus a mirrored environment so we can run the code, not just read it.</p></li>
<li><h3>Manual review, in pairs</h3><p>Two auditors read every file that touches authorization, money movement, or customer data. No scanner runs unsupervised.</p></li>
<li><h3>Exploit verification</h3><p>Every finding ships with a proof of concept against the mirrored environment before it is written up.</p></li>
<li><h3>Draft findings and review call</h3><p>You see the draft report before it is final, and we walk your engineers through each finding line by line.</p></li>
</ol>

## A finding, redacted for this page

Reports we publish as samples have every client name, endpoint path, and internal identifier removed before anyone outside the engagement sees them. This is what that looks like in practice.

<div class="finding" role="group" aria-label="Sample finding excerpt, client identifiers redacted">
  <div class="finding-head">
    <span class="finding-id">Finding 3.2</span>
    <span class="finding-sev finding-sev-critical">Critical</span>
  </div>
  <h3 class="finding-title">Broken object-level authorization on the internal transfer endpoint</h3>
  <dl class="finding-meta">
    <div><dt>Client</dt><dd><span class="redact redact-md"><span class="sr-only">client name redacted</span></span></dd></div>
    <div><dt>Endpoint</dt><dd><code>POST /api/v3/<span class="redact redact-sm"><span class="sr-only">path segment redacted</span></span>/transfer</code></dd></div>
    <div><dt>Component</dt><dd>Ledger service</dd></div>
  </dl>
  <p class="finding-body">The transfer endpoint authorized a request against the caller's session without confirming the caller owned the named source account. A valid session token from any account holder was sufficient to originate a transfer naming a different account as the source.</p>
</div>

The full excerpt, with severity rationale and remediation notes, is in the [report library](/reports/).

## Services and team

We run four kinds of engagement, from a single pre-launch audit to a standing review retainer — see the [services page](/services/) for scope and duration. The auditors doing the reading are engineers first, drawn from payments infrastructure, exchanges, and banking-as-a-service platforms before Stride; read their backgrounds on the [team page](/team/).

## Start an engagement

Every engagement begins with a scoping call, not a sales call. If you want a second, adversarial read of the systems that move your customers' money, [get in touch](/contact/) and we will tell you honestly whether we are the right fit.
