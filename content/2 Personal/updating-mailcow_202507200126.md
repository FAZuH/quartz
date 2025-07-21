---
{"publish":true,"aliases":"Updating Mailcow","cssclasses":""}
---

## Assumptions
1. Mailcow path is in `/opt/mailcow-dockerized`
2. `mailcow.conf` is valid
	Compare with environment variables used in Portainer

## Steps

1. Verify backups
	This step must not be skipped, should update fail and mailcow is corrupted.
2. Compare `docker-compose.yml` with one used in Portainer
3. 
	```bash
	cd /opt/mailcow-dockerized
	./update.sh --ours
	```

Note that because we changed relative paths to `"$BASE_PATH"`, there will be merge conflicts. We will favor our local changes using `--ours` flag
