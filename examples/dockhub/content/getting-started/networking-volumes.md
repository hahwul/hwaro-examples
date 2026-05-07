+++
title = "Networking and Volumes"
weight = 3
template = "doc"
description = "Connect containers and persist data between runs."
tags = ["docker", "networking", "volumes"]
[extra]
category = "Tutorial"
+++

## Container Networking

By default, containers on the same Docker host can reach each other through the user-defined bridge network. Create a network before starting related services so they can resolve each other by container name.

```bash
docker network create app-net
docker run -d --name api --network app-net node:20-alpine
docker run -d --name web --network app-net nginx:1.27-alpine
```

Inside the `web` container, `http://api:3000` resolves to the API service without exposing the port to the host.

## Publishing Ports

Use `-p` to map a container port to a host port. The host port is listed first.

```bash
docker run -d --name web -p 8080:80 nginx:1.27-alpine
```

Bind to a specific host interface to avoid exposing services on every network.

```bash
docker run -d --name api -p 127.0.0.1:3000:3000 myapp:latest
```

## Named Volumes

Volumes persist data outside the container's writable layer. Create a volume and mount it into the container at the path the application writes to.

```bash
docker volume create pgdata
docker run -d --name db \
  -v pgdata:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=secret \
  postgres:16-alpine
```

The volume survives container removal. Inspect its mount path on the host.

```bash
docker volume inspect pgdata
```

## Bind Mounts

Bind mounts map a host directory directly into the container. They are useful during development for source code that should be edited live.

```bash
docker run --rm -it \
  -v "$PWD":/app \
  -w /app \
  node:20-alpine \
  npm test
```

## Cleanup

Remove unused networks and volumes when projects are decommissioned.

```bash
docker network prune
docker volume prune
```

## Next Steps

Continue to the [CLI Reference](../../reference/cli/) for the full list of options accepted by the commands shown here.
