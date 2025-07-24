---
{"publish":true,"created":"2025-07-24T11:50:56.434+07:00","modified":"2025-07-24T11:50:56.434+07:00","published":"2025-07-24T11:50:56.434+07:00","cssclasses":"","creation-time":"2025-06-24 00:45","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
---


## Overview
**Combination** and **permutation** are two different way to arrange a set of items. The distinction between the two is

- Combination: Order does not matter (e.g., $ABC=BAC$)
- Permutation: Order matters (e.g., $ABC\neq BAC)$

## Combination
**Combinations** refer to the different ways to choose a subset of items from a larger set, where the order does not matter. The formula for combination is given by

$$
C(n,r) = \binom{n}{r}
= \frac{n!}{r!(n-r)!}
$$

where

- $n$: Total number of items
- $r$: Number of items to arrange

### Example: Forming a committee from a group
You have a group of 5 people, $A,B,C,D,E$, in which you want to form a committee of 3 people. How many committees of 3 people can you create from these 5 people?

In this case, there are a total of 5 items $(n=5)$, and 3 items to arrange $(r=3)$. So, the combination can be obtained by:

$$
C(n,r) = C(5,3) = \frac{5!}{3!(5-3)!} = \frac{120}{6 \cdot 2} = 10
$$

So, there are 10 different ways to form a committee from a group of 5 peole

## Permutation
**Permutations** refer to the different ways to arrange a set of items, where the order matters. The formula for permutation is given by

$$
P(n,r) = \frac{
  n!
} {
  ( n - r )!
}
$$

### Example: Ordering books
You want to arrange 2 books out of $A, B, C$ on a shelf. How many different ways can you do it? Note in permutation, that order of the books matters (e.g., “$A,B,C \neq B,A,C$). In this case, $n=3$, and $r=2$. So, the number of permutations is given by
