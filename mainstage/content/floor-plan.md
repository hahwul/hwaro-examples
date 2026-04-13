+++
title = "Floor Plan"
description = "The Great Hall. Stage A downstage-west, 1,200-cap pit, balcony on three sides, FOH booth front-left balcony."
tags = ["event", "performance", "stage"]
+++

<span class="cue-tag">VENUE / THE GREAT HALL</span>

# VENUE FLOOR PLAN

The Great Hall is a 1,200-capacity proscenium room with a fixed stage on the west wall and a three-sided balcony. The FOH booth is front-left on the balcony, not on the floor. The merch lobby is east. The green room is stage-right, one floor down. Load-in is at the north dock.

<svg viewBox="0 0 1200 720" class="floor-plan-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <pattern id="gridP" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0 L0 0 0 40" fill="none" stroke="#1e1e22" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="1200" height="720" fill="#141416"/>
  <rect x="0" y="0" width="1200" height="720" fill="url(#gridP)"/>

  <!-- outer walls -->
  <rect x="60" y="60" width="1080" height="600" fill="none" stroke="#f4f2ec" stroke-width="2.5"/>

  <!-- Stage A (west wall) -->
  <rect x="60" y="160" width="220" height="400" fill="#0b0b0c" stroke="#f5a623" stroke-width="2"/>
  <text x="170" y="180" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="14" fill="#f5a623" letter-spacing="3">STAGE A</text>

  <!-- Stage proscenium line -->
  <line x1="280" y1="160" x2="280" y2="560" stroke="#f5a623" stroke-width="2" stroke-dasharray="4 4"/>

  <!-- drum riser -->
  <rect x="140" y="330" width="80" height="60" fill="none" stroke="#f4f2ec" stroke-width="1.5"/>
  <text x="180" y="365" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#f4f2ec" letter-spacing="1">DRUM</text>

  <!-- speaker stacks -->
  <rect x="280" y="140" width="30" height="50" fill="#2a2a30" stroke="#f4f2ec" stroke-width="1"/>
  <rect x="280" y="530" width="30" height="50" fill="#2a2a30" stroke="#f4f2ec" stroke-width="1"/>
  <text x="295" y="130" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#f4f2ec" letter-spacing="1">PA-L</text>
  <text x="295" y="600" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#f4f2ec" letter-spacing="1">PA-R</text>

  <!-- Pit / GA floor -->
  <rect x="320" y="200" width="620" height="320" fill="none" stroke="#3dbac7" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="630" y="360" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="18" fill="#3dbac7" letter-spacing="4">GA PIT / 1200 CAP</text>

  <!-- Balcony (north) -->
  <rect x="60" y="60" width="1080" height="80" fill="#1e1e22" stroke="#f4f2ec" stroke-width="1"/>
  <text x="600" y="108" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="14" fill="#f4f2ec" letter-spacing="4">BALCONY NORTH / 240 SEATS</text>

  <!-- Balcony (east) -->
  <rect x="1060" y="140" width="80" height="440" fill="#1e1e22" stroke="#f4f2ec" stroke-width="1"/>
  <text x="1100" y="370" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="12" fill="#f4f2ec" letter-spacing="3" transform="rotate(-90 1100 370)">BALCONY EAST / 160</text>

  <!-- Balcony (south) -->
  <rect x="60" y="580" width="1080" height="80" fill="#1e1e22" stroke="#f4f2ec" stroke-width="1"/>
  <text x="600" y="628" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="14" fill="#f4f2ec" letter-spacing="4">BALCONY SOUTH / 240 SEATS</text>

  <!-- FOH booth -->
  <rect x="120" y="80" width="120" height="50" fill="#0b0b0c" stroke="#f5a623" stroke-width="2"/>
  <text x="180" y="100" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="11" fill="#f5a623" letter-spacing="2">FOH BOOTH</text>
  <text x="180" y="118" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#f4f2ec" letter-spacing="1">96-CH DESK</text>

  <!-- Merch -->
  <rect x="960" y="200" width="100" height="80" fill="#0b0b0c" stroke="#f4f2ec" stroke-width="1"/>
  <text x="1010" y="238" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="11" fill="#f4f2ec" letter-spacing="2">MERCH</text>
  <text x="1010" y="254" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#f4f2ec" letter-spacing="1">LOBBY E</text>

  <!-- Bar -->
  <rect x="960" y="420" width="100" height="100" fill="#0b0b0c" stroke="#f4f2ec" stroke-width="1"/>
  <text x="1010" y="462" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="11" fill="#f4f2ec" letter-spacing="2">BAR</text>
  <text x="1010" y="478" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#f4f2ec" letter-spacing="1">EAST WING</text>

  <!-- Routes -->
  <g stroke="#f5a623" stroke-width="1.5" stroke-dasharray="3 5" fill="none" opacity="0.7">
    <path d="M960,240 L630,360"/>
    <path d="M960,470 L630,360"/>
  </g>

  <!-- Entries -->
  <rect x="570" y="650" width="120" height="18" fill="#f5a623"/>
  <text x="630" y="690" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="11" fill="#f5a623" letter-spacing="2">MAIN ENTRY</text>

  <rect x="60" y="310" width="12" height="100" fill="#f5a623"/>
  <text x="100" y="370" font-family="Oswald" font-weight="700" font-size="10" fill="#f5a623" letter-spacing="2">LOAD-IN DOCK</text>

  <!-- Compass -->
  <g transform="translate(1090,690)">
    <circle cx="0" cy="0" r="22" fill="#0b0b0c" stroke="#f4f2ec" stroke-width="1"/>
    <polygon points="0,-18 4,0 0,-4 -4,0" fill="#f5a623"/>
    <text x="0" y="4" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="10" fill="#f4f2ec">N</text>
  </g>

  <!-- Scale -->
  <g transform="translate(80,690)">
    <line x1="0" y1="0" x2="80" y2="0" stroke="#f4f2ec" stroke-width="2"/>
    <line x1="0" y1="-4" x2="0" y2="4" stroke="#f4f2ec" stroke-width="2"/>
    <line x1="80" y1="-4" x2="80" y2="4" stroke="#f4f2ec" stroke-width="2"/>
    <text x="40" y="16" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#f4f2ec" letter-spacing="1">20 FT</text>
  </g>
</svg>

<div class="floor-legend">
  <div class="legend-item"><span class="legend-code">STG-A</span><span>Proscenium stage &middot; 42 ft wide</span></div>
  <div class="legend-item"><span class="legend-code">FOH</span><span>Front-of-house &middot; balcony NW</span></div>
  <div class="legend-item"><span class="legend-code">GA-01</span><span>Ground-floor GA pit</span></div>
  <div class="legend-item"><span class="legend-code">BAL-N</span><span>Balcony north &middot; 240 seated</span></div>
  <div class="legend-item"><span class="legend-code">BAL-E</span><span>Balcony east &middot; 160 seated</span></div>
  <div class="legend-item"><span class="legend-code">BAL-S</span><span>Balcony south &middot; 240 seated</span></div>
  <div class="legend-item"><span class="legend-code">MER</span><span>Merch &middot; east lobby</span></div>
  <div class="legend-item"><span class="legend-code">BAR</span><span>Bar &middot; east wing, two stations</span></div>
  <div class="legend-item"><span class="legend-code">LD-N</span><span>Load-in dock &middot; north wall</span></div>
</div>

## accessibility

Wheelchair access to the GA pit is through the east lobby entrance, not the main entry. Accessible seating is reserved on both balcony north and balcony south. Ask a house manager in the lobby — they are wearing amber armbands.
