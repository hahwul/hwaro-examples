+++
title = "System Properties"
date = 1996-05-30
+++

The System Properties dialog opens from the Control Panel or by right-clicking My Computer and choosing Properties. The General tab reports the registered owner, the Windows version including the build number, and the amount of physical memory detected at boot. On a typical 1996 desktop the memory line read 16,384 KB or 32,768 KB depending on the SIMM configuration.

The Device Manager tab presents a tree view of installed hardware grouped by category. Network adapters, sound cards, and SCSI controllers appear with status icons. A yellow exclamation mark indicates a resource conflict, usually an IRQ or DMA channel shared between two cards that cannot arbitrate. Right-clicking a device exposes the Properties dialog where IRQ, I/O range, and DMA settings can be adjusted manually after disabling automatic configuration.

The Hardware Profiles tab supports multiple boot configurations, originally intended for docking station scenarios. A docked profile loads network and printer drivers, while an undocked profile skips them and leaves the laptop running on battery without unnecessary services. Profile selection happens at startup through a numbered menu when more than one profile exists.

Performance settings live on the fourth tab. The File System button opens a separate dialog for setting the typical role of the machine, which adjusts the disk cache size. The Graphics button exposes a hardware acceleration slider with four positions, useful for working around buggy display drivers. The Virtual Memory button allows manual placement and sizing of the swapfile, although the default automatic management is sufficient for most workloads.

A Print button at the bottom of the General tab generates a text report of the entire hardware inventory, including resource assignments, driver versions, and IRQ usage. The output is suitable for support cases and post-installation documentation.
