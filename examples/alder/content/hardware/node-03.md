+++
title = "node-03"
date = "2025-09-30"
description = "TrueNAS SCALE storage node — the only box in the rack with a maintenance window."
tags = ["storage", "zfs", "truenas", "backup"]
toc = true

[extra]
host = "node-03"
kind = "node"
role = "storage"
cpu = "Intel Core i3-12100 (4c/8t)"
ram = "32 GB DDR4 ECC"
watts = "42W"
+++

node-03 holds the only data in the rack that would actually hurt to lose: photo backups, the Proxmox Backup Server datastore pulled nightly from [node-01](/hardware/node-01/), and a media library that took years to rip and tag properly. It runs TrueNAS SCALE on top of a six-drive ZFS pool, and it is the one node with a real, honored maintenance window — Sunday mornings, when a scrub is already running anyway.

<!-- more -->

## Pool layout

Two three-wide RAIDZ1 vdevs, striped, chosen over a single six-wide RAIDZ2 because rebuild time on consumer SATA drives at this capacity mattered more than surviving a second simultaneous failure — the backup target for this pool is off-site, so the pool itself only has to survive one bad drive at a time.

```
$ zpool status tank
  pool: tank
 state: ONLINE
config:
        NAME        STATE     READ WRITE CKSUM
        tank        ONLINE       0     0     0
          raidz1-0  ONLINE       0     0     0
            ata-WD40  ONLINE     0     0     0
            ata-WD40  ONLINE     0     0     0
            ata-WD40  ONLINE     0     0     0
          raidz1-1  ONLINE       0     0     0
            ata-WD40  ONLINE     0     0     0
            ata-WD40  ONLINE     0     0     0
            ata-WD40  ONLINE     0     0     0
```

## Shares

SMB for the media library (read-only for every account but one), NFS for Proxmox to mount as a backup target, and a single dataset exposed over SFTP for pulling photo backups from a phone on the guest VLAN.

```
# /etc/samba/smb.conf (excerpt)
[media]
   path = /mnt/tank/media
   read only = yes
   valid users = @media-readers
   veto files = /.DS_Store/Thumbs.db/
```

## Scrub schedule

Monthly scrubs, cron-fired, with SMART short tests weekly and a long test the first Sunday of the month. Nothing here is exotic — the goal is a schedule boring enough that a failure notification is always meaningful.
