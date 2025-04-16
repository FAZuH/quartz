---
{"creation-time":"2025-03-30 17:07","status":"baby","tag":null,"parent":["[[linux]]"],"publish":true,"PassFrontmatter":true}
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
