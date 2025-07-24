---
{"publish":true,"created":"2025-07-24T11:50:56.322+07:00","modified":"2025-07-24T11:50:56.323+07:00","published":"2025-07-24T11:50:56.323+07:00","cssclasses":"","creation-time":"2025-02-27 23:26","status":"baby","tags":null,"parent":["[[data structure]]","[[algorithm]]"]}
---


## Code
```python
from typing import List, Self
from dataclasses import dataclass

@dataclass(slots=True)
class Node:
    data: int
    next: Self | None = None

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
        if self.head is None:
            self.head = Node(val)
        else:
            self.head = Node(val, self.head)
		
    def insertTail(self, val: int) -> None:
        new = Node(val)
        curr = self.head
        if curr is None:
            self.head = new
            return
        while curr.next is not None:
            curr = curr.next
        curr.next = new
		
    def remove(self, index: int) -> bool:
        if self.head is None:  # Empty list case
            return False
			
        if index == 0:  # Remove head case
            self.head = self.head.next
            return True
			
        prev = self.head
        curr = self.head.next
		
        for _ in range(index - 1):
            if curr is None:  # Index out of bounds
                return False
            prev = curr
            curr = curr.next
			
        if curr is None:  # Trying to remove beyond the last node
            return False
		
        prev.next = curr.next  # Bypass curr
        return True
		
    def getValues(self) -> List[int]:
        res = []
        curr = self.head
        if curr is None:
            return res
        res.append(curr.data)
        while curr.next is not None:
            curr = curr.next
            res.append(curr.data)
        return res
```
