+++
title = "Your First Container"
weight = 2
template = "doc"
description = "Build and run your first Docker container."
tags = ["docker", "containers"]
[extra]
category = "Tutorial"
+++

## Create a Dockerfile

Create a file named `Dockerfile` in your project root:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
```

## Build the Image

```bash
docker build -t my-app:latest .
```

The build process:

1. Pulls the `node:20-alpine` base image
2. Copies dependency files and installs packages
3. Copies application source code
4. Tags the image as `my-app:latest`

## Run the Container

```bash
docker run -d -p 3000:3000 --name my-app my-app:latest
```

Verify it is running:

```bash
docker ps
```

```
CONTAINER ID   IMAGE            STATUS         PORTS
a1b2c3d4e5f6   my-app:latest   Up 2 seconds   0.0.0.0:3000->3000/tcp
```

## View Logs

```bash
docker logs -f my-app
```

## Stop and Remove

```bash
docker stop my-app
docker rm my-app
```
