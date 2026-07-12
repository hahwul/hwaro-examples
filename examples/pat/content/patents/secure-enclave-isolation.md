+++
title = "Secure Enclave Memory Isolation"
date = "2025-02-15"
description = "A memory protection architecture enforcing hardware-level access restrictions on secure enclave regions."
[extra]
patent_id = "US 11,202,501 B2"
claim_id = "Claim 3 (Enclave Isolation)"
assignee = "MicroShield Hardware"
+++

This utility patent describes a hardware-enforced memory isolation architecture for secure enclaves. By implementing physical access control logic inside the memory management unit, the system prevents unauthorized processes, including compromised operating system kernels, from reading or writing enclave memory.

<!-- more -->

The secure enclave memory isolation architecture establishes a designated hardware boundary around sensitive memory regions. Inside the physical memory controller, a table of access control rules is maintained in cache, mapping specific address ranges to executing security contexts. When an instruction requests memory access, the controller checks the context identifier of the requesting processor core. If the address falls within the enclave boundaries but the requester lacks the correct enclave credentials, the memory controller blocks the transaction at the hardware layer and triggers an immediate non-maskable interrupt. This design prevents side-channel leaks such as speculative execution snooping and DMA-based memory extraction attacks. The physical separation is maintained even during power sleep transitions by cryptographically encrypting the enclave memory range on fly. The hardware-enforced rules ensure that even under a completely compromised hypervisor, the secrets contained inside the enclave remain secure and isolated.

<div class="schematic-container">
<svg viewBox="0 0 400 200" class="schematic-svg" aria-label="Secure Enclave Isolation Schematic">
<defs>
<marker id="arrow4" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fg)" />
</marker>
</defs>
<g class="schema-group" id="flow-420">
<path d="M 120 70 L 170 70" marker-end="url(#arrow4)" />
<text x="145" y="60" text-anchor="middle">REQ (404)</text>
</g>
<g class="schema-group" id="flow-422">
<path d="M 230 70 L 280 70" marker-end="url(#arrow4)" />
<text x="255" y="60" text-anchor="middle">BLOCK (406)</text>
</g>
<g class="schema-group" id="node-410">
<rect x="20" y="40" width="100" height="60" rx="4" />
<text x="70" y="68" text-anchor="middle">KERNEL</text>
<text x="70" y="82" text-anchor="middle">PROCESS (401)</text>
</g>
<g class="schema-group" id="node-412">
<rect x="170" y="40" width="60" height="60" rx="4" />
<text x="200" y="68" text-anchor="middle">MMU</text>
<text x="200" y="82" text-anchor="middle">UNIT (402)</text>
</g>
<g class="schema-group" id="node-414">
<rect x="280" y="40" width="100" height="60" rx="4" />
<text x="330" y="68" text-anchor="middle">ENCLAVE</text>
<text x="330" y="82" text-anchor="middle">MEM (403)</text>
</g>
</svg>
<div class="schematic-caption">FIG. 4: Secure Enclave Isolation and Memory Protection Unit</div>
</div>
