#!/usr/bin/env bash
# Audit all example sites and generate report of low-quality patterns
# This script identifies sites that match the problematic patterns described in the issue.

set -uo pipefail

cd "$(dirname "$0")/.."

# Output file
REPORT_FILE="${1:-/tmp/audit-report.txt}"

# Category 1: Thin scaffold clones (12-file structure)
THIN_SCAFFOLDS=(
  "aperture-docs" "autopsy-report" "broadcast-spec" "cartography-ref"
  "centrifuge-docs" "cockpit-manual" "codex-noir" "colophon-press"
  "crucible-docs" "dispatch-manual" "electric-ink" "excavation-log"
  "furnace-docs" "fuse-box" "guillotine" "guillotine-docs" "impact-zone"
  "iron-press" "manual-override" "nerve-center" "ossuary-docs" "protocol-x"
  "raw-nerve" "redline-spec" "riot-act" "signal-flare" "siren-call"
  "smoke-signal" "stencil-ops" "terminus-docs" "titan-drop" "vault-ref"
)

# Placeholder patterns
PLACEHOLDER_TITLES=(
  "My Hwaro Site"
  "My Blog"
  "Hello World"
)

PLACEHOLDER_DESCS=(
  "Welcome to my new Hwaro site."
  "Welcome to my personal blog powered by Hwaro."
)

red()    { printf '\033[31m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }
green()  { printf '\033[32m%s\033[0m\n' "$*"; }
blue()   { printf '\033[34m%s\033[0m\n' "$*"; }

echo "=== HWARO EXAMPLES AUDIT REPORT ===" > "$REPORT_FILE"
echo "Generated: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Category 1: Thin scaffolds
echo "## Category 1: Near-identical thin scaffolds (32 sites)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
cat1_count=0
for name in "${THIN_SCAFFOLDS[@]}"; do
  if [ -d "examples/$name" ]; then
    cat1_count=$((cat1_count + 1))
    echo "  - $name" >> "$REPORT_FILE"
  fi
done
echo "" >> "$REPORT_FILE"
echo "Found: $cat1_count sites" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Category 2: Placeholder titles and descriptions
echo "## Category 2: Placeholder titles and descriptions" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

cat2_placeholder_title=()
cat2_placeholder_desc=()

for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"
  cfg="$dir/config.toml"

  if [ ! -f "$cfg" ]; then
    continue
  fi

  title=$(awk -F'=' '/^title[[:space:]]*=/ {sub(/^[[:space:]]*"/, "", $2); sub(/"[[:space:]]*$/, "", $2); print $2; exit}' "$cfg")
  desc=$(awk -F'=' '/^description[[:space:]]*=/ {sub(/^[[:space:]]*"/, "", $2); sub(/"[[:space:]]*$/, "", $2); print $2; exit}' "$cfg")

  for bad in "${PLACEHOLDER_TITLES[@]}"; do
    if [ "$title" = "$bad" ]; then
      cat2_placeholder_title+=("$name")
      break
    fi
  done

  for bad in "${PLACEHOLDER_DESCS[@]}"; do
    if [ "$desc" = "$bad" ]; then
      cat2_placeholder_desc+=("$name")
      break
    fi
  done
done

echo "### Sites with placeholder titles (${#cat2_placeholder_title[@]})" >> "$REPORT_FILE"
for name in "${cat2_placeholder_title[@]}"; do
  echo "  - $name" >> "$REPORT_FILE"
done
echo "" >> "$REPORT_FILE"

echo "### Sites with placeholder descriptions (${#cat2_placeholder_desc[@]})" >> "$REPORT_FILE"
for name in "${cat2_placeholder_desc[@]}"; do
  echo "  - $name" >> "$REPORT_FILE"
done
echo "" >> "$REPORT_FILE"

# Category 3: Pattern naming (glass, cosmic, abyss, lumina, aether)
echo "## Category 3: Glassmorphism / floating-orb / cosmic-noun cliches" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

cat3_glass=()
cat3_cosmic=()
cat3_abyss=()
cat3_lumina=()
cat3_aether=()

for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  if [[ "$name" =~ glass ]]; then
    cat3_glass+=("$name")
  fi

  if [[ "$name" =~ (astral|stellar|cosmic|celestial|nebula|aurora) ]]; then
    cat3_cosmic+=("$name")
  fi

  if [[ "$name" =~ (abyss|void|monolith|obelisk|obsidian|shard) ]]; then
    cat3_abyss+=("$name")
  fi

  if [[ "$name" =~ (lumina|luminous|luminal|luminescence) ]]; then
    cat3_lumina+=("$name")
  fi

  if [[ "$name" =~ aether ]]; then
    cat3_aether+=("$name")
  fi
done

echo "### Sites with 'glass' in name (${#cat3_glass[@]})" >> "$REPORT_FILE"
echo "Sample (first 20):" >> "$REPORT_FILE"
for i in "${!cat3_glass[@]}"; do
  if [ "$i" -lt 20 ]; then
    echo "  - ${cat3_glass[$i]}" >> "$REPORT_FILE"
  fi
done
echo "" >> "$REPORT_FILE"

echo "### Sites with cosmic/astral/stellar/celestial/nebula/aurora (${#cat3_cosmic[@]})" >> "$REPORT_FILE"
echo "Sample (first 20):" >> "$REPORT_FILE"
for i in "${!cat3_cosmic[@]}"; do
  if [ "$i" -lt 20 ]; then
    echo "  - ${cat3_cosmic[$i]}" >> "$REPORT_FILE"
  fi
done
echo "" >> "$REPORT_FILE"

echo "### Sites with abyss/void/monolith/obelisk/obsidian/shard (${#cat3_abyss[@]})" >> "$REPORT_FILE"
echo "Sample (first 20):" >> "$REPORT_FILE"
for i in "${!cat3_abyss[@]}"; do
  if [ "$i" -lt 20 ]; then
    echo "  - ${cat3_abyss[$i]}" >> "$REPORT_FILE"
  fi
done
echo "" >> "$REPORT_FILE"

echo "### Sites with lumina/luminous/luminal/luminescence (${#cat3_lumina[@]})" >> "$REPORT_FILE"
echo "Sample (first 20):" >> "$REPORT_FILE"
for i in "${!cat3_lumina[@]}"; do
  if [ "$i" -lt 20 ]; then
    echo "  - ${cat3_lumina[$i]}" >> "$REPORT_FILE"
  fi
done
echo "" >> "$REPORT_FILE"

echo "### Sites with aether (${#cat3_aether[@]})" >> "$REPORT_FILE"
for name in "${cat3_aether[@]}"; do
  echo "  - $name" >> "$REPORT_FILE"
done
echo "" >> "$REPORT_FILE"

# Category 4: Emoji usage
echo "## Category 4: Decorative emoji" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

cat4_emoji=()
for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  # Check for emoji in templates and content
  if find "$dir/templates" "$dir/content" -type f \( -name "*.html" -o -name "*.md" \) 2>/dev/null | \
     xargs perl -CSDA -ne 'exit 0 if /([\x{1F300}-\x{1F9FF}\x{1F600}-\x{1F6FF}\x{1F900}-\x{1F9FF}])/; END{exit 1}' 2>/dev/null; then
    cat4_emoji+=("$name")
  fi
done

echo "Sites with decorative emoji (${#cat4_emoji[@]})" >> "$REPORT_FILE"
for name in "${cat4_emoji[@]}"; do
  echo "  - $name" >> "$REPORT_FILE"
done
echo "" >> "$REPORT_FILE"

# Category 5: Empty/single-page sites
echo "## Category 5: Empty / single-page sites (≤1 markdown file)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

cat5_empty=()
for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  md_count=$(find "$dir/content" -type f -name "*.md" 2>/dev/null | wc -l)
  if [ "$md_count" -le 1 ]; then
    cat5_empty+=("$name")
  fi
done

echo "Sites with ≤1 markdown files (${#cat5_empty[@]})" >> "$REPORT_FILE"
echo "Sample (first 50):" >> "$REPORT_FILE"
for i in "${!cat5_empty[@]}"; do
  if [ "$i" -lt 50 ]; then
    echo "  - ${cat5_empty[$i]}" >> "$REPORT_FILE"
  fi
done
echo "" >> "$REPORT_FILE"

# Summary
echo "## SUMMARY" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Category 1 (Thin scaffolds): $cat1_count sites" >> "$REPORT_FILE"
echo "Category 2 (Placeholder titles): ${#cat2_placeholder_title[@]} sites" >> "$REPORT_FILE"
echo "Category 2 (Placeholder descriptions): ${#cat2_placeholder_desc[@]} sites" >> "$REPORT_FILE"
echo "Category 3 (Glass naming): ${#cat3_glass[@]} sites" >> "$REPORT_FILE"
echo "Category 3 (Cosmic naming): ${#cat3_cosmic[@]} sites" >> "$REPORT_FILE"
echo "Category 3 (Abyss naming): ${#cat3_abyss[@]} sites" >> "$REPORT_FILE"
echo "Category 3 (Lumina naming): ${#cat3_lumina[@]} sites" >> "$REPORT_FILE"
echo "Category 3 (Aether naming): ${#cat3_aether[@]} sites" >> "$REPORT_FILE"
echo "Category 4 (Emoji usage): ${#cat4_emoji[@]} sites" >> "$REPORT_FILE"
echo "Category 5 (Empty sites): ${#cat5_empty[@]} sites" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Display summary to console
green "Audit complete. Report saved to: $REPORT_FILE"
echo ""
blue "=== SUMMARY ==="
echo "Category 1 (Thin scaffolds): $cat1_count sites"
echo "Category 2 (Placeholder titles): ${#cat2_placeholder_title[@]} sites"
echo "Category 2 (Placeholder descriptions): ${#cat2_placeholder_desc[@]} sites"
echo "Category 3 (Glass naming): ${#cat3_glass[@]} sites"
echo "Category 3 (Cosmic naming): ${#cat3_cosmic[@]} sites"
echo "Category 3 (Abyss naming): ${#cat3_abyss[@]} sites"
echo "Category 3 (Lumina naming): ${#cat3_lumina[@]} sites"
echo "Category 3 (Aether naming): ${#cat3_aether[@]} sites"
echo "Category 4 (Emoji usage): ${#cat4_emoji[@]} sites"
echo "Category 5 (Empty sites): ${#cat5_empty[@]} sites"
