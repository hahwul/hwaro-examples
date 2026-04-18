+++
title = "Auto-scale: Worker Pods"
date = "2025-03-15"
description = "Horizontal pod autoscaler scaled worker pods from 2 to 4"
tags = ["scaling", "infrastructure"]
+++

## Auto-scaling Event

**Component**: Worker deployment
**Trigger**: CPU utilization exceeded 80% threshold
**Action**: Scaled from 2 to 4 replicas

### Details

The horizontal pod autoscaler detected sustained CPU utilization above 80% on the worker deployment. This was triggered by a batch processing job that queued 45,000 events for reprocessing.

### Metrics

- **Before**: 2 pods, 82% avg CPU
- **After**: 4 pods, 41% avg CPU
- **Queue drain time**: Reduced from estimated 3h to 45 minutes

The scale-down occurred automatically 15 minutes after the queue was fully processed.
