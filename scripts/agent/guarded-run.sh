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
# fold to the lowercase slug the manifest + example dir actually use, so a
# capitalized arg ("Newyork") can't make the guard hunt for examples/Newyork
name=$(printf '%s' "$name" | LC_ALL=C tr 'A-Z' 'a-z')

names_before=$(python3 -c "import json; print('\n'.join(sorted(e['name'] for e in json.load(open('manifest.json'))['examples'])))")
dirs_before=$(find examples -mindepth 1 -maxdepth 1 -type d | sort)
# snapshot the working-tree state of examples/ so the collateral-damage check
# below compares BEFORE vs AFTER — a pre-existing untracked sibling (an
# unrelated example built earlier and not yet committed) is not this run's doing
status_before=$(git status --porcelain examples/ | sort)

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
# only paths whose git state CHANGED during this run count as collateral: diff
# the after-snapshot against the before-snapshot, then drop the target's own
# dir (case-insensitively, in case the arg wasn't the canonical lowercase slug)
status_after=$(git status --porcelain examples/ | sort)
touched=$(comm -13 <(printf '%s\n' "$status_before") <(printf '%s\n' "$status_after") \
  | grep -viE "examples/$name/" || true)
if [ -n "$touched" ]; then
  echo "!!! GUARD: files outside examples/$name changed during the run:" >&2
  printf '%s\n' "$touched" >&2
  FAIL=1
fi

if [ "$FAIL" -eq 1 ]; then
  echo "!!! GUARD FAILED — inspect and restore before continuing (nothing auto-reverted)" >&2
  exit 3
fi
exit "$rc"
