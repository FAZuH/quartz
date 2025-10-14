---
{"publish":true,"aliases":["Mounting a Remote Directory through SSH using SSHFS"],"created":"2025-10-14T04:15:27.051+07:00","modified":"2025-10-14T04:15:27.051+07:00","published":"2025-10-14T04:15:27.051+07:00","cssclasses":"","creation-time":"2025-08-16 21:38","status":"baby","tag":null,"parent":["[[file systems]]","[[linux]]"]}
---

## Assumptions
1. The target machine have [SSH](https://en.wikipedia.org/wiki/Secure_Shell) up and running
2. You have valid credentials to connect to the target machine through SSH

## Procedure

Suppose we want to mount directory `/srv/ftp` to `/mnt/remote`, on remote machine defined on `~/.ssh/config`[^1] as `target`.

1. Install [SSHFS](https://github.com/libfuse/sshfs)
2. Prepare an empty directory, e.g. `/mnt/remote/`.
3. Mount: 
	```bash
	sshfs target:/srv/ftp /mnt/remote
	```

Unmount using `umount /mnt/remote` or `fusermount -u /mnt/remote`

[^1]: See https://www.ssh.com/academy/ssh/config
