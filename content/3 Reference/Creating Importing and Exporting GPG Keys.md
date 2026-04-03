---
publish: true
created: 2026-03-25T15:22:40.639+07:00
modified: 2026-03-25T15:22:40.639+07:00
published: 2026-03-25T15:22:40.639+07:00
tags:
  - content-type/procedural
cssclasses: ""
creation-time: 2025-04-19 13:59
status: complete
parent:
  - "[[cyber security]]"
---


## Creating
```bash
gpg --full-generate-key
```

## Exporting

```bash
gpg --export-secret-keys --output 'keyfile.gpg' 'keyid'
```

## Importing

1. Import the key: `gpg --import <keyfile>`
2. Trust the key: `gpg --edit-key <keyid>` and then **trust**, then choose **5** for ultimate trust (or other type of trusts).
3. Verify the key: `gpg --list-secret-keys`. The key should have `ultimate` trust.
