+++
title = "The Rig"
description = "Full lighting rig inventory for The Fillmore Armory: truss positions, PAR can allocations, moving heads, and signal flow."
tags = ["event", "venue", "lighting", "technical"]
+++

<header class="section-header">
  <p class="section-eyebrow">House Pack &middot; Inventory</p>
  <h1 class="section-title">THE RIG</h1>
</header>

<section class="show-meta">
  <div class="show-meta-cell">
    <p class="show-meta-label">Trim Height</p>
    <p class="show-meta-val">7.2 m</p>
  </div>
  <div class="show-meta-cell">
    <p class="show-meta-label">Fixtures</p>
    <p class="show-meta-val">36 units</p>
  </div>
  <div class="show-meta-cell">
    <p class="show-meta-label">Movers</p>
    <p class="show-meta-val">8 Elation E</p>
  </div>
  <div class="show-meta-cell">
    <p class="show-meta-label">Console</p>
    <p class="show-meta-val">ETC Ion Xe</p>
  </div>
</section>

## Truss positions

<div class="fixture-list">
  <div class="fixture-row">
    <span class="fixture-channel">FT-A</span>
    <span>
      <span class="fixture-name">Front Truss, Upstage</span>
      <span class="fixture-meta">Houses 12 PAR 64 CP60 units for the primary front wash</span>
    </span>
    <span class="fixture-pos">12m x 0.4m</span>
    <span class="fixture-dmx">CH 01-12</span>
  </div>
  <div class="fixture-row">
    <span class="fixture-channel">FT-B</span>
    <span>
      <span class="fixture-name">Front Truss, Downstage</span>
      <span class="fixture-meta">Source Four 26deg ellipsoidals for specials and gobo breakups</span>
    </span>
    <span class="fixture-pos">12m x 0.4m</span>
    <span class="fixture-dmx">CH 13-22</span>
  </div>
  <div class="fixture-row">
    <span class="fixture-channel">MT</span>
    <span>
      <span class="fixture-name">Mid Truss</span>
      <span class="fixture-meta">4 Elation moving heads for effects and follow positions</span>
    </span>
    <span class="fixture-pos">8m x 0.4m</span>
    <span class="fixture-dmx">CH 23-30</span>
  </div>
  <div class="fixture-row">
    <span class="fixture-channel">BT</span>
    <span>
      <span class="fixture-name">Back Truss &middot; Cyc</span>
      <span class="fixture-meta">4-cell cyc lights for backdrop wash, plus a 4-unit strip</span>
    </span>
    <span class="fixture-pos">10m x 0.4m</span>
    <span class="fixture-dmx">CH 31-36</span>
  </div>
</div>

## Signal flow

DMX out from the console is a single universe of 512 channels. Primary run: console to DMX splitter in the FOH rack, then a four-way distribution to house right dimmer rack, house left dimmer rack, mid truss mover loom, and back-truss cyc. Secondary universe is patched but unused in the standard pack.

RDM is enabled on the movers only. Bringing in additional RDM fixtures requires re-patching the splitter; the in-house tech is on call for load-in.
