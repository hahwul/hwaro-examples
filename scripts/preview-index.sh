#!/usr/bin/env bash
# Preview the gallery index locally without Docker builds.
# Generates _preview/index.html for every example in manifest.json. Screenshots
# come from _agent/<name>/home-light-720.png where `just shots <name>` has made
# one; the rest show "no preview yet". Links to the sites themselves will 404.
#
# Usage:
#   scripts/preview-index.sh             # generate + serve at :8765
#   scripts/preview-index.sh --no-serve  # generate only

set -euo pipefail
cd "$(dirname "$0")/.."

OUT="_preview"
mkdir -p "${OUT}/screenshots"
for shot in _agent/*/home-light-720.png; do
  [ -f "${shot}" ] && cp "${shot}" "${OUT}/screenshots/$(basename "$(dirname "${shot}")").png"
done
python3 scripts/build-index.py "${OUT}" --all

[ "${1:-}" = "--no-serve" ] && exit 0
echo "Serving at http://localhost:8765 — Ctrl+C to stop"
cd "${OUT}" && python3 -m http.server 8765
