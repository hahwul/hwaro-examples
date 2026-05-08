+++
title = "Notepad Shortcuts"
date = 1996-02-14
+++

Notepad in Windows 95 ships with a small set of keyboard shortcuts that cover most editing tasks. The application launches instantly because it loads no fonts beyond Fixedsys and reads files line by line. The 64K size limit on individual documents is documented in the help file and reflects the underlying edit control rather than a deliberate restriction.

File operations follow the standard Common User Access bindings. Ctrl+N opens a new document, Ctrl+O brings up the file picker, Ctrl+S saves to the current path, and Ctrl+P sends the buffer to the configured printer. Save As is reachable through the File menu but has no keyboard equivalent in this version. The dialog defaults to the My Documents folder if no working directory has been set in the shortcut properties.

Editing shortcuts are equally compact. Ctrl+Z undoes the last action, with a single level of history. Ctrl+X, Ctrl+C, and Ctrl+V handle clipboard transfers between Notepad and other Windows applications. Ctrl+A selects the entire document. The Find dialog opens with Ctrl+F and supports forward and backward searches with case sensitivity as a checkbox option.

Two features deserve specific mention. Typing .LOG on the first line of a file causes Notepad to append the current date and time whenever the file is reopened, which is useful for journaling and changelog entries. Pressing F5 inserts a timestamp at the cursor position without triggering the .LOG behavior. Both features survived into later Windows versions without modification.

Word wrap is toggled through the Edit menu and is not persisted across sessions. The default state is off, which means long lines extend horizontally and require scrolling. Page setup options live under File and accept margin values in inches or centimeters depending on the regional settings panel. Header and footer codes use ampersand prefixes to insert the filename, page number, and date during printing.
