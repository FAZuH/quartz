---
publish: true
created: 2026-03-25T15:22:40.647+07:00
modified: 2026-03-25T15:22:40.647+07:00
published: 2026-03-25T15:22:40.647+07:00
creation-time: 2025-02-27 23:44
status: complete
tags:
parent:
  - "[[Graph]]"
  - "[[algorithm]]"
---

- #TODO:
  - Fill "Recursion" algorithm

---

1. Pick some rule for traversing a node.
2. Keep doing it until you reach a dead-end or a node that has already been visited.
3. Backtrack, and visit to a node that is unvisited.
4. Go back to step 2.

## Visualization

DFS in tree

![[assets/DFS in tree.gif|300]]

DFS in maze

![[assets/DFS in maze.gif|300]]

DFS in graph

![[assets/DFS in graph.gif|300]]

DFS vs BFS

![[assets/BFS vs DFS.png|300]]

## Algorithms

There are 2 different approaches to implement depth first search in graphs: **stack** and **recursive**.

### Stack

1. Prepare variables
   - `to_visit`: A stack to store verteces that needs to be visited. Initial value is the start vertex.
   - `visited`: A hash set to store verteces that has already been visited. Initial value is the start vertex.
   - `path`: A list to store all verteces traversed by `to_visit`.
2. Keep popping `to_visit` stack while it’s not empty. For each popped vertex:
3. Append the vertex into `path`
4. Grab the adjacent verteces of the popped vertex. For each adjacent vertex:
5. If the vertex has already been visited, we continue to the next adjacent vertex.
6. Otherwise, we append the vertex into `to_visit` and `visited`.

### Recursive

## Implementation

To see the complete code, go to [Code](https://www.notion.so/Code-16fa55f037f280108376c14e88852d4c?pvs=21)

### Stack

```python
    def dfs(self, start: _Vertex) -> list[_Vertex]:
        to_visit: list[_Vertex] = [start]
        visited: set[_Vertex] = {start}
        path: list[_Vertex] = []

        while len(to_visit) != 0:
            curr = to_visit.pop()
            path.append(curr)

            for neigh in self._get_neighs(curr):
                if neigh not in visited:
                    to_visit.append(neigh)
                    visited.add(neigh)

        return path

    @abstractmethod
    def _get_neighs(self, vertex: _Vertex) -> list[_Vertex]: ...
```

### Recursive
