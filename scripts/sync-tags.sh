#!/usr/bin/env bash
# Regenerate tags.json from manifest.json.
#
# tags.json is a derived artifact: {"<name>": ["<category>", "<scheme>", "<style>", ...]}
# for every manifest example whose examples/<name>/config.toml exists on disk.
#
# Usage:
#   scripts/sync-tags.sh            # rewrite tags.json
#   scripts/sync-tags.sh --check    # exit 1 if tags.json is out of sync (no writes)

set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -f manifest.json ]; then
  echo "manifest.json not found" >&2
  exit 1
fi

GENERATED=$(jq -S '
  [ .examples[]
    | select(.name as $n | ($n | test("^[a-z][a-z0-9]*$")))
    | { key: .name, value: ([.category, .scheme] + .styles) }
  ] | from_entries
' manifest.json)

# Keep only examples that exist on disk (manifest may briefly lead the tree).
EXISTING=$(printf '%s' "$GENERATED" | jq -S --argjson names "$(
  find examples -mindepth 2 -maxdepth 2 -name config.toml 2>/dev/null \
    | sed -E 's|^examples/([^/]+)/config\.toml$|\1|' \
    | jq -R . | jq -s .
)" 'with_entries(select(.key as $k | $names | index($k)))')

if [ "${1:-}" = "--check" ]; then
  CURRENT=$(jq -S . tags.json 2>/dev/null || echo '{}')
  if [ "$CURRENT" = "$EXISTING" ]; then
    echo "tags.json is in sync with manifest.json ($(printf '%s' "$EXISTING" | jq 'length') entries)."
  else
    echo "tags.json is OUT OF SYNC with manifest.json — run scripts/sync-tags.sh" >&2
    diff <(printf '%s\n' "$CURRENT") <(printf '%s\n' "$EXISTING") | head -40 >&2 || true
    exit 1
  fi
else
  printf '%s\n' "$EXISTING" > tags.json
  echo "Wrote tags.json ($(printf '%s' "$EXISTING" | jq 'length') entries)."
fi
