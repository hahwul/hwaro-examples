#!/usr/bin/env bash
# Run agy (Antigravity CLI) non-interactively with a prompt template.
#
# Usage:
#   scripts/agent/run-agy.sh <template.prompt> <name> [findings-file]
#
# Substitutes __NAME__ (and __FINDINGS__ from the optional findings file)
# into the template, runs agy in print mode, and tees the transcript to
# _agent/<name>/<template>-<timestamp>.log.
#
# Env overrides:
#   AGY_MODEL    model name as shown by `agy models` (default: agy's own default)
#   AGY_TIMEOUT  print-mode timeout (default 30m)

set -euo pipefail
cd "$(dirname "$0")/../.."

template="${1:?usage: run-agy.sh <template.prompt> <name> [findings-file]}"
name="${2:?usage: run-agy.sh <template.prompt> <name> [findings-file]}"
findings_file="${3:-}"

# fold to the lowercase slug the manifest + example dir use; a capitalized arg
# ("Newyork") would otherwise put logs in _agent/Newyork and feed __NAME__ a
# name that mismatches examples/newyork. tr under LC_ALL=C so only ASCII A-Z
# fold — and so the check below can't let uppercase through via locale collation
name=$(printf '%s' "$name" | LC_ALL=C tr 'A-Z' 'a-z')

[ -f "$template" ] || { echo "no such template: $template" >&2; exit 1; }
case "$name" in (*[!a-z0-9]*|'') echo "invalid name: $name" >&2; exit 1;; esac

prompt=$(sed -e "s/__NAME__/$name/g" -e "s/__ROUND__/${ROUND:-1}/g" "$template")
if [[ "$prompt" == *__FINDINGS__* ]]; then
  [ -f "$findings_file" ] || { echo "template needs a findings file argument" >&2; exit 1; }
  prompt="${prompt/__FINDINGS__/$(cat "$findings_file")}"
fi
if [[ "$prompt" == *__HWARO_DESIGN_SKILL__* ]]; then
  skill=$(scripts/agent/load-skill.sh hwaro-design) || exit 1
  prompt="${prompt/__HWARO_DESIGN_SKILL__/$skill}"
fi

logdir="_agent/$name"
mkdir -p "$logdir"
log="$logdir/$(basename "$template" .prompt)-$(date +%Y%m%d-%H%M%S).log"

model_args=()
[ -n "${AGY_MODEL:-}" ] && model_args=(--model "$AGY_MODEL")

echo ">>> agy ${model_args[*]:-<default model>} · template=$(basename "$template") · name=$name"
echo ">>> transcript: $log"
# ${arr[@]+...} guards macOS bash 3.2, where "${arr[@]}" on an empty array
# trips `set -u`
agy ${model_args[@]+"${model_args[@]}"} --print-timeout "${AGY_TIMEOUT:-30m}" --print "$prompt" 2>&1 | tee "$log"

# agy exits 0 but prints nothing when the model is unavailable (e.g. quota
# exhausted) — surface that as a hard failure instead of a silent no-op
if [ ! -s "$log" ]; then
  echo "!!! agy produced no output (model unavailable / quota?) — see ${AGY_MODEL:-default model}" >&2
  exit 2
fi
