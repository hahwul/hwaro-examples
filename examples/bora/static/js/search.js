/* Bora — search overlay.
   Opens from the header button or the "/" key, closes on Esc or backdrop
   click, traps focus in spirit (input-first), restores focus to the
   trigger, and locks background scroll. Results are built from text
   nodes only — no HTML injection. */
(function () {
  'use strict';

  var overlay = document.getElementById('search-overlay');
  var trigger = document.querySelector('.search-toggle');
  if (!overlay || !trigger) return;

  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var form = overlay.querySelector('.search-form');
  var base = overlay.getAttribute('data-base') || '';
  var fuse = null;
  var loading = false;
  var active = -1;
  var idleHint = 'Type to search the journal — arrows to move, Enter to open.';

  function loadIndex() {
    if (fuse || loading || typeof Fuse === 'undefined') return;
    loading = true;
    fetch(overlay.getAttribute('data-index'))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        run();
      })
      .catch(function () {
        status.textContent = 'The search index could not be loaded.';
      });
  }

  function excerpt(text, query) {
    var i = text.toLowerCase().indexOf(query.toLowerCase());
    var start = i > 40 ? i - 40 : 0;
    var slice = text.slice(start, start + 140).replace(/\s+/g, ' ').trim();
    return (start > 0 ? '…' : '') + slice + '…';
  }

  function setActive(n) {
    var rows = list.children;
    if (!rows.length) { active = -1; return; }
    if (active >= 0 && rows[active]) rows[active].removeAttribute('aria-selected');
    active = (n + rows.length) % rows.length;
    rows[active].setAttribute('aria-selected', 'true');
    rows[active].scrollIntoView({ block: 'nearest' });
  }

  function run() {
    var q = input.value.trim();
    list.textContent = '';
    active = -1;
    if (!q) { status.textContent = idleHint; return; }
    if (!fuse) { status.textContent = 'Loading the index…'; return; }

    var hits = fuse.search(q).slice(0, 8);
    hits.forEach(function (hit) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      var a = document.createElement('a');
      a.href = base + hit.item.url;
      a.tabIndex = -1;
      var title = document.createElement('span');
      title.className = 'result-title';
      title.textContent = hit.item.title;
      var text = document.createElement('span');
      text.className = 'result-text';
      text.textContent = excerpt(hit.item.content || '', q);
      a.appendChild(title);
      a.appendChild(text);
      li.appendChild(a);
      list.appendChild(li);
    });
    status.textContent = hits.length
      ? hits.length + (hits.length === 1 ? ' page found.' : ' pages found.')
      : 'Nothing in the journal matches “' + q + '”.';
    if (hits.length) setActive(0);
  }

  function open() {
    overlay.hidden = false;
    document.body.classList.add('search-open');
    trigger.setAttribute('aria-expanded', 'true');
    loadIndex();
    input.focus();
    input.select();
  }

  function close() {
    overlay.hidden = true;
    document.body.classList.remove('search-open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  }

  trigger.addEventListener('click', open);

  overlay.querySelectorAll('[data-search-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });

  form.addEventListener('submit', function (e) { e.preventDefault(); });

  input.addEventListener('input', function () {
    loadIndex();
    run();
  });

  document.addEventListener('keydown', function (e) {
    if (overlay.hidden) {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        var t = e.target;
        var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
        if (!typing) { e.preventDefault(); open(); }
      }
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Enter' && active >= 0) {
      var link = list.children[active] && list.children[active].querySelector('a');
      if (link) { e.preventDefault(); window.location.href = link.href; }
    }
  });
})();
