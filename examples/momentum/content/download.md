+++
title = "Download"
description = "Momentum for macOS, Windows, and Linux, plus a companion app for the phone in your pocket."
[extra]
eyebrow = "Get it"
+++

Momentum installs in under a minute and asks for nothing on first launch — no account, no email, no fifteen-step onboarding. Open it, and the capture bar is already listening.

## Desktop

Native builds for the three major desktops, all reading and writing the same plain-text note files:

- **macOS** — Apple Silicon and Intel, 12.0 or later
- **Windows** — 10 and 11, 64-bit
- **Linux** — `.deb`, `.rpm`, and a portable AppImage

Install from the command line if you'd rather skip the download page entirely:

```sh
# macOS, via Homebrew
brew install --cask momentum

# Debian or Ubuntu
curl -fsSL https://get.momentum.sh/apt | sudo bash
sudo apt install momentum

# any platform, portable installer
curl -fsSL https://get.momentum.sh/install.sh | sh
```

## Mobile

The companion app for iOS and Android mirrors the desktop feed exactly — same momentum ordering, same capture bar, same encrypted sync. It's built for a ten-second capture between other things, not for long writing sessions; Focus mode is desktop-only for now.

{{ alert(type="note", body="Mobile capture works fully offline and queues changes for the next sync. Nothing is lost if you draft a note in a tunnel or on a flight.") }}

## Command line

For anyone who lives in a terminal, `momentum-cli` captures a note without opening the app at all:

```sh
$ momentum capture "Backyard fence — measurements"
saved · touched just now · 1 link detected (backyard-fence-2025)
```

Every capture through the CLI lands in the same feed as the desktop and mobile apps, ordered the same way, synced the same way. There is exactly one pile, no matter which door you walked in through — see the [full feature list](../features/) for what happens to a note after it lands.
