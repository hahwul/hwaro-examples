import os
import re

targets = [
    "shutout", "signal-flare", "signal-white", "silhouette", "silk-road",
    "simulation-paper", "siren-call", "sketch", "slide", "smoke-signal"
]

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original = content

    # Prefix bare urls with base_url
    content = re.sub(r'href="\{\{\s*(post\.url|page\.url|term\.url|p\.url|page\.lower\.url|page\.higher\.url)\s*\}\}"', r'href="{{ base_url }}{{ \1 }}"', content)

    # Prefix hardcoded absolute paths
    # Because there are occurrences like `href="{{ base_url }}/about/"`, standard regex is messy.
    # But using `str.replace` without checking context breaks things.

    # Let's split on `href="` and `src="` and process each part manually

    parts = re.split(r'(href="|src=")', content)
    new_content = parts[0]

    for i in range(1, len(parts), 2):
        attr = parts[i]
        val_and_rest = parts[i+1]

        if val_and_rest.startswith('/'):
            if val_and_rest.startswith('//'):
                # protocol relative
                new_content += attr + val_and_rest
            else:
                # absolute path without base_url
                new_content += attr + "{{ base_url }}" + val_and_rest
        else:
            new_content += attr + val_and_rest

    content = new_content

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for site in targets:
    templates_dir = os.path.join("examples", site, "templates")
    if os.path.isdir(templates_dir):
        for root, _, files in os.walk(templates_dir):
            for file in files:
                if file.endswith('.html'):
                    fix_file(os.path.join(root, file))
