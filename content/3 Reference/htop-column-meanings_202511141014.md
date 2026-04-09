---
publish: true
aliases:
  - Htop Column Meanings
created: 2026-04-09T23:07:39.410+07:00
modified: 2026-04-09T23:07:39.411+07:00
published: 2026-04-09T23:07:39.411+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-11-14 10:14
status: in progress
parent:
  - "[[linux]]"
---

- **PRI**: NI + 20 for normal processes. Internal value used by the kernel scheduler
- **NI**: Nice value - <u>how "nice" a process is to other processes</u>. Lower value is more greedy with CPU. Set by the user
- **VIRT**: Virtual memory - resident + swap + mapped files (executables, libraries, etc.)
- **RES**: Resident memory - <u>actual memory</u> size used from RAM. Non-swapped physical memory
- **SHR**: Shared memory - memory size shared with other processes. Usually through shared libraries
- **S**: Status (\[R]unning, \[S]leep, \[D]isk, \[Z]ombie, \[T]opped)
- **TIME+**: Cumulative time a process has used the CPU (Not to be confused with uptime)
- **Tasks**: thr (threads), kthr (kernel threads)

