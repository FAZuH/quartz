---
{"creation-time":"2025-03-11 11:50","status":"ongoing","tags":null,"parent":["[[sampling methods]]"],"publish":true,"PassFrontmatter":true}
---


Systematic random sampling is a simpler alternative to simple random sampling, suitable for small, homogeneous populations with an ordered sampling frame.

Unlike simple random sampling, systematic random sampling does not require a random number table. Instead, it **selects samples systematically from a population based on a fixed interval**.

Example:
- To estimate rice production per hectare in a region, the population consists of rice fields owned by residents.
- Fields are ordered by size (smallest to largest), and samples are drawn systematically.

Systematic random sampling involves **selecting the first unit randomly, then following a fixed pattern for subsequent units**.

## Procedure

1. **Determine the interval ($k$)**:
   - Interval formula: $$ k = \frac{N}{n} $$
   - $N$: Population size
   - $n$: Sample size
   - $k$: Sampling interval (number of possible samples or groups)

2. **Select the first unit**:
   - Randomly choose a unit $X_j$ where $j < k$.
   - Subsequent units follow the pattern: $X_{j+k}, X_{j+2k}, X_{j+3k}, \dots$

3. **Example**:
   - Population $N = 15$, sample $n = 3$, so $k = 15 / 3 = 5$.
   - If $X_1$ is chosen, the sample is $X_1, X_6, X_{11}$.

## Characteristics

**Compared to simple random sampling**

- Simple random sampling: Samples are scattered randomly.
- Systematic random sampling: Samples follow a systematic pattern.

**Conditions for use**
 
 1. A complete, up-to-date sampling frame exists.
 2. The sampling frame follows a specific order (e.g., student IDs from smallest to largest).

 **Weaknesses**
 
- If the sampling frame has systematic errors, bias may occur.
- Example: Sampling only husbands or wives from a list of 100 couples ($N = 200$, $n = 20$, $k = 10$) could result in a non-representative sample (e.g., all husbands: $X_1, X_{11}, X_{21}, \dots$).

**Solution**
 
- Reorder the sampling frame to ensure homogeneity (e.g., list all husbands first, then all wives).
- Example revised sample: $X_1$ (husband), $X_{11}$ (husband), $X_{91}$ (husband), $X_{101}$ (wife), $X_{111}$ (wife), $X_{191}$ (wife).

## Advantages

1. Simpler and faster than simple random sampling.
2. Does not require a random number table.
3. Effective for small, homogeneous populations with an ordered frame.

## Methods

### Method A
- Randomly select one unit from the first $k$ units, then proceed with interval $k$.
- Example: $N = 12$, $k = 3$, possible samples:
  - $X_1, X_4, X_7, X_{10}$
  - $X_2, X_5, X_8, X_{11}$
  - $X_3, X_6, X_9, X_{12}$
- Probability of selecting any sample: $\frac{1}{k}$.

### Method B
- Randomly select one unit from the entire population ($N$), then determine the starting point based on the remainder $r$ (where $r = j \mod k$).
- Example: $N = 12$, $k = 3$, if $X_{11}$ is chosen, $r = 11 \mod 3 = 2$, start with $X_2$, yielding $X_2, X_5, X_8, X_{11}$.
- Probability of selecting a sample: $\frac{n}{N}$.

## Considerations

- Systematic sampling assumes homogeneity within intervals.
- If the population has hidden patterns (e.g., periodic trends), variance may increase, leading to bias.
- No explicit variance formula is provided in the document, but precision depends on the sampling frame’s order and homogeneity.

## Practical application

- Example: Sampling customers in a store from 7:00 to 12:00 with $k = 20$.
- Choose a random start (e.g., 7), then sample every 20th customer: $X_7, X_{27}, X_{47}, \dots$.
- Sampling fraction: $\frac{1}{20} = 5\%$.

## Notes

- Systematic sampling is less effective for heterogeneous populations or when $N$ is unknown (e.g., Method B cannot be used without a known $N$).
- The sampling frame’s quality is critical to avoid systematic bias.
