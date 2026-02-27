---
publish: true
aliases:
  - Best Critical Region
  - Best Test
created: 2026-02-22T19:23:58.380+07:00
modified: 2026-02-22T19:23:58.380+07:00
published: 2026-02-22T19:23:58.380+07:00
cssclasses: ""
creation-time: 2025-08-05 21:10
status: baby
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---



## Definition
Let  $C$ : [[3 Reference/def-subset_202507240733\|Subset]] of [[3 Reference/Def-sample-space\|sample space]]

If
1. $$P_{\theta'}[\mathbf{X}\in C]=\alpha$$
2. $$ \forall A\subset C, P_{\theta'}[\mathbf{X}\in A]=\alpha\implies P_{\theta''}[\mathbf{X}\in C]\geq P_{\theta''}[\mathbf{X}\in A] $$

Then 
- We say $C$ is a **best critical region** of [[3 Reference/def-size-of-critical-region_202507291323\|size]] $\alpha$ for [[3 Reference/def-test_202508050827\|testing]] a [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|simple statistical hypothesis]] $H_{0} : \theta=\theta'$ against the [[3 Reference/def-hypothesis_202508050806\|alternative hypothesis]] $H_{1} : \theta=\theta''$
- We say the test of $C$ a **best test**

## Related theorems
- [[3 Reference/theorem-neyman-pearson-theorem_202508052132\|Neyman-Pearson Theorem]]