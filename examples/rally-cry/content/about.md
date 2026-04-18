+++
title = "Directions"
description = "Logistics and assembly points."
+++

{% extends "base.html" %}

{% block content %}

<div class="section-banner">LOGISTICS</div>

<div class="logistics">
  <h3 style="font-family: 'Bebas Neue'; font-size: 32px; margin-bottom: 1rem;">ASSEMBLY POINT: CENTRAL PLAZA</h3>
  <p>TIME: 06:00 AM SHARP</p>
  <p>BRING: WATER, COMFORTABLE SHOES, AND YOUR VOICE.</p>
  
  <div style="margin-top: 2rem; border-top: 1px solid var(--black); padding-top: 2rem;">
    <h4 style="text-transform: uppercase; margin-bottom: 1rem;">Access Routes</h4>
    <p>1. SUBWAY: NORTH STATION (LINE 4) IS THE NEAREST STOP.</p>
    <p>2. BICYCLE: DEDICATED PARKING AVAILABLE ON THE SOUTH END.</p>
    <p>3. WALKING: ALL MAIN BOULEVARDS WILL BE OPEN TO PEDESTRIANS.</p>
  </div>
</div>

<div style="text-align: center;">
  <svg width="200" height="100" viewBox="0 0 100 50">
    <rect x="0" y="0" width="100" height="50" fill="none" stroke="var(--black)" stroke-width="2" />
    <polygon points="10,10 90,10 80,40 20,40" fill="var(--red)" />
    <text x="50" y="28" font-family="Bebas Neue" font-size="12" fill="white" text-anchor="middle">OFFICIAL BANNER</text>
  </svg>
</div>

{% endblock %}
