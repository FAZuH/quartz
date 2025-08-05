---
{"publish":true,"aliases":["Setting up VNC using tightvnc on an Ubuntu Machine"],"created":"2025-08-04T19:24:30.009+07:00","modified":"2025-08-04T19:26:02.909+07:00","published":"2025-08-04T19:26:02.909+07:00","cssclasses":"","creation-time":"2025-08-04 19:24","status":"baby","tag":null,"parent":"[[self-hosting]]"}
---


## Setup

### 1. Install Required Packages

```bash
sudo apt update
sudo apt install -y tightvncserver xfce4 xfce4-goodies firefox xfonts-base xfonts-75dpi xfonts-100dpi
```

### 2. Initial VNC Setup (One-time)

Start VNC server once to create initial config and set password:
```bash
vncserver :1
```

You'll be prompted to set a VNC password. Remember this!

When asked about view-only password, choose 'n'

Stop the server to configure it:
```bash
vncserver -kill :1
```

### 3. Configure VNC Startup Script

```bash
# Backup original startup script
mv ~/.vnc/xstartup ~/.vnc/xstartup.bak

# Create new startup script for XFCE
cat > ~/.vnc/xstartup << 'EOF'
#!/bin/bash
xrdb $HOME/.Xresources
startxfce4 &
EOF

# Make it executable
chmod +x ~/.vnc/xstartup
```

### 4. Start VNC Server

```bash
vncserver :1 -geometry 1920x1080 -depth 24 -interface 100.64.0.9
```

### 5. Run your app

```bash
DISPLAY=:1 ./app
```

## Connection Details

**VNC Client Connection:**

- **Address**: `100.64.0.9:5901`
- **Port**: `5901`
- **Password**: The password you set in step 2

## Useful Management Commands

```bash
# Check if VNC is running
ps aux | grep vnc

# Stop VNC server
vncserver -kill :1

# Restart VNC server
vncserver -kill :1
vncserver :1 -geometry 1920x1080 -depth 24 -interface 100.64.0.9

# List all VNC sessions
vncserver -list
```

## Quick Start Script (Optional)

Create a convenience script for future use:

```bash
cat > ~/start_vnc.sh << 'EOF'
#!/bin/bash
echo "Starting VNC server on 100.64.0.9:5901..."
vncserver :1 -geometry 1920x1080 -depth 24 -interface 100.64.0.9
echo "VNC server started. Connect to 100.64.0.9:5901"
echo "To run your app: DISPLAY=:1 uv run warlock"
EOF

chmod +x ~/start_vnc.sh
```

Then you can simply run:

```bash
~/start_vnc.sh
```

## Summary

1. Run the setup commands above (steps 1-3 are one-time only)
2. Start VNC: `vncserver :1 -geometry 1920x1080 -depth 24 -interface 100.64.0.9`
3. Run your app: `DISPLAY=:1 uv run warlock`
4. Connect VNC client to: `100.64.0.9:5901` with your VNC password

The Firefox browser from your Playwright application will appear in the VNC session, allowing you to interact with it for CAPTCHA solving.

