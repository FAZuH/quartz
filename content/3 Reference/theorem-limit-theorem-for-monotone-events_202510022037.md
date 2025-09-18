---
{"publish":true,"aliases":["Limit Theorem for Monotone Events"],"created":"2025-10-02T20:37:59.041+07:00","modified":"2025-10-02T21:00:31.530+07:00","published":"2025-10-02T21:00:31.530+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-02 20:37","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
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