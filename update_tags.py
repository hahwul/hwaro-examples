import json

with open("tags.json", "r") as f:
    tags = json.load(f)

tags["boutique"] = ["light", "store", "fashion", "elegant"]

with open("tags.json", "w") as f:
    json.dump(tags, f, indent=2)
