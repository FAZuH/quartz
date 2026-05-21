---
publish: true
aliases:
  - Systemd Service to Fix Waydroid Iptable Rules
created: 2026-05-19T15:38:27.691+07:00
modified: 2026-05-19T15:42:24.409+07:00
published: 2026-05-19T15:42:24.409+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-05-19 15:38
status: in progress
parent:
  - "[[systemd]]"
---

My waydroid cannot connect to the internet on startup due to missing iptable rules. Running the following service fixes it:

```ini
# /etc/systemd/system/waydroid-net.service
[Unit]
Description=Waydroid iptables rules
After=waydroid-container.service
Requires=waydroid-container.service

[Service]
Type=oneshot
ExecStart=/bin/sh -c 'iptables -C FORWARD -i waydroid0 -j ACCEPT 2>/dev/null || iptables -I FORWARD -i waydroid0 -j ACCEPT'
ExecStart=/bin/sh -c 'iptables -C FORWARD -o waydroid0 -j ACCEPT 2>/dev/null || iptables -I FORWARD -o waydroid0 -j ACCEPT'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

Then enable it:
```
sudo systemctl daemon-reload
sudo systemctl enable --now waydroid-net.service
```