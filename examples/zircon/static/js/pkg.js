/* Zircon — install-command pills (the site's signature element).
   Every package name in the docs renders as a `.pkg` button carrying its
   install command in `data-copy`. One delegated listener handles all of
   them, on the hero pill too, so new pills need no per-instance wiring. */
(function () {
  var status = document.getElementById("copy-status");
  var timers = new WeakMap();

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function announce(text) {
    if (status) status.textContent = text;
  }

  function flash(btn, command) {
    btn.classList.add("is-copied");
    var prevLabel = btn.getAttribute("aria-label");
    btn.setAttribute("aria-label", "Copied " + command);
    announce("Copied “" + command + "” to clipboard.");
    var existing = timers.get(btn);
    if (existing) clearTimeout(existing);
    var t = setTimeout(function () {
      btn.classList.remove("is-copied");
      if (prevLabel) btn.setAttribute("aria-label", prevLabel);
    }, 1700);
    timers.set(btn, t);
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".pkg") : null;
    if (!btn) return;
    var command = btn.getAttribute("data-copy");
    if (!command) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(command).then(function () {
        flash(btn, command);
      }, function () {
        fallbackCopy(command);
        flash(btn, command);
      });
    } else {
      fallbackCopy(command);
      flash(btn, command);
    }
  });
})();
