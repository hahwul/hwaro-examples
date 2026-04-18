(function() {
  'use strict';

  // ---- Page Load Animation ----
  window.addEventListener('load', function() {
    document.body.classList.remove('is-preload');
  });

  // ---- Header Scroll Toggle ----
  var header = document.getElementById('header');
  var banner = document.getElementById('banner');

  if (header && banner) {
    var lastScroll = 0;
    var headerHeight = header.offsetHeight;

    function onScroll() {
      var scrollY = window.pageYOffset;
      var bannerBottom = banner.offsetTop + banner.offsetHeight - headerHeight;

      if (scrollY > bannerBottom) {
        header.classList.remove('alt');
        if (scrollY < lastScroll) {
          header.classList.add('reveal');
        } else {
          header.classList.remove('reveal');
        }
      } else {
        header.classList.add('alt');
        header.classList.remove('reveal');
      }
      lastScroll = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Menu Toggle ----
  var menuToggle = document.querySelector('.menu-toggle');
  var menuOverlay = document.getElementById('menu');
  var menuClose = document.querySelector('.menu-close');

  function openMenu() {
    if (menuOverlay) {
      menuOverlay.classList.add('visible');
      document.body.classList.add('is-menu-visible');
    }
  }

  function closeMenu() {
    if (menuOverlay) {
      menuOverlay.classList.remove('visible');
      document.body.classList.remove('is-menu-visible');
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      openMenu();
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeMenu();
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', function(e) {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Scroll Reveal Animation ----
  var revealElements = document.querySelectorAll('.tiles .tile');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function(el) {
      el.classList.add('is-visible');
    });
  }
})();
