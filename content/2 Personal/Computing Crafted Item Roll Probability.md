---
publish: true
created: 2026-03-25T15:23:12.752+07:00
modified: 2026-04-06T16:41:30.000+07:00
published: 2026-04-06T16:41:30.000+07:00
cssclasses: ""
creation-time: 2025-03-22 17:22
status: in progress
tags:
parent:
  - "[[wynncraft]]"
---

Procedure to manually calculate the probability distribution of roll values of Wynncraft crafted items.

## Notation

- Let $n$ be the number of ingredients.
- For each ingredient $i$ (where $i = 1, 2, \ldots, n$):
	- $a_i$: Minimum base roll (`minValue`).
	- $b_i$: Maximum base roll (`maxValue`).
	- $p_i$: Boost percentage (`boost`).
	- $e_i = \frac{p_i + 100}{100}$: Effectiveness multiplier, converting the boost into a decimal factor.

## Step 1: Generate base ingredient roll values

By "base" we unboosted ingredient roll values.

For each ingredient $i$, generate a vector of 101 base values, evenly spaced from $a_i$ to $b_i$.

These represent the possible unboosted "roll values" distributed uniformly.

Define the base value for ingredient $i$ at index $j$:

$$
v_{i,j} = a_i + j \cdot \frac{b_i - a_i}{100}, \qquad j = 0, 1, \ldots, 100
$$

So,
- $v_{i,0} = a_i$
- $v_{i,100} = b_i$

## Step 2: Compute boosted ingredient roll values

For each base value $v_{i,j}$, calculate the boosted roll by applying the effectiveness multiplier $e_i$, rounding to the nearest integer, and then flooring the result:

$$
r_{i,j} = \left\lfloor \text{round}(v_{i,j}) \cdot e_i \right\rfloor
$$

$\text{round}(v_{i,j})$ rounds $v_{i,j}$ to the nearest integer.

Note that $r_{i,j}$ is a natural number, i.e., $r_{i,j} \in \mathbb N$

## Step 3: Compute roll probability mass function (PMF) for each ingredient

Let $\mathbf{r}_{i}$ be a vector of boosted ingredient roll values for ingredient $i$.

For each ingredient $i$, compute the PMF of the boosted rolls.

We do this by counting the occurrences of each boosted roll value in $\mathbf{r}_i$:

$$
P_i(s) = \frac{|\{j \in \{0,1,...,100\} : r_{i,j} = s\}|}{101}
$$

Since there are 101 base values, the denominator is 101, assuming a uniform distribution over $\mathbf{v}_i$.

Represent $P_i$ as a vector $\mathbf{p}_i$ of length $k_i$, where:

$$
\mathbf{p}_i[m] = P_i(r_{\text{min},i} + m), \quad m = 0, 1, \ldots, k_i - 1
$$

## Step 5: Compute Total Roll Range

The total roll $R$ is the sum of the boosted rolls from all $n$ ingredients:

$$
R = \sum_{i=1}^n R_i
$$

where $R_i$ is the random variable representing the boosted roll of ingredient $i$, with PMF $P_i(r)$.

The minimum and maximum possible total rolls are the sums of the individual minima and maxima:

$$
r_{\text{min}} = \sum_{i=1}^n r_{\text{min},i}, \quad r_{\text{max}} = \sum_{i=1}^n r_{\text{max},i}
$$

The total number of possible roll values is:

$$
k = r_{\text{max}} - r_{\text{min}} + 1
$$

## Step 6: Compute PMF of Total Roll Using Convolution

Since the ingredients’ contributions are independent, the PMF of the total roll $R$ is the convolution of the individual PMFs:

$$
P_R(r) = (P_1 * P_2 * \cdots * P_n)(r)
$$

### Convolution Definition

For two discrete PMFs $P_X$ and $P_Y$ with supports starting at $x_{\text{min}}$ and $y_{\text{min}}$, the convolution is:

$$
(P_X * P_Y)(k) = \sum_{m} P_X(m) \cdot P_Y(k - m)
$$

where the sum is over all $m$ where both PMFs are defined. In vector form, if $\mathbf{a}$ and $\mathbf{b}$ are the PMF vectors of lengths $l_a$ and $l_b$, the result $\mathbf{c} = \mathbf{a} * \mathbf{b}$ has length $l_a + l_b - 1$, and:

$$
c[k] = \sum_{i=\max(0, k - l_b + 1)}^{\min(l_a - 1, k)} a[i] \cdot b[k - i], \quad k = 0, 1, \ldots, l_a + l_b - 2
$$

### Iterative Convolution

1. **Initialize**: Start with $\mathbf{c} = [1.0]$, a unit impulse at roll 0 (length 1).
2. **For each ingredient $i$**:
   - Convolve $\mathbf{c}$ with $\mathbf{p}_i$ to update $\mathbf{c}$.
   - Adjust the support: After convolving with $\mathbf{p}_i$, the new minimum roll is the previous minimum plus $r_{\text{min},i}$.
3. **Repeat**: Continue until all $n$ PMFs are convolved.

After convolving all PMFs, $\mathbf{c}$ has length:

$$
\text{length of } \mathbf{c} = 1 + \sum_{i=1}^n (k_i - 1) = r_{\text{max}} - r_{\text{min}} + 1
$$

The final PMF $P_R(r)$ is:

$$
P_R(r) = \mathbf{c}[r - r_{\text{min}}], \quad r = r_{\text{min}}, r_{\text{min}} + 1, \ldots, r_{\text{max}}
$$

## Final Result

The probability mass function $P_R(r)$ gives the probability of each total roll $r$ from $r_{\text{min}}$ to $r_{\text{max}}$.

This can be stored as a function associating each roll value $r$ with its probability $P_R(r)$.

## Example

Suppose $n = 2$ ingredients:
- Ingredient 1: $a_1 = 10$, $b_1 = 20$, $p_1 = 50$ ($e_1 = 1.5$).
- Ingredient 2: $a_2 = 5$, $b_2 = 10$, $p_2 = 0$ ($e_2 = 1.0$).

1. **Base Values**:
   - $\mathbf{v}_1$: $[10, 10.1, \ldots, 20]$.
   - $\mathbf{v}_2$: $[5, 5.05, \ldots, 10]$.

2. **Boosted Rolls**:
   - $\mathbf{r}_1$: Compute $r_{1,j} = \lfloor \text{round}(v_{1,j}) \cdot 1.5 \rfloor$, e.g., $15$ to $30$.
   - $\mathbf{r}_2$: Compute $r_{2,j} = \lfloor \text{round}(v_{2,j}) \cdot 1.0 \rfloor$, e.g., $5$ to $10$.

3. **PMFs**:
   - $P_1(r)$ from $r_{\text{min},1} = 15$ to $r_{\text{max},1} = 30$.
   - $P_2(r)$ from $r_{\text{min},2} = 5$ to $r_{\text{max},2} = 10$.

4. **Total Range**: $r_{\text{min}} = 20$, $r_{\text{max}} = 40$.

5. **Convolution**: Compute $P_R = P_1 * P_2$ to get probabilities from $20$ to $40$.

## Code example

```java
package com.fazuh.faz.wynn.util;

import com.fazuh.faz.wynn.model.IngredientIdentification;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Class to calculate the probability distribution of an identification's roll when crafting an item.
 */
public class CraftedRollProbability {
    private final List<IngredientIdentification> ingredients;
    private final List<double[]> ingredientProbDists;
    private int minRoll;
    private int maxRoll;
    private final Map<Integer, BigDecimal> rollPmfs;

    /**
     * Constructor for CraftedRollProbability.
     * @param ingredients list of ingredients of the crafted item
     */
    public CraftedRollProbability(List<IngredientIdentification> ingredients) {
        this.ingredients = ingredients;
        this.ingredientProbDists = new ArrayList<>();
        this.minRoll = 0;
        this.maxRoll = 0;
        this.rollPmfs = new HashMap<>();

        calculateIngredientProbabilities();
        calculateRollProbabilities();
    }

    /**
     * Get the minimum possible roll value.
     * @return the minimum possible roll value
     */
    public int getMinRoll() {
        return minRoll;
    }

    /**
     * Get the maximum possible roll value.
     * @return the maximum possible roll value
     */
    public int getMaxRoll() {
        return maxRoll;
    }

    /**
     * Get the probability mass functions of the rolls.
     * @return the probability mass functions of the rolls
     */
    public Map<Integer, BigDecimal> getRollPmfs() {
        return rollPmfs;
    }

    /**
     * Get the ingredients of the crafted item.
     * @return the ingredients of the crafted item
     */
    public List<IngredientIdentification> getIngredients() {
        return ingredients;
    }

    private void calculateIngredientProbabilities() {
        for (IngredientIdentification ing : ingredients) {
            double ingStatEff = (ing.getBoost() + 100) * 0.01;

            // Calculate ingredient probability distribution
            double[] ingBaseValues = linspace(ing.getMinValue(), ing.getMaxValue(), 101);
            int[] ingRollsBoosted = new int[ingBaseValues.length];

            // Calculate boosted rolls
            int minBoostedRoll = Integer.MAX_VALUE;
            int maxBoostedRoll = Integer.MIN_VALUE;
            for (int i = 0; i < ingBaseValues.length; i++) {
                int boostedValue = (int) Math.floor(Math.round(ingBaseValues[i]) * ingStatEff);
                ingRollsBoosted[i] = boostedValue;
                minBoostedRoll = Math.min(minBoostedRoll, boostedValue);
                maxBoostedRoll = Math.max(maxBoostedRoll, boostedValue);
            }

            // Calculate offset and occurrences
            int offset = -minBoostedRoll;
            int[] occurrences = new int[maxBoostedRoll - minBoostedRoll + 1];
            for (int roll : ingRollsBoosted) {
                occurrences[roll + offset]++;
            }

            // Calculate probability distribution
            double[] probDist = new double[occurrences.length];
            for (int i = 0; i < occurrences.length; i++) {
                probDist[i] = occurrences[i] / 101.0;
            }

            ingredientProbDists.add(probDist);
            minRoll += minBoostedRoll;
            maxRoll += maxBoostedRoll;
        }
    }

    private void calculateRollProbabilities() {
        // Start with unit impulse
        double[] convolution = {1.0};

        // Convolve with each ingredient's probability distribution
        for (double[] probDist : ingredientProbDists) {
            convolution = convolve(convolution, probDist);
        }

        // Build roll_pmfs map
        double[] craftedRolls = linspace(minRoll, maxRoll, convolution.length);
        for (int i = 0; i < convolution.length; i++) {
            if (convolution[i] == 0) continue;
            rollPmfs.put((int) craftedRolls[i], BigDecimal.valueOf(convolution[i]));
        }
    }

    // Utility method to create linearly spaced array (like numpy.linspace)
    private static double[] linspace(double start, double end, int points) {
        double[] result = new double[points];
        double step = (end - start) / (points - 1);
        for (int i = 0; i < points; i++) {
            result[i] = start + (step * i);
        }
        return result;
    }

    // Utility method to perform convolution (like numpy.convolve)
    private static double[] convolve(double[] a, double[] b) {
        int resultLength = a.length + b.length - 1;
        double[] result = new double[resultLength];

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < b.length; j++) {
                result[i + j] += a[i] * b[j];
            }
        }

        return result;
    }
}
```