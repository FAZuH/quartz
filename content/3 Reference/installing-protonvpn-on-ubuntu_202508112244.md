---
{"publish":true,"aliases":["Installing ProtonVPN on Ubuntu"],"created":"2025-08-11T22:44:22.887+07:00","modified":"2025-08-12T00:53:29.913+07:00","published":"2025-08-12T00:53:29.913+07:00","cssclasses":"","creation-time":"2025-08-11 22:44","status":"baby","tag":null,"parent":"[[self-hosting]]"}
---

https://protonvpn.com/support/official-linux-vpn-ubuntu

## Installing

ProtonVPN in Linux is a GUI app. See [[3 Reference/setting-up-an-x11-vnc-on-an-ubuntu-machine_202508112346\|Setting up an x11 VNC on an Ubuntu Machine]] to set up VNC if you're on a headless server.

```bash
wget https://repo.protonvpn.com/debian/dists/stable/main/binary-all/protonvpn-stable-release_1.0.8_all.deb
sudo dpkg -i ./protonvpn-stable-release_1.0.8_all.deb && sudo apt update
sudo apt install -y proton-vpn-gnome-desktop
```

## Removing

```bash
sudo apt autoremove proton-vpn-gnome-desktop && sudo apt purge protonvpn-stable-release
```