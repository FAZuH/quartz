---
{"creation-time":"2025-03-21 19:05","status":"adult","tags":null,"parent":["[[linux]]","[[file systems]]"],"publish":true,"PassFrontmatter":true}
---


The following guide is tested for Archlinux, and is not guaranteed to work on other distributions.

**Steps**

1. Install `android-file-transfer`.
2. Prepare an empty directory, e.g. `/mnt/android/`.
3. Attach the Android phone to the linux machine.
4. Switch to USB file transfer mode when prompted on Android.
5. Mount: 
	```bash
	aft-mtp-mount /mnt/android
	```

Unmount using `umount /mnt/android`
