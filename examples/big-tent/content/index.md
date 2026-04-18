+++
title = "Main Tent"
description = "Grand Gathering: Community Events Schedule"
+++

{% extends "base.html" %}

{% block content %}
<div class="event-card">
  <div class="booth-number">STAGE 01</div>
  <h2 class="event-title">Opening Ceremony</h2>
  <p style="font-size: 20px; font-weight: 700;">10:00 AM — Welcome to the Big Tent Gathering!</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
  <div class="ticket-stub">
    <div class="booth-number">BOOTH 12</div>
    <h3 style="font-family: 'Lilita One'; font-size: 24px; text-transform: uppercase;">Art Workshop</h3>
    <p>Community mural painting for all ages.</p>
    <div style="font-family: 'DM Mono'; font-size: 12px; margin-top: 1rem;">ENTRY: FREE</div>
  </div>

  <div class="ticket-stub">
    <div class="booth-number">BOOTH 05</div>
    <h3 style="font-family: 'Lilita One'; font-size: 24px; text-transform: uppercase;">Tech Talk</h3>
    <p>The future of open-source in local communities.</p>
    <div style="font-family: 'DM Mono'; font-size: 12px; margin-top: 1rem;">ENTRY: TICKET A</div>
  </div>
  
  <div class="ticket-stub">
    <div class="booth-number">BOOTH 21</div>
    <h3 style="font-family: 'Lilita One'; font-size: 24px; text-transform: uppercase;">Food Fair</h3>
    <p>Local flavors from across the district.</p>
    <div style="font-family: 'DM Mono'; font-size: 12px; margin-top: 1rem;">ENTRY: FREE</div>
  </div>
</div>

<div class="event-card" style="background-color: var(--accent); color: var(--white); border-color: var(--white); margin-top: 4rem;">
  <div class="booth-number" style="background-color: var(--white); color: var(--accent);">GRAND FINALE</div>
  <h2 class="event-title">Starlight Performance</h2>
  <p style="font-size: 20px; font-weight: 700;">08:00 PM — A spectacular closing show.</p>
</div>
{% endblock %}
