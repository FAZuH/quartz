---
{"publish":true,"cssclasses":""}
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
