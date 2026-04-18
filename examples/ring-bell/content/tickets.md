+++
title = "Tickets"
description = "Secure your seat for championship night."
tags = ["event", "boxing", "fight"]
+++

<div class="tickets-page">

<div class="section-header">
  <span class="section-label">CHAMPIONSHIP NIGHT</span>
  <h1 class="section-title">TICKETS</h1>
</div>

<div class="ticket-tiers">
  <div class="ticket-tier">
    <p class="tier-name">BALCONY</p>
    <p class="tier-price">$85</p>
    <p class="tier-desc">Upper tier. Full view of the ring. The full crowd experience.</p>
  </div>
  <div class="ticket-tier">
    <p class="tier-name">MEZZANINE</p>
    <p class="tier-price">$250</p>
    <p class="tier-desc">Second tier. Closer to the action. Clear sightlines to both corners.</p>
  </div>
  <div class="ticket-tier featured">
    <p class="tier-name">FLOOR</p>
    <p class="tier-price">$750</p>
    <p class="tier-desc">Ground floor. Behind the cornermen. Where the real fight fans sit.</p>
  </div>
  <div class="ticket-tier">
    <p class="tier-name">RINGSIDE</p>
    <p class="tier-price">$3,500</p>
    <p class="tier-desc">Press row. Gloves land six feet from your face. Towels land on your lap.</p>
  </div>
</div>

<form class="register-form" onsubmit="return false;">
  <h2 class="section-title" style="font-size:1.8rem;margin-bottom:1rem;">RESERVE YOUR SEAT</h2>
  <div class="form-row">
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" name="first-name" placeholder="Your first name" required>
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" name="last-name" placeholder="Your last name" required>
    </div>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="you@example.com" required>
  </div>
  <div class="form-group">
    <label for="tier">Tier</label>
    <select id="tier" name="tier">
      <option>Balcony</option>
      <option>Mezzanine</option>
      <option>Floor</option>
      <option>Ringside</option>
    </select>
  </div>
  <div class="form-group">
    <label for="corner">Corner Preference</label>
    <select id="corner" name="corner">
      <option>No preference</option>
      <option>Left corner (Vega)</option>
      <option>Right corner (Okafor)</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary btn-full">Confirm Reservation</button>
</form>

</div>
