---
{"publish":true,"aliases":["Useful Tmux Session, Window, and Pane Management"],"created":"2025-08-15T13:53:58.479+07:00","modified":"2025-08-15T13:53:58.480+07:00","published":"2025-08-15T13:53:58.480+07:00","cssclasses":"","creation-time":"2025-07-29 09:37","status":"baby","tag":null,"parent":"[[computers]]"}
---


## Navigating Panes

- Switch to pane: `Ctrl-b + arrow keys`
- Switch to pane by number: `Ctrl-b + q` then number
- Switch to last pane: `Ctrl-b + ;`
- Show pane numbers: `Ctrl-b + q`

## Combining/Moving Windows & Panes

- Move current pane to another window: `Ctrl-b + :move-pane -t 2`
- Move current pane to new window: `Ctrl-b + !`
- Join pane from another window: `Ctrl-b + :join-pane -s 2.1`
- Join entire window: `Ctrl-b + :join-pane -s 2`

## Swapping Pane Positions

- Swap with next pane: `Ctrl-b + }`
- Swap with previous pane: `Ctrl-b + {`
- Swap with specific pane: `Ctrl-b + :swap-pane -t 2`
- Rotate all panes forward: `Ctrl-b + Ctrl-o`
- Rotate all panes backward: `Ctrl-b + Alt-o`
- Move current pane up: `Ctrl-b + :swap-pane -U`
- Move current pane down: `Ctrl-b + :swap-pane -D`

## Resizing Panes

- Resize by 1 cell: `Ctrl-b + Ctrl-arrow keys`
- Resize by 5 cells: `Ctrl-b + Alt-arrow keys`
- Maximize/restore pane: `Ctrl-b + z`

## Layouts & Even Spacing

- Cycle through all layouts: `Ctrl-b + Spacebar`
- Even horizontal (side by side): `Ctrl-b + Alt-1`
- Even vertical (stacked): `Ctrl-b + Alt-2`
- Main horizontal: `Ctrl-b + Alt-3`
- Main vertical: `Ctrl-b + Alt-4`
- Tiled: `Ctrl-b + Alt-5`

The `Alt-1` through `Alt-5` shortcuts are the fastest way to manage layouts and get even spacing between panes.

