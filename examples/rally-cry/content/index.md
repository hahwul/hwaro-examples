+++
title = "Assembly"
description = "Community movement and grassroots gathering."
+++

{% extends "base.html" %}

{% block content %}

<div class="hero-icon">
  <svg class="fist-svg" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" opacity="0.1"/>
    <path d="M18 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.33 16H8.67l-.67-2h7.33l-.67 2zm1.34-4H7.33l-.66-2h10.66l-.66 2zM12 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
</div>

<div class="section-banner">THE SPEAKERS</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 3rem; margin-top: 2rem;">
  <div>
    <h3 class="speaker-name">Dr. Aris Thorne</h3>
    <p style="font-weight: 700; margin-bottom: 0.5rem;">"The Future of Urban Justice"</p>
    <p>A deep dive into community-led initiatives for sustainable city planning and equitable resource distribution.</p>
  </div>
  
  <div>
    <h3 class="speaker-name">Sarah Vance</h3>
    <p style="font-weight: 700; margin-bottom: 0.5rem;">"Digital Sovereignty"</p>
    <p>Empowering citizens to take control of their data and build decentralized local communication networks.</p>
  </div>
</div>

<div class="megaphone-icon" style="margin-top: 6rem; text-align: center;">
  <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--red)">
    <path d="M11 5L6 9H2v6h4l5 4V5zm10 7c0-2.21-1.11-4.15-2.81-5.32l-1.42 1.42C17.7 8.91 18.5 10.36 18.5 12s-.8 3.09-1.73 3.9l1.42 1.42C19.89 16.15 21 14.21 21 12zM15.5 12c0-1.1-.5-2.1-1.3-2.7l-1.4 1.4c.4.3.7.8.7 1.3s-.3 1-.7 1.3l1.4 1.4c.8-.6 1.3-1.6 1.3-2.7z"/>
  </svg>
  <h2 style="font-family: 'Bebas Neue'; font-size: 32px; margin: 1rem 0;">COMMUNITY ANNOUNCEMENT</h2>
  <p style="max-width: 600px; margin: 0 auto;">Final permits have been secured for the Central Plaza assembly. We gather at dawn to ensure our voices are heard before the council session begins.</p>
</div>

<a href="#" class="cta-button">JOIN THE MOVEMENT</a>

{% endblock %}
