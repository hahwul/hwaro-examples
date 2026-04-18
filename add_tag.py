import json

with open('tags.json', 'r') as f:
    tags = json.load(f)

tags['astral-prism'] = ["dark", "glassmorphism", "portfolio", "prismatic", "cosmic"]

with open('tags.json', 'w') as f:
    json.dump(tags, f, indent=2)
