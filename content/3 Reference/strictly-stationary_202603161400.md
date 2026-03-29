---
publish: true
aliases:
  - Strictly Stationary
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T21:10:50.229+07:00
published: 2026-03-29T21:10:50.229+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A [[stochastic-process_202603161400|stochastic process]] ${ Y\_{t} }$ is **strictly stationary**

If for any $n\in \mathbb{Z}^+$, any set of time points ${ t\_{1},t\_{2},\dots,t\_{n} }$, [[lag-definition_202603161400|lag]] $k$ the joint cumulative distribution function of $(Y\_{t\_1}, Y\_{t\_2}, \dots, Y\_{t\_n})$ is identical to that of $(Y\_{t\_1+k}, Y\_{t\_2+k}, \dots, Y\_{t\_n+k})$

## Relationship with Weak Stationarity

Let ${ Y\_{t} }$ be **strictly stationary** process.

If $\text{Var}(Y\_{t})$ is finite for all $t$

The ${ Y\_{t} }$ is also [[weakly-stationary_202603161400|weakly stationary]]

> [!NOTE] Converse is Not True
> Weak stationarity does NOT imply strict stationarity. A process can have constant mean and covariance without having identical distributions at different times.

## Procedure: Proving Strict Stationarity

The standard approach uses the **i.i.d. white noise representation**:

1. **Express** $Y\_t$ as a measurable function of i.i.d. random variables
   - e.g., $Y\_t = f(a\_t, a\_{t-1}, a\_{t-2}, \dots)$

2. **Write** the shifted version $Y\_{t+k}$ in terms of the same i.i.d. variables with shifted indices
   - e.g., $Y\_{t+k} = f(a\_{t+k}, a\_{t+k-1}, a\_{t+k-2}, \dots)$

3. **Argue** that the joint distribution of $(Y\_{t\_1+k}, \dots, Y\_{t\_n+k})$ equals $(Y\_{t\_1}, \dots, Y\_{t\_n})$ because:
   - i.i.d. variables are exchangeable under index shifts
   - The transformation $f$ is the same for all time points

4. **Conclude**: All finite-dimensional distributions are time-invariant $\implies$ strictly stationary

> [!TIP] Key Requirement
> Strict stationarity requires:
>
> - The process depends on **i.i.d.** (not just uncorrelated) variables
> - Time enters **only through indices** of these i.i.d. variables
> - No explicit time dependence (like $t \cdot a\_t$ or $t + Y\_{t-1}$)

## Example: MA(1) Process

**Process**: $Y\_t = a\_t - \theta a\_{t-1}$ where ${a\_t}$ are i.i.d. white noise.

**Claim**: ${Y\_t}$ is strictly stationary.

**Proof**:

1. $Y\_t$ depends on $(a\_t, a\_{t-1})$
2. Shifted version: $Y\_{t+k} = a\_{t+k} - \theta a\_{t+k-1}$
3. For any $(t\_1, \dots, t\_n)$:
   $$(Y\_{t\_1+k}, \dots, Y\_{t\_n+k}) = (a\_{t\_1+k} - \theta a\_{t\_1+k-1}, \dots, a\_{t\_n+k} - \theta a\_{t\_n+k-1})$$
4. Since ${a\_t}$ are i.i.d., the joint distribution of $(a\_{t\_1+k}, a\_{t\_1+k-1}, \dots)$ equals that of $(a\_{t\_1}, a\_{t\_1-1}, \dots)$
5. Therefore $(Y\_{t\_1+k}, \dots, Y\_{t\_n+k}) \stackrel{d}{=} (Y\_{t\_1}, \dots, Y\_{t\_n})$

$\blacksquare$

## Example: AR(1) Process with $|\phi| < 1$

**Process**: $Y\_t = \phi Y\_{t-1} + a\_t$ where ${a\_t}$ are i.i.d. and $|\phi| < 1$.

**Claim**: ${Y\_t}$ is strictly stationary.

**Proof**:

1. Solve recursively: $Y\_t = \sum\_{j=0}^{\infty} \phi^j a\_{t-j}$ (converges since $|\phi| < 1$)
2. Shifted version: $Y\_{t+k} = \sum\_{j=0}^{\infty} \phi^j a\_{t+k-j}$
3. For any $(t\_1, \dots, t\_n)$ and lag $k$:
   - $(Y\_{t\_1+k}, \dots, Y\_{t\_n+k})$ depends on $(a\_{t\_1+k}, a\_{t\_1+k-1}, \dots)$
   - This has the same joint distribution as $(a\_{t\_1}, a\_{t\_1-1}, \dots)$ by i.i.d.
4. Therefore $(Y\_{t\_1+k}, \dots, Y\_{t\_n+k}) \stackrel{d}{=} (Y\_{t\_1}, \dots, Y\_{t\_n})$

$\blacksquare$

## Example: Random Walk (NOT Strictly Stationary)

**Process**: $Y\_t = Y\_{t-1} + a\_t = \sum\_{i=1}^t a\_i$ where ${a\_t}$ are i.i.d.

**Claim**: ${Y\_t}$ is **NOT** strictly stationary.

**Proof by Counterexample**:

Consider the joint distribution of $(Y\_1, Y\_2)$:
$$Y\_1 = a\_1 \qquad Y\_2 = a\_1 + a\_2$$

Shifted by $k=1$: $(Y\_2, Y\_3)$:
$$Y\_2 = a\_1 + a\_2 \qquad Y\_3 = a\_1 + a\_2 + a\_3$$

The two distributions are different:

- $(Y\_1, Y\_2)$ depends on 2 random variables
- $(Y\_2, Y\_3)$ depends on 3 random variables

Joint distributions change with time $\implies$ **not strictly stationary**.

$\blacksquare$

## Related

- [[weakly-stationary_202603161400|Weakly Stationary]] — requires only constant mean and covariance
- [[white-noise_202603161400|White Noise]] — i.i.d. white noise is strictly stationary
- [[random-walk_202603161400|Random Walk]] — example of non-stationary process
