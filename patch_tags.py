import re

with open("tags.json", "r") as f:
    content = f.read()

# Insert before the last brace
new_entry = ',\n  "techbyte": [\n    "light",\n    "blog",\n    "tech",\n    "card"\n  ]\n}'
content = re.sub(r'\n}\s*$', new_entry, content)

with open("tags.json", "w") as f:
    f.write(content)
