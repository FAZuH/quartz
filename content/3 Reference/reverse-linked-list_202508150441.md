---
{"publish":true,"aliases":["Reverse Linked List"],"created":"2025-10-14T04:15:27.073+07:00","modified":"2025-10-14T04:15:27.073+07:00","published":"2025-10-14T04:15:27.073+07:00","cssclasses":"","creation-time":"2025-08-15 04:41","status":"baby","tags":null,"parent":["[[dsa-problems_202508172322|dsa problems]]"]}
---


https://neetcode.io/problems/reverse-a-linked-list?list=neetcode150

Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

You should aim for a solution with `O(n)` time and `O(1)` space, where `n` is the length of the given list.

**Constraints**:
- 0 <= The length of the list <= 1000.
- -1000 <= Node.val <= 1000

## Solution
```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:  # CASE: Empty list & List exactly 1 element
            return head
		# INVARIANT: List has at least 2 elements

        prev = None
        curr = head
        # NOTE: We set curr.next to prev, after holding a reference to curr.next
        # to 'hold' the remaining nodes.
        while curr is not None:
            # Hold reference to prevent dangling
            _next = curr.next

            # Swap direction
            curr.next = prev

            # Shift for next iteration
            prev = curr
            curr = _next

        return prev
```

![[assets/reverselinkedlist.excalidraw\|1000]]

