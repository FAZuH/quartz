---
publish: true
created: 2026-02-22T19:23:58.364+07:00
modified: 2026-02-22T19:23:58.364+07:00
published: 2026-02-22T19:23:58.364+07:00
cssclasses: ""
creation-time: 2025-02-28 16:46
status: adult
tags:
parent:
  - "[[linux]]"
  - "[[file systems]]"
---


| Subject       | Symlink                                      | Hardlink                                                                                   |
| ------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Link Behavior | Points to the **path** of the target file    | Points directly to the **data** on the disk (same inode)                                   |
| File Systems  | Can span across **different** file systems   | Must be within the **same** file system                                                    |
| On Deletion   | **Breaks** (dangle) if the target is deleted | The target file's data **persists** as long as any hard link exists                        |
| Directories   | **Can** point to directories                 | Hard link to a directory **isn't allowed** to avoid infinite loops in the file system      |
| Permissions   | Permission is **different** the target       | Shares the **same** permissions and attributes as the target file since it's the same file |
