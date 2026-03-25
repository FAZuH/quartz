---
publish: true
created: 2026-03-25T15:22:40.601+07:00
modified: 2026-03-25T15:22:40.602+07:00
published: 2026-03-25T15:22:40.602+07:00
creation-time: 2025-03-11 11:50
status: in progress
tags:
parent:
  - "[[sampling methods]]"
---

Systematic random sampling selects samples systematically from a population based on a fixed interval.

---

Systematic random sampling is a simpler alternative to simple random sampling, suitable for small, homogeneous populations with an ordered sampling frame.

Example:

- To estimate rice production per hectare in a region, the population consists of rice fields owned by residents.
- Fields are ordered by size (smallest to largest), and samples are drawn systematically.

Systematic random sampling involves **selecting the first unit randomly, then following a fixed pattern for subsequent units**.

## Performing systematic random sampling

1. Determine the interval ($k$):
   $$ k = \frac{N}{n} $$
   Where:
   - $N$: Population size
   - $n$: Sample size
   - $k$: Sampling interval (number of possible samples or groups)
2. Randomly choose a unit $X\_j$ where $j < k$.
3. Choose subsequent units: $X\_{j+k}, X\_{j+2k}, X\_{j+3k}, \dots$

Example:

- Population $N = 15$, sample $n = 3$, so $k = 15 / 3 = 5$.
- If $X\_1$ is chosen, the sample is $X\_1, X\_6, X\_{11}$.

## Characteristics

**Compared to simple random sampling**

- Simple random sampling: Samples are scattered randomly.
- Systematic random sampling: Samples follow a systematic pattern.

**Conditions for use**

1. A complete, up-to-date sampling frame exists.
2. The sampling frame follows a specific order (e.g., student IDs from smallest to largest).

**Weaknesses**

- If the sampling frame has systematic errors, bias may occur.
- Example: Sampling only husbands or wives from a list of 100 couples ($N = 200$, $n = 20$, $k = 10$) could result in a non-representative sample (e.g., all husbands: $X\_1, X\_{11}, X\_{21}, \dots$).

**Solution to the weaknesses**

- Reorder the sampling frame to ensure homogeneity (e.g., list all husbands first, then all wives).
- Example revised sample: $X\_1$ (husband), $X\_{11}$ (husband), $X\_{91}$ (husband), $X\_{101}$ (wife), $X\_{111}$ (wife), $X\_{191}$ (wife).

## Advantages

1. Simpler and faster than simple random sampling.
2. Does not require a random number table.
3. Effective for small, homogeneous populations with an ordered frame.

## Methods

### Method A

- Randomly select one unit from the first $k$ units, then proceed with interval $k$.
- Example: $N = 12$, $k = 3$, possible samples:
  - $X\_1, X\_4, X\_7, X\_{10}$
  - $X\_2, X\_5, X\_8, X\_{11}$
  - $X\_3, X\_6, X\_9, X\_{12}$
- Probability of selecting any sample: $\frac{1}{k}$.

### Method B

- Randomly select one unit from the entire population ($N$), then determine the starting point based on the remainder $r$ (where $r = j \mod k$).
- Example: $N = 12$, $k = 3$, if $X\_{11}$ is chosen, $r = 11 \mod 3 = 2$, start with $X\_2$, yielding $X\_2, X\_5, X\_8, X\_{11}$.
- Probability of selecting a sample: $\frac{n}{N}$.

## Considerations

- Systematic sampling assumes homogeneity within intervals. Consequently, it is less effective for heterogeneous populations or when $N$ is unknown (e.g., Method B cannot be used without a known $N$).
- If the population has hidden patterns (e.g., periodic trends), variance may increase, leading to bias.
- Precision depends on the sampling frame’s order and homogeneity.
