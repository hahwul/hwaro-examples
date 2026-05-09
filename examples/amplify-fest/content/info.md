+++
title = "Info"
description = "Practical information for festival attendees."
+++

{% extends "base.html" %}

{% block content %}

<div class="color-block" style="background-color: var(--blue);">
  <h2 class="band-name" style="font-size: 48px; color: var(--white);">GATES OPEN 16:00</h2>
  <p style="font-family: 'Space Mono';">Doors open four hours before the first set on the main stage. Wristbands are issued at the entrance gate against a valid ticket and a single photo identification.</p>
</div>

<div class="color-block" style="background-color: var(--magenta);">
  <h2 class="band-name" style="font-size: 48px; color: var(--white);">TRANSIT &amp; PARKING</h2>
  <p style="font-family: 'Space Mono';">The site is reachable on the express line every fifteen minutes after 14:00. On-site parking is reserved for accessibility passes and production crew. Surface lots elsewhere in the district are available on a first-come basis.</p>
</div>

<div class="color-block" style="background-color: var(--cyan);">
  <h2 class="band-name" style="font-size: 48px;">FOOD &amp; WATER</h2>
  <p style="font-family: 'Space Mono';">A rotating selection of vendors serves both stages from gates open until last set. Free water stations are positioned at each stage entry. Bring a refillable bottle. Glass containers are not permitted on the festival grounds.</p>
</div>

{% endblock %}
