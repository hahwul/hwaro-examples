#!/usr/bin/env python3
"""Generate the gallery index page (the catalogue at examples.hwaro.hahwul.com).

Reads manifest.json for the collection and each example's config.toml for its
title and description, then writes <out_dir>/index.html. Screenshots are
expected at <out_dir>/screenshots/<name>.png and sites at <out_dir>/<name>/.

Usage:
  scripts/build-index.py <out_dir>         # only examples built into <out_dir>
  scripts/build-index.py <out_dir> --all   # every example (local preview)
"""
import html
import json
import os
import sys
import tomllib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REPO_URL = "https://github.com/" + os.environ.get("GITHUB_REPOSITORY", "hahwul/hwaro-examples")

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hwaro Examples</title>
<meta name="description" content="__COUNT__ example sites built with Hwaro, a fast static site generator written in Crystal. Open the live site, read the source, or scaffold your own from any of them.">
<meta property="og:title" content="Hwaro Examples">
<meta property="og:description" content="__COUNT__ complete example sites built with Hwaro. Scaffold your own from any of them.">
<meta name="theme-color" content="#0a0a0c" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#faf7f2" media="(prefers-color-scheme: light)">
<link rel="icon" href="https://hwaro.hahwul.com/favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
/* Tokens follow the Hwaro "Ember" system used on hwaro.hahwul.com. */
:root {
  color-scheme: light dark;
  --bg: light-dark(#faf7f2, #0a0a0c);
  --bg-subtle: light-dark(#f1eae0, #15151a);
  --heading: light-dark(#241f1a, #f4f4f6);
  --text: light-dark(#2a241f, #dcdce1);
  --muted: light-dark(#6f6358, #8e8f98);
  --border: light-dark(#e4dacd, #26262c);
  --primary: light-dark(#b35454, #ec7a66);
  --sans: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --mono: "Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  --gutter: clamp(1.25rem, 4vw, 3.5rem);
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 2rem; }
body { margin: 0; background: var(--bg); color: var(--text); font: 400 1rem/1.6 var(--sans); -webkit-font-smoothing: antialiased; }
a { color: inherit; }
:focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; }
::selection { background: color-mix(in srgb, var(--primary) 25%, transparent); }
.wrap { max-width: 84rem; margin: 0 auto; padding-inline: var(--gutter); }
.label { font: 400 0.75rem/1.4 var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }

.top { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; padding-block: 1.5rem; border-bottom: 1px solid var(--border); }
.brand { font: 500 0.95rem/1 var(--mono); color: var(--heading); text-decoration: none; }
.brand b { font-weight: 500; color: var(--primary); }
.top nav { display: flex; gap: 1.5rem; font-size: 0.9rem; }
.top nav a { color: var(--muted); text-decoration: none; }
.top nav a:hover { color: var(--heading); }

.intro { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 3rem var(--gutter); padding-block: clamp(3rem, 8vw, 6rem) clamp(3rem, 6vw, 5rem); }
.intro h1 { margin: 0; font: 600 clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)/1 var(--sans); letter-spacing: -0.035em; color: var(--heading); text-wrap: balance; }
.intro h1 em { font-style: normal; color: var(--primary); }
.intro p { max-width: 34ch; margin: 1.5rem 0 0; color: var(--muted); font-size: 1.05rem; }
.intro p a { color: var(--text); text-underline-offset: 3px; text-decoration-color: var(--primary); }

.contents { align-self: end; margin: 0; border-top: 1px solid var(--heading); }
.contents div { display: grid; grid-template-columns: 7.5rem minmax(0, 1fr); gap: 1rem; padding-block: 0.55rem; border-bottom: 1px solid var(--border); }
.contents dt { padding-top: 0.2rem; }
.contents dd { margin: 0; display: flex; flex-wrap: wrap; gap: 0.1rem 1.25rem; font: 400 0.95rem/1.6 var(--mono); }
.contents a { color: var(--text); text-decoration: none; }
.contents a:hover { color: var(--primary); text-decoration: underline; text-underline-offset: 3px; }

.plates { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(3rem, 6vw, 5.5rem) var(--gutter); padding-bottom: clamp(4rem, 10vw, 8rem); }
.plate { min-width: 0; }
.shot { display: block; position: relative; aspect-ratio: 16 / 9; background: var(--bg-subtle); border: 1px solid var(--border); overflow: hidden; }
.shot img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; }
.shot.missing::after { content: "no preview yet"; position: absolute; inset: 0; display: grid; place-items: center; font: 400 0.8rem/1 var(--mono); color: var(--muted); }
.plate:hover .shot, .shot:focus-visible { border-color: var(--heading); }
.plate:target .shot { border-color: var(--primary); }

.caption { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 0.25rem 1.5rem; padding-top: 1.1rem; }
.caption h2 { margin: 0; font: 500 1.15rem/1.3 var(--mono); letter-spacing: -0.01em; color: var(--heading); }
.caption h2 span { margin-right: 0.9ch; font-weight: 400; color: var(--muted); }
.caption .label { align-self: center; text-align: right; }
.caption p { grid-column: 1 / -1; max-width: 58ch; margin: 0.2rem 0 0; color: var(--muted); }
.actions { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 0.25rem 1.5rem; margin-top: 0.7rem; font-size: 0.9rem; }
.actions a, .actions button { padding: 0.35rem 0; background: none; border: 0; color: var(--text); font: inherit; cursor: pointer; text-decoration: underline; text-decoration-color: var(--border); text-underline-offset: 4px; }
.actions a:hover, .actions button:hover { color: var(--primary); text-decoration-color: currentColor; }
.actions a:first-child { font-weight: 500; text-decoration-color: var(--primary); }

.foot { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem 2rem; padding-block: 2rem; border-top: 1px solid var(--border); color: var(--muted); font-size: 0.9rem; }
.foot code { font: 400 0.85rem/1.6 var(--mono); color: var(--text); overflow-wrap: anywhere; }

@media (max-width: 56rem) {
  .intro { grid-template-columns: minmax(0, 1fr); }
  .plates { grid-template-columns: minmax(0, 1fr); }
}
@media (max-width: 30rem) {
  .contents div { grid-template-columns: minmax(0, 1fr); gap: 0; }
  .caption { grid-template-columns: minmax(0, 1fr); }
  .caption .label { text-align: left; }
}
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <a class="brand" href="https://hwaro.hahwul.com/">hwaro<b>/</b>examples</a>
    <nav aria-label="Hwaro">
      <a href="https://hwaro.hahwul.com/start/">Docs</a>
      <a href="__REPO__">GitHub</a>
    </nav>
  </header>

  <section class="intro">
    <div>
      <h1>__COUNT_WORD__ sites.<br><em>Take one.</em></h1>
      <p>Every example is a complete <a href="https://hwaro.hahwul.com/">Hwaro</a> site: templates, content, styles and search. Open it, read the source, or start your own from it with one command.</p>
    </div>
    <dl class="contents" aria-label="Examples by category">
__CONTENTS__
    </dl>
  </section>

  <main class="plates">
__PLATES__
  </main>

  <footer class="foot">
    <span>Built with <a href="https://hwaro.hahwul.com/">Hwaro</a>. Each example lives in <a href="__REPO__/tree/main/examples">examples/</a>.</span>
    <code>hwaro init my-site --scaffold __REPO__/tree/main/examples/&lt;name&gt;</code>
  </footer>
</div>
<script>
document.querySelectorAll('.shot img').forEach(function (img) {
  function miss() { img.parentNode.classList.add('missing'); img.remove(); }
  if (img.complete && !img.naturalWidth) miss(); else img.addEventListener('error', miss);
});
document.querySelectorAll('button[data-cmd]').forEach(function (btn) {
  var label = btn.textContent;
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(btn.dataset.cmd).then(function () {
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = label; }, 1500);
    });
  });
});
</script>
</body>
</html>
"""

NUMBER_WORDS = {20: "Twenty", 30: "Thirty", 40: "Forty"}


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if len(args) != 1:
        sys.exit(__doc__)
    out = Path(args[0])
    include_all = "--all" in sys.argv

    examples = []
    for e in json.loads((ROOT / "manifest.json").read_text())["examples"]:
        config = ROOT / "examples" / e["name"] / "config.toml"
        if not config.exists() or not (include_all or (out / e["name"]).is_dir()):
            continue
        site = tomllib.loads(config.read_text())
        examples.append({**e, "title": site.get("title", e["title"]),
                         "description": site.get("description", e["description"])})
    examples.sort(key=lambda e: (e["category"], e["name"]))

    by_category: dict[str, list[str]] = {}
    for e in examples:
        by_category.setdefault(e["category"], []).append(e["name"])
    contents = "\n".join(
        f'      <div><dt class="label">{cat}</dt><dd>'
        + "".join(f'<a href="#{n}">{n}</a>' for n in names) + "</dd></div>"
        for cat, names in by_category.items()
    )

    plates = []
    for i, e in enumerate(examples, 1):
        name = e["name"]
        esc = lambda s: html.escape(s, quote=True)
        cmd = f"hwaro init my-site --scaffold {REPO_URL}/tree/main/examples/{name}"
        plates.append(f"""    <article class="plate" id="{name}">
      <a class="shot" href="{name}/" aria-label="Open the {esc(e['title'])} example"><img src="screenshots/{name}.png" alt="" width="1280" height="720" loading="{'eager' if i <= 2 else 'lazy'}" decoding="async"></a>
      <div class="caption">
        <h2><span>{i:02d}</span>{name}</h2>
        <span class="label">{e['category']} / {e['scheme']}</span>
        <p>{esc(e['description'])}</p>
        <div class="actions">
          <a href="{name}/">Open site</a>
          <a href="{REPO_URL}/tree/main/examples/{name}">Source</a>
          <button type="button" data-cmd="{esc(cmd)}">Copy scaffold command</button>
        </div>
      </div>
    </article>""")

    count = len(examples)
    page = (PAGE.replace("__CONTENTS__", contents)
                .replace("__PLATES__", "\n".join(plates))
                .replace("__COUNT_WORD__", NUMBER_WORDS.get(count, str(count)))
                .replace("__COUNT__", str(count))
                .replace("__REPO__", REPO_URL))
    out.mkdir(parents=True, exist_ok=True)
    (out / "index.html").write_text(page)
    print(f"Generated {out / 'index.html'} ({count} examples)")


if __name__ == "__main__":
    main()
