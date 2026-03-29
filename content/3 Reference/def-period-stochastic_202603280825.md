---
publish: true
aliases:
  - Period (Stochastic)
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
creation-time: 2026-03-28 08:25
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

The **period** of [[def-state-stochastic_202603280801|state]] $i$ is defined as:

$$d(i) = \gcd{n \geq 1 : P\_{ii}^{(n)} > 0}$$

The GCD of all steps $n$ at which it is possible to return to state $i$.

- **Periodic**: period $d > 1$ — returns are confined to multiples of $d$
- **Aperiodic**: period $d = 1$ — no such rhythm, can return at irregular times

## Example

### Periodic State (d=2)

A swing at the highest point on the right side:

- If at highest point now (Step 0), must swing down→left→back→right
- Can only be at that state at Step 2, 4, 6, etc.
- Period $d = 2$

### Aperiodic State (d=1)

Checking phone for notifications:

- Can return at Step 1, 5, 12, or any time
- GCD of all possible return times is 1

## Related

- [[about-aperiodic-vs-periodic_202603280826|Aperiodic vs Periodic State]]
- [[def-ergodic-state_202603280835|Ergodic State]]
- [[def-regular-tpm_202603280832|Regular TPM]]
