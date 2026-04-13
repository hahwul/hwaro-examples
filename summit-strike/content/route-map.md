+++
title = "Route Map"
description = "A map of the mountain, every session venue, and the trail that connects them. Bring it on a phone. Bring it on paper."
tags = ["event", "conference", "summit"]
+++

<span class="elev-tag">MAP / RIDGE HALL COMPLEX</span>

# ROUTE MAP

Every session runs inside the Ridge Hall complex. The main hall, the four lab rooms, the café, the Peak Pavilion, and the outdoor summit-day stage all sit along a 600-meter trail. Walk it once on arrival so you do not have to rush later.

<svg viewBox="0 0 1200 600" class="route-map-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <pattern id="topo" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#2a3540" stroke-width="0.6" opacity="0.8">
        <ellipse cx="80" cy="80" rx="76" ry="50"/>
        <ellipse cx="80" cy="80" rx="60" ry="40"/>
        <ellipse cx="80" cy="80" rx="44" ry="28"/>
        <ellipse cx="80" cy="80" rx="28" ry="18"/>
        <ellipse cx="80" cy="80" rx="12" ry="8"/>
      </g>
    </pattern>
  </defs>
  <rect x="0" y="0" width="1200" height="600" fill="#141b21"/>
  <rect x="0" y="0" width="1200" height="600" fill="url(#topo)"/>

  <!-- back mountain silhouette -->
  <polygon points="0,600 150,330 280,400 440,220 600,330 760,260 920,360 1060,280 1200,360 1200,600" fill="#1e2832" opacity="0.95"/>
  <polygon points="0,600 100,400 240,460 380,380 520,420 640,360 780,420 900,380 1040,440 1200,420 1200,600" fill="#141b21" opacity="0.9"/>

  <!-- The trail -->
  <path d="M120,540 Q200,500 260,480 Q320,460 380,440 Q440,420 500,390 Q570,350 620,310 Q680,280 720,260 Q760,240 800,220 Q840,200 880,190" fill="none" stroke="#d6ff4a" stroke-width="2.5" stroke-dasharray="6 5"/>

  <!-- Venue buildings / waypoints -->
  <!-- Base Camp -->
  <rect x="90" y="520" width="60" height="40" fill="#2a3540" stroke="#f4f6f4" stroke-width="1.5"/>
  <circle cx="120" cy="540" r="6" fill="#d6ff4a" stroke="#0c1014" stroke-width="2"/>
  <text x="165" y="545" font-family="Montserrat" font-weight="800" font-size="13" fill="#f4f6f4" letter-spacing="2">BASE CAMP</text>
  <text x="165" y="560" font-family="JetBrains Mono" font-size="10" fill="#d6ff4a" letter-spacing="2">1,600 M</text>

  <!-- Cafe / water stop -->
  <circle cx="260" cy="480" r="6" fill="#d6ff4a" stroke="#0c1014" stroke-width="2"/>
  <text x="278" y="476" font-family="Montserrat" font-weight="700" font-size="12" fill="#f4f6f4" letter-spacing="1">Cafe &middot; Hydration</text>
  <text x="278" y="492" font-family="JetBrains Mono" font-size="9" fill="#d6ff4a" letter-spacing="1">1,820 M</text>

  <!-- Lab rooms cluster -->
  <rect x="350" y="420" width="120" height="50" fill="#2a3540" stroke="#f4f6f4" stroke-width="1.5"/>
  <line x1="380" y1="420" x2="380" y2="470" stroke="#f4f6f4" stroke-width="1"/>
  <line x1="410" y1="420" x2="410" y2="470" stroke="#f4f6f4" stroke-width="1"/>
  <line x1="440" y1="420" x2="440" y2="470" stroke="#f4f6f4" stroke-width="1"/>
  <text x="410" y="412" text-anchor="middle" font-family="Montserrat" font-weight="800" font-size="12" fill="#f4f6f4" letter-spacing="2">LAB ROOMS 01 - 04</text>
  <text x="410" y="488" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#d6ff4a" letter-spacing="1">2,100 M</text>
  <circle cx="380" cy="440" r="5" fill="#d6ff4a" stroke="#0c1014" stroke-width="1.5"/>

  <!-- Main hall -->
  <rect x="540" y="340" width="180" height="70" fill="#2a3540" stroke="#f4f6f4" stroke-width="2"/>
  <text x="630" y="372" text-anchor="middle" font-family="Montserrat" font-weight="900" font-size="14" fill="#f4f6f4" letter-spacing="3">RIDGE HALL</text>
  <text x="630" y="390" text-anchor="middle" font-family="Inter" font-size="11" fill="#8aa0b5" letter-spacing="1">Main auditorium / 1,200 seats</text>
  <circle cx="630" cy="408" r="7" fill="#d6ff4a" stroke="#0c1014" stroke-width="2"/>
  <text x="630" y="425" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#d6ff4a" letter-spacing="1">2,500 M</text>

  <!-- Checkpoint pavilion -->
  <rect x="740" y="260" width="100" height="40" fill="#2a3540" stroke="#f4f6f4" stroke-width="1.5"/>
  <text x="790" y="284" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="11" fill="#f4f6f4" letter-spacing="1">CHECKPOINT</text>
  <circle cx="720" cy="260" r="6" fill="#d6ff4a" stroke="#0c1014" stroke-width="2"/>
  <text x="740" y="316" font-family="JetBrains Mono" font-size="10" fill="#d6ff4a" letter-spacing="1">2,940 M</text>

  <!-- Peak Pavilion -->
  <g transform="translate(880,190)">
    <polygon points="0,0 -26,30 26,30" fill="#d6ff4a" stroke="#0c1014" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="0" y2="-30" stroke="#f4f6f4" stroke-width="1.5"/>
    <polygon points="0,-30 16,-24 0,-18" fill="#d6ff4a"/>
  </g>
  <text x="880" y="250" text-anchor="middle" font-family="Montserrat" font-weight="900" font-size="14" fill="#d6ff4a" letter-spacing="3">SUMMIT</text>
  <text x="880" y="268" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#f4f6f4" letter-spacing="2">4,210 M</text>

  <!-- scale bar -->
  <g transform="translate(80,570)">
    <line x1="0" y1="0" x2="120" y2="0" stroke="#f4f6f4" stroke-width="2"/>
    <line x1="0" y1="-4" x2="0" y2="4" stroke="#f4f6f4" stroke-width="2"/>
    <line x1="60" y1="-3" x2="60" y2="3" stroke="#f4f6f4" stroke-width="1"/>
    <line x1="120" y1="-4" x2="120" y2="4" stroke="#f4f6f4" stroke-width="2"/>
    <text x="60" y="16" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#f4f6f4" letter-spacing="1">200 M</text>
  </g>

  <!-- compass -->
  <g transform="translate(1130,540)">
    <circle cx="0" cy="0" r="24" fill="#0c1014" stroke="#f4f6f4" stroke-width="1"/>
    <polygon points="0,-18 4,0 0,-4 -4,0" fill="#d6ff4a"/>
    <text x="0" y="4" text-anchor="middle" font-family="Montserrat" font-weight="900" font-size="10" fill="#f4f6f4">N</text>
  </g>
</svg>

<div class="route-legend">
  <div class="legend-pin"><span class="pin-code">WP-01</span><span>Base Camp &middot; check-in, badges</span></div>
  <div class="legend-pin"><span class="pin-code">WP-02</span><span>Cafe &middot; hydration stop</span></div>
  <div class="legend-pin"><span class="pin-code">WP-03</span><span>Lab Rooms 01 - 04</span></div>
  <div class="legend-pin"><span class="pin-code">WP-04</span><span>Ridge Hall &middot; main auditorium</span></div>
  <div class="legend-pin"><span class="pin-code">WP-05</span><span>Checkpoint Pavilion</span></div>
  <div class="legend-pin"><span class="pin-code">WP-06</span><span>Summit &middot; day-03 only</span></div>
</div>

## getting there

Ridge Hall sits 42 km from the nearest municipal airport. Shuttles run every 40 minutes between 06:00 and 22:00 on all three conference days. If you are driving, the access road closes at elevation 2,100 m &mdash; park at the valley lot and take the cable car up.
