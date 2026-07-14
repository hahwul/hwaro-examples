#!/usr/bin/env bash
# Print a Claude Code skill's SKILL.md from the upstream hwaro repo, so agent
# prompts pull the current skill instead of a hand-copied, drifting excerpt.
#
# Usage: scripts/agent/load-skill.sh <skill-name>
#
# Env overrides:
#   HWARO_REPO  path to a local hwaro checkout (default: ../hwaro, a sibling
#               of this repo) — used when its SKILL.md exists
#   HWARO_REF   git ref for the GitHub-raw fallback when no local checkout
#               is found (default: main)

set -euo pipefail
cd "$(dirname "$0")/../.."

skill="${1:?usage: load-skill.sh <skill-name>}"
repo="${HWARO_REPO:-../hwaro}"
ref="${HWARO_REF:-main}"

local_path="$repo/skills/$skill/SKILL.md"
if [ -f "$local_path" ]; then
  cat "$local_path"
  exit 0
fi

url="https://raw.githubusercontent.com/hahwul/hwaro/$ref/skills/$skill/SKILL.md"
if curl -fsSL "$url"; then
  exit 0
fi

echo "!!! load-skill.sh: could not resolve skill '$skill' — no local checkout at $local_path and fetch from $url failed" >&2
exit 1
