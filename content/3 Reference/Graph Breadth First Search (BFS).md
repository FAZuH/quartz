---
{"publish":true,"created":"2025-07-24T11:50:56.279+07:00","modified":"2025-07-24T11:50:56.280+07:00","published":"2025-07-24T11:50:56.280+07:00","cssclasses":"","creation-time":"2025-02-28 00:06","status":"adult","tags":null,"parent":["[[Graph]]","[[algorithm]]"]}
---


1. **Pick the starting node** and visit it.
2. **Visit all the unvisited neighbors** of the current node (in order).
3. Move to the **next node in the queue**.
4. Repeat steps 2 and 3 until there are no more nodes in the queue.

## Visualization

BFS in tree

![[assets/BFS in tree.gif|300]]

BFS in maze

![[assets/BFS in maze.gif|300]]

BFS in graph

![[assets/BFS in graph.gif|300]]

DFS vs BFS

![[assets/BFS vs DFS.png|300]]

## Algorithms

There is one primary approach to implement a breadth first search for graphs, that is, using a queue.

1. Prepare variables
    - `to_visit`: Stack to store verteces that needs to be visited. Initial value is the start vertex.
    - `visited`: Hash set to store verteces that has already been visited.
    - `path`: List to store all verteces traversed by `to_visit`.
2. Keep dequeueing `to_visit` queue while it’s not empty. For each vertex.
3. If the current vertex is already in `visited`, we skip it.
4. If not, we add the vertex to `visited` and `path`.
5. For each adjacent vertex of the current vertex:
6. Add the adjacent vertex into the queue.

## Code

To see the complete code, go to [Code](https://www.notion.so/Code-16fa55f037f280108376c14e88852d4c?pvs=21)

```python
    def bfs(self, start: _Vertex) -> list[_Vertex]:
        to_visit: Deque[_Vertex] = deque([start])
        visited: set[_Vertex] = set()
        path: list[_Vertex] = []

        while len(to_visit) != 0:
            curr = to_visit.popleft()

            if curr not in visited:
                visited.add(curr)
                path.append(curr)

                for neigh in self._get_neighs(curr):
                    to_visit.append(neigh)

        return path

    @abstractmethod
    def _get_neighs(self, vertex: _Vertex) -> list[_Vertex]: ...
```
