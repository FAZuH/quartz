---
{"publish":true,"aliases":["Limit Theorem for Monotone Events"],"created":"2025-10-14T04:15:27.063+07:00","modified":"2025-10-14T04:15:27.063+07:00","published":"2025-10-14T04:15:27.063+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-02 20:37","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
---


## Theorem

Let $\{ C_{n} \}$ : [[3 Reference/3.1 Sequences and Their Limits#3.1.1 Definition Sequence of real numbers\|Sequence]] of [[3 Reference/Def-events\|events]]

If $\{ C_{n} \}$ is [[3 Reference/3.3 Monotone Sequences#3.3.1 Definition of monotone sequences\|increasing]]

Then
$$
\lim_{ n \to \infty } P(C_{n}) = P\left(\lim_{ n \to \infty } C_{n}\right) = P\left(\bigcup_{n=1}^\infty C_{n}\right)
$$

If $\{ C_{n} \}$ is [[3 Reference/3.3 Monotone Sequences#3.3.1 Definition of monotone sequences\|decreasing]]

Then
$$
\lim_{ n \to \infty } P(C_{n}) = P\left(\lim_{ n \to \infty } C_{n}\right) = P\left(\bigcap_{n=1}^\infty C_{n}\right)
$$

## Proof

Let $R_{1}=C_{1}$ be any [[3 Reference/def-set_202510022014\|set]] and let $R_{n}=C_{n}\cap C_{n-1}^C$ for $n>1$



It follows that $\bigcup_{n=1}^\infty C_{n}=\bigcup_{n=1}^\infty R_n$ and that $R_{m}\cap R_{n}=\phi$, for $m\neq n$.

Also, $P(R_{n})=P(C_{n})-P(C_{n-1})$.

Applying the third axiom of [[3 Reference/Def-probability-set-function\|probability set function]] yields the following string of equalities:
$$
\begin{align}
P\left[\lim_{ n \to \infty } C_{n}\right] & = P\left( \bigcup_{n=1}^\infty C_{n} \right) \\
 & = P\left( \bigcup_{n=1}^\infty R_{n} \right) \\
 & = \sum_{n=1}^\infty P(R_{n}) \\
 & = \lim_{ n \to \infty } \sum_{j=1}^n P(R_{j}) \\
 & = \lim_{ n \to \infty } \left\{ P(C_{1}) + \sum_{j=2}^n [P(C_{j}) - P(C_{j-1})] \right\} \\
 & = \lim_{ n \to \infty } P(C_{n})
\end{align}
$$