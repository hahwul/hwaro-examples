#!/usr/bin/env bash
# run-agy.sh wrapped in deterministic collateral-damage guards.
#
# Agents must only ADD things for their own example. This wrapper snapshots
# the manifest name set and the examples/ directory set before the run, and
# fails loudly if anything pre-existing disappeared afterwards — catching the
# failure mode where an agent "reuses" a sibling example by renaming it
# (which destroyed an uncommitted finished example once).
#
# Usage: scripts/agent/guarded-run.sh <template.prompt> <name> [findings-file]

set -uo pipefail
cd "$(dirname "$0")/../.."

name="${2:?usage: guarded-run.sh <template.prompt> <name> [findings-file]}"

names_before=$(python3 -c "import json; print('\n'.join(sorted(e['name'] for e in json.load(open('manifest.json'))['examples'])))")
dirs_before=$(find examples -mindepth 1 -maxdepth 1 -type d | sort)

scripts/agent/run-agy.sh "$@"
rc=$?

FAIL=0
names_after=$(python3 -c "import json; print('\n'.join(sorted(e['name'] for e in json.load(open('manifest.json'))['examples'])))")
dirs_after=$(find examples -mindepth 1 -maxdepth 1 -type d | sort)

lost_names=$(comm -23 <(printf '%s\n' "$names_before") <(printf '%s\n' "$names_after"))
if [ -n "$lost_names" ]; then
  echo "!!! GUARD: manifest entries DISAPPEARED during the run: $lost_names" >&2
  FAIL=1
fi
lost_dirs=$(comm -23 <(printf '%s\n' "$dirs_before") <(printf '%s\n' "$dirs_after"))
if [ -n "$lost_dirs" ]; then
  echo "!!! GUARD: example directories DISAPPEARED during the run: $lost_dirs" >&2
  FAIL=1
fi
touched=$(git status --porcelain examples/ | grep -vE "examples/$name/" || true)
if [ -n "$touched" ]; then
  echo "!!! GUARD: files outside examples/$name were touched:" >&2
  printf '%s\n' "$touched" >&2
  FAIL=1
fi

if [ "$FAIL" -eq 1 ]; then
  echo "!!! GUARD FAILED — inspect and restore before continuing (nothing auto-reverted)" >&2
  exit 3
fi
exit "$rc"
