+++
title = "ClearPath Logistics"
date = "2025-05-22"
description = "A decade-old Jenkins snowflake, made reproducible and boring again."

[extra]
client = "ClearPath Logistics"
status = "resolved"
duration = "9 weeks"
industry = "Logistics"
outcome = "Jenkins snowflake became a reproducible, declarative pipeline"
+++

ClearPath's build server had been alive for eleven years. It had a name — Gerald — and a personality, in the sense that it failed in ways that only made sense if you knew its history: a plugin installed in 2016 for a service that was decommissioned in 2019, environment variables set through the web UI that existed nowhere in version control, and a build agent whose disk was 94% full of cached dependencies nobody dared clear.

<!-- more -->

Nothing about Gerald was reproducible. A build that passed on Tuesday could fail identically-configured on Wednesday, and the fix was usually "restart Gerald," which worked often enough that no one had questioned it in years.

The migration moved the pipeline definition out of the Jenkins UI and into a Jenkinsfile, then off ephemeral, containerized build agents instead of the one aging box:

```groovy
pipeline {
  agent { docker { image 'clearpath/build:2.4' } }
  stages {
    stage('test')   { steps { sh './scripts/test.sh' } }
    stage('build')  { steps { sh './scripts/build.sh --clean' } }
    stage('deploy') { steps { sh './scripts/deploy.sh --canary' } }
  }
}
```

Gerald is decommissioned. Builds now run on disposable containers, which means a failure is either a real bug or an infrastructure problem the team can diagnose — never "something about the state of that one machine." Build flakiness dropped from roughly one in six runs to effectively zero over the following quarter.
