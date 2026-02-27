---
publish: true
created: 2026-02-22T19:23:58.364+07:00
modified: 2026-02-22T19:23:58.364+07:00
published: 2026-02-22T19:23:58.364+07:00
cssclasses: ""
creation-time: 2025-02-27 23:42
status: elder
tags:
parent:
  - "[[data structure]]"
---


## Definition

**Graph** is a [non-linear data structure](https://www.geeksforgeeks.org/introduction-to-hierarchical-data-structure) consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( **$V$** ) and a set of edges( **$E$** ).

![[assets/Pasted image 20250227234037.png|600]]

## Terms

- **Vertex/node**: The data/values in the graph.
- **Edge**: Connection or relationship between two vertexes.
- **Undirected graph**: Graph where the edges does not have a direction, i.e., each edge can be traversed in both direction.
- **Directed graph**: Graph where the edges have a direction. e.g., vertex $A$ have an edge going to vertex $B$, but not the otherway around.
- Two vertexes are said to be **adjacent**, if there is an edge connecting the vertexes.

## Graph as adjacency matrix

Graph can be represented using an **adjacency matrix**, by forming a $V\times V$ matrix, and assigning each entry as the edge of $i-$th and $j-$th vertex.

![[assets/Pasted image 20250227234134.png]]

### Properties

- Access time complexity: $O(1)$
- Space complexity: $O(V^2)$

## Graph as adjacency list

Represent graph with a collection of linked lists, where the first element in each list correspond to a vertex in the graph, and the following elements correspond to the neighboring vertex.

![[assets/Pasted image 20250227234147.png]]

### Properties

- Access time complexity: $O[\text{degree}(u)]$
- Space complexity: $O(V + E)$

## Implementation

- [[3 Reference/basic-operations-in-graph-data-structure_202508181147\|Basic Operations in Graph Data Structure]]

## Algorithms


## List

**Stack**
- [[3 Reference/valid-parantheses_202508150252\|Valid Parantheses]]
- [[3 Reference/minimum-stack_202508150406\|Minimum Stack]]

**Singly Linked Lists**
- [[3 Reference/reverse-linked-list_202508150441\|Reverse Linked List]]
- [[3 Reference/merge-two-sorted-linked-lists_202508151417\|Merge Two Sorted Linked Lists]]
- [[3 Reference/Singly Linked List Operations\|Singly Linked List Operations]]
- [[3 Reference/merge-k-sorted-linked-lists_202508172355\|Merge K Sorted Linked Lists]]

**Doubly Linked List**
- [[3 Reference/design-linked-list_202508151833\|Design Linked List]]
- [[3 Reference/design-browser-history_202508152100\|Design Browser History]]

**Queue**
- [[3 Reference/number-of-students-unable-to-eat-lunch_202508152130\|Number of Students Unable to Eat Lunch]]

## Sorting algorithm

**Bucket sort**
- [[3 Reference/sort-colors_202508181251\|Sort Colors]]