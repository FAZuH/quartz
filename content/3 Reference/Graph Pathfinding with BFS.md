---
{"publish":true,"created":"2025-08-15T13:53:58.535+07:00","modified":"2025-08-15T13:53:58.536+07:00","published":"2025-08-15T13:53:58.536+07:00","cssclasses":"","creation-time":"2025-02-28 00:09","status":"adult","tags":null,"parent":["[[Graph]]","[[algorithm]]"]}
---


The idea is that as we traverse through the verteces, we also keep track the path we need to take to get to the vertex. Once we find the target vertex, we can just return the path.

## Algorithm

1. Prepare variables
    
    tovisit queue which contains tuple of vertex, and the path you need to take from source to end up in the corresponding vertex.
    
    visited
    

## Code

```python
  def bfs_pathfind(self, start: _Vertex, target: _Vertex) -> list[_Vertex] | None:
      to_visit: Deque[tuple[_Vertex, list[_Vertex]]] = deque([(start, [start])])
      visited: set[_Vertex] = set()

      while len(to_visit) != 0:
          curr, path = to_visit.popleft()

          if curr == target:
              return path

          if curr not in visited:
              visited.add(curr)

              for neigh in self._get_neighs(curr):
                  to_visit.append((neigh, path + [neigh]))

      return None
```
