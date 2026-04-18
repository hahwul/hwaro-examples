+++
title = "Stages"
description = "Festival orientation and stage layout."
+++

{% extends "base.html" %}

{% block content %}

<div class="color-block" style="background-color: var(--blue);">
  <h2 class="band-name" style="font-size: 48px; color: var(--white);">STAGE 01: THE ARRAY</h2>
  <p style="font-family: 'Space Mono';">Primary mainstage for electronic and experimental acts. Equipped with a custom 200kW sound system.</p>
</div>

<div class="color-block" style="background-color: var(--magenta);">
  <h2 class="band-name" style="font-size: 48px; color: var(--white);">STAGE 02: THE KINETIC</h2>
  <p style="font-family: 'Space Mono';">Secondary stage focusing on high-energy industrial and percussive performances.</p>
</div>

<div style="display: flex; gap: 4rem; margin-top: 4rem; align-items: center;">
  <div class="speaker-stack">
    <div class="speaker-box"><div class="speaker-cone"></div></div>
    <div class="speaker-box"><div class="speaker-cone"></div></div>
    <div class="speaker-box"><div class="speaker-cone"></div></div>
  </div>
  <div style="font-size: 20px;">
    <p>Both stages feature full-spectrum frequency response and zero-latency monitoring for all performers.</p>
  </div>
</div>

{% endblock %}
