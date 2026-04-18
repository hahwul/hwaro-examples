+++
title = "Main Event"
description = "The Headline Act: Thorne vs Vance"
+++

{% extends "base.html" %}

{% block hero %}
<div class="hero-split">
  <div class="fighter fighter-red">
    <div class="fighter-stats">24-0-0 (18 KO)</div>
    <h1 class="fighter-name">Marcus<br>Thorne</h1>
    <div class="fighter-stats">"The Iron Sledge"</div>
    <div style="position: absolute; bottom: 20px; right: 20px;">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--white)" opacity="0.1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
    </div>
  </div>
  
  <div class="vs-separator">VS</div>
  
  <div class="fighter fighter-blue">
    <div class="fighter-stats">22-1-0 (15 KO)</div>
    <h1 class="fighter-name">Elena<br>Vance</h1>
    <div class="fighter-stats">"The Architect"</div>
    <div style="position: absolute; bottom: 20px; left: 20px;">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--white)" opacity="0.1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
    </div>
  </div>
</div>
{% endblock %}

{% block content %}
<div class="stake-indicator">
  <svg width="120" height="120" viewBox="0 0 24 24" fill="var(--white)">
    <path d="M12 2L9 7H15L12 2Z" />
    <path d="M5 9H19V11H5V9ZM5 13H19V15H5V13ZM5 17H19V19H5V17Z" />
    <rect x="8" y="7" width="8" height="2" />
  </style>
  <div style="font-family: 'Orbitron'; font-size: 24px; color: var(--red); margin-top: 1rem;">WORLD HEAVYWEIGHT TITLE</div>
</div>

<div class="tape-measure">
  <div style="text-align: right; font-size: 32px;">32</div>
  <div class="tape-label">AGE</div>
  <div style="text-align: left; font-size: 32px;">29</div>
  
  <div style="text-align: right; font-size: 32px;">6'4"</div>
  <div class="tape-label">HEIGHT</div>
  <div style="text-align: left; font-size: 32px;">6'2"</div>
  
  <div style="text-align: right; font-size: 32px;">80"</div>
  <div class="tape-label">REACH</div>
  <div style="text-align: left; font-size: 32px;">78"</div>
</div>

<div class="ring-diagram">
  <svg width="200" height="200" viewBox="0 0 100 100">
    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="white" stroke-width="2" />
    <line x1="50" y1="5" x2="50" y2="95" stroke="white" stroke-width="1" stroke-dasharray="2,2" />
    <line x1="5" y1="50" x2="95" y2="50" stroke="white" stroke-width="1" stroke-dasharray="2,2" />
  </svg>
  <div style="font-family: 'Orbitron'; margin-top: 2rem;">APEX ARENA, LAS VEGAS</div>
</div>
{% endblock %}
