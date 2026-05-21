---
publish: true
aliases:
  - Playing Arknights on Linux via Android Emulator
created: 2026-05-16T22:02:06.645+07:00
modified: 2026-05-19T12:19:30.010+07:00
published: 2026-05-19T12:19:30.010+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-05-16 22:02
status: in progress
parent:
  - "[[linux]]"
---

Based on https://gist.github.com/aadi58002/ae640e9537cc39596b8bf9b25c54fb87. Archived 2026-05-16 22:03 at [[2 Personal/playing-arknights-on-linux-via-android-emulator_202605162202]]

---

## Installation

```bash
yay -S android-sdk-cmdline-tools-latest

sudo chown -R "$USER:$USER" /opt/android-sdk
sdkmanager --install \
	"platform-tools" \
	"emulator" \
	"build-tools;34.0.0" \
	"platforms;android-34" \
	"system-images;android-34;google_apis_playstore;x86_64"
	
```

Add `export PATH=$PATH:/opt/android-sdk/emulator:/opt/android-sdk/platform-tools:/opt/android-sdk/cmdline-tools/latest/bin` to your .rc

```bash
avdmanager -v create avd \
	-k "system-images;android-34;google_apis_playstore;x86_64" \
	--device "tv_1080p" \
	-n "arknights" \
	--force

cfg=~/.config/.android/avd/arknights.avd/config.ini
for kv in "hw.ramSize=8192" "hw.cpu.ncore=8" "hw.keyboard=yes" "disk.dataPartition.size=40G" "window.fullscreen=yes" "skin.name=1920x1200"; do
    key="${kv%%=*}"
    if grep -q "^${key}=" "$cfg"; then
        sed -i "s|^${key}=.*|${kv}|" "$cfg"
    else
        echo "$kv" >> "$cfg"
    fi
done

# Start the Emulator (Wayland Users)
ANDROID_AVD_HOME=~/.config/.android/avd QT_QPA_PLATFORM=xcb emulator @arknights \
    -gpu host \
    -no-snapshot \
    -no-boot-anim \
    -fixed-scale
```

On Vulkan errors: `sudo pacman -S vulkan-tools`

Once the emulator boots:

1. Open Google Play
2. Sign in with your Google account
3. Search for **Arknights** in the Play Store and install it.
4. Log in to your account and enjoy playing Arknights on Linux.

## QoL: Recommended

1. Enable developer mode in android
2. Set the setting "Smallest Width" to 1315.
3. Adjust the number as needed till you get the tablet mode. (1315 is the number which worked for 2k resolution for me)

(This changes the entire android use to in tablet mode which is in my opinion miles better to use on desktop)

## QoL: Game Launcher

The below script launches the emulator and opens Arknights automatically.

```bash
#!/usr/bin/env bash
set -euo pipefail

EMU_NAME="arknights"
EMU_BIN="/opt/android-sdk/emulator/emulator"
DEVICE="emulator-5554"
APP_COMPONENT="com.YoStarEN.Arknights/com.u8.sdk.U8UnityContext"

ANDROID_AVD_HOME=~/.config/.android/avd QT_QPA_PLATFORM=xcb "$EMU_BIN" @"$EMU_NAME" \
    -gpu host -no-snapshot -no-boot-anim -fixed-scale &
EMU_PID=$!

echo "Waiting for emulator device..."
adb wait-for-device

echo "Waiting for Android boot to complete..."
while [[ "$(adb -s "$DEVICE" shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')" != "1" ]]; do
    sleep 1
done

echo "Launching Arknights..."
adb -s "$DEVICE" shell am start -n "$APP_COMPONENT"

echo "Emulator running (PID $EMU_PID)"
wait "$EMU_PID"
```

> [!warning]
> Replace "emulator-5554" at this line: `DEVICE="emulator-5554"` to your emulator name with `adb devices`.
> 
> The emulator must be running when you run `adb devices`.

To add this script to your application list, put the script at `~/.local/bin/arknights.sh`, and the attached icon below at `~/.local/share/icons/arknights.png`.

Then, enter the command below:

```bash
cat << EOF > ~/.local/share/applications/arknights.desktop
[Desktop Entry]
Name=Arknights (QEMU)
Exec=$HOME/.local/bin/arknights.sh
Icon=$HOME/.local/share/icons/arknights.png
Type=Application
Categories=Game;StrategyGame;
Terminal=false
Comment=Launch Arknights via QEMU emulator
Keywords=arknights;game;qemu;emulator;gacha;
EOF
```

Icon:

![[assets/arknights.png|216]]

## QoL: Emulator launcher

Using similar steps as [[2 Personal/playing-arknights-on-linux-via-android-emulator_202605162202#QoL Game Launcher]], write this script to `~/.local/bin/android-qemu.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

EMU_NAME="arknights"
EMU_BIN="/opt/android-sdk/emulator/emulator"
DEVICE="emulator-5554"

ANDROID_AVD_HOME=~/.config/.android/avd QT_QPA_PLATFORM=xcb "$EMU_BIN" @"$EMU_NAME" \
    -gpu host -no-snapshot -no-boot-anim -fixed-scale &
EMU_PID=$!

echo "Waiting for emulator device..."
adb wait-for-device

echo "Waiting for Android boot to complete..."
while [[ "$(adb -s "$DEVICE" shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')" != "1" ]]; do
    sleep 1
done

echo "Emulator running (PID $EMU_PID)"
wait "$EMU_PID"
```

Then run the following command to add the script to your application list:

```bash
cat << EOF > ~/.local/share/applications/android-qemu.desktop
[Desktop Entry]
Name=Android (QEMU)
Exec=$HOME/.local/bin/android-qemu.sh
Icon=$HOME/.local/share/icons/android-qemu.png
Type=Application
Categories=System;Emulator;Utility;
Terminal=false
Comment=Run Android environment via QEMU
Keywords=android;qemu;vm;emulator;
EOF
```

icon:

![[assets/android-qemu.png|167]]


## QoL: Shrinking image volume

> [!warning]
> This section does not actually work. I am still experimenting my options on shriking the imaage.

The `google_apis_playstore` system image uses a production-signed system partition with full-disk encryption. This causes the image file to take up the full partition size (in this example, 40GB), even when less is used.

This section roots the image and runs `fstrim`, which tells the filesystem to issue DISCARD commands to the underlying block device for all blocks it considers free. The block device receives those DISCARD commands and can zero out those sectors, making them actually [sparse](https://wiki.archlinux.org/title/Sparse_file).

Make sure the emulator is running for this.

```bash
git clone https://gitlab.com/newbit/rootAVD.git
cd rootAVD
```

Your installation location may be different. But if you followed this guide, you can root with:

```bash
ANDROID_HOME=/opt/android-sdk ./rootAVD.sh system-images/android-34/google_apis_playstore/x86_64/ramdisk.img
```

The script closes your emulator. Start in back again, and open Magisk app inside the emulator. You can use [[2 Personal/playing-arknights-on-linux-via-android-emulator_202605162202#QoL Emulator launcher]] for this

Then,

```bash
adb shell su -c "sm fstrim"
```

This command will open a popup in Magick. Accept it. Then,

```bash
cd ~/.config/.android/avd/arknights.avd
qemu-img convert -O qcow2 -c userdata-qemu.img.qcow2 userdata-qemu-sparse.img.qcow2
du -sh userdata-qemu-sparse.img.qcow2
```