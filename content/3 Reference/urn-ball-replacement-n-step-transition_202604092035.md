---
publish: true
aliases:
  - Urn Ball Replacement n-step Transition
created: 2026-04-09T23:07:39.756+07:00
modified: 2026-04-09T23:07:39.757+07:00
published: 2026-04-09T23:07:39.757+07:00
cssclasses: ""
creation-time: 2026-04-09 20:35
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---


## Example: Urn Ball Replacement

**Setup:**

- Urn always has exactly 2 balls (red or blue)
- At each step: pick a ball, replace it with probability 0.8 same color, 0.2 opposite color
- Initial: both balls red (state 2)
- Find: P(5th ball selected is red)

**State Space:**

- State 0: 0 red balls (both blue)
- State 1: 1 red ball, 1 blue ball
- State 2: 2 red balls (both red)

**Understanding Transitions from State 2 (both red):**

You pick a ball. Since both are red, you definitely pick red.

- With prob 0.8: replace with red → stay at 2 red balls (P_{22} = 0.8)
- With prob 0.2: replace with blue → now have 1 red, 1 blue (P_{21} = 0.2)
- P_{20} = 0 (impossible to go from 2 red to 0 red in one step)

**Understanding Transitions from State 1 (1 red, 1 blue):**

You pick a ball. Equal chance of picking red or blue (each prob 0.5).

_Case 1: Pick red (prob 0.5)_

- Replace with red (prob 0.8) → still 1R, 1B (state 1)
- Replace with blue (prob 0.2) → now 0R, 2B (state 0)

_Case 2: Pick blue (prob 0.5)_

- Replace with blue (prob 0.8) → still 1R, 1B (state 1)
- Replace with red (prob 0.2) → now 2R, 0B (state 2)

So:

- P_{10} = 0.5 × 0.2 = 0.1
- P_{11} = 0.5 × 0.8 + 0.5 × 0.8 = 0.8
- P_{12} = 0.5 × 0.2 = 0.1

**Understanding Transitions from State 0 (both blue):**

Symmetric to state 2:

- P_{00} = 0.8 (pick blue, replace with blue)
- P_{01} = 0.2 (pick blue, replace with red)
- P_{02} = 0

**Transition Matrix:** 
$$ \mathbf{P} = \begin{bmatrix} 0.8 & 0.2 & 0 \\ 0.1 & 0.8 & 0.1 \\ 0 & 0.2 & 0.8 \end{bmatrix} $$

**Finding P(5th ball is red):**

The 5th ball is red if at the moment of the 5th selection, we pick a red ball.

Starting at state 2 (both red initially), after 4 replacements we need the distribution over states, then calculate probability of picking red from each state.

Compute P^(4) starting from state 2, then:

- From state 0: prob of picking red = 0
- From state 1: prob of picking red = 0.5
- From state 2: prob of picking red = 1

P(5th ball red) = P^(4)_{20} × 0 + P^(4)_{21} × 0.5 + P^(4)_{22} × 1

**Computing P^(4) using Chapman-Kolmogorov**

We'll compute P^(4) = P^(2) × P^(2), breaking the 4 steps into two 2-step segments.

**Step 1: Compute P^(2) = P × P**

$$
\begin{align*}
\mathbf{P}^{(2)} & = \begin{bmatrix}
0.8 & 0.2 & 0 \\
0.1 & 0.8 & 0.1 \\
0 & 0.2 & 0.8
\end{bmatrix} \times \begin{bmatrix}
0.8 & 0.2 & 0 \\
0.1 & 0.8 & 0.1 \\
0 & 0.2 & 0.8
\end{bmatrix}\\
& =  \begin{bmatrix}
0.66 & 0.32 & 0.02 \\
0.16 & 0.68 & 0.16 \\
0.02 & 0.32 & 0.66
\end{bmatrix}
\end{align*}
$$

**Step 2: Compute P^(4) = P^(2) × P^(2)**

$$
\begin{align*}
\mathbf{P}^{(4)} & = \begin{bmatrix}
0.66 & 0.32 & 0.02 \\
0.16 & 0.68 & 0.16 \\
0.02 & 0.32 & 0.66
\end{bmatrix} \times \begin{bmatrix}
0.66 & 0.32 & 0.02 \\
0.16 & 0.68 & 0.16 \\
0.02 & 0.32 & 0.66
\end{bmatrix} \\
& = 
\begin{bmatrix}
0.4872 & 0.4352 & 0.0776 \\
0.2176 & 0.5648 & 0.2176 \\
0.0776 & 0.4352 & 0.4872
\end{bmatrix}
\end{align*}
$$

**Final Answer:**

$$
\begin{align*}
P(\text{5th ball is red } \mid \text{start with 2 red}) & = P^{(4)}_{20}(0) + P^{(4)}_{21}(0.5) + P^{(4)}_{22}(1) \\
& = 0.0776(0) + 0.4352(0.5) + 0.4872(1) \\
& = 0 + 0.2176 + 0.4872 \\
& = 0.7048\quad (\text{or } 70.48\%)
\end{align*}
$$