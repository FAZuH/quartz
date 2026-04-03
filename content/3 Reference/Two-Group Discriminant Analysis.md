---
publish: true
created: 2026-03-25T15:22:40.612+07:00
modified: 2026-03-25T15:22:40.612+07:00
published: 2026-03-25T15:22:40.612+07:00
cssclasses: ""
creation-time: 2025-03-06 14:09
status: in progress
tags:
parent:
  - "[[discriminant analysis]]"
---


Two-group discriminant analysis is a statistical technique used to:

1. **Differentiate** between two distinct groups based on a set of variables.

2. **Classify** future observations into one of the groups.

---

#TODO need rewrite

## About geometric interpretation of discriminant analysis

The geometric view is like **looking at a plot to figure out how to split two groups**—like “most-admired” and “least-admired” companies—based on some measurements (e.g., their profits or sales).

Univariate (Some other method): 

- Imagine sorting apples and oranges by weight. You put each fruit on a scale and check the number. 
- Apples might weigh around 5 ounces, and oranges around 4 ounces.
- But some apples are light (4 oz), and some oranges are heavy (5 oz), so there’s overlap. **Weight alone isn’t enough** to tell them apart perfectly.

Multivariate (This method): 

- Now, imagine checking the fruit’s color (red for apples, orange for oranges).
- By **combining weight *and* color, it’s way easier to sort them**—light red fruits are apples, heavy orange ones are oranges.

## About discriminant function: Finding the magic line

- Picture all the company dots on your graph. The discriminant function is like drawing a slanted line through the map that **separates the two groups as cleanly as possible**.
- Instead of guessing where to draw it, we compute the linear combination of two variables (e.g., profit and return).
- This linear **combination function creates a new score for each company**, called the discriminant score.
- Think of it like **giving each fruit a “sorting score” based on weight and color combined**. The line is drawn so most-admired companies get high scores and least-admired get low scores.

This line isn’t random—it’s the *best* line that puts the most space between the groups while keeping each group’s dots close together.

### About classification using the discriminant function

- Pick a middle score to split the groups. If a company’s score is above the middle score, it’s most-admired; below, it’s least-admired.
- Imagine your fruit scores: Apples get 8 or 9, oranges get 2 or 3. 
- You set 5 as the middle score. Fruit with score higher than 5 is an apple, otherwise it's an orange.
- On the graph, the middle score is a line cutting across, splitting the map into two zones.

## Assumptions of discriminant analysis

- **Multivariate Normality**: Required for significance tests and classification validity; violations may affect error rates.

- **Equal Covariance Matrices**: Assumed for linear discriminant analysis; violations inflate significance levels and affect classification.

## Variable selection methods

Selects the best subset of variables when many are available.

Some methods include: 

- Forward, backward, or stepwise selection.
- Criteria like Wilks’ Lambda, Rao’s V, or Mahalanobis distance.

#TODO: Create separate note about variable selection method

## About model accuracy validation

 Model validation **ensures the trained model can be generalized**, used for future data, as classification accuracy on the training sample may be biased.

- Holdout: Split sample into training and test sets.
- U-Method: Leave-one-out cross-validation.
- Bootstrap: Repeated sampling to estimate error rates.

#TODO: Create separate note

## About regression approach in discriminant analysis

Two-group discriminant analysis can be reformulated as a multiple regression problem with a binary dependent variable (e.g., 0 for least-admired, 1 for most-admired). The resulting $R = 0.897$ matches the canonical correlation, but normality assumptions may be violated.


## Python example

See 

- [Step 2](#2.%20Compute%20discriminant%20function): For actual discriminant function.
- [Step 3](#3.%20Compute%20discriminant%20score): For computing discriminant score based on discriminant function.
- [Step 4](#4.%20Set%20cutoff%20and%20classify): Classifying new data

#TODO 
- Add descriptions to each step
- Refer formulas from the original book (LaTeX & formula numbers)
- Show output

### 0. Setup
```python
# Import
import numpy as np
import pandas as pd
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Generate synthetic dataset (100 fruits, 5 features)
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
```

### 1. Variable selection

```python
selector = SelectKBest(score_func=f_classif, k=2)
selector.fit(X_train, y_train)
scores = pd.Series(selector.scores_, index=X.columns)
print("Feature scores (higher = better at separating groups):")
print(scores.sort_values(ascending=False))
X_train_selected = X_train[['weight', 'color']]
X_test_selected = X_test[['weight', 'color']]
print("\nSelected variables (train sample):\n", X_train_selected.head())
```

### 2. Compute discriminant function

- Ending with `_a`: Apple

- Ending with `_o`: Orange

```python
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
```

### 3. Compute discriminant score

```python
# Step 4: Compute Discriminant Scores
train_scores = X_train_selected @ w
test_scores = X_test_selected @ w
train_data['discriminant_score'] = train_scores
test_data['discriminant_score'] = test_scores
print(
    "\nTest data with discriminant scores:\n",
    test_data[['weight', 'color', 'group', 'discriminant_score']]
)
```

### 4. Set cutoff and classify

```python
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
```

### Extra: Visualize

```python
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
plt.show()
```
