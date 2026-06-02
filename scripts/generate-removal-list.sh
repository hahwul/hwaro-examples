#!/usr/bin/env bash
# Generate a list of sites to remove based on audit findings.
# This script identifies duplicates and low-quality examples while preserving canonical ones.

set -uo pipefail

cd "$(dirname "$0")/.."

OUTPUT_FILE="${1:-/tmp/sites-to-remove.txt}"

echo "# Sites to Remove - Generated $(date)" > "$OUTPUT_FILE"
echo "# This list contains low-quality and duplicate examples identified by audit" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Category 1: Thin scaffolds - Remove ALL 32 (they're essentially identical)
# Per issue: "keep 2-3 of the strongest as representative" - but these are all weak
echo "## Category 1: Near-identical thin scaffolds (remove all 32)" >> "$OUTPUT_FILE"
cat >> "$OUTPUT_FILE" << 'EOF'
aperture-docs
autopsy-report
broadcast-spec
cartography-ref
centrifuge-docs
cockpit-manual
codex-noir
colophon-press
crucible-docs
dispatch-manual
electric-ink
excavation-log
furnace-docs
fuse-box
guillotine
guillotine-docs
impact-zone
iron-press
manual-override
nerve-center
ossuary-docs
protocol-x
raw-nerve
redline-spec
riot-act
signal-flare
siren-call
smoke-signal
stencil-ops
terminus-docs
titan-drop
vault-ref
EOF
echo "" >> "$OUTPUT_FILE"

# Category 3: Glass sites - Keep only the intentional design demos
# Keep: glassmorphism, gradient-mesh, liquid-chrome, opalescent (max ~8 total)
echo "## Category 3a: Excessive 'glass' sites (keep ~8 canonical, remove rest)" >> "$OUTPUT_FILE"
echo "# Keeping: glassmorphism, gradient-mesh, liquid-chrome, opalescent, glass-horizon, frosted-ui, glass-panel, aurora-glass-ui" >> "$OUTPUT_FILE"

# Generate list of glass sites to remove (all except the keepers)
KEEP_GLASS=(
  "glassmorphism"
  "gradient-mesh"
  "liquid-chrome"
  "opalescent"
  "glass-horizon"
  "frosted-ui"
  "glass-panel"
  "aurora-glass-ui"
)

for dir in examples/*glass*/; do
  name="${dir%/}"
  name="${name#examples/}"

  should_keep=false
  for keep in "${KEEP_GLASS[@]}"; do
    if [ "$name" = "$keep" ]; then
      should_keep=true
      break
    fi
  done

  if [ "$should_keep" = false ] && [ -d "examples/$name" ]; then
    echo "$name" >> "$OUTPUT_FILE"
  fi
done
echo "" >> "$OUTPUT_FILE"

# Category 3b: Cosmic/Astral/Stellar sites - Keep max 5 best
echo "## Category 3b: Cosmic/Astral/Stellar/Celestial/Nebula/Aurora sites (keep ~5, remove rest)" >> "$OUTPUT_FILE"
echo "# Keeping: cosmic-loom, stellar-voyage, astral-weave, celestial-canvas, aurora-docs" >> "$OUTPUT_FILE"

KEEP_COSMIC=(
  "cosmic-loom"
  "stellar-voyage"
  "astral-weave"
  "celestial-canvas"
  "aurora-docs"
)

for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  if [[ ! "$name" =~ (astral|stellar|cosmic|celestial|nebula|aurora) ]]; then
    continue
  fi

  should_keep=false
  for keep in "${KEEP_COSMIC[@]}"; do
    if [ "$name" = "$keep" ]; then
      should_keep=true
      break
    fi
  done

  if [ "$should_keep" = false ] && [ -d "examples/$name" ]; then
    echo "$name" >> "$OUTPUT_FILE"
  fi
done
echo "" >> "$OUTPUT_FILE"

# Category 3c: Abyss/Void/Monolith sites - Keep max 4 best
echo "## Category 3c: Abyss/Void/Monolith/Obsidian sites (keep ~4, remove rest)" >> "$OUTPUT_FILE"
echo "# Keeping: abyss, monolith, void-terminal, obsidian-notes" >> "$OUTPUT_FILE"

KEEP_ABYSS=(
  "abyss"
  "monolith"
  "void-terminal"
  "obsidian-notes"
)

for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  if [[ ! "$name" =~ (abyss|void|monolith|obelisk|obsidian|shard) ]]; then
    continue
  fi

  should_keep=false
  for keep in "${KEEP_ABYSS[@]}"; do
    if [ "$name" = "$keep" ]; then
      should_keep=true
      break
    fi
  done

  if [ "$should_keep" = false ] && [ -d "examples/$name" ]; then
    echo "$name" >> "$OUTPUT_FILE"
  fi
done
echo "" >> "$OUTPUT_FILE"

# Category 3d: Lumina/Luminous sites - Keep max 3
echo "## Category 3d: Lumina/Luminous sites (keep ~3, remove rest)" >> "$OUTPUT_FILE"
echo "# Keeping: lumina, luminous-docs, bioluminescence" >> "$OUTPUT_FILE"

KEEP_LUMINA=(
  "lumina"
  "luminous-docs"
  "bioluminescence"
)

for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  if [[ ! "$name" =~ (lumina|luminous|luminal|luminescence) ]]; then
    continue
  fi

  should_keep=false
  for keep in "${KEEP_LUMINA[@]}"; do
    if [ "$name" = "$keep" ]; then
      should_keep=true
      break
    fi
  done

  if [ "$should_keep" = false ] && [ -d "examples/$name" ]; then
    echo "$name" >> "$OUTPUT_FILE"
  fi
done
echo "" >> "$OUTPUT_FILE"

# Category 3e: Aether sites - Keep max 2
echo "## Category 3e: Aether sites (keep ~2, remove rest)" >> "$OUTPUT_FILE"
echo "# Keeping: aether, aetherial-forge" >> "$OUTPUT_FILE"

KEEP_AETHER=(
  "aether"
  "aetherial-forge"
)

for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  if [[ ! "$name" =~ aether ]]; then
    continue
  fi

  should_keep=false
  for keep in "${KEEP_AETHER[@]}"; do
    if [ "$name" = "$keep" ]; then
      should_keep=true
      break
    fi
  done

  if [ "$should_keep" = false ] && [ -d "examples/$name" ]; then
    echo "$name" >> "$OUTPUT_FILE"
  fi
done
echo "" >> "$OUTPUT_FILE"

# Category 5: Empty sites - Remove sites with ≤1 markdown file (except intentional landing pages)
echo "## Category 5: Empty/single-page sites (remove non-landing-page examples)" >> "$OUTPUT_FILE"
echo "# Keeping intentional landing pages: appsite, infographic, lookbook, minifolio, pricetable" >> "$OUTPUT_FILE"

KEEP_LANDING=(
  "appsite"
  "infographic"
  "lookbook"
  "minifolio"
  "pricetable"
  "linktree"
)

for dir in examples/*/; do
  name="${dir%/}"
  name="${name#examples/}"

  md_count=$(find "$dir/content" -type f -name "*.md" 2>/dev/null | wc -l)
  if [ "$md_count" -le 1 ]; then
    should_keep=false
    for keep in "${KEEP_LANDING[@]}"; do
      if [ "$name" = "$keep" ]; then
        should_keep=true
        break
      fi
    done

    if [ "$should_keep" = false ] && [ -d "examples/$name" ]; then
      echo "$name" >> "$OUTPUT_FILE"
    fi
  fi
done
echo "" >> "$OUTPUT_FILE"

# Generate summary
echo "## SUMMARY" >> "$OUTPUT_FILE"
total=$(grep -v '^#' "$OUTPUT_FILE" | grep -v '^$' | grep -v '^##' | wc -l)
echo "Total sites marked for removal: $total" >> "$OUTPUT_FILE"

echo ""
echo "Removal list generated: $OUTPUT_FILE"
echo "Total sites to remove: $total"
echo ""
echo "To remove these sites, run:"
echo "  while read -r name; do"
echo "    [ -z \"\$name\" ] || [[ \"\$name\" =~ ^# ]] && continue"
echo "    rm -rf \"examples/\$name\""
echo "  done < \"$OUTPUT_FILE\""
