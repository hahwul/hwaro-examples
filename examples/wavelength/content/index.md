+++
title = "Immerse Yourself in Sound"
description = "A refined and trendy audio-centric platform"
+++

<style>
/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  background: linear-gradient(to right, #ffffff, #888888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.25rem;
  color: #888;
  max-width: 600px;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.btn-primary {
  background: #ffffff;
  color: #000000;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background: #e0e0e0;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  text-decoration: none;
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid #333333;
}

.btn-secondary:hover {
  background: #1a1a1a;
  border-color: #555555;
  text-decoration: none;
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: #111111;
  border: 1px solid #222222;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #444444;
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid #333;
}

/* Custom SVG Icons using white stroke */
.feature-icon svg {
  width: 24px;
  height: 24px;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  margin-top: 0;
}

.feature-card p {
  color: #888888;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.6;
}

/* Equalizer animation for features */
.mini-eq {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 16px;
  margin-bottom: 1rem;
}
.mini-eq span {
  width: 2px;
  background: #ffffff;
  animation: eq-bounce 1s infinite ease-in-out alternate;
}
.mini-eq span:nth-child(1) { height: 40%; animation-delay: 0.1s; }
.mini-eq span:nth-child(2) { height: 100%; animation-delay: -0.2s; }
.mini-eq span:nth-child(3) { height: 60%; animation-delay: -0.5s; }
.mini-eq span:nth-child(4) { height: 80%; animation-delay: -0.3s; }
.mini-eq span:nth-child(5) { height: 30%; animation-delay: 0s; }

@media (max-width: 768px) {
  .hero h1 { font-size: 3rem; }
  .cta-buttons { flex-direction: column; width: 100%; max-width: 300px; }
  .btn { text-align: center; }
}
</style>

<div class="hero">
  <h1>Immerse Yourself in Sound</h1>
  <p>Discover a new dimension of audio. High-fidelity streaming, powerful equalizer tools, and an expansive library for the true audiophile.</p>
  <div class="cta-buttons">
    <a href="#" class="btn btn-primary">Start Listening</a>
    <a href="/about/" class="btn btn-secondary">Learn More</a>
  </div>
</div>

<div class="features">
  <div class="feature-card">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24">
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    </div>
    <h3>Lossless Audio</h3>
    <p>Experience music exactly as the artist intended with our premium lossless streaming quality.</p>
  </div>

  <div class="feature-card">
    <div class="mini-eq">
      <span></span><span></span><span></span><span></span><span></span>
    </div>
    <h3>Advanced Equalizer</h3>
    <p>Fine-tune your listening experience with our professional-grade 10-band parametric equalizer.</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8v4l3 3"></path>
      </svg>
    </div>
    <h3>Offline Sync</h3>
    <p>Download your favorite tracks and playlists to keep the music playing even when you're off the grid.</p>
  </div>
</div>