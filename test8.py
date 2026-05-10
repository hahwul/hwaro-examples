import os
import re

sites = [
    'bubble-talk', 'butterfly-wing', 'calligraphy', 'canvas-easel',
    'carbon-fiber', 'carnival', 'carousel-gallery', 'cartoon-flat',
    'cartoon-network', 'cartoon-noir'
]

for site in sites:
    templates_dir = os.path.join('examples', site, 'templates')
    for root, dirs, files in os.walk(templates_dir):
        for file in files:
            if not file.endswith('.html'): continue
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()

            # Find any .url usage
            matches = re.findall(r'\{\{[^\}]*\.url[^\}]*\}\}', content)
            for m in matches:
                # print the line to see if it's prefixed
                lines = content.split('\n')
                for line in lines:
                    if m in line and 'base_url' not in line:
                        print(f"{path}: {line.strip()}")
