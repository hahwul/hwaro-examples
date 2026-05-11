import os
import re

sites = [
    'bubble-talk', 'butterfly-wing', 'calligraphy', 'canvas-easel',
    'carbon-fiber', 'carnival', 'carousel-gallery', 'cartoon-flat',
    'cartoon-network', 'cartoon-noir'
]

# We need to ensure we DO SOMETHING for all examples, or explicitly verify.
# Let's double check ALL hardcoded paths. The issue said:
# "Hardcoded absolute paths like `href="/about/"`, `href="/posts/"`, `src="/style.css"`, `href="/tags/foo/"` should be prefixed with `{{ base_url }}` (keep trailing slashes)."

for site in sites:
    templates_dir = os.path.join('examples', site, 'templates')
    for root, dirs, files in os.walk(templates_dir):
        for file in files:
            if not file.endswith('.html'): continue
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()

            # Find any href="/..." or src="/..." that IS NOT prefixed with base_url
            # but wait, I already did that and found NOTHING in test6.py?
            # Let's re-run a very careful regex:

            # This regex looks for href="/..." where the preceding chars are NOT '{{ base_url }}'
            # Because regex lookbehind can be tricky, let's just find all href="/..." and see.
            links = re.findall(r'(?:href|src)="(/[^"]*)"', content)
            if links:
                print(f"{path} has hardcoded links: {links}")
