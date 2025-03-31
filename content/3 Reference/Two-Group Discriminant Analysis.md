---
{"creation-time":"2025-03-06 14:09","status":"baby","tags":null,"parent":["[[discriminant analysis]]"],"publish":true,"PassFrontmatter":true}
---


Two-group discriminant analysis is a statistical technique used to **differentiate between two distinct groups** based on a set of variables, create a composite index to represent these differences, and **classify future observations** into one of the groups.

## Objectives of two-group discriminant analysis

Identify discriminating variables

- Determine **which variables best distinguish** between two groups (e.g., most-admired vs. least-admired firms).

**Develop a discriminant function**

- Create a linear combination of variables (a discriminant function) that **maximizes the separation between the groups**, represented by a new variable called the discriminant score.

**Classify Observations**

- Use the discriminant function or related methods to **assign future observations** to one of the two groups.

## Geometric interpretation

The geometric view is like **looking at a map to figure out how to split two groups**—like “most-admired” and “least-admired” companies—based on some measurements (e.g., their profits or sales). Instead of guessing, we use a clever trick to build a line that separates them as clearly as possible. Here’s how it works, step by step.

### Univariate vs. Multivariate Analysis

**Univariate (One Variable at a Time)**: 
- Imagine sorting apples and oranges by weight. You put each fruit on a scale and check the number. 
- Apples might weigh around 5 ounces, and oranges around 4 ounces.
- But some apples are light (4 oz), and some oranges are heavy (5 oz), **so there’s overlap**. Weight alone isn’t enough to tell them apart perfectly.

**Multivariate (Using Multiple Variables Together)**: 
- Now, imagine checking the fruit’s color (red for apples, orange for oranges).
- By **combining weight *and* color, it’s way easier to sort them**—light red fruits are apples, heavy orange ones are oranges.

### Discriminant function: Finding the magic line

- Picture all the company dots on your graph. The discriminant function is like drawing a slanted line through the map that **separates the two groups as cleanly as possible**.
- Instead of guessing where to draw it, we compute the linear combination of two variables (e.g., profit and return).
- This linear **combination function creates a new score for each company**, called the discriminant score.
- Think of it like **giving each fruit a “sorting score” based on weight and color combined**. The line is drawn so most-admired companies get high scores and least-admired get low scores.

This line isn’t random—it’s the *best* line that puts the most space between the groups while keeping each group’s dots close together.

### Classification: Sorting with the line

- Pick a middle score to split the groups. If a company’s score is above the middle score, it’s most-admired; below, it’s least-admired.
- Imagine your fruit scores: Apples get 8 or 9, oranges get 2 or 3. 
- You set 5 as the middle score. Fruit with score higher than 5 is an apple, otherwise it's an orange.
- On the graph, the middle score is a line cutting across, splitting the map into two zones.

## Analytical Approach

The analytical approach turns the geometric idea of a “magic line” into a concrete mathematical process. 

It’s about finding the best variables to tell two groups apart, building a formula (the discriminant function) to score each observation, and using that score to classify them.

### 1: Identify Discriminator Variables

Pick variables that show big differences between your two groups (e.g., apples vs. oranges, most-admired vs. least-admired firms).

1. Collect data on several variables for both groups. For example, measure weight, color, size, sweetness, and firmness for 25 apples and 25 oranges.
2. Calculate the **mean** of each variable for each group (e.g., mean weight of apples vs. oranges).
3. Run a **t-test** (or similar statistical test) for each variable to see if the group means are significantly different. A big t-value (and small p-value, like < 0.05) means the variable is good at separating the groups.
4. Choose the variables with the strongest differences. Let’s say weight (apples ~5 oz, oranges ~4 oz) and color (apples ~8 redness, oranges ~2) stand out.

**Example**: After t-tests, weight and color have high t-values (e.g., 3.5 and 6.0), so you pick them.

---

### 2: Compute the Discriminant Function

Build a formula (called the discriminant function) that combines your chosen variables into a single score, maximizing the separation between groups.

This function is written as $Z = w_1 X_1 + w_2 X_2$, where $w_1$ and $w_2$ are weights, and $X_1$ and $X_2$ are your variables (e.g., weight and color).

1. **Separate Your Data**: Split your dataset into the two groups (e.g., apples and oranges).
2. **Calculate Group Means**:
	 - For apples: $\mu_{\text{apples}} = [\text{mean weight}, \text{mean color}]$ (e.g., \[5, 8]).
	 - For oranges: $\mu_{\text{oranges}} = [\text{mean weight}, \text{mean color}]$ (e.g., \[4, 2]).
3. **Find the Mean Difference**: Subtract the orange means from the apple means:  
	 $\mu_{\text{apples}} - \mu_{\text{oranges}} = [5 - 4, 8 - 2] = [1, 6]$.
4. **Compute Within-Group Covariance**:
	 - For each group, calculate a covariance matrix showing how the variables (weight, color) vary within the group. This is a 2x2 matrix with variances on the diagonal (e.g., variance of weight, variance of color) and covariance between them off-diagonal.
	 - Example: For apples, $S_{\text{apples}} = \begin{bmatrix} 0.25 & 0.1 \\ 0.1 & 1.0 \end{bmatrix}$ (if weight variance = 0.25, color variance = 1.0, covariance = 0.1).
	 - For oranges, $S_{\text{oranges}} = \begin{bmatrix} 0.3 & 0.05 \\ 0.05 & 0.9 \end{bmatrix}$.
5. **Pool the Covariance Matrices**:
	 - Combine them, weighted by group size:  
	   $S_{\text{pooled}} = \frac{n_{\text{apples}} S_{\text{apples}} + n_{\text{oranges}} S_{\text{oranges}}}{n_{\text{apples}} + n_{\text{oranges}}}$.
	 - If $n_{\text{apples}} = 25$ and $n_{\text{oranges}} = 25$, then $S_{\text{pooled}} = (25 \times S_{\text{apples}} + 25 \times S_{\text{oranges}}) / 50$.
6. **Invert the Pooled Matrix**: Find $S_{\text{pooled}}^{-1}$ (the inverse), which adjusts for the spread within groups. This requires matrix math (use a calculator or software like Python’s `np.linalg.inv`).
7. **Calculate Weights**: Multiply the inverse by the mean difference:  
	 $w = S_{\text{pooled}}^{-1} \times (\mu_{\text{apples}} - \mu_{\text{oranges}})$.
	 - Example: If $S_{\text{pooled}}^{-1} = \begin{bmatrix} 4 & -0.5 \\ -0.5 & 1.2 \end{bmatrix}$, then $w = \begin{bmatrix} 4 & -0.5 \\ -0.5 & 1.2 \end{bmatrix} \times \begin{bmatrix} 1 \\ 6 \end{bmatrix} = \begin{bmatrix} 1 \\ 7 \end{bmatrix}$.
	 - So, $Z = 1 \times \text{weight} + 7 \times \text{color}$.

The weights $w$ define the “magic line” from the geometric view. The book calls this maximizing $\lambda = SS_b / SS_w$, where $SS_b$ is the between-group separation (mean difference) and $SS_w$ is within-group spread (pooled covariance). This formula ensures the line puts the most space between group scores.

**Example**: Your discriminant function is $Z = 1 \times \text{weight} + 7 \times \text{color}$.

---

### 3: Compute Discriminant Scores

Use the discriminant function to give each observation a score.

1. Take each observation’s values for the variables (e.g., a fruit with weight = 4.8, color = 7.5).
2. Plug them into the function:  
	 $Z = w_1 \times \text{weight} + w_2 \times \text{color}$.  
	 Example: $Z = 1 \times 4.8 + 7 \times 7.5 = 4.8 + 52.5 = 57.3$.
3. Repeat for all observations in your data (training set first, then any new data).

These scores are the projections onto the discriminant axis (like shadows on the magic line). Apples should get higher scores (e.g., ~60) and oranges lower (e.g., ~15) if the function works well.

**Example**: Apple (5, 8) → $Z = 1 \times 5 + 7 \times 8 = 61$; Orange (4, 2) → $Z = 1 \times 4 + 7 \times 2 = 18$.

---

### 4: Set a Cutoff for Classification

Pick a cutoff score to split the groups—above it, classify as one group (e.g., apples); below it, the other (e.g., oranges).

1. Calculate the mean discriminant score for each group using the training data:
	 - $\bar{Z}_{\text{apples}} = \text{average of all apple scores}$ (e.g., 60).
	 - $\bar{Z}_{\text{oranges}} = \text{average of all orange scores}$ (e.g., 15).
2. Set the cutoff as the midpoint:  
	 $\text{cutoff} = \frac{\bar{Z}_{\text{apples}} + \bar{Z}_{\text{oranges}}}{2}$.  
	 Example: $\text{cutoff} = (60 + 15) / 2 = 37.5$.
 
 This midpoint minimizes misclassification errors when groups are balanced (same size, similar spread), as the book notes in Section 8.2. It’s the “middle score” from the geometric view, splitting the discriminant axis.

**Example**: Cutoff = 37.5.

---

### 5: Classify Observations

Use the cutoff to assign each observation to a group.

1. Compare each discriminant score to the cutoff.
2. Rule: If $Z > \text{cutoff}$, classify as apples; if $Z < \text{cutoff}$, classify as oranges.
	Example: Fruit with $Z = 57.3 > 37.5$ → apple; $Z = 18 < 37.5$ → orange.
3. Apply this to your training data to check accuracy, then to new, unseen data to predict groups.

This is the final sorting step—turning scores into decisions. The book emphasizes minimizing errors here, and the midpoint works well for our balanced apple-orange example.

**Example**: 57.3 → apple, 18 → orange.

---

### 6: Model validation

See how well your discriminant function classifies the training data and adjust if needed.

1. Count how many training observations were correctly classified (e.g., true apples predicted as apples).
2. Calculate accuracy: $\text{accuracy} = \frac{\text{correct predictions}}{\text{total observations}}$.
	 Example: If 23 apples and 24 oranges out of 50 are correct, accuracy = 47/50 = 94%.
3. If accuracy is low, revisit your variables (Step 1) or check assumptions (e.g., equal covariance, Section 8.5).

This tests if your discriminant function is good enough. The book’s SPSS example (Section 8.3) gets 95.83% accuracy, setting a benchmark.

**Example**: Accuracy = 94% on training data.

## Regression approach 

Two-group discriminant analysis can be reformulated as a multiple regression problem with a binary dependent variable (e.g., 0 for least-admired, 1 for most-admired). The resulting $R = 0.897$ matches the canonical correlation, but normality assumptions may be violated.

## Assumptions

**Multivariate Normality**

Required for significance tests and classification validity; violations may affect error rates but overall robustness is noted.

**Equal Covariance Matrices**

Assumed for linear discriminant analysis; violations inflate significance levels and affect classification, potentially requiring quadratic functions for small samples.

## Variable selection

- **Purpose**: Selects the best subset of variables when many are available (e.g., adding MKTBOOK, ROE, REASS).

- **Methods**: Forward, backward, or stepwise selection, using criteria like Wilks’ Lambda, Rao’s V, or Mahalanobis distance.

- **Example**: Using five financial ratios, stepwise selection chooses EBITASS and REASS, with multicollinearity affecting variable inclusion and interpretation.

## Model accuracy validation

Classification accuracy on the training sample is biased; external validation ensures generalizability.

- **Holdout**: Split sample into training and test sets.
- **U-Method**: Leave-one-out cross-validation.
- **Bootstrap**: Repeated sampling to estimate error rates.

## Python example

```python
import numpy as np
import pandas as pd
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

#|%%--%%| <DLzdsGCVYt|sMryrWhYJr>

# Step 1: Generate synthetic dataset (100 fruits, 5 features)
np.random.seed(42)

n_fruits = 100
n_each = n_fruits // 2
apples = pd.DataFrame({
    'weight': np.random.normal(5, 0.5, n_each),
    'color': np.random.normal(8, 1, n_each),
    'size': np.random.normal(3, 0.3, n_each),
    'sweetness': np.random.normal(6, 0.8, n_each),
    'firmness': np.random.normal(7, 0.7, n_each),
    'group': 'apple'
})
oranges = pd.DataFrame({
    'weight': np.random.normal(4, 0.5, n_each),
    'color': np.random.normal(2, 1, n_each),
    'size': np.random.normal(3.2, 0.3, n_each),
    'sweetness': np.random.normal(5, 0.8, n_each),
    'firmness': np.random.normal(6, 0.7, n_each),
    'group': 'orange'
})

# Combine and split into train (70%) and test (30%)
data = pd.concat([apples, oranges], ignore_index=True)
X = data[['weight', 'color', 'size', 'sweetness', 'firmness']]
y = data['group'].map({'apple': 1, 'orange': 0})
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)
train_data = pd.concat([X_train, y_train.rename('group')], axis=1)
test_data = pd.concat([X_test, y_test.rename('group')], axis=1)

#|%%--%%| <sMryrWhYJr|795m9KWeW4>

# Step 2: Variable Selection (on training data)
selector = SelectKBest(score_func=f_classif, k=2)
selector.fit(X_train, y_train)
scores = pd.Series(selector.scores_, index=X.columns)
print("Feature scores (higher = better at separating groups):")
print(scores.sort_values(ascending=False))
X_train_selected = X_train[['weight', 'color']]
X_test_selected = X_test[['weight', 'color']]
print("\nSelected variables (train sample):\n", X_train_selected.head())

#|%%--%%| <795m9KWeW4|P2KQX3HNUO>

# Step 3: Discriminant Function Computation 
X_train_a = X_train_selected[y_train == 1]
X_train_o = X_train_selected[y_train == 0]
mean_a = X_train_a.mean()
mean_o = X_train_o.mean()
print("\nMean vectors (train):")
print("Apples:", mean_a.values)
print("Oranges:", mean_o.values)

S_a = np.cov(X_train_a.T, bias=True)
S_o = np.cov(X_train_o.T, bias=True)
print("\nWithin-group covariance matrices (train):")
print("Apples:\n", S_a)
print("Oranges:\n", S_o)

n_a, n_o = len(X_train_a), len(X_train_o)
S_pooled = (n_a * S_a + n_o * S_o) / (n_a + n_o)
print("\nPooled covariance matrix (train):\n", S_pooled)

mean_diff = (mean_a - mean_o).values
S_pooled_inv = np.linalg.inv(S_pooled)
w = S_pooled_inv @ mean_diff
print("\nDiscriminant function weights (w):", w)

#|%%--%%| <P2KQX3HNUO|lwCEnza0j0>

# Step 4: Compute Discriminant Scores
train_scores = X_train_selected @ w
test_scores = X_test_selected @ w
train_data['discriminant_score'] = train_scores
test_data['discriminant_score'] = test_scores
print(
    "\nTest data with discriminant scores:\n",
    test_data[['weight', 'color', 'group', 'discriminant_score']]
)

#|%%--%%| <lwCEnza0j0|pZtpjmqUm0>

# Step 5: Set Cutoff and Classify
mean_score_apples = train_scores[y_train == 1].mean()
mean_score_oranges = train_scores[y_train == 0].mean()
cutoff = (mean_score_apples + mean_score_oranges) / 2
print("\nMean discriminant scores (train):")
print("Apples:", mean_score_apples)
print("Oranges:", mean_score_oranges)
print("Cutoff:", cutoff)

test_data["predicted_numeric"] = (test_data["discriminant_score"] > cutoff).astype(int)
test_data["predicted_group"] = test_data["predicted_numeric"].map(
    {1: "apple", 0: "orange"}
)

accuracy = (test_data["predicted_numeric"] == test_data["group"]).mean()
print("\nTest classification accuracy:", accuracy)

#|%%--%%| <pZtpjmqUm0|iIik28Ee9f>

# Step 6: Visualize (training data with discriminant line)
plt.scatter(
    X_train_selected["weight"],
    X_train_selected["color"],
    c=y_train,
    cmap="bwr",
    label="Train Groups",
)
plt.scatter(
    X_test_selected["weight"],
    X_test_selected["color"],
    c="gray",
    marker="x",
    label="Test (unknown)",
)
x_range = np.linspace(X_train_selected["weight"].min(), X_train_selected["weight"].max(), 100)
y_line = (cutoff - w[0] * x_range) / w[1]
plt.plot(x_range, y_line, "g--", label="Discriminant Line")
plt.xlabel("Weight (oz)", color="black")
plt.ylabel("Color (redness scale)", color="black")
plt.title("Apples (red) vs. Oranges (blue) - Train; Test (gray)", color='black')
plt.legend()
plt.savefig("discriminant_plot.png")
plt.show()
```
