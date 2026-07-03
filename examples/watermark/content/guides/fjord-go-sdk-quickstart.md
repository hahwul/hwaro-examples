+++
title = "A Quickstart for the Fjord Go SDK"
date = "2025-07-14"
description = "Getting a new integrator to their first successful API call in under ten minutes, in Go."
+++

The original Fjord Go SDK documentation was a generated API reference — accurate method signatures, zero narrative — and a separate "getting started" page that had not been updated since the SDK's second major version. New integrators were assembling their first working call from two out-of-sync sources. This is the quickstart that replaced both.

<!-- more -->

## Starting from the install, not the concepts

Every quickstart draft before this one opened with an explanation of Fjord's authentication model. The version that shipped opens with a terminal:

```bash
go get github.com/fjordcloud/fjord-go/v3
```

and moves directly to a complete, copy-pasteable program:

```go
package main

import (
	"context"
	"fmt"
	"log"

	fjord "github.com/fjordcloud/fjord-go/v3"
)

func main() {
	client := fjord.NewClient(fjord.WithAPIKey("fj_live_••••"))

	bucket, err := client.Storage.CreateBucket(context.Background(), &fjord.CreateBucketInput{
		Name:   "my-first-bucket",
		Region: "us-west-2",
	})
	if err != nil {
		log.Fatalf("create bucket: %v", err)
	}

	fmt.Printf("created bucket %s in %s\n", bucket.Name, bucket.Region)
}
```

The concepts — regions, client construction, the functional-options pattern the SDK uses throughout — get one sentence each, placed as annotations next to the line they explain rather than in a preceding paragraph. Readers who already know Go do not need the concepts spelled out separately from the code that demonstrates them.

## Measuring "first successful call"

The rewrite's target metric was time-to-first-call, tracked through an opt-in telemetry ping the SDK already sent on client construction. Before the rewrite, the median time between a documentation page view and a first successful API call was around thirty-one minutes. After, it settled near nine.

## What stayed generated

The full method reference stayed auto-generated from source comments — rewriting narrative around every method would have been a losing race against the SDK's release cadence. The quickstart's job was narrower: get one representative call working end to end, then hand the reader off to the reference with enough context to read it.
