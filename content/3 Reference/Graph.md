---
publish: true
created: 2026-04-09T23:07:39.404+07:00
modified: 2026-04-09T23:07:39.405+07:00
published: 2026-04-09T23:07:39.405+07:00
creation-time: 2025-02-27 23:42
status: complete
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

- [[basic-operations-in-graph-data-structure_202508181147|Basic Operations in Graph Data Structure]]

## Algorithms

![[dsa-problems_202508172322#Graph|Graph]]
