---
publish: true
aliases:
  - Best Critical Region
  - Best Test
created: 2026-03-25T15:22:40.624+07:00
modified: 2026-03-25T15:22:40.624+07:00
published: 2026-03-25T15:22:40.624+07:00
creation-time: 2025-08-05 21:10
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let  $C$ : [[def-subset_202507240733|Subset]] of [[Def-sample-space|sample space]]

If

1. $$P\_{\theta'}\[\mathbf{X}\in C]=\alpha$$
2. $$ \forall A\subset C, P\_{\theta'}\[\mathbf{X}\in A]=\alpha\implies P\_{\theta''}\[\mathbf{X}\in C]\geq P\_{\theta''}\[\mathbf{X}\in A] $$

Then

- We say $C$ is a **best critical region** of [[def-size-of-critical-region_202507291323|size]] $\alpha$ for [[def-test_202508050827|testing]] a [[def-types-of-statistical-hypotheses_202508051003|simple statistical hypothesis]] $H\_{0} : \theta=\theta'$ against the [[def-hypothesis_202508050806|alternative hypothesis]] $H\_{1} : \theta=\theta''$
- We say the test of $C$ a **best test**

## Related theorems

- [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]]
