+++
title = "Isolation Protocols"
description = "How to isolate and set up your research environment."
weight = 1
+++

Before beginning any synthesis, it is critical to isolate your research environment to prevent data contamination.

## Environmental Setup

We recommend using a sterile virtual environment for all Helix projects.

### Prerequisites

- **Node.js**: Minimum version 18.x (LTS)
- **Hwaro CLI**: Latest stable release
- **Scientific Precision**: A commitment to detail

## Installation Steps

1. **Create Directory**: Establish a new focal point for your research.
   ```bash
   mkdir helix-lab && cd helix-lab
   ```

2. **Initialize Sequence**: Run the Hwaro initialization command.
   ```bash
   hwaro init . --scaffold docs
   ```

3. **Verify Integrity**: Ensure all core modules are correctly mapped.
   ```bash
   hwaro tool doctor
   ```

{{ alert(type="warning", message="Failure to follow isolation protocols may result in unstable data structures.") }}

## Next Steps

Once your environment is isolated, proceed to [Rapid Prototyping](/getting-started/quick-start/) to begin building your first model.
