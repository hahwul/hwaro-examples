+++
title = "Event Map"
description = "Grand Gathering: Navigating the Big Tent"
+++

{% extends "base.html" %}

{% block content %}
<div class="event-card">
  <h2 class="event-title">The Orientation</h2>
  <p>The Big Tent is organized into four main quadrants, each representing a different facet of our community gathering.</p>
</div>

<div style="border: 8px solid var(--black); padding: 4rem; text-align: center; background-color: var(--white);">
  <svg width="300" height="300" viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" fill="none" stroke="var(--black)" stroke-width="4" />
    <line x1="10" y1="50" x2="90" y2="50" stroke="var(--black)" stroke-width="2" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="var(--black)" stroke-width="2" />
    <circle cx="50" cy="50" r="15" fill="var(--primary)" />
    <text x="50" y="45" font-family="Lilita One" font-size="8" fill="white" text-anchor="middle">INFO</text>
  </svg>
  <div style="font-family: 'DM Mono'; font-size: 14px; margin-top: 2rem;">NORTH: WORKSHOPS // SOUTH: FOOD // EAST: TECH // WEST: ARTS</div>
</div>
{% endblock %}
