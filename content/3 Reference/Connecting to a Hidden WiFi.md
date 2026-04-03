---
publish: true
created: 2026-03-25T15:22:40.645+07:00
modified: 2026-03-25T15:22:40.645+07:00
published: 2026-03-25T15:22:40.645+07:00
tags:
  - content-type/procedural
cssclasses: ""
creation-time: 2025-04-17 19:12
status: complete
parent:
  - "[[network engineering]]"
---


Connecting to a hidden Wi-Fi network (one that doesn’t broadcast its SSID) requires manually entering the network details. Here’s how to do it on common devices:

## General Steps

1. Obtain Network Details:
    - **SSID** (the hidden network’s name).
    - **Password** (if the network is password-protected).
    - **Security Type** (e.g., WPA2, WPA3, or WEP; usually WPA2 or WPA3 for modern networks).
    - You may need to get these from the network administrator or router settings.

2. Access Wi-Fi Settings:
    Go to the Wi-Fi settings on your device.

3. Manually Add the Network:
    1. Look for an option like “Add Network,” “Other Network,” or “Join Other Network.”
    2. Enter the SSID exactly as provided (it’s case-sensitive).
    3. Select the correct security type.
    4. Enter the password.

4. Connect:
   Save or connect to the network. The device should join if the details are correct.

## Device-Specific Instructions

### Windows 10/11

1. Click the **Wi-Fi icon** in the system tray (bottom-right corner).
2. Click **Network & Internet Settings** > **Wi-Fi** > **Manage known networks** > **Add a new network**.
3. Enter the **Network name** (SSID), select the **Security type**, and input the **Password**.
4. Check **Connect even if the network is not broadcasting** if available.
5. Click **Save** and wait for the connection.

### Mac

1. Click the **Wi-Fi icon** in the menu bar and select **Join Other Network** (or go to **System Settings** > **Wi-Fi**).
2. Enter the **Network Name** (SSID), select the **Security type**, and input the **Password**.
3. Click **Join**
4. Optionally, check “Remember this network” to save it.

### iPhone/iPad (iOS)

1. Open **Settings** > **Wi-Fi**.
2. Scroll to the bottom and tap **Other** under “Other Network.”
3. Enter the **Network Name** (SSID), select the **Security type**, and input the **Password**.
4. Tap **Join** in the top-right corner.

### Android

1. Open **Settings** > **Network & Internet** > **Wi-Fi**.
2. Tap **Add Network** or **+** (may vary by device).
3. Enter the **SSID**, select the **Security type**, and input the **Password**.
4. Tap **Save** or **Connect**. Some devices have an option to “Show advanced options” to confirm the network is hidden.

## Tips

- **Double-check details**: Hidden SSIDs are case-sensitive, and incorrect security types or passwords will prevent connection.
- **Router proximity**: Ensure you’re within range of the Wi-Fi signal.
- **Forget and retry**: If the connection fails, “forget” the network in your device’s Wi-Fi settings and re-enter the details.
- **Router settings**: If you manage the network, you can access the router’s admin panel (usually via a browser at 192.168.0.1 or 192.168.1.1) to confirm or change the SSID, password, or security settings.

## Security Note

- Hidden Wi-Fi networks are not inherently more secure; they just don’t broadcast their SSID. Ensure the network uses strong encryption (WPA2 or WPA3) and a robust password.
- If connecting to an unfamiliar hidden network, verify its legitimacy to avoid security risks.
