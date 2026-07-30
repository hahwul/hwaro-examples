#!/usr/bin/env bash
# Print the reviewer's "field" block: one line per peer example, each pointing
# at a gallery thumbnail that exists on disk. Missing thumbnails are generated
# on the spot (home shot only, ~2s each) and reused by every later run.
#
# This is what makes DESIGN.md §16's field test answerable: "at thumbnail size,
# is this distinguishable from every other example in its category?" cannot be
# judged from a single screenshot.
#
# Usage: PEERS=$(scripts/agent/field.sh <name>)   # empty output if no peers
# Env:   FIELD_SIZE (default 3) — peers to show. The review already carries the
#        target's own six shots plus the quality anchor, so raising this trades
#        the reviewer's attention for sharper category discrimination.

set -uo pipefail
cd "$(dirname "$0")/../.."

name="${1:?usage: field.sh <name>}"
count="${2:-${FIELD_SIZE:-3}}"

for peer in $(scripts/agent/peers.sh "$name" "$count" 2>/dev/null); do
  shot="_agent/$peer/home-light-720.png"
  [ -f "$shot" ] || SHOTS_ONLY=home scripts/agent/shots.sh "$peer" 3998 >/dev/null 2>&1 || true
  [ -f "$shot" ] || continue
  echo "- $shot  (\"$peer\" — read its manifest entry to see the assignment it was built from)"
done
