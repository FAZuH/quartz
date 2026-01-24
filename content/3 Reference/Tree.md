---
publish: true
created: 2025-10-14T04:15:27.040+07:00
modified: 2025-10-14T04:15:27.040+07:00
published: 2025-10-14T04:15:27.040+07:00
cssclasses: ""
creation-time: 2025-02-27 23:29
status: adult
tags:
parent:
  - "[[data structure]]"
---

## Definition

Non-linear data structure where nodes are organized in a hierarchy.

![[assets/Treedatastructure.png]]

## Terms

- **Node**: A data point in a tree data structure
- **Edge**: Connection/relation between nodes
- **Root**: Top-most node
- **Branch**: Middle node
- **Leaf**: Bottom-most node
- **Parent**: Node that has a child
- **Child**: Node that has a parent
- **Siblings**: Node that share the same parent
- **Subtree**: Smaller tree held within a larger tree
- **Size**: Total number of nodes
- **Depth**: Number of edges under the root node
- **Height**: Number of edges above furthest leaf node
- **Tree traversal**: Algorithm for navigating a tree data structure

## Structure

```python
from dataclasses import dataclass

type _Node = Node | None

@dataclass
class Node[T]:
    data: T
    left: _Node = None
    right: _Node = None
```

## Implementation

See [[3 Reference/Operations in Binary Search Tree]]

## Algorithms

## Tree

**Binary Tree**
- [[3 Reference/Binary Tree Traversal Algorithms]]
