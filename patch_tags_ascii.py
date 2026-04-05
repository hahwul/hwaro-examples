import re

with open("tags.json", "r") as f:
    content = f.read()

new_entry = ',\n  "ascii": [\n    "dark",\n    "terminal",\n    "ascii"\n  ]\n}'
content = re.sub(r'\n}\s*$', new_entry, content)

with open("tags.json", "w") as f:
    f.write(content)
