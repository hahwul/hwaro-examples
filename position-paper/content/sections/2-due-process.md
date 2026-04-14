+++
title = "Procedural Due Process"
description = "Legal requirements for contestability and explanation when automated systems affect individual rights."
weight = 2
template = "post"
[extra]
section_number = "2"
+++

## The Contestability Requirement

Procedural due process requires that before the government deprives an individual of a protected interest (liberty, property, or a statutory entitlement), the individual must receive notice, an explanation of the basis for the action, and an opportunity to contest the determination. When the "basis for the action" is an opaque algorithmic output, the explanation requirement cannot be satisfied.

<div class="cwe-callout">
  <p class="cwe-label claim">Claim 2.1</p>
  <p class="cwe-text">Opaque algorithmic decisions that affect protected interests violate the procedural due process guarantee of a meaningful opportunity to be heard.</p>
  <p class="cwe-detail">Under the Mathews v. Eldridge framework, the risk of erroneous deprivation increases when neither the decision-maker nor the affected person can explain why the algorithm reached a particular output.</p>
</div>

### The Mathews Framework Applied

The Supreme Court's three-factor balancing test in Mathews v. Eldridge (1976) weighs: (1) the private interest at stake; (2) the risk of erroneous deprivation under current procedures and the probable value of additional safeguards; (3) the government's interest in administrative efficiency. When algorithmic systems are used in welfare eligibility, parole scoring, or benefit calculations, the private interest is typically substantial. The risk of erroneous deprivation is heightened by opacity: if the system produces an incorrect output, neither the applicant nor the caseworker can identify the error without access to the decision logic. Additional transparency safeguards have high probable value at relatively low cost.

### Comparative Due Process Standards

GDPR Article 22 establishes a right not to be subject to solely automated decisions with legal or similarly significant effects, together with a right to obtain meaningful information about the logic involved. While US constitutional law does not yet recognize an equivalent right, the due process clause provides an analogous foundation. The gap between European statutory protections and American constitutional silence is a policy failure that this paper seeks to address.

<div class="cwe-callout">
  <p class="cwe-label evidence">Evidence 2.1</p>
  <p class="cwe-text">In documented welfare-algorithm cases, error rates exceeded 25 pct in three states where beneficiaries had no mechanism to identify or contest algorithmic determinations.</p>
  <p class="cwe-detail">Indiana (2008-2012), Arkansas (2016), and Idaho (2011) each deployed automated eligibility systems that produced high error rates. In all three cases, affected individuals were unable to understand or effectively challenge adverse determinations because the algorithm's decision logic was not disclosed.</p>
</div>

### The Explanation Duty

We argue for a structured explanation duty that requires three elements: (1) notice that an algorithmic system played a role in the decision; (2) identification of the principal factors the system considered; (3) a description sufficient for the affected person to identify potential errors in the input data or the system's application of decision criteria to their case. This duty is proportionate, technically feasible, and consistent with existing administrative law obligations for reasoned decision-making.
