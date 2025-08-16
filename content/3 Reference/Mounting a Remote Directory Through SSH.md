---
{"publish":true,"created":"2025-08-15T13:53:58.550+07:00","modified":"2025-08-15T13:53:58.550+07:00","published":"2025-08-15T13:53:58.550+07:00","cssclasses":"","creation-time":"2025-03-30 17:07","status":"baby","tag":null,"parent":["[[linux]]"]}
---


1. Make sure `sshfs` is installed on local. Use `yay -Sy sshfs` or `apt install -y sshfs`.
2. Mount `dir` to `mountpoint` using:
	
	```bash
	sshfs [user@]host:[dir] mountpoint [options]
	```
	
	For example:
	```bash
	sshfs root@127.0.0.1:/srv/app ~/mount
	```
	
	Alternatively use valid entry from ~/.ssh/config
	```bash
	sshfs vps:/home/admin ~/mount
	```
