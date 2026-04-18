+++
title = "The Stage"
description = "Refined atmosphere and transitional moments."
+++

{% extends "base.html" %}

{% block content %}

<div class="program-listing" style="text-align: center; border: none;">
  <h2 class="show-title">The Grand Lyric</h2>
  <p>Our theater is a space for quiet reflection and intense performance. We invite you to embrace the transitional moments — the intermissions where the story continues in the minds of the audience.</p>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
  <div style="border: 1px solid var(--gold); padding: 1.5rem;">
    <h3 class="day-label" style="font-size: 14px; margin-bottom: 0.5rem;">The Foyer</h3>
    <p style="font-size: 14px;">Serving artisan refreshments during all intermissions. Please return to your seat when the bell tolls.</p>
  </div>
  <div style="border: 1px solid var(--gold); padding: 1.5rem;">
    <h3 class="day-label" style="font-size: 14px; margin-bottom: 0.5rem;">The Gallery</h3>
    <p style="font-size: 14px;">Featuring original costume sketches and program notes from the 1926 inaugural season.</p>
  </div>
</div>

{% endblock %}
