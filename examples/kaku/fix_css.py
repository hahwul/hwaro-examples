import re

with open('static/css/style.css', 'r') as f:
    content = f.read()

# Fix 1: accent budget
content = content.replace('color: var(--accent);', 'color: var(--fg);', 1) # first instance is probably .site-logo... wait let's use regex
content = re.sub(r'(\.site-logo\s*\{[^}]*?)color:\s*var\(--accent\);', r'\1color: var(--fg);', content)
content = re.sub(r'(\.category-kicker\s*\{[^}]*?)color:\s*var\(--accent\);', r'\1color: var(--muted);', content)

# Fix 2: brush stroke SVG
old_path = "M10,0 C6,15 14,30 8,50 C6,70 14,85 10,100 L12,100 C16,85 8,70 10,50 C12,30 4,15 8,0 Z"
new_path = "M8,0 C2,15 10,30 4,50 C2,70 10,85 8,100 L18,100 C20,85 14,70 18,50 C20,30 12,15 18,0 Z"
content = content.replace(old_path, new_path)

# Fix 2: gutter-divider CSS
content = re.sub(r'(\.gutter-divider\s*\{[^}]*?width:\s*)24px', r'\g<1>32px', content)
content = re.sub(r'(\.gutter-divider\s*\{[^}]*?border-right:\s*)12px', r'\g<1>24px', content)
content = re.sub(r'(\.gutter-divider\s*\{[^}]*?border-image:[^;]+?)/\s*12px', r'\1/ 24px', content)
content = re.sub(r'(\.gutter-divider:hover,\s*\.spread-container:hover\s*\.gutter-divider\s*\{[^}]*?border-right-width:\s*)18px', r'\g<1>28px', content)

# Fix 4: brand-group and search-field input
content = re.sub(r'(\.brand-group\s*\{\s*display:\s*flex;)', r'\1\n  flex-wrap: wrap;', content)
content = re.sub(r'(\.search-field input\s*\{\s*width:\s*100%;)', r'\1\n  min-width: 0;', content)

# Fix 5: remove all border-radius and box-shadow
content = re.sub(r'\s*border-radius:\s*[^;]+;', '', content)
content = re.sub(r'\s*box-shadow:\s*[^;]+;', '', content)

with open('static/css/style.css', 'w') as f:
    f.write(content)
