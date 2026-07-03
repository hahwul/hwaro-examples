#!/usr/bin/env bash
# Deterministic post-build verification for one example, beyond check-site.sh:
# the silent-failure greps from DESIGN.md §15 step 9, the homepage h1 rule,
# and the §12 prose word-count floor. Exits non-zero on any failure.
#
# Usage: scripts/agent/verify.sh <name>

set -uo pipefail
cd "$(dirname "$0")/../.."

name="${1:?usage: verify.sh <name>}"
dir="examples/$name"
FAIL=0
err() { printf 'FAIL: %s\n' "$*"; FAIL=1; }

[ -d "$dir" ] || { echo "no such example: $dir" >&2; exit 1; }

# 1. the full standard gate (build + lint + anti-pattern greps + links)
scripts/check-site.sh "$name" || FAIL=1

# 2. rendered-output greps (silent failures; DESIGN.md §15 step 9)
if [ -d "$dir/public" ]; then
  # the indent trap renders as a class-less code block starting with an
  # escaped tag; intentional fenced samples get <code class="language-...">
  trap_leaks=$(grep -rn '<pre><code>&lt;' "$dir/public" --include='*.html' | head -5)
  [ -n "$trap_leaks" ] && { err "markdown indent trap — HTML escaped into a code block:"; printf '%s\n' "$trap_leaks"; }

  escaped=$(grep -rln '&lt;div\|&lt;section\|&lt;article' "$dir/public" --include='*.html' | head -3)
  [ -n "$escaped" ] && printf 'WARN: escaped HTML tags present (fine if intentional code samples):\n%s\n' "$escaped"

  unrendered=$(grep -rn '{{ base_url\|{{ content\|{% include\|{% for\|{% if page' "$dir/public" --include='*.html' | head -5)
  [ -n "$unrendered" ] && { err "unrendered template syntax in output:"; printf '%s\n' "$unrendered"; }

  empty=$(grep -rn 'href=""' "$dir/public" --include='*.html' | head -5)
  [ -n "$empty" ] && { err "empty href (permalink trap):"; printf '%s\n' "$empty"; }

  h1=$(grep -c '<h1' "$dir/public/index.html" 2>/dev/null || echo 0)
  [ "$h1" -eq 1 ] || err "homepage has $h1 <h1> elements (need exactly 1)"
else
  err "no public/ output — build first"
fi

# 3. §12 prose word floor: 150+ words excluding front matter/code/shortcodes
python3 - "$dir" <<'EOF' || FAIL=1
import re, sys, pathlib
bad = []
root = pathlib.Path(sys.argv[1]) / "content"
for f in root.rglob("*.md"):
    if f.name in ("_index.md", "search.md"):
        continue
    body = re.sub(r"^\+\+\+.*?\+\+\+", "", f.read_text(), flags=re.S)
    prose = re.sub(r"```.*?```", "", body, flags=re.S)
    prose = re.sub(r"\{\{.*?\}\}|\{%.*?%\}", "", prose, flags=re.S)
    n = len(prose.split())
    if n < 150:
        bad.append(f"{f}: {n} prose words (<150)")
if bad:
    print("FAIL: §12 prose word floor:")
    print("\n".join("  " + b for b in bad))
    sys.exit(1)
EOF

# 4. mobile overflow at a true 360px constraint (requires Chrome; headless
#    window widths clamp at ~500px, so constrain the body instead)
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ -x "$CHROME" ] && [ -f "$dir/public/index.html" ]; then
  tmp=$(mktemp -d)
  port=39$((RANDOM % 90 + 10))
  lsof -ti ":$port" 2>/dev/null | xargs kill 2>/dev/null || true
  (cd "$dir" && exec hwaro serve -p "$port" >/dev/null 2>&1) &
  spid=$!
  disown "$spid" 2>/dev/null || true
  for _ in $(seq 1 20); do curl -sf -o /dev/null "http://localhost:$port/" && break; sleep 0.5; done
  curl -s "http://localhost:$port/" > "$tmp/m.html"
  cat >> "$tmp/m.html" <<'EOF'
<style>body { width: 360px !important; margin: 0 !important; }</style>
<script>window.addEventListener('load', function () {
  document.title = 'mobileScrollW=' + document.body.scrollWidth;
});</script>
EOF
  w=$("$CHROME" --headless=new --dump-dom --window-size=500,900 --virtual-time-budget=3000 \
      "file://$tmp/m.html" 2>/dev/null | grep -o 'mobileScrollW=[0-9]*' | head -1 | cut -d= -f2)
  kill "$spid" 2>/dev/null; pkill -f "hwaro serve -p $port" 2>/dev/null || true
  rm -rf "$tmp"
  if [ -n "${w:-}" ] && [ "$w" -gt 375 ]; then
    err "horizontal overflow at 360px (body scrollWidth=$w)"
  fi
else
  echo "note: Chrome not available — skipped 360px overflow check"
fi

if [ "$FAIL" -eq 0 ]; then
  echo "VERIFY PASS: $name"
else
  echo "VERIFY FAILED: $name"
  exit 1
fi
