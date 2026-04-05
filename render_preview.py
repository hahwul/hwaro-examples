import os
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('ascii/templates'))
template = env.get_template('index.html')

config = {
    'title': 'ASCII',
    'base_url': 'http://localhost:3000'
}

section = {
    'content': '<p>Welcome to the ASCII themed terminal.</p>',
    'pages': [
        {'title': 'About', 'permalink': '/about', 'date': '2024-05-01'},
        {'title': 'Hello World', 'permalink': '/hello-world', 'date': '2024-05-02'}
    ]
}

def date_filter(value, format="%Y-%m-%d"):
    return value
env.filters['date'] = date_filter

rendered = template.render(config=config, section=section, page={'title': 'Home'})
print(rendered)
