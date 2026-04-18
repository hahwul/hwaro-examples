+++
title = "The Celebration"
date = "2026-03-22"
description = "You are cordially invited to celebrate with us"
template = "page"
+++

<!-- Hero Section -->
<section class="hero">
  <div class="hero-ornament">&mdash; &diams; &mdash;</div>
  <p class="hero-subtitle">Together with their families</p>
  <h1 class="hero-title">Eleanor & James</h1>
  <div class="hero-divider">
    <span class="divider-line"></span>
    <span class="divider-dot"></span>
    <span class="divider-line"></span>
  </div>
  <p class="hero-tagline">Request the pleasure of your company<br>at the celebration of their marriage</p>
  <div class="hero-date-block">
    <span class="date-day">Saturday</span>
    <span class="date-main">June 20, 2026</span>
    <span class="date-time">at half past four in the afternoon</span>
  </div>
</section>

<!-- Countdown Section -->
<section class="section countdown-section" id="countdown">
  <h2 class="section-title">Days Until We Celebrate</h2>
  <div class="section-divider">
    <span class="divider-line"></span>
    <span class="divider-dot"></span>
    <span class="divider-line"></span>
  </div>
  <div class="countdown" id="countdown-timer">
    <div class="countdown-item">
      <span class="countdown-number" id="cd-days">--</span>
      <span class="countdown-label">Days</span>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <span class="countdown-number" id="cd-hours">--</span>
      <span class="countdown-label">Hours</span>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <span class="countdown-number" id="cd-minutes">--</span>
      <span class="countdown-label">Minutes</span>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <span class="countdown-number" id="cd-seconds">--</span>
      <span class="countdown-label">Seconds</span>
    </div>
  </div>
</section>

<!-- Details Section -->
<section class="section details-section" id="details">
  <h2 class="section-title">Event Details</h2>
  <div class="section-divider">
    <span class="divider-line"></span>
    <span class="divider-dot"></span>
    <span class="divider-line"></span>
  </div>
  <div class="details-grid">
    <div class="detail-card">
      <h3 class="detail-card-title">Ceremony</h3>
      <div class="detail-card-divider"></div>
      <p class="detail-card-time">4:30 PM</p>
      <p class="detail-card-text">The Grand Chapel<br>142 Elm Street<br>Charleston, SC 29401</p>
    </div>
    <div class="detail-card">
      <h3 class="detail-card-title">Reception</h3>
      <div class="detail-card-divider"></div>
      <p class="detail-card-time">6:00 PM</p>
      <p class="detail-card-text">Wentworth Ballroom<br>200 Meeting Street<br>Charleston, SC 29401</p>
    </div>
    <div class="detail-card">
      <h3 class="detail-card-title">Dinner</h3>
      <div class="detail-card-divider"></div>
      <p class="detail-card-time">7:30 PM</p>
      <p class="detail-card-text">Seated dinner with<br>live string quartet<br>and toasts</p>
    </div>
  </div>
</section>

<!-- Schedule Section -->
<section class="section schedule-section" id="schedule">
  <h2 class="section-title">The Evening</h2>
  <div class="section-divider">
    <span class="divider-line"></span>
    <span class="divider-dot"></span>
    <span class="divider-line"></span>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-time">4:00 PM</div>
      <div class="timeline-content">
        <h4>Guests Arrive</h4>
        <p>Welcome refreshments in the garden courtyard</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-time">4:30 PM</div>
      <div class="timeline-content">
        <h4>Ceremony</h4>
        <p>Exchange of vows in the Grand Chapel</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-time">5:15 PM</div>
      <div class="timeline-content">
        <h4>Cocktail Hour</h4>
        <p>Hors d'oeuvres and drinks on the terrace</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-time">6:00 PM</div>
      <div class="timeline-content">
        <h4>Reception</h4>
        <p>Grand entrance and first dance</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-time">7:30 PM</div>
      <div class="timeline-content">
        <h4>Dinner</h4>
        <p>Three-course seated dinner with wine pairings</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-time">9:00 PM</div>
      <div class="timeline-content">
        <h4>Dancing</h4>
        <p>Music and celebration until midnight</p>
      </div>
    </div>
  </div>
</section>

<!-- RSVP Section -->
<section class="section rsvp-section" id="rsvp">
  <h2 class="section-title">Kindly Respond</h2>
  <div class="section-divider">
    <span class="divider-line"></span>
    <span class="divider-dot"></span>
    <span class="divider-line"></span>
  </div>
  <p class="rsvp-note">Please let us know by May 20, 2026</p>
  <form class="rsvp-form" onsubmit="handleRsvp(event)">
    <div class="form-group">
      <label for="rsvp-name">Full Name</label>
      <input type="text" id="rsvp-name" name="name" placeholder="Your name" required>
    </div>
    <div class="form-group">
      <label for="rsvp-email">Email</label>
      <input type="email" id="rsvp-email" name="email" placeholder="your@email.com" required>
    </div>
    <div class="form-group">
      <label for="rsvp-guests">Number of Guests</label>
      <select id="rsvp-guests" name="guests">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
    <div class="form-group">
      <label>Attendance</label>
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" name="attendance" value="accept" required>
          <span>Joyfully Accept</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="attendance" value="decline">
          <span>Respectfully Decline</span>
        </label>
      </div>
    </div>
    <div class="form-group">
      <label for="rsvp-dietary">Dietary Requirements</label>
      <textarea id="rsvp-dietary" name="dietary" rows="3" placeholder="Any dietary restrictions or allergies"></textarea>
    </div>
    <button type="submit" class="rsvp-button">Send Response</button>
  </form>
  <div class="rsvp-success" id="rsvp-success" style="display: none;">
    <h3>Thank You</h3>
    <p>Your response has been received. We look forward to celebrating with you.</p>
  </div>
</section>

<!-- Footer Note -->
<section class="section closing-section">
  <div class="closing-ornament">&mdash; &diams; &mdash;</div>
  <p class="closing-text">We cannot wait to celebrate this special day with you.</p>
  <p class="closing-names">Eleanor & James</p>
</section>

<script>
// Countdown Timer
function updateCountdown() {
  var target = new Date('2026-06-20T16:30:00').getTime();
  var now = new Date().getTime();
  var diff = target - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '0';
    document.getElementById('cd-hours').textContent = '0';
    document.getElementById('cd-minutes').textContent = '0';
    document.getElementById('cd-seconds').textContent = '0';
    return;
  }

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = hours;
  document.getElementById('cd-minutes').textContent = minutes;
  document.getElementById('cd-seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// RSVP Form Handler
function handleRsvp(e) {
  e.preventDefault();
  document.querySelector('.rsvp-form').style.display = 'none';
  document.getElementById('rsvp-success').style.display = 'block';
}
</script>
