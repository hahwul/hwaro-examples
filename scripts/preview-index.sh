#!/usr/bin/env bash
# Preview the index page locally without running Docker builds.
# Generates _preview/index.html using current examples/ + tags.json.
# Cards link to localhost demos that won't exist — that's fine; this is for
# previewing the index UI itself. Screenshots fall back to "No Preview".
#
# Usage:
#   ./scripts/preview-index.sh             # generate + serve at :8765
#   ./scripts/preview-index.sh --no-serve  # generate only

set -uo pipefail
# Don't use -e: grep with no match returns 1 and would abort the loop.

cd "$(dirname "$0")/.."

OUTPUT_DIR="$(pwd)/_preview"
BASE_URL="http://localhost:8765"
REPO_URL="https://github.com/hahwul/hwaro-examples"

rm -rf "${OUTPUT_DIR}"
mkdir -p "${OUTPUT_DIR}/screenshots"

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required (brew install jq)" >&2
  exit 1
fi

SITE_LINKS=""
ALL_TAGS=""
EXAMPLE_COUNT=0
for dir in examples/*/; do
  src_path="${dir%/}"
  name="${src_path#examples/}"
  [ -f "${src_path}/config.toml" ] || continue
  TITLE=$(grep '^title' "${src_path}/config.toml" | head -1 | sed 's/title *= *"//;s/"//')
  DESCRIPTION=$(grep '^description' "${src_path}/config.toml" | head -1 | sed 's/description *= *"//;s/"//')
  THEME_REPO_URL="${REPO_URL}/tree/main/${src_path}"
  SCAFFOLD_CMD="hwaro init my-site --scaffold ${THEME_REPO_URL}"
  TAGS=$(jq -r --arg d "${name}" '.[$d] // [] | join(" ")' tags.json)
  TAGS_DISPLAY=""
  for tag in ${TAGS}; do
    TAGS_DISPLAY="${TAGS_DISPLAY}<span class=\"tag\">${tag}</span>"
    if ! echo "${ALL_TAGS}" | grep -qw "${tag}"; then
      ALL_TAGS="${ALL_TAGS} ${tag}"
    fi
  done
  EXAMPLE_COUNT=$((EXAMPLE_COUNT + 1))
  SITE_LINKS="${SITE_LINKS}<div class=\"card\" data-name=\"${name}\" data-title=\"${TITLE}\" data-desc=\"${DESCRIPTION}\" data-tags=\"${TAGS}\"><a href=\"${BASE_URL}/${name}/\" class=\"main-link\"><img src=\"screenshots/${name}.png\" alt=\"${name}\" class=\"preview\" loading=\"lazy\" onerror=\"var d=document.createElement('div');d.className='preview-fallback';d.textContent='No Preview';this.replaceWith(d);\"><div class=\"card-info\"><strong>${name}</strong><span class=\"title\">${TITLE}</span><span class=\"desc\">${DESCRIPTION}</span><div class=\"card-tags\">${TAGS_DISPLAY}</div></div></a><div class=\"card-footer\"><a href=\"${THEME_REPO_URL}\" class=\"card-footer-row\"><svg viewBox=\"0 0 16 16\"><path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>Source Code</a><div class=\"card-footer-row scaffold-row\" onclick=\"copyScaffold(this)\" data-cmd=\"${SCAFFOLD_CMD}\"><svg viewBox=\"0 0 16 16\"><path d=\"M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z\"></path></svg><span class=\"scaffold-cmd\">${SCAFFOLD_CMD}</span></div></div></div>"
done

TOP_TAGS_DATA=$(jq -r 'values[] | .[]' tags.json | sort | uniq -c | sort -rn | head -8 | awk '{print $2}')

TAG_BUTTONS=""
for tag in $(echo ${TOP_TAGS_DATA} | tr ' ' '\n' | sort); do
  TAG_BUTTONS="${TAG_BUTTONS}<button class=\"tag-btn\" data-tag=\"${tag}\" data-highlight=\"1\">${tag}</button>"
done
for tag in $(echo ${ALL_TAGS} | tr ' ' '\n' | sort); do
  if ! echo "${TOP_TAGS_DATA}" | grep -qw "${tag}"; then
    TAG_BUTTONS="${TAG_BUTTONS}<button class=\"tag-btn\" data-tag=\"${tag}\">${tag}</button>"
  fi
done

DYNAMIC_TAG_CSS=""
COLORS=("#3b82f6" "#10b981" "#8b5cf6" "#f59e0b" "#ec4899" "#06b6d4" "#ef4444" "#6366f1")
IDX=0
for t in ${TOP_TAGS_DATA}; do
  COLOR=${COLORS[$IDX]}
  DYNAMIC_TAG_CSS="${DYNAMIC_TAG_CSS} .tag-btn[data-tag=\"${t}\"] { border-color: ${COLOR}; color: ${COLOR}; } .tag-btn[data-tag=\"${t}\"]:hover { background: ${COLOR}1a; } .tag-btn[data-tag=\"${t}\"].active { background: ${COLOR}; color: #fff; border-color: ${COLOR}; }"
  IDX=$((IDX+1))
done

# Pull the index.html template out of deploy.yml between the HTMLEOF markers.
DEPLOY_YAML=".github/workflows/deploy.yml"
TEMPLATE_FILE="$(mktemp)"
awk '
  /<< HTMLEOF$/  { capture=1; next }
  capture && /^[[:space:]]*HTMLEOF[[:space:]]*$/ { exit }
  capture { print }
' "${DEPLOY_YAML}" | sed 's/^          //' > "${TEMPLATE_FILE}"

# Pass long values through a file (env vars hit ARG_MAX with 1000+ examples).
VARS_FILE="$(mktemp)"
{
  printf 'SITE_LINKS\0%s\0' "${SITE_LINKS}"
  printf 'TAG_BUTTONS\0%s\0' "${TAG_BUTTONS}"
  printf 'DYNAMIC_TAG_CSS\0%s\0' "${DYNAMIC_TAG_CSS}"
  printf 'EXAMPLE_COUNT\0%s\0' "${EXAMPLE_COUNT}"
  printf 'REPO_URL\0%s\0' "${REPO_URL}"
  printf 'BASE_URL\0%s\0' "${BASE_URL}"
} > "${VARS_FILE}"

export TEMPLATE_FILE VARS_FILE OUTPUT_DIR

python3 - <<'PYEOF'
import os, re
src = open(os.environ["TEMPLATE_FILE"]).read()
raw = open(os.environ["VARS_FILE"], "rb").read().split(b"\0")
mapping = {}
for i in range(0, len(raw) - 1, 2):
    mapping[raw[i].decode()] = raw[i+1].decode()
out = re.sub(r"\$\{([A-Z_]+)\}", lambda m: mapping.get(m.group(1), m.group(0)), src)
with open(os.path.join(os.environ["OUTPUT_DIR"], "index.html"), "w") as f:
    f.write(out)
PYEOF

rm -f "${TEMPLATE_FILE}" "${VARS_FILE}"

echo "Generated ${OUTPUT_DIR}/index.html (${EXAMPLE_COUNT} examples)"

if [ "${1:-}" = "--no-serve" ]; then
  exit 0
fi

cd "${OUTPUT_DIR}"
PORT=8765
echo "Serving at http://localhost:${PORT} — Ctrl+C to stop"
python3 -m http.server "${PORT}"
