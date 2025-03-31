---
{"creation-time":"2025-03-21 19:07","status":"adult","tags":null,"parent":["[[linux]]","[[file systems]]"],"publish":true,"PassFrontmatter":true}
---


The following guide is tested for Archlinux, and is not guaranteed to work on other distributions.

**Steps**

1. Install `ntfs-3g`.
2. Prepare an empty directory, e.g. `/mnt/win11/`.
3. Mount: 
	```bash
	sudo mount -t ntfs-3g /dev/nvme0n1p4 /mnt/win11
	```

Unmount using `umount /mnt/win11`
