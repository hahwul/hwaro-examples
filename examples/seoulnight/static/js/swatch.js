/* Click-to-copy for the palette swatch hex buttons. Falls back silently when
   the clipboard API is unavailable (file://, older browsers). */
(function () {
  "use strict";
  var buttons = document.querySelectorAll(".swatch-hex");
  if (!buttons.length || !navigator.clipboard) return;
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var hex = button.getAttribute("data-hex");
      navigator.clipboard.writeText(hex).then(function () {
        button.classList.add("is-copied");
        button.textContent = "copied";
        window.setTimeout(function () {
          button.classList.remove("is-copied");
          button.textContent = hex;
        }, 1300);
      }).catch(function () { /* clipboard blocked; leave the hex visible */ });
    });
  });
})();
