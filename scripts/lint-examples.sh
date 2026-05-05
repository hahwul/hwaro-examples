#!/usr/bin/env bash
# Lint example sites for AI-generated tells and placeholder content.
#
# Hard fails (exit 1):
#   - Placeholder title in config.toml
#   - Placeholder description in config.toml
#   - Decorative emoji codepoints in templates/ or content/
#
# Warnings (printed, do not fail):
#   - High gradient declaration count in source CSS/HTML
#   - High backdrop-filter usage in source CSS/HTML
#
# Usage:
#   scripts/lint-examples.sh                       # lint everything tracked by git diff vs origin/main
#   scripts/lint-examples.sh --all                 # lint every site under examples/
#   scripts/lint-examples.sh <name> [<name> ...]   # lint specific sites

set -uo pipefail

cd "$(dirname "$0")/.."

PLACEHOLDER_TITLES=(
  "My Hwaro Site"
  "My Blog"
  "Hello World"
)

PLACEHOLDER_DESCS=(
  "Welcome to my new Hwaro site."
  "Welcome to my personal blog powered by Hwaro."
)

# Pictographic / decorative emoji ranges are checked via perl below.
# Typographic ornaments (✦ ❧ ★ ✓ ✗) live below U+27C0 and are intentionally
# allowed — many curated examples use them well.

GRADIENT_WARN_THRESHOLD=12
BACKDROP_FILTER_WARN_THRESHOLD=8

ERRORS=0

red()    { printf '\033[31m%s\033[0m\n' "$*"; }
yellow() { printf '\033[33m%s\033[0m\n' "$*"; }
green()  { printf '\033[32m%s\033[0m\n' "$*"; }

fail() {
  red "  ERROR: $*"
  ERRORS=$((ERRORS + 1))
}

warn() {
  yellow "  WARN:  $*"
}

list_targets() {
  local mode="${1:-}"
  shift || true

  case "$mode" in
    --all)
      find examples -mindepth 2 -maxdepth 2 -name config.toml \
        | sed -E 's|^examples/([^/]+)/config\.toml$|\1|' \
        | sort -u
      ;;
    "")
      # Default: anything where config.toml or contents changed vs origin/main.
      local base="${LINT_BASE_REF:-origin/main}"
      if ! git rev-parse --verify "$base" >/dev/null 2>&1; then
        base="HEAD"
      fi
      git diff --name-only "$base"...HEAD 2>/dev/null \
        | grep -E '^examples/[^/]+/' \
        | sed -E 's|^examples/([^/]+)/.*|\1|' \
        | sort -u
      ;;
    *)
      printf '%s\n' "$mode" "$@"
      ;;
  esac
}

lint_site() {
  local name="$1"
  local dir="examples/$name"
  local cfg="$dir/config.toml"

  if [ ! -f "$cfg" ]; then
    red "[$name] missing config.toml"
    ERRORS=$((ERRORS + 1))
    return
  fi

  printf '\n[%s]\n' "$name"

  local title
  title=$(awk -F'=' '/^title[[:space:]]*=/ {sub(/^[[:space:]]*"/, "", $2); sub(/"[[:space:]]*$/, "", $2); print $2; exit}' "$cfg")

  local desc
  desc=$(awk -F'=' '/^description[[:space:]]*=/ {sub(/^[[:space:]]*"/, "", $2); sub(/"[[:space:]]*$/, "", $2); print $2; exit}' "$cfg")

  for bad in "${PLACEHOLDER_TITLES[@]}"; do
    if [ "$title" = "$bad" ]; then
      fail "placeholder title: \"$title\" — set a descriptive title in $cfg"
    fi
  done

  for bad in "${PLACEHOLDER_DESCS[@]}"; do
    if [ "$desc" = "$bad" ]; then
      fail "placeholder description: \"$desc\" — describe the site in $cfg"
    fi
  done

  # Emoji detection via perl (works on macOS BSD and Linux without PCRE grep).
  while IFS= read -r f; do
    [ -z "$f" ] && continue
    local sample
    sample=$(perl -CSDA -ne '
      while (/([\x{1F300}-\x{1F9FF}\x{1F600}-\x{1F6FF}\x{1F900}-\x{1F9FF}])/g) {
        print $1;
      }
    ' "$f" 2>/dev/null | perl -CSDA -ne 'my %s; while (/(.)/g) { $s{$1}++ } print join("", keys %s);' | head -c 40)
    if [ -n "$sample" ]; then
      fail "decorative emoji in $f (samples: $sample) — replace with SVG or typographic ornament"
    fi
  done < <(find "$dir/templates" "$dir/content" -type f \( -name "*.html" -o -name "*.md" \) 2>/dev/null)

  local grad_count=0
  local bf_count=0
  while IFS= read -r f; do
    [ -z "$f" ] && continue
    local g b
    g=$(grep -cE "linear-gradient|radial-gradient|conic-gradient" "$f" 2>/dev/null)
    b=$(grep -cE "backdrop-filter|backdrop-blur" "$f" 2>/dev/null)
    g=${g:-0}
    b=${b:-0}
    grad_count=$((grad_count + g))
    bf_count=$((bf_count + b))
  done < <(find "$dir" -type f \( -name "*.css" -o -name "*.html" \) ! -path "*/public/*" 2>/dev/null)

  if [ "$grad_count" -gt "$GRADIENT_WARN_THRESHOLD" ]; then
    warn "$grad_count gradient declarations (threshold $GRADIENT_WARN_THRESHOLD) — consider whether the site relies on a generic gradient look"
  fi

  if [ "$bf_count" -gt "$BACKDROP_FILTER_WARN_THRESHOLD" ]; then
    warn "$bf_count backdrop-filter rules (threshold $BACKDROP_FILTER_WARN_THRESHOLD) — heavy glassmorphism is overrepresented in the repo"
  fi
}

TARGETS=()
while IFS= read -r line; do
  [ -z "$line" ] && continue
  TARGETS+=("$line")
done < <(list_targets "$@")

if [ "${#TARGETS[@]:-0}" -eq 0 ]; then
  echo "No example sites to lint."
  exit 0
fi

echo "Linting ${#TARGETS[@]} example(s)..."
for name in "${TARGETS[@]}"; do
  lint_site "$name"
done

echo
if [ "$ERRORS" -gt 0 ]; then
  red "Lint failed with $ERRORS error(s)."
  exit 1
fi

green "Lint passed."
