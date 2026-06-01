/**
 * GLASS STOMACH — Interactive Layer Viewer
 * "Looking through layers" — clinical transparency controls
 * Enables peeling membranes, X-ray mode, pulse/peristalsis emphasis
 */
(function () {
  'use strict';

  // Map friendly names to CSS layer classes used in content + shortcodes
  var LAYER_MAP = {
    'dermis': '.body-layer--dermis, .skin',
    'fat': '.body-layer--fat, .subcut',
    'muscle': '.body-layer--muscle, .fascia, .muscle',
    'viscera': '.body-layer--viscera, .organs, .viscera'
  };

  var xrayActive = false;

  function getLayerElements(key) {
    var selector = LAYER_MAP[key] || ('.' + key);
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }

  // Public: toggle visibility of a named layer
  window.setLayerVisibility = function (key, visible) {
    var els = getLayerElements(key);
    els.forEach(function (el) {
      if (visible) {
        el.classList.remove('layer-hidden');
      } else {
        el.classList.add('layer-hidden');
      }
    });
  };

  // Public: set opacity of a layer via slider (0-100)
  window.setLayerOpacity = function (key, pct) {
    var els = getLayerElements(key);
    var val = Math.max(0, Math.min(100, parseInt(pct, 10) || 100)) / 100;
    els.forEach(function (el) {
      el.style.transition = 'opacity 180ms linear';
      el.style.opacity = val;
      // If fully transparent also mark hidden for checkbox sync
      if (val < 0.06) el.classList.add('layer-hidden');
      else el.classList.remove('layer-hidden');
    });
  };

  // X-ray / ultrasound mode — applies clinical overlay + blend
  window.applyXrayMode = function () {
    xrayActive = !xrayActive;
    var overlays = document.querySelectorAll('.xray-overlay, .ultrasound-grid');
    var bodyLayers = document.querySelectorAll('.body-layer, .layer');

    overlays.forEach(function (o) {
      o.classList.toggle('active', xrayActive);
    });

    bodyLayers.forEach(function (layer) {
      if (xrayActive) {
        layer.classList.add('layer-xray');
      } else {
        layer.classList.remove('layer-xray');
      }
    });

    // Also pulse the cardiac elements harder in xray
    var hearts = document.querySelectorAll('.heart-organ, .pulse-cardiac');
    hearts.forEach(function (h) {
      h.style.animationDuration = xrayActive ? '0.55s' : 'var(--pulse-duration)';
    });
  };

  // Reset all layers to visible + full opacity
  window.resetLayers = function () {
    var allLayers = document.querySelectorAll('.body-layer, .layer, .skin, .subcut, .muscle, .organs, .vessels');
    allLayers.forEach(function (el) {
      el.classList.remove('layer-hidden', 'layer-xray');
      el.style.opacity = '';
      el.style.transition = '';
    });

    // Reset checkboxes in any visible controls
    document.querySelectorAll('.layer-controls input[type="checkbox"]').forEach(function (cb) {
      cb.checked = true;
    });
    document.querySelectorAll('.layer-controls input[type="range"]').forEach(function (r) {
      r.value = (r.parentElement.textContent.toLowerCase().indexOf('viscera') > -1) ? 100 : (r.parentElement.textContent.toLowerCase().indexOf('dermis') > -1 ? 100 : 78);
    });

    xrayActive = false;
    document.querySelectorAll('.xray-overlay, .ultrasound-grid').forEach(function (o) {
      o.classList.remove('active');
    });
  };

  // Header button toggles the per-post or global viewer panel
  window.toggleLayerViewer = function () {
    var btn = document.getElementById('layer-toggle-btn');
    // Prefer post-specific viewer if present
    var postViewer = document.getElementById('layer-viewer');
    var globalViewer = document.getElementById('layer-viewer-global');

    if (postViewer) {
      var isHidden = postViewer.style.display === 'none' || !postViewer.style.display;
      postViewer.style.display = isHidden ? 'block' : 'none';
      if (btn) btn.classList.toggle('active', !isHidden);
    } else if (globalViewer) {
      var gHidden = globalViewer.style.display === 'none' || !globalViewer.style.display;
      globalViewer.style.display = gHidden ? 'block' : 'none';
      if (btn) btn.classList.toggle('active', !gHidden);
    } else {
      // Fallback: create an emergency viewer on body
      createEmergencyViewer();
    }
  };

  function createEmergencyViewer() {
    var panel = document.createElement('div');
    panel.className = 'layer-controls glass-membrane';
    panel.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:250;max-width:280px;';
    panel.innerHTML = '<h4>EMERGENCY SPECIMEN CONTROL</h4>' +
      '<div class="layer-control-row"><label><input type="checkbox" checked> All Membranes</label><input type="range" min="0" max="100" value="90"></div>' +
      '<button onclick="resetLayers();this.parentNode.remove()" style="margin-top:8px;font-size:0.7rem;padding:4px 10px;">CLOSE VIEWER</button>';
    document.body.appendChild(panel);
  }

  // Enhance condensation shortcodes on load with active state on hover
  function enhanceCondensation() {
    document.querySelectorAll('.condensation').forEach(function (c) {
      c.addEventListener('mouseenter', function () { c.classList.add('active'); });
      c.addEventListener('mouseleave', function () { c.classList.remove('active'); });
    });
  }

  // Subtle random membrane flicker on some glass containers (voyeuristic unease)
  function initMembraneFlicker() {
    var membranes = document.querySelectorAll('.glass-membrane, .specimen-pane');
    membranes.forEach(function (m, i) {
      if (Math.random() < 0.6) {
        m.classList.add('membrane-flicker');
        // Occasional stronger flicker
        setTimeout(function () {
          if (m && Math.random() < 0.3) m.style.opacity = '0.97';
        }, 2400 + i * 700);
      }
    });
  }

  // Keyboard support: L key opens layer viewer, R resets
  function initKeyboard() {
    document.addEventListener('keydown', function (e) {
      if (e.key.toLowerCase() === 'l' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        var btn = document.getElementById('layer-toggle-btn');
        if (btn) btn.click();
        else window.toggleLayerViewer();
      }
      if (e.key.toLowerCase() === 'r' && document.activeElement.tagName !== 'INPUT') {
        window.resetLayers();
      }
      if (e.key.toLowerCase() === 'x' && document.activeElement.tagName !== 'INPUT') {
        window.applyXrayMode();
      }
    });

    // Hint in console for curious observers
    console.log('%c[GLASS STOMACH] Layer controls active. Press L to peel, X for X-ray, R to reset.', 'color:#5a6e88;font-size:9px');
  }

  // Auto-initialize visible organs with extra pulse on click (intimate violation)
  function initOrganInteractivity() {
    document.querySelectorAll('.visible-organ').forEach(function (organ) {
      organ.addEventListener('click', function () {
        organ.style.transitionDuration = '60ms';
        organ.style.transform = 'scale(0.92)';
        setTimeout(function () {
          if (organ) {
            organ.style.transform = '';
            organ.style.transitionDuration = '';
          }
        }, 120);
        // Trigger a stronger cardiac pulse on the whole page if heart
        if (organ.dataset.organ === 'heart') {
          document.body.style.transition = 'box-shadow 120ms';
          document.body.style.boxShadow = 'inset 0 0 0 12px rgba(184,74,95,0.08)';
          setTimeout(function () { if (document.body) document.body.style.boxShadow = ''; }, 420);
        }
      });
    });
  }

  // Boot everything once DOM is ready
  function boot() {
    enhanceCondensation();
    initMembraneFlicker();
    initKeyboard();
    initOrganInteractivity();

    // Show global layer hint once on first visit to a post-like page
    var postContent = document.querySelector('.post-content, .internal-report');
    if (postContent && !sessionStorage.getItem('glass-layer-hint')) {
      setTimeout(function () {
        var btn = document.getElementById('layer-toggle-btn');
        if (btn) {
          btn.style.boxShadow = '0 0 0 3px rgba(95,125,184,0.3)';
          setTimeout(function () { if (btn) btn.style.boxShadow = ''; }, 1400);
        }
        sessionStorage.setItem('glass-layer-hint', '1');
      }, 1800);
    }

    // Make cross-section containers breathe slightly (peristalsis hint)
    document.querySelectorAll('.cross-section').forEach(function (cs) {
      cs.addEventListener('mousemove', function (ev) {
        var rect = cs.getBoundingClientRect();
        var x = ((ev.clientX - rect.left) / rect.width - 0.5) * 6;
        cs.style.transform = 'perspective(600px) rotateY(' + x + 'deg)';
      });
      cs.addEventListener('mouseleave', function () {
        cs.style.transition = 'transform 420ms cubic-bezier(0.23,1.0,0.32,1)';
        cs.style.transform = '';
        setTimeout(function () { if (cs) cs.style.transition = ''; }, 420);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose a tiny public API for advanced voyeurs
  window.GlassStomach = {
    peel: window.setLayerVisibility,
    opacity: window.setLayerOpacity,
    xray: window.applyXrayMode,
    reset: window.resetLayers
  };
})();