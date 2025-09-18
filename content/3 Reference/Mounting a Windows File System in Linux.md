---
{"publish":true,"created":"2025-08-15T13:53:58.591+07:00","modified":"2025-08-16T21:43:04.298+07:00","published":"2025-08-16T21:43:04.298+07:00","cssclasses":"","creation-time":"2025-03-21 19:07","status":"adult","tags":null,"parent":["[[linux]]","[[file systems]]"]}
---


The following procedure is tested for Archlinux. It is not guaranteed to work on other distributions.

## Procedure

1. Install [ntfs-3g](https://github.com/tuxera/ntfs-3g).
2. Prepare an empty directory, e.g. `/mnt/win11/`.
3. Mount: 
	```bash
	sudo mount -t ntfs-3g /dev/nvme0n1p4 /mnt/win11
	```

Unmount using `umount /mnt/win11` or `fusermount -u /mnt/win11`

