+++
title = "The Night"
description = "A late-night club session - doors at midnight, lights down till dawn, four rooms, twelve residents, a disco ball the size of a small car."
template = "page"
+++

<section class="night-hero">
  <div class="night-hero-ball" aria-hidden="true">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Disco ball with geometric faceted surface -->
      <defs>
        <clipPath id="ballclip">
          <circle cx="150" cy="150" r="130"/>
        </clipPath>
      </defs>
      <!-- Dark outer ring (halo) -->
      <circle cx="150" cy="150" r="140" fill="none" stroke="#00c8ff" stroke-width="1" opacity="0.5"/>
      <circle cx="150" cy="150" r="148" fill="none" stroke="#ff2bac" stroke-width="0.5" opacity="0.4"/>
      <!-- Ball base -->
      <circle cx="150" cy="150" r="130" fill="#0a0816" stroke="#00c8ff" stroke-width="2"/>
      <!-- Facets (grid of polygons) -->
      <g clip-path="url(#ballclip)">
        <!-- Rows of facets - each a small diamond or quad in alternating blue tints -->
        <g>
          <polygon points="150,20 180,40 150,60 120,40" fill="#00c8ff" opacity="0.8"/>
          <polygon points="180,40 210,60 180,80 150,60" fill="#0082b5" opacity="0.75"/>
          <polygon points="210,60 240,80 210,100 180,80" fill="#00c8ff" opacity="0.65"/>
          <polygon points="120,40 150,60 120,80 90,60" fill="#0082b5" opacity="0.7"/>
          <polygon points="90,60 120,80 90,100 60,80" fill="#00c8ff" opacity="0.65"/>

          <polygon points="150,60 180,80 150,100 120,80" fill="#8d3bff" opacity="0.7"/>
          <polygon points="180,80 210,100 180,120 150,100" fill="#00c8ff" opacity="0.6"/>
          <polygon points="210,100 240,120 210,140 180,120" fill="#0082b5" opacity="0.7"/>
          <polygon points="120,80 150,100 120,120 90,100" fill="#00c8ff" opacity="0.6"/>
          <polygon points="90,100 120,120 90,140 60,120" fill="#0082b5" opacity="0.75"/>

          <polygon points="60,120 90,140 60,160 30,140" fill="#00c8ff" opacity="0.55"/>
          <polygon points="30,140 60,160 30,180" fill="#0082b5" opacity="0.6"/>
          <polygon points="240,140 270,160 240,180" fill="#0082b5" opacity="0.6"/>
          <polygon points="210,140 240,160 210,180 180,160" fill="#00c8ff" opacity="0.55"/>

          <polygon points="150,100 180,120 150,140 120,120" fill="#ff2bac" opacity="0.7"/>
          <polygon points="180,120 210,140 180,160 150,140" fill="#8d3bff" opacity="0.65"/>
          <polygon points="120,120 150,140 120,160 90,140" fill="#8d3bff" opacity="0.65"/>
          <polygon points="150,140 180,160 150,180 120,160" fill="#00c8ff" opacity="0.9"/>

          <polygon points="90,140 120,160 90,180 60,160" fill="#00c8ff" opacity="0.7"/>
          <polygon points="180,160 210,180 180,200 150,180" fill="#0082b5" opacity="0.7"/>
          <polygon points="120,160 150,180 120,200 90,180" fill="#0082b5" opacity="0.7"/>
          <polygon points="60,160 90,180 60,200 30,180" fill="#00c8ff" opacity="0.6"/>
          <polygon points="210,160 240,180 210,200 180,180" fill="#00c8ff" opacity="0.6"/>

          <polygon points="150,180 180,200 150,220 120,200" fill="#ff2bac" opacity="0.6"/>
          <polygon points="180,200 210,220 180,240 150,220" fill="#8d3bff" opacity="0.55"/>
          <polygon points="120,200 150,220 120,240 90,220" fill="#8d3bff" opacity="0.55"/>
          <polygon points="90,180 120,200 90,220 60,200" fill="#0082b5" opacity="0.55"/>
          <polygon points="60,200 90,220 60,240" fill="#00c8ff" opacity="0.5"/>
          <polygon points="210,200 240,220 210,240" fill="#00c8ff" opacity="0.5"/>

          <polygon points="150,220 180,240 150,260 120,240" fill="#00c8ff" opacity="0.55"/>
          <polygon points="180,240 210,260 180,280" fill="#0082b5" opacity="0.45"/>
          <polygon points="120,240 150,260 120,280 90,260" fill="#0082b5" opacity="0.5"/>
          <polygon points="90,220 120,240 90,260 60,240" fill="#00c8ff" opacity="0.45"/>
        </g>
      </g>
      <!-- Ball thread / suspension -->
      <line x1="150" y1="20" x2="150" y2="0" stroke="#e8eaf5" stroke-width="0.8"/>
      <!-- Highlight shine -->
      <ellipse cx="110" cy="90" rx="22" ry="12" fill="#ffffff" opacity="0.14"/>
      <!-- Concentric light rays -->
      <g stroke="#ff2bac" stroke-width="0.4" fill="none" opacity="0.6">
        <line x1="150" y1="150" x2="280" y2="280"/>
        <line x1="150" y1="150" x2="20" y2="280"/>
        <line x1="150" y1="150" x2="280" y2="20"/>
        <line x1="150" y1="150" x2="20" y2="20"/>
      </g>
    </svg>
  </div>
  <p class="kicker">A LATE NIGHT SESSION</p>
  <h1>AFTERPARTY</h1>
  <p class="night-h1-sub">The Night that Starts When the Other Ones End</p>
  <div class="night-date">
    <div>
      <span class="date-sub">Saturday</span><br>
      <span class="date-big">17 MAY 2026</span>
    </div>
    <div>
      <span class="date-sub">Doors</span><br>
      <span class="date-big">00:00</span>
    </div>
    <div>
      <span class="date-sub">Carry On</span><br>
      <span class="date-big">06:00</span>
    </div>
  </div>
  <p class="night-lede">Four rooms under Arch 42. Twelve residents on rotation. One disco ball the size of a small car. Doors open at midnight, last admissions at half past two, and the sound goes out when the sun comes up.</p>
</section>

<ul class="stats-strip">
  <li>
    <span class="stat-num">4</span>
    <span class="stat-label">Rooms</span>
  </li>
  <li>
    <span class="stat-num">12</span>
    <span class="stat-label">Residents</span>
  </li>
  <li>
    <span class="stat-num">6</span>
    <span class="stat-label">Hours</span>
  </li>
  <li>
    <span class="stat-num">1</span>
    <span class="stat-label">Disco Ball</span>
  </li>
</ul>

## The Rooms

The venue is divided into four interconnected rooms, each with its own sound and its own character. Move between them as freely as you like; they all play until six.

### Room A - The Ballroom

The main floor, with the disco ball overhead and the principal soundsystem. Residents play four-hour rotations; the headline set runs from 03:00 to 05:00. Capacity 400.

### Room B - The Annex

A warmer, smaller room for deeper and slower sounds. House and dub throughout the night. Capacity 180.

### Room C - The Tape Room

A curated listening space with long-form recorded mixes from residents past and present, playing continuously from midnight to six. Seating available. Capacity 80.

### Room D - The Garden

An outdoor covered courtyard with its own bar and a resident playing ambient and downtempo through the full session. Capacity 120.

## How the Night Runs

Arrival is at midnight through the side door beneath the viaduct. Your RSVP is checked against the list at the door; if you are on the list you proceed directly to the cloakroom and the bar. If you are not on the list there is usually space on the door but it is not guaranteed.

The bar runs cashless and accepts contactless and chip-and-pin. A full [bar menu](/menu/) is posted beneath; the four house cocktails are designed for the night and will not be found anywhere else.

Phones on the floor are not appreciated. The venue is not media-regulated but the regulars are, and they will make their displeasure felt gently if you try to film the dancefloor. You are welcome to take a picture in the corridor or in the garden.

The full [lineup](/lineup/) is posted below for your planning. The running order is indicative - the residents swap slots on the night as the feel of the room demands - but the headline slot and the closing set are fixed.

[Reserve your place](/rsvp/) before Thursday at midnight. The door is strict once the RSVP closes.
