/* Marl — inline manual search.
   Fuse.js loads from the CDN in footer.html; the index is the fuse_json
   file hwaro builds. Typing swaps the chapter list for results in place;
   clearing (or Esc) restores it. Every result string is inserted via
   textContent, so nothing from the index is ever parsed as HTML. */
(function () {
  var base = document.body.getAttribute("data-base") || "";
  var input = document.getElementById("docsearch-input");
  var results = document.getElementById("docsearch-results");
  var list = document.getElementById("docsearch-list");
  var status = document.getElementById("docsearch-status");
  if (!input || !results) return;

  var fuse = null;
  var loading = false;

  function load() {
    if (fuse || loading) return;
    loading = true;
    fetch(base + "/search.json")
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
        if (status) status.textContent = "Search index unavailable — the chapter list still works.";
      });
  }

  function restore() {
    results.hidden = true;
    results.textContent = "";
    if (list) list.hidden = false;
    if (status) status.textContent = "";
  }

  function excerpt(text, q) {
    if (!text) return "";
    var plain = text.replace(/\s+/g, " ").trim();
    var at = plain.toLowerCase().indexOf(q.toLowerCase());
    if (at < 0) return plain.slice(0, 140) + (plain.length > 140 ? "…" : "");
    var start = Math.max(0, at - 50);
    return (start > 0 ? "…" : "") + plain.slice(start, start + 150) + "…";
  }

  function render(hits, q) {
    results.textContent = "";
    if (list) list.hidden = true;
    results.hidden = false;
    if (!hits.length) {
      var empty = document.createElement("p");
      empty.className = "docsearch-empty";
      empty.textContent = "No pages match “" + q + "”.";
      results.appendChild(empty);
      if (status) status.textContent = "No matches.";
      return;
    }
    if (status) status.textContent = hits.length + (hits.length === 1 ? " result" : " results");
    hits.forEach(function (h) {
      var a = document.createElement("a");
      a.className = "docsearch-hit";
      a.href = base + h.item.url;
      var title = document.createElement("span");
      title.className = "docsearch-hit-title";
      title.textContent = h.item.title || h.item.url;
      var snip = document.createElement("span");
      snip.className = "docsearch-hit-snip";
      snip.textContent = excerpt(h.item.content, q);
      a.appendChild(title);
      a.appendChild(snip);
      results.appendChild(a);
    });
  }

  function run(q) {
    q = q.trim();
    if (!q) { restore(); return; }
    if (!fuse) { load(); return; }
    render(fuse.search(q).slice(0, 12), q);
  }

  input.addEventListener("focus", load);
  input.addEventListener("input", function () { run(input.value); });
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { input.value = ""; restore(); input.blur(); }
  });
})();
