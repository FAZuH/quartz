---
{"publish":true,"aliases":"Docker VPS Volume Backup Plan","cssclasses":""}
---


## Using Portainer

1. Go to https://portainer.fazuh.com
2. Login
3. Connect to Portainer agent
4. Go to volume list
5. Create backup volume, e.g., `backup-volume1`
6. Go to container list
7. Add container
8. Set:
	- Name: `tmp`
	- Image: `ubuntu:latest`
	- Command:
	```bash
	/bin/bash -c "cp -av /src/. /dst/"
	```
	- Volume mappings:
		- `/src` -> volume to backup, e.g., `volume1`
		- `/dst` -> backup volume `backup-volume1`
	- (Optional) Auto remove: yes

## Backing up faz-bot database data

```bash
docker container stop mysql faz-bot-collect
docker run --rm \
	-v mysql-data:/src \
	-v backup-mysql-data-$(date +"%F"):/dst \
	ubuntu:latest \
	/bin/bash -c "cp -av /src/. /dst/"
docker container start mysql faz-bot-collect
```

## Backing up code-config

```bash
docker container stop code
docker run --rm \
	-v code-config:/src \
	-v code-config-$(date +"%F"):/dst \
	ubuntu:latest \
	/bin/bash -c "cp -av /src/. /dst/"
docker container start code
```
