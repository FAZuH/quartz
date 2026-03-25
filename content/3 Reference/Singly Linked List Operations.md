---
publish: true
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
creation-time: 2025-02-27 23:26
status: in progress
tags:
parent:
  - "[[dsa-problems_202508172322|dsa problems]]"
---

```python
from typing import List, Self
from dataclasses import dataclass

@dataclass(slots=True)
class Node:
    data: int
    next: Self | None

class LinkedList:
    def __init__(self):
        self.head: Node | None = None
		
    def get(self, index: int) -> int:
        curr = self.head
        if curr is None:
            return -1
        for _ in range(index):
            if curr.next is None:
                return -1
            curr = curr.next
        return curr.data
		
    def insertHead(self, val: int) -> None:
        self.head = Node(val, self.head)
		
    def insertTail(self, val: int) -> None:
        curr = self.head
        if curr is None:
            self.insertHead(val)
            return
        while curr.next is not None:
            curr = curr.next
        curr.next = Node(val, None)
		
    def remove(self, index: int) -> bool:
        if self.head is None:  # CASE: Empty list
            return False
			
        if index == 0:  # CASE: Remove head node. INVARIANT: Index points to middle or last node.
            self.head = self.head.next
            return True
			
        # NOTE: We need to have references to node to remove and its previous for bypassing, 
        # so we can set next of previous to the node's to remove's next, thus removing all 
        # reference to the node to remove.

        prev = self.head
        curr = self.head.next
        # NOTE: When this loop ends,
        # prev is node previous of node to remove
        # curr is node to remove
        for _ in range(index - 1):
            if curr is None:  # CASE: Index out of bounds
                return False
            prev = curr
            curr = curr.next
			
        if curr is None:  # CASE: Index out of bounds
            return False
		
        prev.next = curr.next  # CASE: Remove middle or last node
        return True
		
    def getValues(self) -> List[int]:
        res: List[int] = []
        curr = self.head
        # NOTE: Loop is iterated 0 times if list is empty, thus returning empty list
        # Not empty list is pretty self-explanatory
        while curr is not None:
            res.append(curr.data)
            curr = curr.next
        return res
```
