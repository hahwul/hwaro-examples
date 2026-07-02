/* Cadmium — search overlay.
   Opens from the header button or the "/" key, closes on Esc or the scrim,
   returns focus to the trigger, and renders Fuse.js results as text nodes
   (no HTML injection). The index is fetched lazily on first open. */
(function () {
  var overlay = document.getElementById("search-overlay");
  var trigger = document.getElementById("search-button");
  var input = document.getElementById("search-input");
  var status = document.getElementById("search-status");
  var list = document.getElementById("search-results");
  if (!overlay || !trigger || !input || !status || !list) return;

  var form = overlay.querySelector(".search-form");
  var base = form.getAttribute("data-base") || "";
  var fuse = null;
  var requested = false;
  var lastFocus = null;

  function loadIndex() {
    if (requested) return;
    requested = true;
    fetch(form.getAttribute("data-index"))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        fuse = new Fuse(data, {
          keys: ["title", "content"],
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: 2
        });
        if (input.value.trim()) run(input.value);
      })
      .catch(function () {
        status.textContent = "The search index could not be loaded. Try the tools listing instead.";
      });
  }

  function open() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("search-open");
    loadIndex();
    input.focus();
    input.select();
  }

  function close() {
    overlay.hidden = true;
    document.body.classList.remove("search-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  trigger.addEventListener("click", open);

  Array.prototype.forEach.call(
    overlay.querySelectorAll("[data-search-close]"),
    function (el) { el.addEventListener("click", close); }
  );

  document.addEventListener("keydown", function (e) {
    if (!overlay.hidden && e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (overlay.hidden && e.key === "/") {
      var el = document.activeElement;
      var typing = el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (!typing) {
        e.preventDefault();
        open();
      }
    }
  });

  form.addEventListener("submit", function (e) { e.preventDefault(); });
  input.addEventListener("input", function () { run(input.value); });

  function snippet(text) {
    var words = (text || "").replace(/\s+/g, " ").trim().split(" ");
    if (words.length > 26) return words.slice(0, 26).join(" ") + "…";
    return words.join(" ");
  }

  function run(query) {
    list.textContent = "";
    if (!query.trim()) {
      status.textContent = "";
      return;
    }
    if (!fuse) {
      status.textContent = "Loading the index…";
      return;
    }
    var results = fuse.search(query).slice(0, 8);
    if (results.length === 0) {
      status.textContent = "No parts match “" + query + "”.";
      return;
    }
    status.textContent = results.length + (results.length === 1 ? " result found." : " results found.");
    results.forEach(function (r) {
      var li = document.createElement("li");
      li.className = "search-result";
      var a = document.createElement("a");
      var url = r.item.url || r.item.permalink || "";
      a.href = /^https?:\/\//.test(url) ? url : base + url;
      var title = document.createElement("span");
      title.className = "result-title";
      title.textContent = r.item.title || "Untitled";
      var snip = document.createElement("span");
      snip.className = "result-snippet";
      snip.textContent = snippet(r.item.content);
      a.appendChild(title);
      a.appendChild(snip);
      li.appendChild(a);
      list.appendChild(li);
    });
  }
})();
