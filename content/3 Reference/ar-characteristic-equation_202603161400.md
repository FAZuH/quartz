---
publish: true
aliases:
  - AR Characteristic Equation
created: 2026-03-25T15:22:40.598+07:00
modified: 2026-03-25T15:22:40.598+07:00
published: 2026-03-25T15:22:40.598+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

By expressing an AR(p) process using the [[backshift-operator_202603161400|backshift operator]]:
$$(1 - \phi\_1 B - \phi\_2 B^2 - \dots - \phi\_p B^p) Z\_t = a\_t$$
The characteristic equation is:
$$1 - \phi\_1 x - \phi\_2 x^2 - \dots - \phi\_p x^p = 0$$
The process is stationary if all roots of this equation lie outside the unit circle ($|x| > 1$).
