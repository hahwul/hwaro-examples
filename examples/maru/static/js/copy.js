/* maru — copy the install command to the clipboard.
   Progressive enhancement: the command is readable without JS; this only wires
   the Copy button. Reverts the label after a short confirmation. */
(function () {
  'use strict';

  var btn = document.getElementById('install-copy');
  if (!btn) return;

  var label = btn.querySelector('.install-copy-label');
  var targetId = btn.getAttribute('data-copy-target');
  var target = document.getElementById(targetId);
  if (!target || !label) return;

  var reset = null;
  var original = label.textContent;

  btn.addEventListener('click', function () {
    var text = target.textContent.trim();
    var done = function () {
      label.textContent = 'Copied';
      btn.classList.add('is-copied');
      if (reset) clearTimeout(reset);
      reset = setTimeout(function () {
        label.textContent = original;
        btn.classList.remove('is-copied');
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {});
    }
  });
})();
