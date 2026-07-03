#!/usr/bin/env bash
# Headless screenshots for the DESIGN.md §16 first-screen review:
# light/dark homepage at 1280x720 (the gallery-shot viewport), the full
# homepage, 360px mobile, and the first section page. Output: _agent/<name>/.
#
# Usage: scripts/agent/shots.sh <name> [port]

set -euo pipefail
cd "$(dirname "$0")/../.."

name="${1:?usage: shots.sh <name> [port]}"
port="${2:-3999}"
dir="examples/$name"
out="_agent/$name"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

[ -d "$dir" ] || { echo "no such example: $dir" >&2; exit 1; }
[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME" >&2; exit 1; }
mkdir -p "$out"

# clear any stale server on the port, then start ours; `exec` makes $! the
# hwaro process itself (not a subshell), so the trap really stops the server
lsof -ti ":$port" 2>/dev/null | xargs kill 2>/dev/null || true
(cd "$dir" && exec hwaro serve -p "$port" >/dev/null 2>&1) &
serve_pid=$!
disown "$serve_pid" 2>/dev/null || true
trap 'kill "$serve_pid" 2>/dev/null; pkill -f "hwaro serve -p $port" 2>/dev/null || true' EXIT
for _ in $(seq 1 20); do
  curl -sf -o /dev/null "http://localhost:$port/" && break
  sleep 0.5
done

# --virtual-time-budget gives fonts/CSS from the local server time to settle;
# without it a shot can fire before stylesheets load and capture an unstyled page
shot() { "$CHROME" --headless=new --screenshot="$out/$1" --window-size="$2" \
  --hide-scrollbars --virtual-time-budget=6000 "$3" 2>/dev/null; }

# force each theme explicitly so results don't depend on the host's dark mode
curl -s "http://localhost:$port/" \
  | sed 's/<html lang="en"/<html lang="en" data-theme="light"/' > "$out/_light.html"
curl -s "http://localhost:$port/" \
  | sed 's/<html lang="en"/<html lang="en" data-theme="dark"/' > "$out/_dark.html"
# headless Chrome clamps window width to ~500px, so a --window-size=360 shot
# silently crops a 500px render; constrain the body instead for a true 360
{ cat "$out/_light.html"; printf '<style>body{width:360px !important;margin:0 auto !important;outline:1px solid red}</style>'; } > "$out/_mobile.html"

shot home-light-720.png 1280,720  "file://$PWD/$out/_light.html"
shot home-dark-720.png  1280,720  "file://$PWD/$out/_dark.html"
shot home-full.png      1280,2600 "file://$PWD/$out/_light.html"
shot home-360.png       500,900   "file://$PWD/$out/_mobile.html"

section=$(find "$dir/content" -mindepth 2 -name '_index.md' | head -1 \
  | sed -E 's|.*/content/([^/]+)/_index.md|\1|')
if [ -n "$section" ]; then
  shot section.png 1280,900 "http://localhost:$port/$section/"
  page=$(curl -s "http://localhost:$port/$section/" \
    | grep -oE "href=\"[^\"]*/$section/[a-zA-Z0-9._-]+/\"" | head -1 | cut -d'"' -f2 || true)
  if [ -n "$page" ]; then shot page.png 1280,900 "$page"; fi
fi

rm -f "$out/_light.html" "$out/_dark.html" "$out/_mobile.html"
echo "screenshots in $out/:"
ls "$out"/*.png
