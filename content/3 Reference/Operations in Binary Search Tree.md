---
publish: true
created: 2026-04-09T23:07:39.534+07:00
modified: 2026-04-09T23:07:39.535+07:00
published: 2026-04-09T23:07:39.535+07:00
cssclasses: ""
creation-time: 2025-02-27 23:45
status: complete
tags:
parent:
  - "[[Tree]]"
---


This page describes several simple operations on binary search trees, such as insertion, deletion, and search.

The algorithm below is an unbalanced implementation of a binary search tree.

> [!NOTE]
> If we insert nodes into the tree from 1 to 7 sequentially, the root would be 1, and all the nodes would be located on the right of the root node.
> 
> ```python
> 1
>  \\
>   2
>    \\
>     3
>      \\
>       4
>        \\
>         5
>          \\
>           6
>            \\
>             7
> ```
> 
> Some balanced algorithms adjust the tree such that the height of the tree is minimized.
> 
> For a balanced binary search tree, look into AVL Tree, Red-Black Tree, B-Trees, B+ Trees, Splay Tree, etc.

## Insert

Insert a new node in a way that adheres to a binary search tree. Assume there is no node in the tree with the same value as the new node.

1. Start from the root.
2. If the new value is lower than the root value, then the new node should be placed somewhere left, therefore, traverse left. Otherwise, traverse right.
3. Repeat step 2, until the node we traversed into is null (i.e, we just traversed into an unclaimed space).
4. Insert the new node on the spot where we ended up on step 3.

## Delete

Delete operation in a binary search tree has the following 3 cases:

1. Node to be deleted is a leaf (no children)
2. Node has one child
3. Node has two child (hardest case)

To implement it in code:

1. The public `delete()` method serves as an entry point and calls the recursive helper.
2. `_delete_helper()` handles the actual deletion:
    - First, it searches for the node to delete using BST properties
    - Once found, it handles the three cases:
        - Leaf node: Simply remove it by returning None
        - One child: Return the non-null child to maintain the tree structure
        - Two children: Find successor (smallest value in right subtree), copy its value, then recursively delete the successor

## Display


Use [[3 Reference/Binary Tree Traversal Algorithms]]

## Search

Analogous to a binary search algorithm, we traverse left if our value (the value that we are searching for) is lower than node value, or traverse right otherwise, until we have found a node value that is equal to our value.

During traversal, if we ended up in a null, we can conclude that there is no value equal to our value in the binary search tree.

## Implementation

```python
from dataclasses import dataclass
from typing import Any, Protocol, Self

class Comparable(Protocol):
    def __lt__(self, value: Any, /) -> bool: ...

# |%%--%%| <zmnIVzYkXU|JtQexJSkQN>

type _Node = Node | None

@dataclass
class Node[T]:
    data: T
    left: _Node = None
    right: _Node = None

    @staticmethod
    def traverse_tree_inorder(root: _Node) -> None:
        if root is None:
            return
        Node.traverse_tree_inorder(root.left)
        print(root.data)
        Node.traverse_tree_inorder(root.right)

    @staticmethod
    def traverse_tree_postorder(root: _Node) -> None:
        if root is None:
            return
        Node.traverse_tree_postorder(root.left)
        Node.traverse_tree_postorder(root.right)
        print(root.data)

    @staticmethod
    def traverse_tree_preorder(root: _Node) -> None:
        if root is None:
            return
        print(root.data)
        Node.traverse_tree_preorder(root.left)
        Node.traverse_tree_preorder(root.right)

# |%%--%%| <JtQexJSkQN|AcIj9MCcYY>

class BinarySearchTree[T: Comparable]:
    root: Node[T]

    def insert(self, node: Node[T]) -> Self:
        """Insert a node to its appropriate position in the binary search tree."""
        if not self._is_set_root():
            self.root = node
            return self

        data = node.data
        curr = self.root
        while True:
            if data < curr.data:
                # go left
                if curr.left is None:
                    curr.left = node
                    break
                curr = curr.left
            elif data > curr.data:
                # go right
                if curr.right is None:
                    curr.right = node
                    break
                curr = curr.right
            else:
                raise ValueError(f"Value of {data} already exists in the tree.")
        return self

    def delete(self, value: T) -> None:
        """Delete a node with the given value from the binary search tree.

        Args:
            value: The value to delete from the tree
        """
        self.root = self._delete_helper(self.root, value)  # type: ignore

    def _delete_helper(self, root: Node[T] | None, value: T) -> Node[T] | None:
        """Helper method to recursively delete a node.

        Parameters
        ----------
        root : `Node[T] | None`
            Current node being examined.
        value : `T`
            Value to delete

        Returns
        -------
        `Node[T] | None`
            Updated root node after deletion
        """
        # Base case: if tree is empty or value not found
        if root is None:
            return None

        # Recursively search for the node to delete
        if value < root.data:
            root.left = self._delete_helper(root.left, value)
        elif value > root.data:
            root.right = self._delete_helper(root.right, value)
        else:
            # Node found - handle the three cases

            # Case 1: Leaf node (no children)
            if root.left is None and root.right is None:
                return None

            # Case 2a: Only has right child
            if root.left is None:
                return root.right

            # Case 2b: Only has left child
            if root.right is None:
                return root.left

            # Case 3: Has both children
            # Find the smallest value in right subtree (successor)
            successor_value = self.successor(root.right).data
            # Copy successor value to current node
            root.data = successor_value
            # Delete the successor
            root.right = self._delete_helper(root.right, successor_value)

        return root

    def display(self) -> None:
        self.root.traverse_tree_inorder(self.root)

    def search(self, value: T) -> bool:
        """Searches for a value in the tree.

        Parameters
        ----------
        value : `T`
            Value to search.

        Returns
        -------
        `bool`
            True if the value is found in the tree. False if not.
        """
        curr = self.root
        while True:
            if curr is None:
                return False
            if curr.data == value:
                return True
            if value < curr.data:
                # go left
                curr = curr.left
            else:
                # go right
                curr = curr.right

    def successor(self, root: Node) -> Node[T]:
        """Find least value below the right child of this root node"""
        if root.right is None:
            return root.data
        curr = root.right
        while True:
            if curr.left is None:
                return curr
            curr = curr.left

    def predecessor(self, root: Node) -> Node[T]:
        """Find a node with the greatest value below the left child of this root node"""
        if root.left is None:
            return root.data
        curr = root.left
        while True:
            if curr.right is None:
                return curr
            curr = curr.right

    def _is_set_root(self) -> bool:
        """Checks if the root node is set and is not None."""
        ret = hasattr(self, "root") and self.root is not None
        return ret

# init
bst: BinarySearchTree[int] = BinarySearchTree()

# insert
bst.insert(Node(4))
bst.insert(Node(2))
bst.insert(Node(6))
bst.insert(Node(1))
bst.insert(Node(3))
bst.insert(Node(5))
bst.insert(Node(7))

# display
bst.display()

# search
print(bst.search(3))

# delete
print(bst.delete(3))

# display
bst.display()
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/59034ed8-32c2-4153-aeb8-d4fb7f938040/415e6fe4-2caa-4564-a095-3c272986b0e4/image.png)
