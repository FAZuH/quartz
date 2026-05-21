---
publish: true
aliases:
  - Installing Waydroid on Archlinux
created: 2026-05-20T00:25:28.498+07:00
modified: 2026-05-20T00:38:14.742+07:00
published: 2026-05-20T00:38:14.742+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-05-20 00:25
status: in progress
parent:
  - "[[linux]]"
---

My personal "documentation" for installing Waydroid on Archlinux

```bash
# Install & init
yay -S waydroid
sudo systemctl enable --now waydroid-container.service
sudo waydroid init

# ARM translation (AMD = libndk)
yay -S waydroid-script-git
sudo waydroid-extras install libndk
sudo systemctl restart waydroid-container.service

# Start
waydroid session start &
waydroid show-full-ui
```

```bash
# Disable shit-ass assistant
sudo waydroid shell settings put secure assistant com.google.android.googlequicksearchbox/com.google.android.voiceinteract.GsaVoiceInteractionService
sudo waydroid shell settings put secure default_assistant ""

# Register ID for Google Play Store
sudo waydroid-extras install gapps
sudo systemctl restart waydroid-container.service
sudo waydroid-extras certified
```

Enter the registration id here: https://www.google.com/android/uncertified/?pli=1

> [!note]
> Google assistant kept reappearing after restart. Just disable it on settings > apps > default apps > assistant > set to none

it seems like Docker's NAT rules prevents packets from actually going in/out of Waydroid. To fix, create this [[3 Reference/structure/systemd]] service:

```toml
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



Enable:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now waydroid-net.service
```