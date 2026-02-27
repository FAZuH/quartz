---
publish: true
aliases:
  - Design Linked List
created: 2026-02-22T19:23:58.420+07:00
modified: 2026-02-22T19:23:58.420+07:00
published: 2026-02-22T19:23:58.420+07:00
cssclasses: ""
creation-time: 2025-08-15 18:33
status: baby
tags:
parent:
  - "[[dsa-problems_202508172322|dsa problems]]"
---

https://leetcode.com/problems/design-linked-list/


## Solution

```python
from typing import Optional, Self


class Node:
    def __init__(self, val: int = 0, next: Optional[Self] = None):
        self.val: int = val
        self.next: Optional[Self] = next


class MyLinkedList(object):

    def __init__(self, head: Optional[Node] = None):
        self.head: Optional[Node] = head

    def get(self, index: int) -> int:
        curr = self.head

        for _ in range(index):
            if curr is None:
                return -1
            curr = curr.next

        if curr is None:
            return -1

        return curr.val

    def addAtHead(self, val: int):
        self.head = Node(val, self.head)
        

    def addAtTail(self, val: int):
        if self.head is None:
            self.addAtHead(val)
            return

        curr = self.head
        while curr.next is not None:
            curr = curr.next

        curr.next = Node(val)
        

    def addAtIndex(self, index: int, val: int):
        if index == 0:  # CASE(index): Index points to head
            self.addAtHead(val)
            return
        # INVARIANT(index): Index points to middle, tail, or out of bounds

        # CASE(list): List is empty
        # NOTE: Index does not point to head, and list is empty.
        # Therefore, index is out of bound
        if self.head is None:
            return
        # INVARIANT(list): List is not empty

        # NOTE: We need to hold two references to nodes in the list to do the insert:
        # R1. Node before the node to insert
        # R2. Node after the node to insert
        # Just R1 is sufficient because it holds R2
        prev = self.head
        for _ in range(index - 1):
            # CASE(index): Index out of bounds
            if prev.next is None:
                return 
            prev = prev.next
        # INVARIANT(index): Index points to middle or tail

        # ASSUMPTION: prev must not be None
        prev.next = Node(val, prev.next)
        

    def deleteAtIndex(self, index: int):
        if self.head is None:  # CASE(list): List is empty. NOTE: Therefore any index is invalid
            return
        if index == 0:  # CASE(index): Index points to head
            self.head = self.head.next
            return
        # INVARIANT(list): List is not empty
        # INVARIANT(index): Index >= 1 and points to middle, tail, or out of bounds

        prev = self.head
        for _ in range(index - 1):
            # CASE(index): Index out of bounds
            if prev.next is None:
                return
            prev = prev.next
        # INVARIANT(index): Index points to middle or tail

        # NOTE: prev.next is the node we want to remove
        if prev.next is None:
            return

        # ASSUMPTION: prev.next must not be None
        prev.next = prev.next.next
```

