---
publish: true
aliases:
  - Model Components
created: 2026-04-09T23:07:39.498+07:00
modified: 2026-04-09T23:07:39.499+07:00
published: 2026-04-09T23:07:39.499+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-09 16:44
status: in progress
parent:
  - "[[Linear Model]]"
---



## Model terms

### Main effect

Term that contains only 1 variable, with power of 1, i.e., is neither an interaction term nor a higher order term.

A model with only the main effect terms is called a **first-order model**

![[assets/image-10.png|344x308]]

### Interaction

A term that contains two or more variables.

For a model $E(y) = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_3 x_1 x_2$,

- $E(y)$ increases by $\beta_1 + \beta_3 x_2$ for every 1 unit increase in $x_2$
- $E(y)$ increases by $\beta_1 + \beta_3 x_1$ for every 1 unit increase in $x_1$

![[assets/image-11.png|344x215]]

### Higher-order

A term with a non-linear variable, e.g., a quadratic or qubic variable.

![[assets/image-12.png|343x206]]

## Model with qualitative variables

Data with categorical variables can be modelled by forming *dummy variables*. For a categorical variable with $n$ levels, there can be $n-1$ dummy variables formed.

### Dummy variable from 2 levels

Suppose we want to insert a variable $x_1$ of “gender” into the model, with possible categories “Male” and “Female”. This process is called *coding*, which is illustrated in the following:

$$
x_1 \begin{cases}
1, &\text{Felame}\\
0, &\text{Male}
\end{cases}
$$

Values coded to 0 is called the “baseline”. In this case, the baseline category is “Male”

### Dummy variable from 3 levels

Suppose a categorical variable with levels “Physics”, “Math”, “Biology”. There are $n-1 = 2$ dummy variables:

$$
x_1 \begin{cases}
1, &\text{Math}\\
0, &\text{Otherwise}
\end{cases}\qquad

x_2 \begin{cases}
1, &\text{Biology}\\
0, &\text{Otherwise}
\end{cases}
$$

In this case, the baseline is “Physics”

## Others

### Complete second order model

Model that contains all the possible terms at the 2nd degree

$$
y = \beta_0 + \beta_1x_1+ \beta_2x_2 +  \beta_3x_1x_2 + \beta_4x_1^2 + \beta_5x_2^2
$$

### Multiplicative (log) model

$$
\ln (y)=\beta_0+\beta_1 x_1+\beta_2 x_2+\cdots+\beta_k x_k+\epsilon
$$

$(e^{\beta_i} - 1)\times 100\%$ reprsents the percentage of change in $y$ for every 1 unit increase of $x_i$
