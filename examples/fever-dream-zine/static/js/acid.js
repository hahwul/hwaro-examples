/* ==========================================================================
   FEVER DREAM ZINE — DROP ACID MODE
   30-second full visual meltdown. Local state only. Pure chaos.
   ========================================================================== */

(function () {
  var isTripping = false;
  var tripTimeout = null;
  var button = null;

  function createFloatingBlobs(count) {
    var body = document.body;
    for (var i = 0; i < count; i++) {
      var blob = document.createElement('div');
      blob.className = 'floating-blob';
      blob.style.left = Math.random() * 100 + 'vw';
      blob.style.top = Math.random() * 100 + 'vh';
      blob.style.width = (18 + Math.random() * 44) + 'px';
      blob.style.height = blob.style.width;
      blob.style.background = ['#ff00aa', '#00ffcc', '#ffee00', '#7b2cbf', '#ff6b00'][Math.floor(Math.random()*5)];
      blob.style.animationDuration = (7 + Math.random() * 19) + 's';
      blob.style.opacity = 0.12 + Math.random() * 0.3;
      body.appendChild(blob);
      
      // Self-destruct after trip
      setTimeout(function (b) {
        if (b && b.parentNode) b.parentNode.removeChild(b);
      }, 34000, blob);
    }
  }

  function toggleAcidTrip() {
    button = document.getElementById('acidButton');
    if (!button) return;

    if (isTripping) {
      // End the trip early
      document.body.classList.remove('acid-trip');
      isTripping = false;
      button.classList.remove('active');
      button.textContent = 'DROP ACID';
      clearTimeout(tripTimeout);
      return;
    }

    // LET'S GOOOOOO
    document.body.classList.add('acid-trip');
    isTripping = true;
    button.classList.add('active');
    button.textContent = 'COME DOWN';

    // Spawn extra floating blobs for extra madness
    createFloatingBlobs(7);

    // Random extra glitches on headings during trip
    var headings = document.querySelectorAll('h1, h2, .zine-section-title, .post-title');
    headings.forEach(function (h, i) {
      var orig = h.style.textShadow || '';
      h.style.transition = 'text-shadow 80ms';
      var glitchInt = setInterval(function () {
        if (!document.body.classList.contains('acid-trip')) {
          clearInterval(glitchInt);
          h.style.textShadow = orig;
          return;
        }
        var r = Math.random() * 6 - 3;
        var g = Math.random() * 6 - 3;
        h.style.textShadow = r + 'px ' + g + 'px 0 #ff00aa, ' + (-r) + 'px ' + (-g) + 'px 0 #00ffcc';
      }, 90 + (i % 3) * 40);
    });

    // Auto come-down after 30 seconds of beautiful madness
    tripTimeout = setTimeout(function () {
      if (document.body.classList.contains('acid-trip')) {
        document.body.classList.remove('acid-trip');
        isTripping = false;
        if (button) {
          button.classList.remove('active');
          button.textContent = 'DROP ACID';
        }
      }
    }, 30000);

    // Keyboard escape hatch
    var escHandler = function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('acid-trip')) {
        document.body.classList.remove('acid-trip');
        isTripping = false;
        if (button) {
          button.classList.remove('active');
          button.textContent = 'DROP ACID';
        }
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler, { once: true });
  }

  // Expose globally so nav button can call it
  window.toggleAcidTrip = toggleAcidTrip;

  // Keyboard shortcut: press "A" for acid when not typing
  document.addEventListener('keydown', function (e) {
    if (e.key.toLowerCase() === 'a' && document.activeElement.tagName === 'BODY') {
      e.preventDefault();
      toggleAcidTrip();
    }
  });

  // Bonus: clicking the logo 7 times in rapid succession also triggers
  var logoClicks = 0;
  var logoTimer = null;
  document.addEventListener('click', function (e) {
    if (e.target.closest('.logo')) {
      logoClicks++;
      clearTimeout(logoTimer);
      logoTimer = setTimeout(function () { logoClicks = 0; }, 1200);
      if (logoClicks >= 7) {
        logoClicks = 0;
        toggleAcidTrip();
      }
    }
  });
})();