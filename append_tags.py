import re

with open("tags.json", "r") as f:
    content = f.read()

# Check if photoblog already exists
if "photoblog" not in content:
    # Find the last closing brace
    last_brace_idx = content.rfind("}")

    if last_brace_idx != -1:
        # Construct the new entry
        new_entry = ',\n  "photoblog": [\n    "dark",\n    "blog",\n    "photography",\n    "gallery"\n  ]\n'

        # Insert before the last closing brace
        updated_content = content[:last_brace_idx] + new_entry + content[last_brace_idx:]

        with open("tags.json", "w") as f:
            f.write(updated_content)
        print("Successfully added photoblog to tags.json")
    else:
        print("Could not find closing brace in tags.json")
else:
    print("photoblog already exists in tags.json")
