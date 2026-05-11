import os

targets = ['dashboard', 'decibel', 'deconstructivist', 'design-quarterly', 'detonation', 'devconf', 'devtool', 'dewglass', 'dial-gauge', 'dispatch']

for target in targets:
    template_dir = f"examples/{target}/templates"
    content_dir = f"examples/{target}/content"

    # Are there missing sections?
    # e.g., if index.html links to /posts/ but there is NO content/posts/ directory at all!
    # I did check for missing links to pages, but my missing link check only checked against EXISTING content, so it might have skipped a missing section.
