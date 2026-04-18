+++
title = "Auditorium"
description = "A space of light and shadow."
+++

{% extends "base.html" %}

{% block content %}

<div style="max-width: 700px; margin: 0 auto; text-align: center;">
  <h2 style="font-family: 'DM Serif Display'; font-size: 48px; margin-bottom: 2rem;">The Architecture of Shadow</h2>
  <p>Our auditorium is designed to disappear. When the lights go down, the only reality is the performance. Every line of sight, every acoustic reflection, is tuned for maximum dramatic impact.</p>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 6rem;">
  <div style="border: 1px solid var(--gray); padding: 2rem;">
    <span class="act-label">SEATING</span>
    <p>Tiered galleries provide intimate views of the stage from every angle. Capacity: 450.</p>
  </div>
  <div style="border: 1px solid var(--gray); padding: 2rem;">
    <span class="act-label">LIGHTING</span>
    <p>A custom-built 48-channel spotlight array capable of precise beam shaping and intensity control.</p>
  </div>
</div>

{% endblock %}
