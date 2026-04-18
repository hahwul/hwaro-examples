+++
title = "Colosseum"
description = "Grand events in the spirit of ancient Rome"
template = "page"
+++

<!-- Hero Section -->
<section class="hero-section">
  <div class="column-left"></div>
  <div class="hero-inner">
    <div class="arch-frame">
      <div class="laurel-row">
        <svg class="laurel-icon" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g fill="none" stroke="#b8860b" stroke-width="1.5">
            <path d="M10,20 Q20,8 30,20 Q20,32 10,20Z"/>
            <path d="M25,20 Q35,8 45,20 Q35,32 25,20Z"/>
            <path d="M40,20 Q50,8 60,20" stroke-dasharray="none"/>
            <line x1="60" y1="20" x2="60" y2="30" stroke="#b8860b"/>
            <path d="M80,20 Q70,8 60,20"/>
            <path d="M95,20 Q85,8 75,20 Q85,32 95,20Z"/>
            <path d="M110,20 Q100,8 90,20 Q100,32 110,20Z"/>
          </g>
        </svg>
      </div>
      <p class="hero-overtitle">ANNO DOMINI MMXXVI</p>
      <h1 class="hero-title">The Grand Arena Awaits</h1>
      <p class="hero-subtitle">Where the spirit of ancient Rome lives in every gathering. Witness events of extraordinary scale and spectacle, held within walls that echo with the grandeur of the eternal city.</p>
      <div class="hero-divider">
        <span class="divider-rule"></span>
        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2L9 9H2L7.5 13.5L5.5 21L12 16.5L18.5 21L16.5 13.5L22 9H15Z" fill="#b8860b"/>
        </svg>
        <span class="divider-rule"></span>
      </div>
      <div class="hero-actions">
        <a href="{{ base_url }}/events/" class="btn-primary">View All Events</a>
        <a href="#venue" class="btn-secondary">Explore the Venue</a>
      </div>
    </div>
  </div>
  <div class="column-right"></div>
</section>

<!-- Upcoming Events -->
<section class="content-section" id="events">
  <div class="section-header">
    <svg class="shield-icon" viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 4L6 14V32C6 47 16 60 30 66C44 60 54 47 54 32V14Z" fill="none" stroke="#b8860b" stroke-width="2"/>
      <path d="M30 12L14 20V33C14 43 21 52 30 56C39 52 46 43 46 33V20Z" fill="none" stroke="#b8860b" stroke-width="1.5"/>
      <line x1="30" y1="20" x2="30" y2="50" stroke="#b8860b" stroke-width="1.5"/>
      <line x1="18" y1="35" x2="42" y2="35" stroke="#b8860b" stroke-width="1.5"/>
    </svg>
    <h2 class="section-title">Upcoming Events</h2>
    <p class="section-description">Grand spectacles, orations, and celebrations curated for the discerning citizen of Rome.</p>
  </div>

  <div class="event-grid">
    <a href="{{ base_url }}/events/triumph-of-the-legions/" class="event-card">
      <div class="event-card-arch">
        <div class="event-number">I</div>
      </div>
      <div class="event-card-body">
        <p class="event-date">XV Aprilis, MMXXVI</p>
        <h3 class="event-card-title">Triumph of the Legions</h3>
        <p class="event-card-desc">A grand military procession and ceremonial oration commemorating victories in the eastern provinces.</p>
        <span class="event-tag">Military</span>
      </div>
    </a>
    <a href="{{ base_url }}/events/senate-forum-debate/" class="event-card">
      <div class="event-card-arch">
        <div class="event-number">II</div>
      </div>
      <div class="event-card-body">
        <p class="event-date">I Maius, MMXXVI</p>
        <h3 class="event-card-title">Senate Forum Debate</h3>
        <p class="event-card-desc">Distinguished orators present their cases before the assembled citizens. Democracy in its most classical form.</p>
        <span class="event-tag">Civic</span>
      </div>
    </a>
    <a href="{{ base_url }}/events/ludi-romani-festival/" class="event-card">
      <div class="event-card-arch">
        <div class="event-number">III</div>
      </div>
      <div class="event-card-body">
        <p class="event-date">XV Maius, MMXXVI</p>
        <h3 class="event-card-title">Ludi Romani Festival</h3>
        <p class="event-card-desc">Ancient games, theatrical performances, and feasts celebrating the gods and the glory of Roman civilization.</p>
        <span class="event-tag">Festival</span>
      </div>
    </a>
  </div>

  <div class="section-footer-link">
    <a href="{{ base_url }}/events/" class="link-decorated">View All Events in the Programme</a>
  </div>
</section>

<!-- Venue Highlights -->
<section class="content-section alt-section" id="venue">
  <div class="section-header">
    <svg class="shield-icon" viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 4L6 14V32C6 47 16 60 30 66C44 60 54 47 54 32V14Z" fill="none" stroke="#b8860b" stroke-width="2"/>
      <path d="M30 12L14 20V33C14 43 21 52 30 56C39 52 46 43 46 33V20Z" fill="none" stroke="#b8860b" stroke-width="1.5"/>
      <line x1="30" y1="20" x2="30" y2="50" stroke="#b8860b" stroke-width="1.5"/>
      <line x1="18" y1="35" x2="42" y2="35" stroke="#b8860b" stroke-width="1.5"/>
    </svg>
    <h2 class="section-title">Venue Highlights</h2>
    <p class="section-description">The Colosseum stands as an enduring monument to Roman engineering and the pursuit of excellence.</p>
  </div>

  <div class="venue-grid">
    <div class="venue-card">
      <div class="venue-icon-wrap">
        <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="8" y="36" width="32" height="4" fill="#b8860b"/>
          <rect x="12" y="10" width="4" height="26" fill="#b8860b"/>
          <rect x="20" y="10" width="4" height="26" fill="#b8860b"/>
          <rect x="28" y="10" width="4" height="26" fill="#b8860b"/>
          <path d="M10 10 Q24 2 38 10" fill="none" stroke="#b8860b" stroke-width="2"/>
          <rect x="8" y="8" width="32" height="4" fill="#b8860b" opacity="0.5"/>
        </svg>
      </div>
      <h3 class="venue-card-title">The Grand Arena</h3>
      <p class="venue-card-desc">Capacity for 50,000 citizens across four tiers of travertine marble seating, offering unobstructed views of all proceedings.</p>
    </div>
    <div class="venue-card">
      <div class="venue-icon-wrap">
        <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="24" cy="24" r="16" fill="none" stroke="#b8860b" stroke-width="2"/>
          <circle cx="24" cy="24" r="8" fill="none" stroke="#b8860b" stroke-width="1.5"/>
          <line x1="24" y1="8" x2="24" y2="16" stroke="#b8860b" stroke-width="2"/>
          <line x1="24" y1="32" x2="24" y2="40" stroke="#b8860b" stroke-width="2"/>
          <line x1="8" y1="24" x2="16" y2="24" stroke="#b8860b" stroke-width="2"/>
          <line x1="32" y1="24" x2="40" y2="24" stroke="#b8860b" stroke-width="2"/>
        </svg>
      </div>
      <h3 class="venue-card-title">Imperial Galleries</h3>
      <p class="venue-card-desc">Private galleries reserved for distinguished guests, offering exclusive vantage points and dedicated attendants for the duration of each event.</p>
    </div>
    <div class="venue-card">
      <div class="venue-icon-wrap">
        <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8 40 L8 20 Q24 8 40 20 L40 40Z" fill="none" stroke="#b8860b" stroke-width="2"/>
          <line x1="8" y1="40" x2="40" y2="40" stroke="#b8860b" stroke-width="2"/>
          <line x1="16" y1="28" x2="16" y2="40" stroke="#b8860b" stroke-width="1.5"/>
          <line x1="24" y1="24" x2="24" y2="40" stroke="#b8860b" stroke-width="1.5"/>
          <line x1="32" y1="28" x2="32" y2="40" stroke="#b8860b" stroke-width="1.5"/>
        </svg>
      </div>
      <h3 class="venue-card-title">The Hypogeum</h3>
      <p class="venue-card-desc">Beneath the arena floor lies the legendary hypogeum, now transformed into subterranean reception halls and banquet chambers.</p>
    </div>
    <div class="venue-card">
      <div class="venue-icon-wrap">
        <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="6" y="22" width="36" height="20" fill="none" stroke="#b8860b" stroke-width="2"/>
          <path d="M6 22 Q24 8 42 22" fill="none" stroke="#b8860b" stroke-width="2"/>
          <rect x="18" y="30" width="12" height="12" fill="none" stroke="#b8860b" stroke-width="1.5"/>
        </svg>
      </div>
      <h3 class="venue-card-title">Triumphal Arch Gate</h3>
      <p class="venue-card-desc">All guests enter through the restored triumphal arch, setting the stage for an arrival worthy of a Roman dignitary.</p>
    </div>
  </div>
</section>

<!-- Featured Speakers -->
<section class="content-section" id="speakers">
  <div class="section-header">
    <svg class="shield-icon" viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 4L6 14V32C6 47 16 60 30 66C44 60 54 47 54 32V14Z" fill="none" stroke="#b8860b" stroke-width="2"/>
      <path d="M30 12L14 20V33C14 43 21 52 30 56C39 52 46 43 46 33V20Z" fill="none" stroke="#b8860b" stroke-width="1.5"/>
      <line x1="30" y1="20" x2="30" y2="50" stroke="#b8860b" stroke-width="1.5"/>
      <line x1="18" y1="35" x2="42" y2="35" stroke="#b8860b" stroke-width="1.5"/>
    </svg>
    <h2 class="section-title">Distinguished Orators</h2>
    <p class="section-description">Scholars, statesmen, and visionaries who carry the torch of Roman knowledge and eloquence.</p>
  </div>

  <div class="speakers-grid">
    <div class="speaker-card">
      <div class="speaker-avatar">M</div>
      <h3 class="speaker-name">Marcus Aurelius Varro</h3>
      <p class="speaker-role">Senator, Province of Hispania</p>
      <p class="speaker-topic">On the Duty of Civic Leadership in the Age of Empire</p>
    </div>
    <div class="speaker-card">
      <div class="speaker-avatar">L</div>
      <h3 class="speaker-name">Livia Cornelia Maxima</h3>
      <p class="speaker-role">High Priestess, Temple of Vesta</p>
      <p class="speaker-topic">The Sacred Traditions of Roman Ceremony and Rite</p>
    </div>
    <div class="speaker-card">
      <div class="speaker-avatar">G</div>
      <h3 class="speaker-name">Gaius Petronius Felix</h3>
      <p class="speaker-role">Master Architect, Collegium Fabrorum</p>
      <p class="speaker-topic">Engineering Marvels: The Legacy of Roman Construction</p>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="cta-section">
  <div class="cta-inner">
    <div class="laurel-row">
      <svg class="laurel-icon" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g fill="none" stroke="#b8860b" stroke-width="1.5">
          <path d="M10,20 Q20,8 30,20 Q20,32 10,20Z"/>
          <path d="M25,20 Q35,8 45,20 Q35,32 25,20Z"/>
          <path d="M40,20 Q50,8 60,20" stroke-dasharray="none"/>
          <line x1="60" y1="20" x2="60" y2="30" stroke="#b8860b"/>
          <path d="M80,20 Q70,8 60,20"/>
          <path d="M95,20 Q85,8 75,20 Q85,32 95,20Z"/>
          <path d="M110,20 Q100,8 90,20 Q100,32 110,20Z"/>
        </g>
      </svg>
    </div>
    <h2 class="cta-title">Claim Your Place in the Arena</h2>
    <p class="cta-desc">Seating is limited and reserved in order of registration. Secure your position among Rome's most distinguished guests.</p>
    <a href="{{ base_url }}/events/" class="btn-primary">Register for an Event</a>
  </div>
</section>
