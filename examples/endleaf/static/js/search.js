/* Endleaf — search (page variant).
   Loads the Fuse.js index that hwaro builds and renders matches as
   contents rows, the same anatomy as the table of contents.
   Every string is inserted with textContent — never innerHTML. */
(function () {
  var form = document.querySelector(".search-form");
  var input = document.getElementById("search-input");
  var status = document.getElementById("search-status");
  var list = document.getElementById("search-results");
  if (!form || !input || !status || !list) return;

  var base = form.getAttribute("data-base") || "";
  var fuse = null;

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
      status.textContent = "The index could not be opened. Try the table of contents instead.";
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || "";
    if (/^https?:\/\//.test(url)) return url;
    return base + url;
  }

  function snippet(text) {
    var words = (text || "").replace(/\s+/g, " ").trim().split(" ");
    if (words.length > 28) return words.slice(0, 28).join(" ") + "…";
    return words.join(" ");
  }

  function render(results, query) {
    list.textContent = "";
    if (!query.trim()) { status.textContent = ""; return; }
    if (results.length === 0) {
      status.textContent = "Nothing in the history matches “" + query + "”.";
      return;
    }
    status.textContent = results.length + (results.length === 1 ? " leaf found." : " leaves found.");
    results.slice(0, 12).forEach(function (r) {
      var item = r.item || r;

      var li = document.createElement("li");
      li.className = "contents-row";

      var link = document.createElement("a");
      link.className = "row-link";
      link.href = hrefFor(item);

      var title = document.createElement("span");
      title.className = "row-title";
      title.textContent = item.title || "Untitled leaf";

      var leader = document.createElement("span");
      leader.className = "row-leader";
      leader.setAttribute("aria-hidden", "true");

      link.appendChild(title);
      link.appendChild(leader);
      li.appendChild(link);

      if (item.content) {
        var gloss = document.createElement("p");
        gloss.className = "row-gloss";
        gloss.textContent = snippet(item.content);
        li.appendChild(gloss);
      }

      list.appendChild(li);
    });
  }

  function run(value) {
    if (!fuse) return;
    render(fuse.search(value.trim()), value);
  }

  var timer = null;
  input.addEventListener("input", function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { run(input.value); }, 120);
  });
})();
