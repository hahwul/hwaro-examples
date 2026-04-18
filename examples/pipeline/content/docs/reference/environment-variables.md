+++
title = "Environment Variables"
weight = 2
+++

# Environment Variables

Pipeline provides a comprehensive system for managing environment variables, secrets, and configuration values across pipeline stages.

## Built-in Variables

Pipeline automatically injects the following variables into every stage:

| Variable | Example | Description |
|---|---|---|
| `CI` | `true` | Always `true` when running in Pipeline |
| `CI_PIPELINE_ID` | `48291` | Unique identifier for the pipeline run |
| `CI_PIPELINE_NAME` | `web-app` | Pipeline name from configuration |
| `CI_STAGE_NAME` | `build` | Current stage name |
| `CI_COMMIT_SHA` | `a1b2c3d4e5f6...` | Full Git commit SHA |
| `CI_COMMIT_SHORT_SHA` | `a1b2c3d` | Abbreviated commit SHA (7 characters) |
| `CI_COMMIT_BRANCH` | `main` | Git branch name |
| `CI_COMMIT_TAG` | `v1.2.3` | Git tag name (empty if not a tag build) |
| `CI_COMMIT_MESSAGE` | `Fix auth bug` | First line of the commit message |
| `CI_COMMIT_AUTHOR` | `user@example.com` | Commit author email |
| `CI_REPOSITORY_URL` | `https://github.com/org/repo` | Repository clone URL |
| `CI_PROJECT_DIR` | `/workspace` | Working directory inside the container |
| `CI_NODE_INDEX` | `0` | Current parallel node index (0-based) |
| `CI_NODE_TOTAL` | `4` | Total number of parallel nodes |
| `CI_TIMESTAMP` | `1711234567` | Unix timestamp when the pipeline started |

## User-Defined Variables

### Pipeline-Level Variables

Variables defined at the pipeline level are available in all stages:

```yaml
variables:
  NODE_ENV: production
  REGISTRY: ghcr.io/myorg
  APP_NAME: my-app
```

### Stage-Level Variables

Stage variables override pipeline-level variables with the same name:

```yaml
stages:
  - name: test
    variables:
      NODE_ENV: test
      DATABASE_URL: postgres://test:test@postgres:5432/testdb
    commands:
      - npm run test
```

### Variable Precedence

Variables are resolved in the following order (highest to lowest priority):

1. Stage-level variables
2. Environment-specific variables
3. Pipeline-level variables
4. Built-in CI variables
5. System environment variables

## Secret Management

Secrets are sensitive values that should never appear in logs or configuration files.

### Defining Secrets

Secrets are stored outside the pipeline configuration and referenced by name:

```yaml
stages:
  - name: deploy
    secrets:
      - KUBE_TOKEN
      - AWS_ACCESS_KEY_ID
      - AWS_SECRET_ACCESS_KEY
    commands:
      - kubectl --token=$KUBE_TOKEN apply -f k8s/
```

### Setting Secrets via CLI

```bash
# Set a secret for all pipelines in the project
pipeline secret set KUBE_TOKEN "eyJhbGciOiJSUzI..."

# Set a secret for a specific environment
pipeline secret set --environment production DB_PASSWORD "s3cur3p4ss"

# Set a secret from a file
pipeline secret set --from-file GCP_SERVICE_KEY ./service-account.json

# List all secrets (values are masked)
pipeline secret list
```

```
NAME                  SCOPE        UPDATED
KUBE_TOKEN            project      2025-03-01
AWS_ACCESS_KEY_ID     project      2025-02-15
AWS_SECRET_ACCESS_KEY project      2025-02-15
DB_PASSWORD           production   2025-03-10
GCP_SERVICE_KEY       project      2025-01-20
```

### Secret Masking

Pipeline automatically masks secret values in all log output. If a secret value appears in command output, it is replaced with `[MASKED]`:

```
[deploy] Authenticating with token [MASKED]
[deploy] Connected to cluster at https://k8s.example.com
```

### Secret Files

Some tools require secrets as files rather than environment variables. Use the `secret_files` directive:

```yaml
stages:
  - name: deploy
    secret_files:
      - name: GCP_SERVICE_KEY
        path: /tmp/gcp-key.json
      - name: KUBE_CA_CERT
        path: /tmp/ca.crt
    commands:
      - gcloud auth activate-service-account --key-file=/tmp/gcp-key.json
```

## Variable Interpolation

Variables support interpolation using the `$VAR` or `${VAR}` syntax:

```yaml
variables:
  REGISTRY: ghcr.io/myorg
  APP_NAME: my-app
  IMAGE: ${REGISTRY}/${APP_NAME}:${CI_COMMIT_SHA}

stages:
  - name: build
    commands:
      - docker build -t $IMAGE .
      - docker push $IMAGE
```

### Default Values

Use shell-style default values for optional variables:

```yaml
stages:
  - name: deploy
    commands:
      - kubectl apply -f k8s/ -n ${NAMESPACE:-default}
```

### Conditional Variables

Set variables based on conditions:

```yaml
variables:
  DEPLOY_ENV: staging

stages:
  - name: set-env
    commands:
      - |
        if [ "$CI_COMMIT_BRANCH" = "main" ]; then
          echo "DEPLOY_ENV=production" >> $CI_ENV_FILE
        fi

  - name: deploy
    depends_on: [set-env]
    commands:
      - echo "Deploying to $DEPLOY_ENV"
```

The `$CI_ENV_FILE` is a special file that Pipeline reads after each command. Variables written to it become available in subsequent commands and stages.

## Environment-Specific Variables

Define variables that apply only when deploying to a specific environment:

```yaml
environments:
  staging:
    variables:
      API_URL: https://api-staging.example.com
      LOG_LEVEL: debug
      REPLICAS: "2"

  production:
    variables:
      API_URL: https://api.example.com
      LOG_LEVEL: warn
      REPLICAS: "5"

stages:
  - name: deploy
    environment: $DEPLOY_ENV
    commands:
      - envsubst < k8s/deployment.tmpl.yml | kubectl apply -f -
```

## Variable Validation

Ensure required variables are set before a stage runs:

```yaml
stages:
  - name: deploy
    required_variables:
      - KUBE_TOKEN
      - KUBE_SERVER
      - DEPLOY_ENV
    commands:
      - kubectl apply -f k8s/
```

If any required variable is missing, the stage fails immediately with a clear error message:

```
[deploy] ERROR: Required variable KUBE_TOKEN is not set
[deploy] Stage failed (missing required variables)
```

## Troubleshooting

### Variable is empty in a stage

Check the variable precedence order. Stage-level variables override pipeline-level variables. Use `pipeline run --debug` to see all resolved variables:

```bash
pipeline run --debug --stage deploy 2>&1 | grep "variable:"
```

### Secret value appears in logs

Ensure the secret is defined using `pipeline secret set` and referenced via the `secrets` directive, not hardcoded in `variables`. Only values registered as secrets are masked.

### Variable interpolation is not working

Variables use `$VAR` or `${VAR}` syntax. Curly braces are required when the variable name is adjacent to other text:

```yaml
# Correct
- echo "${APP_NAME}-service"

# Incorrect (parsed as $APP_NAME followed by "-service" only in some shells)
- echo "$APP_NAME-service"
```

Use double quotes around values containing variables to ensure proper expansion.
