import os
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('glacial-ice/templates'))
template = env.get_template('index.html')

config = {
    'title': 'Glacial Ice',
    'base_url': 'http://localhost:3000',
    'description': 'Translucent, cracked, and deep-blue ice textures with frost effects'
}

section = {
    'content': '<p>Welcome to the Tundra</p>',
    'pages': [
        {'title': 'The Deep Freeze', 'path': '/sample', 'date': '2024-04-05', 'description': 'Exploring the beauty of translucent, cracked, and deep-blue ice textures.'}
    ]
}

def date_filter(value, format="%Y-%m-%d"):
    return value
def striptags_filter(value):
    return value
def truncate_filter(value, length=255):
    return value

env.filters['date'] = date_filter
env.filters['striptags'] = striptags_filter
env.filters['truncate'] = truncate_filter

rendered = template.render(config=config, section=section, page={'title': 'Home'})
with open('glacial-ice_rendered.html', 'w') as f:
    f.write(rendered)
print("Rendered to glacial-ice_rendered.html")
