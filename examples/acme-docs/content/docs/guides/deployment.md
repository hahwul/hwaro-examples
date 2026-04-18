+++
title = "Deployment"
weight = 2
description = "Deploy your Acme application to production"
+++

## Build for Production

Always build with the release flag before deploying:

```bash
acme build --release
```

## Deploy Options

### Docker

```dockerfile
FROM acme/runtime:latest
COPY dist/ /app/
EXPOSE 4000
CMD ["/app/my-project"]
```

Build and run:

```bash
docker build -t my-project .
docker run -p 4000:4000 my-project
```

### Cloud Platforms

Acme supports one-command deploy to popular platforms:

```bash
acme deploy --target aws
acme deploy --target gcp
acme deploy --target fly
```

## Health Checks

The built-in health endpoint is available at `/health`:

```bash
curl http://localhost:4000/health
# {"status": "ok"}
```
