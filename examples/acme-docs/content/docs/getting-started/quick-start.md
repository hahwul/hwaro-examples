+++
title = "Quick Start"
weight = 2
description = "Create your first Acme project in minutes"
+++

## Create a Project

```bash
acme init my-project
cd my-project
```

This generates the following structure:

```
my-project/
├── acme.toml
├── src/
│   └── main.ac
└── tests/
    └── main_test.ac
```

## Run the Project

```bash
acme run
```

Your application is now running at `http://localhost:4000`.

## Build for Production

```bash
acme build --release
```

The optimized binary is output to `dist/`.
