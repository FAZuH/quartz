---
{"publish":true,"created":"2025-07-24T11:50:56.215+07:00","modified":"2025-07-24T11:50:56.216+07:00","published":"2025-07-24T11:50:56.216+07:00","cssclasses":"","creation-time":"2025-02-28 16:46","status":"adult","tags":null,"parent":["[[linux]]","[[file systems]]"]}
---


| Subject      | Symlink                                   | Hardlink                                                                               |
| ------------ | ----------------------------------------- | -------------------------------------------------------------------------------------- |
| Link Type    | Points to the path of the target file     | Points directly to the data on the disk (same inode)                                   |
| File Systems | Can span across different file systems    | Must be within the same file system                                                    |
| Existence    | Breaks if the target is deleted           | The target file's data persists as long as any hard link exists                        |
| Directories  | Can point to directories                  | Hard links to directories aren't allowed to avoid loops in the file system             |
| Permissions  | Permissions are not the same as the targe | Shares the same permissions and attributes as the target file since it's the same file |

