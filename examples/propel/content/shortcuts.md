+++
title = "Shortcuts"
description = "Every Propel keyboard shortcut, grouped by task — navigation, triage, compose, and view."
template = "shortcuts"
tags = ["reference", "keyboard"]

[[extra.groups]]
name = "Navigation"
lead = "Move through the inbox without touching the trackpad."

[[extra.groups.shortcuts]]
title = "Next email"
keys = ["J"]
desc = "Moves the cursor to the next message in the current list."

[[extra.groups.shortcuts]]
title = "Previous email"
keys = ["K"]
desc = "Moves the cursor to the previous message in the current list."

[[extra.groups.shortcuts]]
title = "Go to inbox"
keys = ["G", "I"]
desc = "Jumps to the primary inbox from anywhere in the app."

[[extra.groups.shortcuts]]
title = "Go to sent"
keys = ["G", "S"]
desc = "Jumps to your sent folder, cursor on the newest message."

[[extra.groups.shortcuts]]
title = "Command palette"
keys = ["⌘", "K"]
desc = "Opens search and command mode together — type to find or act."

[[extra.groups.shortcuts]]
title = "Compose new"
keys = ["C"]
desc = "Opens a blank draft addressed to nobody yet."

[[extra.groups]]
name = "Triage"
lead = "One key per decision, applied to the row under your cursor."

[[extra.groups.shortcuts]]
title = "Archive"
keys = ["E"]
desc = "Files the message and advances the cursor to the next one."

[[extra.groups.shortcuts]]
title = "Snooze"
keys = ["H"]
desc = "Opens the snooze picker; a second keystroke sets the return time."

[[extra.groups.shortcuts]]
title = "Delete"
keys = ["⌫"]
desc = "Moves the message to trash, recoverable for thirty days."

[[extra.groups.shortcuts]]
title = "Mark unread"
keys = ["U"]
desc = "Flags a read message to come back to later."

[[extra.groups.shortcuts]]
title = "Star"
keys = ["S"]
desc = "Adds the message to your starred view without changing its folder."

[[extra.groups.shortcuts]]
title = "Move to split inbox"
keys = ["⌘", "1–9"]
desc = "Files the message into one of your nine pinned split inboxes."

[[extra.groups]]
name = "Compose"
lead = "Draft, send, and undo — all without leaving the keyboard."

[[extra.groups.shortcuts]]
title = "Send"
keys = ["⌘", "↵"]
desc = "Sends the current draft immediately."

[[extra.groups.shortcuts]]
title = "Send later"
keys = ["⌘", "⇧", "↵"]
desc = "Opens the scheduler instead of sending right away."

[[extra.groups.shortcuts]]
title = "Attach file"
keys = ["⌘", "⇧", "A"]
desc = "Opens the file picker without touching the paperclip icon."

[[extra.groups.shortcuts]]
title = "Insert template"
keys = ["⌘", "/"]
desc = "Drops in a saved reply, cursor placed at the first variable."

[[extra.groups.shortcuts]]
title = "Undo send"
keys = ["Z"]
desc = "Pulls a just-sent message back to drafts within six seconds."

[[extra.groups]]
name = "View and search"
lead = "Adjust how the inbox looks and find anything in it."

[[extra.groups.shortcuts]]
title = "Toggle reading mode"
keys = ["⌘", "⇧", "D"]
desc = "Switches between day and night reading modes — the same toggle as the header."

[[extra.groups.shortcuts]]
title = "Toggle reading pane"
keys = ["⌘", "\\"]
desc = "Switches between the split view and a full-width message list."

[[extra.groups.shortcuts]]
title = "Zoom message in"
keys = ["⌘", "+"]
desc = "Increases the reading size of the open message only."

[[extra.groups.shortcuts]]
title = "Zoom message out"
keys = ["⌘", "-"]
desc = "Decreases the reading size of the open message only."

[[extra.groups.shortcuts]]
title = "Focus search"
keys = ["/"]
desc = "Jumps the cursor into the search field from any list view."
+++

Every shortcut on this page works the same way in the Propel desktop app, the web client, and the keyboard-only mode of the mobile app — we treat inconsistency between platforms as a bug, not a rounding error. Nothing here requires a modifier key soup either: most of the day-to-day triage set is a single letter, chosen because it's the first or most memorable letter of the action (`e` for archive is the one exception, chosen only because `a` was already taken by "add label" in an early build and thousands of muscle-memory hours made it too costly to change back).

If a shortcut conflicts with something your operating system or browser already claims, Settings → Shortcuts lets you remap any binding on this page individually — the tiles below always reflect your current bindings, not just the defaults shown here. Print this page, or better, open the in-app cheat sheet with `?` from anywhere and it'll show exactly this list without leaving your current draft.
