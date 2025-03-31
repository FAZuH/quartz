---
{"creation-time":"2025-02-27 23:42","status":"elder","tags":null,"parent":["[[data structure]]"],"publish":true,"PassFrontmatter":true}
---


![Pasted image 20250227234017.png](../Assets/Pasted%20image%2020250227234017.png)

**Graph** is a [non-linear data structure](https://www.geeksforgeeks.org/introduction-to-hierarchical-data-structure) consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( **$V$** ) and a set of edges( **$E$** ).

![Pasted image 20250227234037.png|600](../Assets/Pasted%20image%2020250227234037.png)

## Definitions

- **Vertex/node**: The data/values in the graph.
- **Edge**: Connection or relationship between two vertexes.
- **Undirected graph**: Graph where the edges does not have a direction, i.e., each edge can be traversed in both direction.
- **Directed graph**: Graph where the edges have a direction. e.g., vertex $A$ have an edge going to vertex $B$, but not the otherway around.
- Two vertexes are said to be **adjacent**, if there are an edge connecting the vertexes.

## Graph as adjacency matrix

Graph can be represented using an **adjacency matrix**, by forming a $V\times V$ matrix, and assigning each entry as the edge of $i-$th and $j-$th vertex.

![Pasted image 20250227234134.png](../Assets/Pasted%20image%2020250227234134.png)

### Properties

- Access time complexity: $O(1)$
- Space complexity: $O(V^2)$

## Graph as adjacency list

Represent graph with a collection of linked lists, where the first element in each list correspond to a vertex in the graph, and the following elements correspond to the neighboring vertex.

![Pasted image 20250227234147.png](../Assets/Pasted%20image%2020250227234147.png)

### Properties

- Access time complexity: $O[\text{degree}(u)]$
- Space complexity: $O(V + E)$

## Code

![Pasted image 20250227234156.png](../Assets/Pasted%20image%2020250227234156.png)

```python
@dataclass(frozen=True, repr=False)
class Vertex[T]:
    data: T

    def __repr__(self) -> str:
        return str(self.data)

type _Vertex = Vertex[Any]

class BaseGraph(Protocol):
    def add_vertex(self, vertex: _Vertex) -> None: ...
    def add_edge(
        self, src: _Vertex, dest: _Vertex, weight: float = 1, directed: bool = False
    ) -> None: ...
    def remove_edge(self, _Vertex: _Vertex, dest: _Vertex, directed: bool = False) -> None: ...
    def has_edge(self, src: _Vertex, dest: _Vertex) -> bool: ...
    def display(self) -> None: ...

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

class AdjacencyMatrixGraph(BaseGraph):
    def __init__(self, verteces: list[_Vertex] | None = None) -> None:
        self._verteces = []
        self._adjacency_matrix: list[list[float]] = []
        if verteces is not None:
            for v in verteces:
                self.add_vertex(v)

    def add_vertex(self, vertex: _Vertex) -> None:
        if vertex in self._verteces:
            raise ValueError(f"Vertex with data {vertex.data} already exists.")

        self._verteces.append(vertex)

        for row in self._adjacency_matrix:
            row.append(0)
        self._adjacency_matrix.append([0] * len(self._verteces))

    def add_edge(
        self, src: _Vertex, dest: _Vertex, weight: float = 1, directed: bool = False
    ) -> None:
        src_i = self._verteces.index(src)
        dest_i = self._verteces.index(dest)
        self._adjacency_matrix[src_i][dest_i] = weight
        if not directed:
            self._adjacency_matrix[dest_i][src_i] = weight

    def remove_edge(self, src: _Vertex, dest: _Vertex, directed: bool = False) -> None:
        self.add_edge(src, dest, 0, directed)

    def has_edge(self, src: _Vertex, dest: _Vertex) -> bool:
        src_i = self._verteces.index(src)
        dest_i = self._verteces.index(dest)
        return self._adjacency_matrix[src_i][dest_i] != 0

    def display(self) -> None:
        print(" ", *self._verteces)
        for vertex, row in zip(self._verteces, self._adjacency_matrix):
            print(vertex, " ".join(map(str, row)))

    def _get_neighs(self, vertex: _Vertex) -> list[_Vertex]:
        vertex_i = self._verteces.index(vertex)
        ret: list[_Vertex] = []
        for i, edge in enumerate(self._adjacency_matrix[vertex_i]):
            if edge == 0:
                continue
            ret.append(self._verteces[i])
        return ret

class AdjacencyListGraph(BaseGraph):
    def __init__(self, verteces: list[_Vertex] | None = None) -> None:
        self._adjacency_list: list[list[_Vertex]] = []
        if verteces is not None:
            for v in verteces:
                self.add_vertex(v)

    def add_vertex(self, vertex: _Vertex) -> None:
        self._adjacency_list.append([vertex])

    def add_edge(
        self, src: _Vertex, dest: _Vertex, weight: float = 1, directed: bool = False
    ) -> None:
        src_i = self._idx_from_vertex(src)
        dest_i = self._idx_from_vertex(dest)
        node = self._adjacency_list[dest_i][0]
        self._adjacency_list[src_i].append(node)
        if not directed:
            node = self._adjacency_list[src_i][0]
            self._adjacency_list[dest_i].append(node)

    def remove_edge(self, src: _Vertex, dest: _Vertex, directed: bool = False) -> None:
        src_i = self._idx_from_vertex(src)
        dest_i = self._idx_from_vertex(dest)
        node = self._adjacency_list[dest_i][0]
        self._adjacency_list[src_i].remove(node)

    def has_edge(self, src: _Vertex, dest: Vertex) -> bool:
        src_i = self._idx_from_vertex(src)
        dest_i = self._idx_from_vertex(dest)
        node = self._adjacency_list[dest_i][0]
        return node in self._adjacency_list[src_i]

    def display(self) -> None:
        for list_ in self._adjacency_list:
            print(list_)

    def _get_neighs(self, vertex: _Vertex) -> list[_Vertex]:
        return self._adjacency_list[self._idx_from_vertex(vertex)][1:]

    def _idx_from_vertex(self, vertex: _Vertex) -> int:
        for i, v in enumerate(self._adjacency_list):
            if v[0] == vertex:
                return i
        raise ValueError(f"Vertex with data {vertex.data} is not in the graph.")

a = Vertex("A")
b = Vertex("B")
c = Vertex("C")
d = Vertex("D")
e = Vertex("E")
verteces = [a, b, c, d, e]

m_graph = AdjacencyMatrixGraph(verteces)
a_graph = AdjacencyListGraph(verteces)

graph_impls: list[BaseGraph] = [m_graph, a_graph]

for graph in graph_impls    graph.add_edge(a, b, directed=True)
    graph.add_edge(b, c, directed=True)
    graph.add_edge(b, e, directed=True)
    graph.add_edge(c, d, directed=True)
    graph.add_edge(c, e, directed=True)
    graph.add_edge(e, a, directed=True)
    graph.add_edge(e, c, directed=True)

    print(graph.bfs(a))
    print(graph.dfs(a))

    print(graph.has_edge(e, c))

    graph.remove_edge(e, c)

    print(graph.has_edge(e, c))

    graph.display()

    print("\\n", "=" * 20, "\\n")

```
