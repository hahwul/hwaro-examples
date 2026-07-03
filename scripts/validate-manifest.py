#!/usr/bin/env python3
"""Validate manifest.json against the collection rules in DESIGN.md.

Checks (errors exit 1):
  - schema: required fields, closed vocabularies, name format
  - names: unique, single lowercase word, not reserved, not a retired name
    (scripts/retired-names.txt)
  - tags: exactly 1 category + 1 scheme + 1-2 styles
  - typography: each display/text pairing used <= 5 times
  - layout: one of the 14 named patterns
  - signature/content-theme: unique per example
  - search_ui: valid enum; content-heavy categories must not be "none"
  - feeds: only real section names
  - palette: 6-digit hex values; accent hue spacing within each
    category+scheme bucket reported as a warning

Usage: scripts/validate-manifest.py [--quiet]
"""

import colorsys
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

CATEGORIES = [
    "blog", "docs", "landing", "portfolio", "magazine", "gallery", "event",
    "resume", "changelog", "book", "wiki", "podcast", "newsletter",
]
SCHEMES = ["light", "dark", "auto"]
STYLES = [
    "minimal", "editorial", "brutalist", "retro", "terminal", "elegant",
    "playful", "geometric", "futuristic", "organic", "classic", "maximalist",
]
LAYOUTS = [
    "centered-column", "sidebar-docs", "split-hero", "bento-grid", "masonry",
    "timeline", "magazine-multicol", "full-bleed-alternating", "card-grid",
    "terminal-frame", "broadsheet", "spread", "dashboard-panels", "zine-collage",
]
SEARCH_UIS = ["page", "overlay", "palette", "inline", "none"]
CONTENT_CATEGORIES = {
    "blog", "docs", "magazine", "wiki", "book", "changelog", "podcast", "newsletter",
}
RESERVED_NAMES = {
    "simple", "bare", "blog", "docs", "book", "init", "build", "serve", "new",
    "doctor", "tool", "deploy", "index", "search", "static", "templates",
    "content", "public", "screenshots", "examples", "admin", "test", "hwaro",
}
PLACEHOLDER_TITLES = {"My Hwaro Site", "My Blog", "Hello World"}
NAME_RE = re.compile(r"^[a-z][a-z0-9]*$")
HEX_RE = re.compile(r"^#[0-9a-fA-F]{6}$")

errors: list[str] = []
warnings: list[str] = []


def err(msg: str) -> None:
    errors.append(msg)


def warn(msg: str) -> None:
    warnings.append(msg)


def hue(hex_color: str) -> float:
    r, g, b = (int(hex_color[i : i + 2], 16) / 255 for i in (1, 3, 5))
    return colorsys.rgb_to_hsv(r, g, b)[0] * 360


def main() -> int:
    manifest = json.loads((ROOT / "manifest.json").read_text())
    examples = manifest.get("examples", [])

    retired_path = ROOT / "scripts" / "retired-names.txt"
    retired = set(retired_path.read_text().split()) if retired_path.exists() else set()

    names = [e.get("name", "") for e in examples]
    for name, count in Counter(names).items():
        if count > 1:
            err(f"duplicate name: {name} ({count}x)")

    pairings: Counter = Counter()
    signatures: Counter = Counter()
    themes: Counter = Counter()
    accents: dict[tuple, list] = defaultdict(list)

    for e in examples:
        name = e.get("name", "<missing>")
        ctx = f"[{name}]"

        for field in ("name", "title", "description", "category", "scheme",
                      "styles", "brief", "typography", "palette", "layout",
                      "signature", "content", "features"):
            if field not in e:
                err(f"{ctx} missing field: {field}")

        if not NAME_RE.match(name):
            err(f"{ctx} name must be a single lowercase word ([a-z][a-z0-9]*)")
        if name in RESERVED_NAMES:
            err(f"{ctx} name is reserved")
        if name in retired:
            err(f"{ctx} name was used by a retired example — pick a fresh one")

        if e.get("category") not in CATEGORIES:
            err(f"{ctx} invalid category: {e.get('category')}")
        if e.get("scheme") not in SCHEMES:
            err(f"{ctx} invalid scheme: {e.get('scheme')}")
        styles = e.get("styles", [])
        if not (1 <= len(styles) <= 2):
            err(f"{ctx} needs 1-2 style tags, has {len(styles)}")
        for s in styles:
            if s not in STYLES:
                err(f"{ctx} invalid style: {s}")

        if e.get("layout") not in LAYOUTS:
            err(f"{ctx} invalid layout: {e.get('layout')}")

        title = e.get("title", "")
        desc = e.get("description", "")
        if not title or title in PLACEHOLDER_TITLES:
            err(f"{ctx} bad title: {title!r}")
        if not desc or len(desc) < 20:
            err(f"{ctx} description too short")
        if len(desc) > 140:
            warn(f"{ctx} description over 140 chars (gallery card truncates)")

        typo = e.get("typography", {})
        pair = (typo.get("display"), typo.get("text"))
        if not pair[0] or not pair[1]:
            err(f"{ctx} typography needs display and text families")
        pairings[pair] += 1

        pal = e.get("palette", {})
        for key in ("bg", "surface", "fg", "muted", "accent"):
            val = pal.get(key, "")
            if not HEX_RE.match(val or ""):
                err(f"{ctx} palette.{key} must be 6-digit hex, got {val!r}")
        if HEX_RE.match(pal.get("accent", "") or ""):
            accents[(e.get("category"), e.get("scheme"))].append(
                (name, hue(pal["accent"]))
            )

        sig = e.get("signature", "").strip().lower()
        if sig:
            signatures[sig] += 1
        content = e.get("content", {})
        theme = content.get("theme", "").strip().lower()
        if not theme:
            err(f"{ctx} content.theme required")
        else:
            themes[theme] += 1

        sections = content.get("sections", [])
        section_names = [s.get("name") for s in sections]
        md_count = 1 + len(content.get("standalone", [])) + len(sections) \
            + sum(s.get("pages", 0) for s in sections)
        if not 5 <= md_count <= 14:
            warn(f"{ctx} content plan yields {md_count} md files (target 6-10)")

        feats = e.get("features", {})
        sui = feats.get("search_ui")
        if sui not in SEARCH_UIS:
            err(f"{ctx} invalid search_ui: {sui}")
        if e.get("category") in CONTENT_CATEGORIES and sui == "none":
            err(f"{ctx} content-heavy category '{e.get('category')}' requires a search UI")
        for fs in feats.get("feeds", []):
            if fs not in section_names:
                err(f"{ctx} feeds section '{fs}' does not match any content section {section_names}")

    # near-duplicate detection: an entry cloned from another with the name
    # swapped passes exact-uniqueness checks; token-set similarity catches it
    def tokens(e: dict) -> set:
        text = f"{e.get('brief','')} {e.get('signature','')} {e.get('content',{}).get('theme','')}"
        return {w for w in re.findall(r"[a-z]+", text.lower()) if w != e.get("name", "")}

    toksets = [(e.get("name"), tokens(e)) for e in examples]
    for i, (n1, t1) in enumerate(toksets):
        for n2, t2 in toksets[i + 1:]:
            if not t1 or not t2:
                continue
            jac = len(t1 & t2) / len(t1 | t2)
            if jac > 0.7:
                err(f"near-duplicate entries: {n1} vs {n2} share {jac:.0%} of brief/signature/theme tokens — no recolored clones")

    for pair, count in pairings.items():
        if count > 5:
            err(f"font pairing {pair[0]}/{pair[1]} used {count}x (max 5)")
    for sig, count in signatures.items():
        if count > 1:
            err(f"duplicate signature ({count}x): {sig[:70]}")
    for theme, count in themes.items():
        if count > 1:
            err(f"duplicate content theme ({count}x): {theme[:70]}")

    for bucket, entries in accents.items():
        entries.sort(key=lambda t: t[1])
        for (n1, h1), (n2, h2) in zip(entries, entries[1:]):
            delta = min(abs(h2 - h1), 360 - abs(h2 - h1))
            if delta < 10:
                warn(f"accent hues close in {bucket}: {n1} ({h1:.0f}°) vs {n2} ({h2:.0f}°)")

    cat_counts = Counter(e.get("category") for e in examples)
    scheme_counts = Counter(e.get("scheme") for e in examples)
    style_counts = Counter(s for e in examples for s in e.get("styles", []))

    quiet = "--quiet" in sys.argv
    if not quiet:
        print(f"examples: {len(examples)}")
        print(f"categories: {dict(sorted(cat_counts.items()))}")
        print(f"schemes: {dict(sorted(scheme_counts.items()))}")
        print(f"styles: {dict(sorted(style_counts.items(), key=lambda kv: -kv[1]))}")
        top8 = [t for t, _ in Counter(
            {**cat_counts, **scheme_counts, **style_counts}
        ).most_common(8)]
        print(f"projected top-8 gallery tags: {sorted(top8)}")

    for w in warnings:
        print(f"WARN: {w}")
    for e_ in errors:
        print(f"ERROR: {e_}", file=sys.stderr)
    if errors:
        print(f"\n{len(errors)} error(s).", file=sys.stderr)
        return 1
    print(f"manifest OK ({len(warnings)} warning(s)).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
