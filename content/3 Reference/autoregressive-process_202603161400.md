---
publish: true
aliases:
  - Autoregressive Process
  - AR Process
created: 2026-03-16T11:09:35.856+07:00
modified: 2026-03-16T11:09:35.856+07:00
published: 2026-03-16T11:09:35.856+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

A process where the current value is a linear combination of its own past values plus a random shock.
$$Z_t = \phi_1 Z_{t-1} + \phi_2 Z_{t-2} + \dots + \phi_p Z_{t-p} + a_t$$
where $\{a_t\}$ is white noise independent of past $Z$ values.
