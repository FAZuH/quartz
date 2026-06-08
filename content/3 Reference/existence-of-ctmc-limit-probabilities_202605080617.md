---
publish: true
aliases:
  - Existence of CTMC Limit Probabilities
created: 2026-06-05T03:16:31.423+07:00
modified: 2026-06-05T03:16:31.424+07:00
published: 2026-06-05T03:16:31.424+07:00
creation-time: 2026-05-08 06:17
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Theorem

If a CTMC $\{X(t) : t \geq 0\}$ on state space $S$ is:

1. **Irreducible**, and
2. **Positive recurrent**

then for all $j \in S$:

$\pi_j = \lim_{t \to \infty} P_{ij}(t)$

exists and is **independent** of the initial state $i$. Such a process is called **ergodic**.

> [!TIP] Interpretation
> The conditions mirror those for discrete-time Markov chains: irreducible (all states communicate) and positive recurrent (expected return time is finite) guarantee a unique limiting distribution. Since CTMCs have no periodicity issues, these two conditions are sufficient.

## Implication: Balance Equations

When the limit distribution exists, the steady-state probabilities $\pi_j \geq 0$ satisfy the system of linear equations (balance equations):

$\nu_j \pi_j = \sum_{k \neq j} q_{kj} \pi_k, \quad \forall j$
$\sum_{k \in S} \pi_k = 1$

Also: $\pi_j = \nu_j / (\sum_{i \in S} \nu_i)$ in terms of the sojourn rates.

> [!NOTE]
> In practice, it is very difficult to prove positive recurrence for chains with infinitely many states. Instead, we solve the balance equations and determine the condition under which these probabilities exist.

## Related

- [[ctmc-limit-probabilities_202605080616|CTMC Limit Probabilities]]
- [[ctmc-balance-equations_202605080617|CTMC Balance Equations]]
- [[def-irreducible_202603280823|Irreducible]]
- [[def-ergodic-state_202603280835|Ergodic State]]

## Exercises

> [!NOTE] Back to [[kuis-2_202605211907#Roadmap|Roadmap 📖 → 🃏 → ✏]]

**Cek konvergensi BD process.** Untuk BD process dengan $\lambda_n = \lambda$, $\mu_n = n\mu$ (M/M/∞), periksa apakah limit probabilitas ada.

> [!NOTE]- Jawaban
> $\theta_n = \frac{\lambda_0 \cdots \lambda_{n-1}}{\mu_1 \cdots \mu_n} = \frac{\lambda^n}{n! \mu^n} = \frac{(\lambda/\mu)^n}{n!}$. $\sum_{n=0}^{\infty} \theta_n = \sum \frac{(\lambda/\mu)^n}{n!} = e^{\lambda/\mu} < \infty$. Jadi limit probabilitas ada: $\pi_n = \frac{(\lambda/\mu)^n e^{-\lambda/\mu}}{n!}$ (Poisson).

**Kondisi perlu ergodisitas.** Sebutkan dua syarat agar CTMC ergodik.

> [!NOTE]- Jawaban
> (1) Irreducible — semua state berkomunikasi. (2) Positive recurrent — expected return time ke setiap state finite. CTMC tidak memiliki masalah periodisitas (selalu aperiodik).
