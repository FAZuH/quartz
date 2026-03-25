---
publish: true
aliases:
  - Setting up an x11 VNC on an Ubuntu Machine
created: 2026-03-25T15:22:40.609+07:00
modified: 2026-03-25T15:22:40.609+07:00
published: 2026-03-25T15:22:40.609+07:00
creation-time: 2025-08-11 23:46
status: in progress
tag:
parent: "[[linux]]"
---

You will be prompted for VNC password (6-8 characters) on `vncpasswd` command

Because vncserver.service runs as user root, vncpasswd has to be run as sudo

```bash
# 1. Install deps
sudo apt update
sudo apt install -y tightvncserver xfce4 xfce4-goodies dbus-x11


# 2. Create scripts
sudo tee /usr/local/bin/vncserver-start > /dev/null <<EOF
#!/bin/bash
# Kill any existing VNC sessions
vncserver -kill :1 >/dev/null 2>&1 || true

# Start VNC
vncserver :1 -geometry 1920x1080 -depth 24 -interface $(tailscale ip --4)
EOF

mkdir -p $HOME/.vnc
tee $HOME/.vnc/xstartup > /dev/null <<EOF
#!/bin/bash
xrdb $HOME/.Xresources
startxfce4 &
EOF

sudo chmod +x /usr/local/bin/vncserver-start
chmod +x $HOME/.vnc/xstartup


# 3. Set password
sudo vncpasswd


# 4. Setup firewall
sudo iptables -A INPUT -p tcp --dport 5901 -s 100.64.0.0/10 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 5901 -j DROP


# 5. Setup systemd service
sudo tee /etc/systemd/system/vncserver.service > /dev/null << 'EOF'
[Unit]
Description=TightVNC Server
After=network.target

[Service]
Type=forking
User=root
ExecStart=/usr/local/bin/vncserver-start
ExecStop=/usr/bin/vncserver -kill :1
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable vncserver.service
sudo systemctl start vncserver.service
```
