---
publish: true
aliases:
  - Decrypting LUKS Encrypted Machine through SSH
created: 2026-04-09T23:07:39.087+07:00
modified: 2026-04-09T23:07:39.088+07:00
published: 2026-04-09T23:07:39.088+07:00
cssclasses: ""
creation-time: 2025-08-24 13:58
status: in progress
tag:
parent: "[[linux]]"
---

## Source
- https://www.youtube.com/watch?v=7TLPExkUHqw
- https://linux.die.net/man/8/dropbear
- https://wiki.debian.org/DropBear
- https://www.kernel.org/doc/Documentation/filesystems/nfs/nfsroot.txt

## Code
```bash
# Install Dropbear
sudo apt update
sudo apt install -y dropbear-initramfs

# e.g. `DROPBEAR_OPTIONS="-jk -p 2222 -c cryptroot-unlock"`. See `man dropbear` for more options
sudo nvim /etc/dropbear/initramfs/dropbear.conf

# `IP=dhcp`, or `IP=SERVER_IP::ROUTER_IP:NETMASK:SERVER_HOSTNAME` e.g. `IP=192.168.100.36::192.168.100.1:255.255.255.0:admin-ubuntu`
sudo nvim /etc/initramfs-tools/initramfs.conf
sudo echo "no-port-forwarding,no-agent-forwarding,no-x11-forwarding,command='/bin/cryptroot-unlock' $(cat $HOME/.ssh/authorized_keys)" > /etc/dropbear/initramfs/authorized_keys

# Set authorized SSH key
nvim /etc/dropbear/initramfs/authorized_keys

sudo update-initramfs -uv
```

