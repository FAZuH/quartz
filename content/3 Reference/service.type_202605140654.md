---
publish: true
aliases:
  - Service.Type
created: 2026-05-14T06:54:01.824+07:00
modified: 2026-05-14T06:54:10.054+07:00
published: 2026-05-14T06:54:10.054+07:00
tags:
  - 
creation-time: 2026-05-14 06:54
status: in progress
parent:
  - "[[systemd]]"
---

How systemd determines when a service is considered "started" (i.e. when `After=` dependents can proceed).

Common values:

- `simple` (default) — started as soon as the main process is forked
- `exec` — started after the binary is exec'd
- `forking` — started after the parent process exits (traditional daemon behavior)
- `notify` — started after the process sends `sd_notify(READY=1)`
- `oneshot` — started after the process exits (for short-lived tasks)
- `dbus` — started after acquiring a D-Bus name
