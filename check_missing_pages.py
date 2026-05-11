import os
import re

targets = ['dashboard', 'decibel', 'deconstructivist', 'design-quarterly', 'detonation', 'devconf', 'devtool', 'dewglass', 'dial-gauge', 'dispatch']

for target in targets:
    template_dir = f"examples/{target}/templates"
    content_dir = f"examples/{target}/content"

    contents = set()
    for root, _, files in os.walk(content_dir):
        for file in files:
            if file.endswith('.md'):
                rel_path = os.path.relpath(os.path.join(root, file), content_dir)
                if file == '_index.md' or file == 'index.md':
                    dir_path = os.path.dirname(rel_path)
                    path = f"/{dir_path}/" if dir_path else "/"
                    contents.add(path)
                else:
                    name = os.path.splitext(rel_path)[0]
                    contents.add(f"/{name}/")

    missing = set()
    for root, _, files in os.walk(template_dir):
        for file in files:
            if not file.endswith('.html'): continue
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()

            links = re.findall(r'(?:href|src)="\{\{ ?base_url ?\}\}([^"]+)"', content)
            for link in links:
                if link.startswith('http') or link.startswith('mailto') or link.startswith('#') or link.startswith('{{'):
                    continue
                if '.' in os.path.basename(link):
                    continue

                test_link = link
                if not test_link.endswith('/'):
                    test_link += '/'

                if test_link not in contents and not (test_link.startswith('/tags/') or test_link.startswith('/categories/')):
                    missing.add(test_link)

    if missing:
        print(f"[{target}] Missing linked pages: {missing}")
