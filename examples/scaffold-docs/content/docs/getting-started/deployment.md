+++
title = "Deployment"
weight = 30
description = "How to deploy your newly scaffolded site to production."
template = "page"
+++

Once you have customized your site locally, the next step is sharing it with the world. Scaffold generates completely static files, making deployment straightforward and compatible with any static hosting provider.

## Building for Production

Before deploying, generate the optimized production assets by running the build command:

```bash
scaffold build --production
```

This command minifies CSS/JS, optimizes images, and outputs everything into the `public/` directory.

## Hosting Options

You can upload the contents of the `public/` directory to standard hosting services such as:

* **GitHub Pages**: Fast, free, and directly integrated with your repository.
* **Vercel / Netlify**: Excellent choices for continuous deployment setups.
* **AWS S3 / CloudFront**: Highly scalable solutions for larger projects.

Ensure your deployment platform is configured to serve `index.html` for directory paths to maintain clean URLs.
