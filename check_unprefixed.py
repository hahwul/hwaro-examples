import os
import re

targets = ['dashboard', 'decibel', 'deconstructivist', 'design-quarterly', 'detonation', 'devconf', 'devtool', 'dewglass', 'dial-gauge', 'dispatch']

for target in targets:
    template_dir = f"examples/{target}/templates"
    for root, _, files in os.walk(template_dir):
        for file in files:
            if not file.endswith('.html'): continue
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()

            # Find any href or src that starts with / and NOT with {{ base_url }}
            links = re.findall(r'(?:href|src)="/[^"]*"', content)
            if links:
                print(f"[{target}] {path} -> {links}")

            # Find any bare url variables
            links2 = re.findall(r'href="(?!\{\{ ?base_url ?\}\})(\{\{ ?[a-zA-Z0-9_\.]+\.url ?\}\})"', content)
            if links2:
                print(f"[{target}] {path} -> {links2}")
