+++
title = "Chapter III: The Suspension Span"
description = "Cable-supported bridges from chain links to modern steel wire, including the catenary problem and aerodynamic stability."
date = "2025-01-13"
tags = ["suspension", "cable", "catenary", "aerodynamics"]
weight = 3

[extra]
chapter_number = "III"
+++

<p class="chapter-label">Chapter III</p>

## The catenary and the cable

<p class="lede">The suspension bridge inverts the structural logic of the arch. Where the arch carries loads in compression along a curved profile, the suspension cable carries loads in tension along a curve that mirrors the arch -- the catenary. A chain or cable hanging freely under its own weight assumes the catenary form; when loaded uniformly along the horizontal (as by a bridge deck), it assumes a parabolic profile. The distinction matters mathematically but not practically: for most bridge proportions, the catenary and parabola are nearly identical.</p>

<div class="illustration">
<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<!-- Towers -->
<rect x="80" y="30" width="12" height="150" fill="none" stroke="#4a3728" stroke-width="1.5"/>
<rect x="420" y="30" width="12" height="150" fill="none" stroke="#4a3728" stroke-width="1.5"/>
<!-- Main cable -->
<path d="M 20 50 L 86 30 Q 260 150, 426 30 L 500 50" fill="none" stroke="#4a3728" stroke-width="2"/>
<!-- Deck -->
<line x1="60" y1="170" x2="460" y2="170" stroke="#4a3728" stroke-width="1.5"/>
<!-- Suspender cables -->
<line x1="120" y1="50" x2="120" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="160" y1="68" x2="160" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="200" y1="90" x2="200" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="240" y1="110" x2="240" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="260" y1="118" x2="260" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="280" y1="110" x2="280" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="320" y1="90" x2="320" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="360" y1="68" x2="360" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<line x1="400" y1="50" x2="400" y2="170" stroke="#4a3728" stroke-width="0.5"/>
<!-- Anchorage -->
<rect x="8" y="50" width="20" height="20" fill="none" stroke="#4a3728" stroke-width="1"/>
<rect x="488" y="50" width="20" height="20" fill="none" stroke="#4a3728" stroke-width="1"/>
<!-- Labels -->
<text x="86" y="22" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#4a3728" font-style="italic">tower</text>
<text x="260" y="138" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic">main cable (parabolic)</text>
<text x="18" y="46" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="7" fill="#4a3728" font-style="italic">anchorage</text>
<text x="498" y="46" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="7" fill="#4a3728" font-style="italic">anchorage</text>
<text x="160" y="120" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="7" fill="#6b5d4f">suspenders</text>
<text x="260" y="185" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#4a3728" font-style="italic">stiffening deck</text>
</svg>
<p class="illustration-caption">Fig. 4. -- Elevation of a suspension bridge showing the main cable in parabolic profile, vertical suspender cables, tower pylons, and anchorage blocks at each end.</p>
</div>

The earliest suspension bridges used chains of iron links. James Finley built a chain suspension bridge in Pennsylvania as early as 1801, and Thomas Telford's Menai Strait Bridge (1826) in Wales achieved a span of 176 meters using wrought iron eyebar chains. But chains were heavy and prone to brittle fracture at their pin connections, and the individual links imposed a discrete rather than continuous load path.

## The wire cable

The decisive innovation was the substitution of wire cables for chains. John Augustus Roebling, a Prussian-born engineer working in America, perfected the technique of spinning cables in place from thousands of individual steel wires. Each wire, approximately five millimeters in diameter, was galvanized against corrosion and bundled with thousands of others into a cylindrical cable wrapped in a protective sheath. The resulting cable was lighter than an equivalent chain, distributed its loads more evenly, and could be fabricated at any length by splicing additional wires during the spinning process.

Roebling's Brooklyn Bridge (1883), spanning 486 meters between its granite towers, demonstrated the viability of the wire suspension bridge at a scale previously unattempted. The main cables, each containing 5,434 parallel wires, supported a deck that carried both rail and road traffic. The bridge also incorporated diagonal stay cables radiating from the towers -- a hybrid system that enhanced the deck's resistance to wind-induced oscillation.<sup>1</sup>

## The problem of aerodynamic stability

<div class="plate">
<div class="plate-label">Plate III</div>
<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<!-- Cross-sections comparison -->
<!-- Original Tacoma deck -->
<text x="140" y="25" text-anchor="middle" font-family="'Crimson Text', serif" font-size="10" fill="#4a3728" font-weight="600">Plate Girder Deck</text>
<text x="140" y="38" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic">(Tacoma Narrows, 1940)</text>
<rect x="60" y="60" width="160" height="14" fill="none" stroke="#4a3728" stroke-width="1.5"/>
<rect x="60" y="60" width="4" height="40" fill="none" stroke="#4a3728" stroke-width="1"/>
<rect x="216" y="60" width="4" height="40" fill="none" stroke="#4a3728" stroke-width="1"/>
<!-- Wind arrows -->
<line x1="30" y1="75" x2="55" y2="75" stroke="#8b7355" stroke-width="1"/>
<polygon points="55,75 50,72 50,78" fill="#8b7355"/>
<line x1="30" y1="85" x2="55" y2="85" stroke="#8b7355" stroke-width="1"/>
<polygon points="55,85 50,82 50,88" fill="#8b7355"/>
<text x="42" y="68" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="7" fill="#8b7355" font-style="italic">wind</text>
<!-- Vortex indicator -->
<path d="M 225 80 Q 240 65, 235 85 Q 230 105, 245 90" fill="none" stroke="#8b7355" stroke-width="0.5"/>
<text x="250" y="88" font-family="'STIX Two Text', serif" font-size="7" fill="#8b7355" font-style="italic">vortex</text>

<!-- Modern aerodynamic deck -->
<text x="400" y="25" text-anchor="middle" font-family="'Crimson Text', serif" font-size="10" fill="#4a3728" font-weight="600">Streamlined Box Deck</text>
<text x="400" y="38" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="8" fill="#8b7355" font-style="italic">(modern practice)</text>
<!-- Box section with fairings -->
<path d="M 310 80 L 330 68 L 470 68 L 490 80 L 470 92 L 330 92 Z" fill="none" stroke="#4a3728" stroke-width="1.5"/>
<!-- Wind arrows -->
<line x1="285" y1="75" x2="305" y2="75" stroke="#8b7355" stroke-width="1"/>
<polygon points="305,75 300,72 300,78" fill="#8b7355"/>
<line x1="285" y1="85" x2="305" y2="85" stroke="#8b7355" stroke-width="1"/>
<polygon points="305,85 300,82 300,88" fill="#8b7355"/>
<!-- Smooth flow -->
<path d="M 495 78 Q 510 80, 520 78" fill="none" stroke="#8b7355" stroke-width="0.5"/>
<path d="M 495 82 Q 510 80, 520 82" fill="none" stroke="#8b7355" stroke-width="0.5"/>
<text x="510" y="72" font-family="'STIX Two Text', serif" font-size="7" fill="#8b7355" font-style="italic">smooth flow</text>

<!-- Comparison note -->
<text x="260" y="160" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="9" fill="#4a3728" font-style="italic">The bluff plate girder sheds vortices alternately from top and bottom edges,</text>
<text x="260" y="174" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="9" fill="#4a3728" font-style="italic">inducing periodic vertical oscillation. The streamlined box section</text>
<text x="260" y="188" text-anchor="middle" font-family="'STIX Two Text', serif" font-size="9" fill="#4a3728" font-style="italic">eliminates vortex shedding and permits laminar flow around the deck.</text>
</svg>
<p class="plate-caption">Plate III. -- Cross-sections of bridge decks illustrating the aerodynamic problem. Left: the bluff plate girder section of the Tacoma Narrows Bridge, which failed catastrophically in 1940. Right: a modern streamlined box section designed to prevent vortex-induced oscillation.</p>
</div>

The destruction of the Tacoma Narrows Bridge on November 7, 1940, only four months after its opening, remains the most dramatic failure in suspension bridge history. The bridge's deck, a shallow plate girder only 2.4 meters deep spanning 853 meters, proved catastrophically susceptible to wind-induced oscillation. In a moderate wind of approximately 67 kilometers per hour, the deck developed torsional oscillations of increasing amplitude until the structure tore itself apart.

The failure prompted fundamental research into bridge aerodynamics. Wind tunnel testing, previously considered unnecessary for bridge design, became a standard requirement. Modern suspension bridges employ streamlined box-girder decks, aerodynamic fairings, and tuned mass dampers to prevent the vortex-induced oscillations that destroyed the Tacoma Narrows span.

<div class="footnote-section">
<h4>Notes</h4>
<p class="footnote"><span class="fn-num">1.</span> McCullough, D., <em>The Great Bridge</em> (Simon and Schuster, 1972), pp. 315-340. Roebling's diagonal stays were omitted from most subsequent suspension bridges until the Tacoma Narrows failure renewed interest in deck stiffness.</p>
</div>
