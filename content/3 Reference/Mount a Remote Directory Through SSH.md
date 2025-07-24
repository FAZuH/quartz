---
{"publish":true,"created":"2025-07-24T11:50:56.303+07:00","modified":"2025-07-24T11:50:56.304+07:00","published":"2025-07-24T11:50:56.304+07:00","cssclasses":"","creation-time":"2025-03-30 17:07","status":"baby","tag":null,"parent":["[[linux]]"]}
---


1. Make sure `sshfs` is installed. Use `yay -S sshfs`.
2. Mount `dir` to `mountpoint` using:
```bash
sshfs [user@]host:[dir] mountpoint [options]
```

For example:
```bash
sshfs root@127.0.0.1:/srv/app ~/mount
sshfs vps:/home/admin ~/vps
```
