import os
from jinja2 import Environment, FileSystemLoader
import datetime

env = Environment(loader=FileSystemLoader('constellation/templates'))

def date_filter(val, format="%Y-%m-%d"):
    if isinstance(val, str):
        return val
    return val.strftime(format.replace("%B", "%b"))
env.filters['date'] = date_filter

def default_filter(val, value="", value_to_check=None):
    if not val:
        return value
    return val
env.filters['default'] = default_filter

def slice_filter(val, end=None):
    if end:
        return val[:end]
    return val
env.filters['slice'] = slice_filter

def safe_filter(val):
    return val
env.filters['safe'] = safe_filter

def now_func():
    return datetime.datetime.now()
env.globals['now'] = now_func

def get_url_func(path=None):
    return f"../static/{path}"
env.globals['get_url'] = get_url_func

def get_section_func(path=None):
    return section
env.globals['get_section'] = get_section_func

template = env.get_template('home.html')

config = {
    'title': 'Constellation',
    'base_url': 'http://localhost:3000'
}

section = {
    'content': '<p>Welcome to the Constellation observatory.</p>',
    'pages': [
        {'title': 'Orion: The Hunter in the Winter Sky', 'permalink': '/posts/orion', 'date': '2026-03-10', 'description': 'Mag 0.13 (Rigel) / 860 ly (Betelgeuse) / Winter Northern'}
    ]
}

rendered = template.render(config=config, section=section, page={'title': 'Home'})
print(rendered)
