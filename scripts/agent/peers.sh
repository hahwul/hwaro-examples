#!/usr/bin/env bash
# Print the peer set a design review is judged against: the examples this one
# would sit next to in the gallery.
#
# The reviewer's hardest question — "at thumbnail size, is this distinguishable
# from every other example in its category?" (DESIGN.md §16) — is unanswerable
# from one screenshot. It needs the field. This picks that field: same
# category, same scheme first, flagships first, only examples that actually
# exist on disk (so a screenshot can be taken).
#
# Usage: scripts/agent/peers.sh <name> [count]   # default count 3

set -euo pipefail
cd "$(dirname "$0")/../.."

name="${1:?usage: peers.sh <name> [count]}"
count="${2:-3}"

python3 - "$name" "$count" <<'EOF'
import json, pathlib, sys

name, count = sys.argv[1], int(sys.argv[2])
root = pathlib.Path(".")
manifest = json.loads((root / "manifest.json").read_text())
examples = manifest.get("examples", [])
flagships = set(manifest.get("flagships", []))

target = next((e for e in examples if e.get("name") == name), None)
if target is None:
    sys.exit(0)  # entry not written yet — no peers, not an error

def built(n):
    return (root / "examples" / n / "config.toml").exists()

pool = [
    e for e in examples
    if e.get("name") != name
    and e.get("category") == target.get("category")
    and built(e.get("name", ""))
]
# same scheme first (they share a canvas, so they look most alike), then
# flagships (the bar), then stable alphabetical so reruns pick the same field
pool.sort(key=lambda e: (
    e.get("scheme") != target.get("scheme"),
    e.get("name") not in flagships,
    e.get("name", ""),
))
for e in pool[:count]:
    print(e["name"])
EOF
