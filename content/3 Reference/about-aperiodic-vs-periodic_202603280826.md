---
publish: true
aliases:
  - Aperiodic vs Periodic State
created: 2026-03-29T12:54:01.176+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
cssclasses: ""
creation-time: 2026-03-28 08:26
status: in progress
parent:
  - "[[stochastic-model]]"
---


## About Aperiodic vs Periodic State

### Periodic State

A [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ has [[3 Reference/def-period-stochastic_202603280825\|period]] $d > 1$ if you can only return to that state in a number of steps ($n$) that is a multiple of $d$.

**Example: A Swing**

Imagine a child on a swing. Let the **State** be "The swing is at the highest point on the right side."
- If the swing is at the highest point now (Step 0), it must swing down to the middle, then to the left, then back to the middle, before returning to the right.
- It takes exactly **2 full "ticks"** to return.
- You can only be in that state at Step 2, 4, 6, etc.
- Period $d = 2$

### Aperiodic State

A state is aperiodic if its period $d = 1$. You can return at irregular times — no fixed "rhythm."

**Example: Checking Phone**

Let the **State** be "You are looking at your phone screen."
- You look at your phone now (Step 0).
- You might look again at Step 1, Step 5, or Step 12.
- The GCD of all possible return times is 1.
- No rule saying you can only check every 3 minutes.

## Related

- [[3 Reference/def-period-stochastic_202603280825\|Period (Stochastic)]]
- [[3 Reference/def-ergodic-state_202603280835\|Ergodic State]]
