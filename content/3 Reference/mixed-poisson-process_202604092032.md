---
publish: true
aliases:
  - Mixed Poisson Process
  - Conditional Poisson Process
created: 2026-04-09T23:29:02.796+07:00
modified: 2026-04-10T04:42:48.284+07:00
published: 2026-04-10T04:42:48.284+07:00
creation-time: 2026-04-09 20:32
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---

> Poisson Process with many possible rates $\lambda$
>
> The rate occurs probabistically, independent of time

## Definition

Let $\{N(t): t \geq 0 \}$ be a [[counting-process_202604031839|Counting Process]].

We say that $N(t)$ is a **Mixed Poisson Process** if, conditional on a positive random variable $L = \lambda$, the process $N(t)$ is a [[poisson-process_202604031845|Poisson process]] having rate $\lambda$.

If the PDF of $L$ is $g(\lambda)$, then:
$P\{N(t+s) - N(s) = n\} = \int_0^\infty \frac{e^{-\lambda t}(\lambda t)^n}{n!} g(\lambda) d\lambda$

## Properties

1. [[independent-and-stationary-increments_202604031839|Stationary increments]]
2. **not** have [[independent-and-stationary-increments_202604031839|Independent Increments]]

Property 2 is because knowing how many events occur in an interval gives information about the possible value of $L$, which affects the distribution of the number of events in any other interval.

## Example

> **Scenario**: Customers arrive at a store, but the rate varies unpredictably by day. The rate $\Lambda$ is modeled as random: $\Lambda = 3$ with probability $0.4$ (slow day), $\Lambda = 8$ with probability $0.6$ (busy day).

**Given $\Lambda = \lambda$**, arrivals follow a Poisson process with fixed rate $\lambda$.

**Marginal distribution of $N(1)$** (number of arrivals in 1 hour):

$P(N(1) = n) = 0.4 \cdot P(\text{Po}(3) = n) + 0.6 \cdot P(\text{Po}(8) = n)$

For $n = 5$:

$P(N(1) = 5) = 0.4 \cdot \frac{e^{-3}3^5}{5!} + 0.6 \cdot \frac{e^{-8}8^5}{5!} \approx 0.4 \times 0.101 + 0.6 \times 0.092 \approx 0.095$

**Why independent increments fail**: Observing many arrivals early suggests $\Lambda = 8$ (busy day), which increases predictions for later intervals. The past informs the future via the shared $\Lambda$.

**Contrast with regular Poisson**: A fixed-rate Poisson process has rate $\lambda = 5$ every day. The mixed Poisson captures **rate uncertainty**.

### Common Case: Gamma Mixing

If $\Lambda \sim \text{Gamma}(\alpha, \beta)$, then $N(t)$ marginally follows a **Negative Binomial** distribution. This is the Gamma-Poisson mixture — a standard result used in Bayesian inference and overdispersed count data.
