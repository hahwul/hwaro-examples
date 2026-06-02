#!/usr/bin/env bash
# Remove low-quality example sites and update tags.json
# This script reads from the removal list and deletes the sites, then updates tags.json

set -uo pipefail

cd "$(dirname "$0")/.."

REMOVAL_LIST="${1:-/tmp/sites-to-remove.txt}"

if [ ! -f "$REMOVAL_LIST" ]; then
  echo "Error: Removal list not found at $REMOVAL_LIST"
  echo "Run scripts/generate-removal-list.sh first"
  exit 1
fi

red()    { printf '\033[31m%s\033[0m\n' "$*"; }
green()  { printf '\033[32m%s\033[0m\n' "$*"; }
blue()   { printf '\033[34m%s\033[0m\n' "$*"; }

# Count sites to remove
TOTAL=$(grep -v '^#' "$REMOVAL_LIST" | grep -v '^$' | grep -v '^##' | wc -l)

echo "About to remove $TOTAL example sites"
echo "Press Enter to continue or Ctrl+C to cancel..."
read -r

REMOVED=0
FAILED=0

# Remove each site
while IFS= read -r name; do
  # Skip comments and empty lines
  [ -z "$name" ] && continue
  [[ "$name" =~ ^# ]] && continue
  [[ "$name" =~ ^## ]] && continue

  if [ -d "examples/$name" ]; then
    blue "Removing: $name"
    if rm -rf "examples/$name"; then
      REMOVED=$((REMOVED + 1))
    else
      red "Failed to remove: $name"
      FAILED=$((FAILED + 1))
    fi
  else
    echo "Skipping (not found): $name"
  fi
done < "$REMOVAL_LIST"

echo ""
green "Removed $REMOVED sites"
if [ "$FAILED" -gt 0 ]; then
  red "Failed to remove $FAILED sites"
fi

# Update tags.json - remove entries for deleted sites
echo ""
blue "Updating tags.json..."

# Create a temporary file with removed sites list
SITES_LIST="/tmp/removed_sites.txt"
grep -v '^#' "$REMOVAL_LIST" | grep -v '^$' | grep -v '^##' > "$SITES_LIST"

# Use jq to remove deleted sites from tags.json
if command -v jq >/dev/null 2>&1; then
  cp tags.json tags.json.bak

  while IFS= read -r name; do
    [ -z "$name" ] && continue
    jq "del(.\"$name\")" tags.json > tags.json.tmp && mv tags.json.tmp tags.json
  done < "$SITES_LIST"

  green "tags.json updated (backup saved as tags.json.bak)"

  # Show summary
  BEFORE=$(jq 'keys | length' tags.json.bak)
  AFTER=$(jq 'keys | length' tags.json)
  echo "Tags entries: $BEFORE → $AFTER (removed $((BEFORE - AFTER)))"
else
  red "Warning: jq not found, tags.json not updated"
  echo "You'll need to manually remove entries for deleted sites from tags.json"
fi

rm -f "$SITES_LIST"

echo ""
green "Cleanup complete!"
echo "Sites remaining: $(find examples -mindepth 2 -maxdepth 2 -name config.toml | wc -l)"
