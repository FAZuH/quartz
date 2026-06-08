---
publish: true
aliases:
  - Setting up Remote Desktop Access to Wayland Machine
created: 2026-05-29T05:50:45.755+07:00
modified: 2026-05-29T05:58:04.396+07:00
published: 2026-05-29T05:58:04.396+07:00
tags:
  - 
creation-time: 2026-05-29 05:50
status: in progress
parent:
  - "[[linux]]"
---

1. Install [wayvnc](https://archlinux.org/packages/extra/x86_64/wayvnc/)
2. Run :

```bash
wayvnc 0.0.0.0 5900
```

I use [AVNC](https://f-droid.org/en/packages/com.gaurav.avnc/) to connect on Android.

## Adding Password Authentication

Personally, I bind the VNC to my Tailscale IP and add a password auth to it:

1. Create config dir `mkdir ~/.config/wayvnc`
2. Create certs. Simply run:

```bash
openssl req -x509 -newkey rsa:4096 -keyout ~/.config/wayvnc/tls_key.pem \
  -out ~/.config/wayvnc/tls_cert.pem -days 3650 -nodes -subj "/CN=wayvnc"

openssl genrsa | openssl rsa -traditional -out ~/.config/wayvnc/rsa_key.pem
```

3. Create config file `~/.config/wayvnc/config`. Mine:

```bash
address=YOUR_BIND_IP_HERE

enable_auth=true
username=YOUR_USERNAME_HERE
password=YOUR_PASSWORD_HERE

use_relative_paths=true
certificate_file=tls_cert.pem
private_key_file=tls_key.pem
rsa_private_key_file=rsa_key.pem
```

For further configuration, refer to the [man page](https://man.archlinux.org/man/wayvnc.1).
