#!/usr/bin/env bash
# Full quality gate for a single example site. Used by builders and CI-adjacent
# local verification. Everything DESIGN.md treats as a hard requirement is
# checked here: build success, expected outputs, lint (errors AND warnings),
# and the repo-wide anti-pattern greps.
#
# Usage: scripts/check-site.sh <name>

set -uo pipefail
cd "$(dirname "$0")/.."

name="${1:?usage: check-site.sh <name>}"
dir="examples/$name"
FAIL=0

err() { printf 'FAIL: %s\n' "$*"; FAIL=1; }

[ -f "$dir/config.toml" ] || { err "missing $dir/config.toml"; exit 1; }

# --- 1. hwaro build must succeed and emit the expected artifacts -------------
BUILD_LOG=$(cd "$dir" && hwaro build 2>&1)
if [ $? -ne 0 ]; then
  err "hwaro build failed"
  printf '%s\n' "$BUILD_LOG" | tail -25
else
  [ -f "$dir/public/search.json" ] || err "build produced no search.json"
  [ -f "$dir/public/sitemap.xml" ]  || err "build produced no sitemap.xml"
  [ -f "$dir/public/index.html" ]   || err "build produced no index.html"
  printf '%s\n' "$BUILD_LOG" | grep -qiE "error|warn" && {
    err "hwaro build reported warnings/errors"; printf '%s\n' "$BUILD_LOG" | grep -iE "error|warn"; }
fi

# --- 2. lint: errors AND warnings are both fatal for curated examples --------
LINT_OUT=$(scripts/lint-examples.sh "$name" 2>&1)
printf '%s' "$LINT_OUT" | grep -q "ERROR" && { err "lint errors"; printf '%s\n' "$LINT_OUT" | grep "ERROR"; }
printf '%s' "$LINT_OUT" | grep -q "WARN"  && { err "lint warnings (hard cap for curated examples)"; printf '%s\n' "$LINT_OUT" | grep "WARN"; }

# --- 3. anti-pattern greps (DESIGN.md §13-14) --------------------------------
SRC_DIRS=()
[ -d "$dir/templates" ] && SRC_DIRS+=("$dir/templates")
[ -d "$dir/content" ]   && SRC_DIRS+=("$dir/content")
[ -d "$dir/static" ]    && SRC_DIRS+=("$dir/static")

if grep -rniE 'lorem ipsum|dolor sit amet' "${SRC_DIRS[@]}" >/dev/null 2>&1; then
  err "lorem ipsum found"; grep -rniE 'lorem ipsum|dolor sit amet' "${SRC_DIRS[@]}" | head -5
fi
if grep -rn 'page\.content' "$dir/templates" >/dev/null 2>&1; then
  err "page.content used — render with {{ content | safe }}"
fi
if grep -rn 'page\.params' "$dir/templates" >/dev/null 2>&1; then
  err "page.params used — custom front matter is page.extra.*"
fi
if grep -rnE '\{%[^%]* in \[' "$dir/templates" >/dev/null 2>&1; then
  err "Crinja 'x in [...]' array literal (parse failure) — use == chains"
fi
if grep -rnE '(href|src)="/[a-z0-9]' "$dir/templates" >/dev/null 2>&1; then
  err "bare absolute path in templates — prefix with {{ base_url }}"
  grep -rnE '(href|src)="/[a-z0-9]' "$dir/templates" | head -5
fi

# --- 4. asset policy ----------------------------------------------------------
BINARIES=$(find "$dir" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \
  -o -iname '*.gif' -o -iname '*.webp' -o -iname '*.woff' -o -iname '*.woff2' \
  -o -iname '*.ttf' -o -iname '*.otf' -o -iname '*.ico' \) ! -path '*/public/*' 2>/dev/null)
[ -n "$BINARIES" ] && { err "binary assets present (SVG/CSS only policy)"; printf '%s\n' "$BINARIES"; }

EXTERNAL=$(grep -rhoE 'https?://[a-zA-Z0-9.-]+' "$dir/templates" "$dir/static" 2>/dev/null \
  | sort -u \
  | grep -vE '^https://(fonts\.googleapis\.com|fonts\.gstatic\.com|cdn\.jsdelivr\.net)$' \
  | grep -vE '^http://www\.w3\.org$' || true)
[ -n "$EXTERNAL" ] && { err "external origins beyond fonts/fuse CDN allowlist:"; printf '%s\n' "$EXTERNAL"; }

# --- 5. structural requirements ----------------------------------------------
if grep -q '^\[\[taxonomies\]\]' "$dir/config.toml"; then
  [ -f "$dir/templates/taxonomy.html" ]      || err "taxonomies configured but templates/taxonomy.html missing"
  [ -f "$dir/templates/taxonomy_term.html" ] || err "taxonomies configured but templates/taxonomy_term.html missing"
fi
grep -q '^\[search\]' "$dir/config.toml" || err "[search] section missing from config.toml"
[ -f "$dir/templates/404.html" ] || err "templates/404.html missing"

# --- 6. internal links ---------------------------------------------------------
LINKS_OUT=$(cd "$dir" && hwaro tool check-links --internal-only 2>&1)
if ! printf '%s' "$LINKS_OUT" | grep -qE 'All [0-9]+ links are healthy|no links'; then
  err "internal dead links"; printf '%s\n' "$LINKS_OUT" | tail -10
fi

if [ "$FAIL" -eq 0 ]; then
  echo "PASS: $name"
else
  echo "RESULT: $name FAILED"
  exit 1
fi
