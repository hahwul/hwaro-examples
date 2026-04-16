+++
title = "Chapter II: The Truss"
description = "The rationalization of bridge structure through triangulated frameworks, from timber covered bridges to iron railway spans."
date = "2025-01-14"
tags = ["truss", "iron", "railway", "structural-analysis"]
weight = 2

[extra]
chapter_number = "II"
+++

<p class="chapter-label">Chapter II</p>

## The principle of triangulation

<p class="lede">A triangle is the only polygon that cannot be deformed without changing the length of its sides. This simple geometric fact is the foundation of all truss engineering. By assembling structural members into triangulated patterns, builders create frameworks that resist applied loads through axial forces -- pure tension and compression in the individual members -- rather than through bending. The truss transformed bridge design by making efficient use of materials, allowing longer spans with less weight than solid-section beams.</p>

<div class="illustration">
<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<!-- Warren truss -->
<line x1="40" y1="120" x2="480" y2="120" stroke="#4a3728" stroke-width="1.5"/>
<line x1="40" y1="50" x2="480" y2="50" stroke="#4a3728" stroke-width="1.5"/>
<!-- Verticals -->
<line x1="40" y1="50" x2="40" y2="120" stroke="#4a3728" stroke-width="1"/>
<line x1="480" y1="50" x2="480" y2="120" stroke="#4a3728" stroke-width="1"/>
<!-- Diagonals -->
<line x1="40" y1="120" x2="110" y2="50" stroke="#4a3728" stroke-width="1"/>
<line x1="110" y1="50" x2="180" y2="120" stroke="#4a3728" stroke-width="1"/>
<line x1="180" y1="120" x2="250" y2="50" stroke="#4a3728" stroke-width="1"/>
<line x1="250" y1="50" x2="330" y2="120" stroke="#4a3728" stroke-width="1"/>
<line x1="330" y1="120" x2="400" y2="50" stroke="#4a3728" stroke-width="1"/>
<line x1="400" y1="50" x2="480" y2="120" stroke="#4a3728" stroke-width="1"/>
<!-- Joints -->
<circle cx="40" cy="120" r="3" fill="#4a3728"/>
<circle cx="40" cy="50" r="3" fill="#4a3728"/>
<circle cx="110" cy="50" r="3" fill="#4a3728"/>
<circle cx="180" cy="120" r="3" fill="#4a3728"/>
<circle cx="250" cy="50" r="3" fill="#4a3728"/>
<circle cx="330" cy="120" r="3" fill="#4a3728"/>
<circle cx="400" cy="50" r="3" fill="#4a3728"/>
<circle cx="480" cy="120" r="3" fill="#4a3728"/>
<circle cx="480" cy="50" r="3" fill="#4a3728"/>
<!-- Callout labels -->
<text x="260" y="40" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="9" fill="#4a3728" font-style="italic">top chord (compression)</text>
<text x="260" y="140" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="9" fill="#4a3728" font-style="italic">bottom chord (tension)</text>
<text x="145" y="75" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic" transform="rotate(-45, 145, 75)">diagonal web</text>
<!-- Support symbols -->
<polygon points="40,125 35,135 45,135" fill="none" stroke="#4a3728" stroke-width="0.8"/>
<circle cx="480" cy="128" r="4" fill="none" stroke="#4a3728" stroke-width="0.8"/>
<line x1="472" y1="135" x2="488" y2="135" stroke="#4a3728" stroke-width="0.8"/>
</svg>
<p class="illustration-caption">Fig. 3. -- A Warren truss configuration showing alternating diagonal members. The top chord carries compression; the bottom chord carries tension; diagonal webs transfer shear forces between them.</p>
</div>

The development of the truss as a bridge form is inseparable from the history of materials. Timber trusses appeared in bridge construction as early as the Roman period -- Trajan's bridge across the Danube, designed by Apollodorus of Damascus around 105 CE, is believed to have used triangulated timber frameworks supported on stone piers. However, the systematic exploration of truss configurations did not begin until the eighteenth and nineteenth centuries, driven by the demands of the expanding road and railway networks.

## The American covered bridge

In early nineteenth-century America, the covered bridge became a distinctive regional form. The wooden enclosure protected the structural timbers from rain and snow, extending the useful life of the bridge from perhaps fifteen years to seventy or more. The structural systems concealed within these enclosures were often remarkably sophisticated. Theodore Burr's combination of arch and truss (patented 1817), Ithiel Town's lattice truss (1820), and William Howe's truss with vertical iron tension rods (1840) each represented a distinct solution to the problem of spanning distances of thirty to sixty meters using timber members of limited length and cross-section.

## Iron and the railway

The advent of the railway in the 1830s placed unprecedented demands on bridge structures. Railway loads were heavier than road traffic, concentrated on narrow tracks, and applied dynamically as trains crossed the span. The iron truss proved ideally suited to these requirements. Cast iron, strong in compression, could form the top chords and compression diagonals; wrought iron, ductile and strong in tension, could form the bottom chords and tension members.

<div class="plate">
<div class="plate-label">Plate II</div>
<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<!-- Pratt Truss -->
<text x="260" y="20" text-anchor="middle" font-family="'Crimson Text', serif" font-size="12" fill="#4a3728" font-weight="600">Pratt Truss (1844)</text>
<!-- Top chord -->
<line x1="60" y1="60" x2="460" y2="60" stroke="#4a3728" stroke-width="1.5"/>
<!-- Bottom chord -->
<line x1="60" y1="130" x2="460" y2="130" stroke="#4a3728" stroke-width="1.5"/>
<!-- Verticals -->
<line x1="60" y1="60" x2="60" y2="130" stroke="#4a3728" stroke-width="1"/>
<line x1="140" y1="60" x2="140" y2="130" stroke="#4a3728" stroke-width="1"/>
<line x1="220" y1="60" x2="220" y2="130" stroke="#4a3728" stroke-width="1"/>
<line x1="300" y1="60" x2="300" y2="130" stroke="#4a3728" stroke-width="1"/>
<line x1="380" y1="60" x2="380" y2="130" stroke="#4a3728" stroke-width="1"/>
<line x1="460" y1="60" x2="460" y2="130" stroke="#4a3728" stroke-width="1"/>
<!-- Diagonals (toward center) -->
<line x1="60" y1="130" x2="140" y2="60" stroke="#4a3728" stroke-width="0.8"/>
<line x1="140" y1="130" x2="220" y2="60" stroke="#4a3728" stroke-width="0.8"/>
<line x1="380" y1="60" x2="300" y2="130" stroke="#4a3728" stroke-width="0.8" stroke-dasharray="none"/>
<line x1="460" y1="60" x2="380" y2="130" stroke="#4a3728" stroke-width="0.8" stroke-dasharray="none"/>
<!-- Annotations -->
<text x="100" y="155" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic">diagonals in tension</text>
<text x="100" y="52" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic">verticals in compression</text>

<!-- Howe Truss -->
<text x="260" y="185" text-anchor="middle" font-family="'Crimson Text', serif" font-size="12" fill="#4a3728" font-weight="600">Howe Truss (1840)</text>
<!-- Top chord -->
<line x1="60" y1="210" x2="460" y2="210" stroke="#4a3728" stroke-width="1.5"/>
<!-- Bottom chord -->
<line x1="60" y1="270" x2="460" y2="270" stroke="#4a3728" stroke-width="1.5"/>
<!-- Verticals -->
<line x1="60" y1="210" x2="60" y2="270" stroke="#4a3728" stroke-width="1"/>
<line x1="140" y1="210" x2="140" y2="270" stroke="#4a3728" stroke-width="1"/>
<line x1="220" y1="210" x2="220" y2="270" stroke="#4a3728" stroke-width="1"/>
<line x1="300" y1="210" x2="300" y2="270" stroke="#4a3728" stroke-width="1"/>
<line x1="380" y1="210" x2="380" y2="270" stroke="#4a3728" stroke-width="1"/>
<line x1="460" y1="210" x2="460" y2="270" stroke="#4a3728" stroke-width="1"/>
<!-- Diagonals (away from center) -->
<line x1="140" y1="210" x2="60" y2="270" stroke="#4a3728" stroke-width="0.8"/>
<line x1="220" y1="210" x2="140" y2="270" stroke="#4a3728" stroke-width="0.8"/>
<line x1="300" y1="270" x2="380" y2="210" stroke="#4a3728" stroke-width="0.8"/>
<line x1="380" y1="270" x2="460" y2="210" stroke="#4a3728" stroke-width="0.8"/>
<!-- Annotations -->
<text x="100" y="205" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic">diagonals in compression</text>
<text x="400" y="205" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic">verticals in tension</text>
</svg>
<p class="plate-caption">Plate II. -- Comparison of Pratt and Howe truss configurations. The Pratt truss orients its diagonals to carry tension (efficient for long iron members); the Howe truss orients diagonals in compression (suited to timber construction with iron vertical rods).</p>
</div>

The Pratt truss, patented by Thomas and Caleb Pratt in 1844, became the dominant form for iron railway bridges because its diagonal members carry tension -- a mode well suited to the ductile wrought iron from which they were fabricated. The longer diagonal members, being in tension, could be made from relatively slender iron bars without risk of buckling. The shorter vertical members, carrying compression, could be made from cast iron sections of adequate cross-sectional area.

## The limits of iron

The catastrophic failure of the Tay Bridge in Scotland on December 28, 1879, during a storm that destroyed thirteen spans of the mile-long crossing, exposed the limitations of both the materials and the analytical methods available to Victorian engineers. The subsequent investigation revealed inadequate wind loading calculations, poor casting quality, and fatigue cracking in the iron members.<sup>1</sup> The disaster accelerated the transition from iron to steel and prompted the development of more rigorous design codes.

<div class="footnote-section">
<h4>Notes</h4>
<p class="footnote"><span class="fn-num">1.</span> Lewis, P. R. and Reynolds, K., "Forensic Engineering: A Reappraisal of the Tay Bridge Disaster," <em>Interdisciplinary Science Reviews</em>, vol. 27, no. 4 (2002), pp. 287-298.</p>
</div>
