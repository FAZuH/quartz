---
publish: true
aliases:
  - Conditional Probability and Expectation Review
created: 2026-04-09T23:29:02.783+07:00
modified: 2026-04-09T23:29:02.784+07:00
published: 2026-04-09T23:29:02.784+07:00
creation-time: 2026-04-09 20:32
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---

- **Conditional Probability**: $P\{A|B\} = \frac{P\{A \cap B\}}{P\{B\}}$ for $P\{B\} > 0$.
- **Law of Total Probability**: $P\{A\} = \sum_i P\{A|B_i\}P\{B_i\}$ for a partition $\{B_i\}$.
- **Conditional Expectation**: Discrete: $E[X|Y=y] = \sum x P\{X=x|Y=y\}$. Continuous: $E[X|Y=y] = \int x f_{X|Y}(x|y) dx$.
- **Law of Iterative Expectations**: $E[X] = E[E[X|Y]]$.
