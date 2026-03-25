---
publish: true
aliases:
  - Autoregressive Process
  - AR Process
created: 2026-03-25T15:22:40.616+07:00
modified: 2026-03-25T15:22:40.616+07:00
published: 2026-03-25T15:22:40.616+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A process where the current value is a linear combination of its own past values plus a random shock.
$$Z\_t = \phi\_1 Z\_{t-1} + \phi\_2 Z\_{t-2} + \dots + \phi\_p Z\_{t-p} + a\_t$$
where ${a\_t}$ is white noise independent of past $Z$ values.
