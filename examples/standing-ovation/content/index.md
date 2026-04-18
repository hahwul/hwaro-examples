+++
title = "Winners"
description = "Award categories and distinguished recipients."
+++

{% extends "base.html" %}

{% block content %}

<div class="award-icon-svg">
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
</div>

<div style="margin-bottom: 6rem;">
  <div class="award-category">Outstanding Production</div>
  <h2 class="winner-name">The Gilded Cage</h2>
  <p>A masterpiece of modern stagecraft, recognized for its innovative use of kinetic scenery and atmospheric soundscapes.</p>
</div>

<div style="margin-bottom: 6rem;">
  <div class="award-category">Best Lead Performance</div>
  <h2 class="winner-name">Julian Thorne</h2>
  <p>For a transformative portrayal of the titular character in 'The Architect's Dream', delivering a performance of unparalleled emotional depth.</p>
</div>

<div class="standing-bars">
  <div class="standing-bar" style="height: 40%;"></div>
  <div class="standing-bar active" style="height: 80%;"></div>
  <div class="standing-bar active" style="height: 100%;"></div>
  <div class="standing-bar active" style="height: 90%;"></div>
  <div class="standing-bar active" style="height: 70%;"></div>
  <div class="standing-bar" style="height: 50%;"></div>
</div>

<div style="text-align: center;">
  <div class="award-category" style="justify-content: center;">Audience Standing Ovation</div>
  <p style="font-family: 'Poppins'; font-size: 14px; letter-spacing: 0.1em;">RECORDED AT 102dB // DURATION: 4.2 MINUTES</p>
</div>

{% endblock %}
