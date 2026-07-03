+++
title = "Methodology"
description = "How a Stride engagement runs, from scoping call to remediation verification — six numbered steps, no automated shortcuts."

[extra]
chapter = "II"
+++

We publish this page because clients ask what they are paying for. The answer is not a tool license. It is six steps, run by two people, in a fixed order, on every engagement regardless of size.

## The six steps

<ol class="method-steps">

<li>
<h3>Scoping call and threat model</h3>
<p>Before we read a line of code, we spend two to three hours with your engineering leads mapping what is actually in scope: which services move money, which hold customer data, which third parties are trusted and why. We leave with a written threat model that names the specific outcomes we are trying to prevent — a wrong-account transfer, a balance that can be forged, a session that outlives its owner — rather than a generic checklist.</p>
</li>

<li>
<h3>Source acquisition and environment mirror</h3>
<p>We take read access to the real repository, not a sanitized export, and we stand up a mirrored environment from your infrastructure-as-code where one exists. A codebase we can only read is a codebase we can only guess about; a codebase we can run is one we can prove things against.</p>
</li>

<li>
<h3>Manual review, in pairs</h3>
<p>Two auditors independently read every file that touches authorization, money movement, or customer data, then compare notes. We use static analysis tools to prioritize where two engineers spend their limited hours, never as the source of a finding. If a tool flags something a human has not independently confirmed by reading the surrounding logic, it does not appear in the report.</p>
</li>

<li>
<h3>Exploit verification</h3>
<p>Every candidate finding is tested against the mirrored environment before it is written up. We do not report theoretical weaknesses we have not demonstrated; we report what happened when we tried it, with the request, the response, and the state change it produced.</p>
</li>

<li>
<h3>Draft findings and review call</h3>
<p>You receive a draft report before anything is final. We walk your engineers through each finding on a call, in order of severity, and take corrections — sometimes a finding is invalid because of a control we did not know about, and the draft process is where that gets caught rather than the final PDF.</p>
</li>

<li>
<h3>Remediation verification</h3>
<p>Once you have shipped fixes, we re-test every finding against the same proof of concept that demonstrated it originally. A finding is marked resolved only when the original exploit no longer works, not when a pull request merges. This pass is included in every engagement at no extra charge.</p>
</li>

</ol>

## What we do not do

We do not run an automated scanner and hand you its output with commentary. We do not review infrastructure configuration, cloud IAM policy, or dependency licensing — those are real problems, but they are not ours to solve, and pretending otherwise would mean less time on the code that actually decides where money goes. We will tell you plainly if a request falls outside what a source-level audit can responsibly cover.

## Engagement length by codebase size

| Codebase size | Typical duration | Auditors |
|---|---|---|
| Under 40,000 lines in scope | 2–3 weeks | Two |
| 40,000–150,000 lines in scope | 3–5 weeks | Two, plus a specialist pass |
| Over 150,000 lines in scope | 5–8 weeks, phased by subsystem | Three |

These figures assume the scope was set accurately on the call in step one. Scope creep discovered mid-engagement is handled as a written change order, never a silent extension of the invoice.
