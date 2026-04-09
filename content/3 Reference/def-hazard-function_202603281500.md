---
publish: true
aliases:
  - Hazard Function
created: 2026-04-09T23:07:39.160+07:00
modified: 2026-04-09T23:07:39.161+07:00
published: 2026-04-09T23:07:39.161+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Hazard Function $h(t)$**: Instantaneous failure rate at time $t$ given survival until $t$.

$$h(t) = \lim_{\Delta t \to 0} \frac{\Pr(t < T \leq t+\Delta t \mid T > t)}{\Delta t} = \frac{f(t)}{S(t)}$$

## About Hazard Function

<u>Rate of the event occurring per unit time(t), among those who haven't experienced the event yet.</u>

- A high $h(t)$ at some time $t$ means: among those still alive at $t$, failures are happening rapidly.
- A low $h(t)$ means failures are rare at that moment.

The "instantaneous" part means you're shrinking the window to a single point in time rather than measuring over a finite interval.

## Properties

Can be:
- Increasing
- Decreasing
- Constant
- Bathtub-shaped

## Interpretation Example

100 light bulbs running at time $t=1000$ hours. 5 fail between 1000 and 1001 hours.

$$h(1000) \approx \frac{5/100}{1} = 0.05 \text{ per hour}$$

At $t=1000$, survivors are failing at a rate of 0.05 per hour.

## Related

- [[3 Reference/def-survival-function_202603281500\|Survival Function]]
- [[3 Reference/theorem-hazard-function-derivation_202603281500\|Hazard Function Derivation]]