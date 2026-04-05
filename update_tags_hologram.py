import json

with open('tags.json', 'r') as f:
    content = f.read()

# Since we know tags.json might have duplicate keys, we should append rather than load/dump.
# We'll just append our entry to the end.

new_entry = ',\n  "holographic": [\n    "dark",\n    "showcase",\n    "holographic",\n    "3d"\n  ]\n}'

# Replace the last '}' with our new entry
content = content.rsplit('}', 1)[0] + new_entry

with open('tags.json', 'w') as f:
    f.write(content)
