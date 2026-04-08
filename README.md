# hwaro-examples

This repository is a collection of example sites built with [Hwaro](https://hwaro.hahwul.com), a fast static site generator written in Crystal.

## Installation

To work with these examples or for AI agents acting on your behalf, you need to install [Hwaro](https://hwaro.hahwul.com). For complete instructions, please refer to the [official installation guide](https://hwaro.hahwul.com/start/installation/).

### macOS / Linux (Homebrew)
```bash
brew install hahwul/tap/hwaro
```

### Linux (Arch)
```bash
yay -S hwaro
```

### Nix
This repository includes a Nix flake that provides a dev shell with Hwaro pre-installed. If you have Nix with flakes enabled:

```bash
nix develop
```

This supports `x86_64-linux`, `aarch64-linux`, and `aarch64-darwin`.

### Manual / Other Platforms
You can download pre-built binaries (DEB, RPM, APK, or raw binaries) directly from the [GitHub Releases page](https://github.com/hahwul/hwaro/releases).

## Contributing with Jules

If you are using [Jules](https://jules.dev) to contribute to this repository, you can easily set up your environment by adding the following script to your **Environments > Setup script**. This will install the appropriate Hwaro binary for your architecture.

```bash
#!/bin/bash

echo "Installing Hwaro..."

# Get the latest version from GitHub release
VERSION=$(curl -sL "https://api.github.com/repos/hahwul/hwaro/releases/latest" | grep '"tag_name":' | sed -E 's/.*"v([^"]+)".*/\1/')

# Check system architecture
ARCH=$(uname -m)
if [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then
  DEB_FILE="hwaro_${VERSION}_arm64.deb"
else
  DEB_FILE="hwaro_${VERSION}_amd64.deb"
fi

# Download the latest Hwaro release package
curl -sL "https://github.com/hahwul/hwaro/releases/latest/download/${DEB_FILE}" -o hwaro.deb

# Install the package
sudo dpkg -i hwaro.deb
rm hwaro.deb

echo "Hwaro installation completed!"
hwaro --version
```
