(function () {
  "use strict";
  var toggle = document.getElementById("nav-toggle");
  var sidebar = document.getElementById("sidebar");
  if (!toggle || !sidebar) return;

  toggle.addEventListener("click", function () {
    var isOpen = sidebar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  sidebar.addEventListener("click", function (event) {
    if (event.target.tagName === "A" && sidebar.classList.contains("is-open")) {
      sidebar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
      sidebar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
})();
