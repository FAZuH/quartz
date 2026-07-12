---
publish: true
aliases:
  - Certificate Trust Chain of Emails with DKIM
created: 2026-07-12T23:15:48.234+07:00
modified: 2026-07-12T23:26:49.989+07:00
published: 2026-07-12T23:26:49.989+07:00
tags:
  - 
creation-time: 2026-07-12 23:15
status: in progress
parent:
  - "[[email administration]]"
---

1. Clients trust the root
2. Root vouches intermediate
3. Intermediate vouches leaf

to verify leaf (server) you

1. Grab leaf cert, check if vouched by intermediate,
2. Check if intermediate vouched by root.

Intermediate sits there because root is air gapped, and way more easy to replace than root. if it's not a problem we couldve just used leaf and root, but that's not the case so 3
