import os

targets = ['dashboard', 'decibel', 'deconstructivist', 'design-quarterly', 'detonation', 'devconf', 'devtool', 'dewglass', 'dial-gauge', 'dispatch']

for target in targets:
    content_dir = f"examples/{target}/content"
    if not os.path.isdir(content_dir):
        continue

    for item in os.listdir(content_dir):
        item_path = os.path.join(content_dir, item)
        if os.path.isdir(item_path):
            files = [f for f in os.listdir(item_path) if f.endswith('.md') and f not in ('_index.md', 'index.md')]
            print(f"{target} -> {item}: {len(files)} entries")
